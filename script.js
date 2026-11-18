(() => {
  "use strict";

  const data = window.JOURNEY_ARCHIVE_DATA;
  if (!data) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const safeURL = (value) => /^https:\/\//i.test(value || "") ? escapeHTML(value) : "#";
  const mapSearchURL = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  const countryList = $("#country-list");
  const countryDetails = $("#country-details");
  const accordionHost = $("#country-accordions");
  const mapElement = $("#travel-map");
  const mapViewport = $(".map-viewport");
  const mapFallbackMessage = $("#map-fallback-message");
  const mapOpenLink = $("#open-google-map");
  const mapStatus = $("#map-status");
  const mapCaption = $("#map-caption");
  const safetyCountryList = $("#safety-country-list");
  const searchForm = $("#destination-search");
  const searchInput = $("#destination-query");
  const searchResults = $("#destination-results");
  const searchFeedback = $("#search-feedback");
  let selectedCountryId = null;
  let searchIndex = [];
  let currentSearchMatches = [];
  let lastActivatedSearch = "";
  let mapInstance = null;
  let mapProvider = "none";
  let countryMarkers = [];
  let routeMarkers = [];
  let routePolyline = null;
  let activeInfoWindow = null;
  let selectedRouteId = null;
  let pendingRouteId = null;
  let pendingSpotOrder = null;

  const countries = data.countries || [];
  const routes = data.routes || [];
  const countryById = new Map(countries.map((country) => [country.id, country]));

  function googleDirectionsURL(route) {
    const country = countryById.get(route.countryId);
    const spots = route.routeSpots || [];
    if (!spots.length) return mapSearchURL(`${route.title} ${country?.name || ""}`);
    const placeName = (spot) => `${spot.name} ${country?.name || ""}`.trim();
    const params = new URLSearchParams({
      api: "1",
      origin: placeName(spots[0]),
      destination: placeName(spots[spots.length - 1]),
      travelmode: "walking"
    });
    if (spots.length > 2) params.set("waypoints", spots.slice(1, -1).map(placeName).join("|"));
    return `https://www.google.com/maps/dir/?${params.toString()}`;
  }

  function mapInfoMarkup(spot) {
    return `<div class="map-info-window"><strong>${escapeHTML(spot.order)} · ${escapeHTML(spot.name)}</strong><p>${escapeHTML(spot.desc || "여행 루트 스팟")}</p></div>`;
  }

  function clearRouteLayers() {
    if (activeInfoWindow && mapProvider === "google") activeInfoWindow.close();
    if (mapProvider === "google") {
      routeMarkers.forEach(({ marker }) => marker.setMap(null));
      if (routePolyline) routePolyline.setMap(null);
    } else if (mapProvider === "leaflet" && mapInstance) {
      routeMarkers.forEach(({ marker }) => mapInstance.removeLayer(marker));
      if (routePolyline) mapInstance.removeLayer(routePolyline);
    }
    routeMarkers = [];
    routePolyline = null;
    activeInfoWindow = null;
    selectedRouteId = null;
    countryDetails.querySelectorAll(".route-step.is-active").forEach((step) => step.classList.remove("is-active"));
    countryDetails.querySelectorAll(".mini-route-card.is-active").forEach((card) => card.classList.remove("is-active"));
  }

  function setRouteSelection(routeId, spotOrder = null) {
    selectedRouteId = routeId;
    countryDetails.querySelectorAll("[data-route-card]").forEach((card) => {
      card.classList.toggle("is-active", card.dataset.routeCard === routeId);
    });
    countryDetails.querySelectorAll("[data-route-step]").forEach((step) => {
      const active = step.dataset.routeStep === routeId && Number(step.dataset.spotOrder) === Number(spotOrder);
      step.classList.toggle("is-active", active);
      if (active) step.setAttribute("aria-current", "step");
      else step.removeAttribute("aria-current");
    });
    routeMarkers.forEach(({ marker, spot }) => {
      const active = routeId === selectedRouteId && Number(spot.order) === Number(spotOrder);
      if (mapProvider === "google") {
        marker.setIcon(googleRouteIcon(spot.order, active));
        marker.setZIndex(active ? 1000 : undefined);
      } else if (mapProvider === "leaflet") {
        marker.getElement()?.querySelector(".map-route-pin")?.classList.toggle("is-active", active);
      }
    });
  }

  function googleRouteIcon(order, active = false) {
    return {
      path: google.maps.SymbolPath.CIRCLE,
      scale: active ? 17 : 14,
      fillColor: active ? "#0075de" : "#ff385c",
      fillOpacity: 1,
      strokeColor: "#ffffff",
      strokeWeight: 3,
      labelOrigin: new google.maps.Point(0, 0)
    };
  }

  function focusRouteSpot(routeId, order) {
    const markerEntry = routeMarkers.find(({ spot }) => Number(spot.order) === Number(order));
    if (!markerEntry || selectedRouteId !== routeId) return;
    setRouteSelection(routeId, order);
    const { marker, spot } = markerEntry;
    if (mapProvider === "google") {
      mapInstance.panTo({ lat: spot.lat, lng: spot.lng });
      if (mapInstance.getZoom() < 15) mapInstance.setZoom(15);
      marker.setAnimation(google.maps.Animation.BOUNCE);
      window.setTimeout(() => marker.setAnimation(null), 700);
    } else if (mapProvider === "leaflet") {
      mapInstance.flyTo([spot.lat, spot.lng], Math.max(mapInstance.getZoom(), 15), { duration: .7 });
      marker.openPopup();
    }
  }

  function drawRouteOnMap(routeId, { focusOrder = null } = {}) {
    const route = routes.find((item) => item.id === routeId);
    if (!route) return;
    pendingRouteId = routeId;
    pendingSpotOrder = focusOrder;
    if (!mapInstance) return;
    const spots = route.routeSpots || [];
    if (!spots.length) return;
    const routePath = route.coordinates?.length
      ? route.coordinates.map(([lat, lng]) => ({ lat, lng }))
      : spots.map((spot) => ({ lat: spot.lat, lng: spot.lng }));
    clearRouteLayers();
    selectedRouteId = routeId;

    if (mapProvider === "google") {
      routePolyline = new google.maps.Polyline({
        path: routePath,
        geodesic: true,
        strokeColor: "#ff385c",
        strokeOpacity: .94,
        strokeWeight: 4,
        map: mapInstance
      });
      activeInfoWindow = new google.maps.InfoWindow();
      routeMarkers = spots.map((spot) => {
        const marker = new google.maps.Marker({
          position: { lat: spot.lat, lng: spot.lng },
          map: mapInstance,
          title: `${spot.order}. ${spot.name}`,
          icon: googleRouteIcon(spot.order),
          label: { text: String(spot.order), color: "#ffffff", fontSize: "11px", fontWeight: "700" },
          optimized: true
        });
        marker.addListener("click", () => {
          activeInfoWindow.setContent(mapInfoMarkup(spot));
          activeInfoWindow.open({ map: mapInstance, anchor: marker });
          setRouteSelection(routeId, spot.order);
        });
        return { marker, spot };
      });
      if (focusOrder) {
        const focused = spots.find((spot) => Number(spot.order) === Number(focusOrder));
        if (focused) {
          mapInstance.panTo({ lat: focused.lat, lng: focused.lng });
          mapInstance.setZoom(15);
        }
      } else if (spots.length === 1) {
        mapInstance.setCenter(routePath[0]);
        mapInstance.setZoom(15);
      } else {
        const bounds = new google.maps.LatLngBounds();
        routePath.forEach((point) => bounds.extend(point));
        mapInstance.fitBounds(bounds, { top: 76, right: 76, bottom: 76, left: 76 });
        google.maps.event.addListenerOnce(mapInstance, "idle", () => {
          if (mapInstance.getZoom() > 16) mapInstance.setZoom(16);
        });
      }
    } else if (mapProvider === "leaflet") {
      const path = routePath.map((point) => [point.lat, point.lng]);
      routePolyline = L.polyline(path, {
        color: "#ff385c",
        weight: 4,
        opacity: .94,
        lineCap: "round",
        lineJoin: "round"
      }).addTo(mapInstance);
      routeMarkers = spots.map((spot) => {
        const icon = L.divIcon({
          className: "map-route-marker-wrap",
          html: `<span class="map-route-pin" data-map-route-pin="${escapeHTML(routeId)}" data-map-spot-order="${escapeHTML(spot.order)}"><span>${escapeHTML(spot.order)}</span></span>`,
          iconSize: [38, 38],
          iconAnchor: [19, 19]
        });
        const marker = L.marker([spot.lat, spot.lng], { icon, title: `${spot.order}. ${spot.name}`, keyboard: true }).addTo(mapInstance);
        marker.bindPopup(mapInfoMarkup(spot), { closeButton: true, maxWidth: 260 });
        marker.on("click", () => setRouteSelection(routeId, spot.order));
        return { marker, spot };
      });
      if (focusOrder) {
        focusRouteSpot(routeId, focusOrder);
      } else if (spots.length === 1) {
        mapInstance.flyTo(path[0], 15, { duration: .7 });
      } else {
        mapInstance.flyToBounds(routePolyline.getBounds(), { padding: [72, 72], maxZoom: 15, duration: 1, animate: true });
      }
    }
    setRouteSelection(routeId, focusOrder);
    pendingSpotOrder = null;
  }

  function selectRouteOnMap(routeId, spotOrder = null) {
    const route = routes.find((item) => item.id === routeId);
    if (!route) return;
    if (selectedCountryId !== route.countryId) {
      selectCountry(route.countryId, { toggle: false, openBoth: true, routeId, focusSpotOrder: spotOrder, scroll: false });
    } else if (selectedRouteId === routeId && spotOrder) {
      focusRouteSpot(routeId, spotOrder);
    } else {
      drawRouteOnMap(routeId, { focusOrder: spotOrder });
    }
    mapViewport.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function addCountryMarkers() {
    // Country labels and pins are intentionally not drawn on the map.
    // Country selection happens through the cards and the search bar instead.
    countryMarkers = [];
  }

  function initGoogleMap() {
    if (mapInstance || !window.google?.maps) return;
    try {
      mapProvider = "google";
      mapInstance = new google.maps.Map(mapElement, {
        center: { lat: 18, lng: 10 },
        zoom: 2,
        minZoom: 2,
        maxZoom: 18,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        clickableIcons: false
      });
      activeInfoWindow = new google.maps.InfoWindow();
      mapViewport.classList.add("has-map");
      mapFallbackMessage.hidden = true;
      mapStatus.textContent = "WORLD MAP · GOOGLE MAPS";
      mapCaption.textContent = "Google Maps";
      addCountryMarkers();
      if (pendingRouteId) drawRouteOnMap(pendingRouteId, { focusOrder: pendingSpotOrder });
    } catch (error) {
      mapInstance = null;
      initLeafletMap();
    }
  }

  function initLeafletMap() {
    if (mapInstance || !window.L || !mapElement) {
      if (!mapInstance) mapFallbackMessage.hidden = false;
      return;
    }
    mapProvider = "leaflet";
    mapInstance = L.map(mapElement, { zoomControl: false, scrollWheelZoom: false, worldCopyJump: true, minZoom: 2, maxZoom: 18 }).setView([18, 10], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
    }).addTo(mapInstance);
    L.control.zoom({ position: "bottomright" }).addTo(mapInstance);
    mapViewport.classList.add("has-map");
    mapFallbackMessage.hidden = true;
    mapStatus.textContent = "WORLD MAP · LEAFLET";
    mapCaption.textContent = "OpenStreetMap fallback";
    addCountryMarkers();
    if (pendingRouteId) drawRouteOnMap(pendingRouteId, { focusOrder: pendingSpotOrder });
  }

  function initializeMap() {
    const key = data.mapConfig?.googleMapsApiKey || window.JOURNEY_ARCHIVE_CONFIG?.googleMapsApiKey || "";
    if (!key) {
      initLeafletMap();
      return;
    }
    window.journeyArchiveMapReady = initGoogleMap;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&callback=journeyArchiveMapReady&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onerror = initLeafletMap;
    document.head.appendChild(script);
    window.setTimeout(() => { if (!mapInstance) initLeafletMap(); }, 9000);
  }

  function resetMapToWorld() {
    clearRouteLayers();
    pendingRouteId = null;
    pendingSpotOrder = null;
    if (!mapInstance) return;
    if (mapProvider === "google") {
      mapInstance.panTo({ lat: 18, lng: 10 });
      mapInstance.setZoom(2);
    } else {
      mapInstance.flyTo([18, 10], 2, { duration: .8 });
    }
  }

  function flagImageURL(country) {
    return `https://flagcdn.com/w40/${encodeURIComponent(country.countryCode.toLowerCase())}.png`;
  }

  function normalizeSearchTerm(value) {
    return String(value ?? "").toLocaleLowerCase().normalize("NFD").replace(/\p{M}/gu, "").replace(/[^\p{L}\p{N}]/gu, "");
  }

  function makeSearchIndex() {
    const countryAliases = {
      "united-kingdom": ["UK", "Britain", "Great Britain", "England"],
      "united-states": ["USA", "US", "U.S."],
      china: ["PRC", "중화인민공화국"],
      spain: ["España"]
    };
    const cityAliases = {
      spain: { Madrid: "마드리드", Barcelona: "바르셀로나" },
      portugal: { Lisbon: "리스본", Porto: "포르투" },
      china: { Beijing: "베이징", Shanghai: "상하이" },
      hungary: { Budapest: "부다페스트" },
      austria: { Vienna: "빈", Salzburg: "잘츠부르크" },
      finland: { Helsinki: "헬싱키", Rovaniemi: "로바니에미" },
      estonia: { Tallinn: "탈린" },
      germany: { Berlin: "베를린", Munich: "뮌헨" },
      "united-kingdom": { London: "런던", Edinburgh: "에든버러" },
      france: { Paris: "파리", Versailles: "베르사유", Lyon: "리옹" },
      cambodia: { "Phnom Penh": "프놈펜", "Siem Reap": "시엠립" },
      vietnam: { Hanoi: "하노이", "Ninh Bình": "닌빈", "Hội An": "호이안" },
      japan: { Tokyo: "도쿄", Kyoto: "교토" },
      italy: { Florence: "피렌체", Bologna: "볼로냐" },
      canada: { Toronto: "토론토", Vancouver: "밴쿠버" },
      "united-states": { "New York": "뉴욕", "San Francisco": "샌프란시스코" },
      mexico: { "Mexico City": "멕시코시티", Oaxaca: "오악사카" },
      peru: { Lima: "리마", Cusco: "쿠스코" },
      nepal: { Kathmandu: "카트만두", Pokhara: "포카라" },
      brazil: { "Rio de Janeiro": "리우데자네이루", "São Paulo": "상파울루" },
      chile: { Santiago: "산티아고", "San Pedro de Atacama": "산페드로 데 아타카마" },
      argentina: { "Buenos Aires": "부에노스아이레스", Iguazú: "이구아수" }
    };
    const index = [];

    countries.forEach((country) => {
      const aliases = countryAliases[country.id] || [];
      const travelTerms = [
        ...(country.travel?.food || []).flatMap((item) => [item.name, item.area]),
        ...(country.travel?.hotels || []).flatMap((item) => [item.name, item.area])
      ];
      index.push({
        kind: "country",
        countryId: country.id,
        label: country.localName,
        meta: `${country.name} · ${country.region} · ${country.count}개 큐레이션`,
        query: country.travel?.mapsQuery || country.name,
        zoom: country.zoom || 5,
        terms: [country.localName, country.name, country.region, ...aliases, ...travelTerms],
        exactTerms: [country.localName, country.name, ...aliases]
      });

      const cityIndex = new Map();
      routes.filter((route) => route.countryId === country.id).forEach((route) => {
        const city = route.location.split("·")[0].trim();
        const localizedCity = cityAliases[country.id]?.[city] || city;
        const key = normalizeSearchTerm(localizedCity);
        if (!cityIndex.has(key)) {
          cityIndex.set(key, {
          kind: "city",
          countryId: country.id,
          routeId: route.id,
          label: localizedCity,
            meta: `${country.localName} · ${route.title}`,
            query: `${city} ${country.name}`,
            zoom: 12,
            terms: [],
            exactTerms: [city, localizedCity]
          });
        }
        const candidate = cityIndex.get(key);
        candidate.terms.push(city, localizedCity, route.title, route.location, ...(route.stops || []));
      });
      index.push(...cityIndex.values());
    });
    return index;
  }

  function findSearchMatches(query) {
    const normalized = normalizeSearchTerm(query);
    if (!normalized) return [];
    return searchIndex.filter((candidate) => candidate.terms.some((term) => normalizeSearchTerm(term).includes(normalized)))
      .sort((a, b) => {
        const exactA = a.exactTerms.some((term) => normalizeSearchTerm(term) === normalized) ? 1 : 0;
        const exactB = b.exactTerms.some((term) => normalizeSearchTerm(term) === normalized) ? 1 : 0;
        if (exactA !== exactB) return exactB - exactA;
        if (a.kind !== b.kind) return a.kind === "country" ? -1 : 1;
        return a.label.localeCompare(b.label, "ko");
      });
  }

  function filterCountryCards(countryIds) {
    countryList.querySelectorAll("[data-country]").forEach((button) => {
      button.hidden = !countryIds.has(button.dataset.country);
      button.classList.remove("search-target");
    });
  }

  function hideSearchOptions() {
    searchResults.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
  }

  function showNoSearchResults() {
    searchResults.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
    searchFeedback.innerHTML = '<span aria-hidden="true">ⓘ</span><span>등록되지 않은 여행지입니다. 추후 업데이트 예정입니다.</span>';
    searchFeedback.hidden = false;
  }

  function chooseSearchResult(candidate) {
    lastActivatedSearch = normalizeSearchTerm(searchInput.value);
    searchFeedback.hidden = true;
    hideSearchOptions();
    filterCountryCards(new Set([candidate.countryId]));
    selectCountry(candidate.countryId, {
      toggle: false,
      openBoth: true,
      scroll: false,
      routeId: candidate.routeId || null,
      mapQuery: candidate.query,
      mapZoom: candidate.zoom,
      mapLabel: candidate.kind === "city" ? candidate.label : null
    });
    const card = countryList.querySelector(`[data-country="${candidate.countryId}"]`);
    if (card) {
      card.classList.add("search-target");
      card.focus({ preventScroll: true });
    }
    countryDetails.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateSearch() {
    const query = searchInput.value.trim();
    const normalized = normalizeSearchTerm(query);
    searchFeedback.hidden = true;
    if (!normalized) {
      currentSearchMatches = [];
      hideSearchOptions();
      filterCountryCards(new Set(countries.map((country) => country.id)));
      lastActivatedSearch = "";
      return;
    }

    if (selectedCountryId && normalized !== lastActivatedSearch) resetCountryView();
    currentSearchMatches = findSearchMatches(query);
    filterCountryCards(new Set(currentSearchMatches.map((candidate) => candidate.countryId)));

    if (!currentSearchMatches.length) {
      if ([...query].length >= 2) showNoSearchResults();
      else hideSearchOptions();
      return;
    }

    const exact = currentSearchMatches.find((candidate) => candidate.exactTerms.some((term) => normalizeSearchTerm(term) === normalized));
    if (exact && normalized.length >= 2 && normalized !== lastActivatedSearch) {
      chooseSearchResult(exact);
      return;
    }

    searchResults.innerHTML = currentSearchMatches.slice(0, 7).map((candidate, index) => `
      <button class="search-result" type="button" role="option" aria-selected="false" data-search-result="${index}">
        <span class="search-result-icon" aria-hidden="true">${candidate.kind === "city" ? "⌖" : escapeHTML(countryById.get(candidate.countryId)?.flag || "🌍")}</span>
        <span class="search-result-copy"><strong>${escapeHTML(candidate.label)}</strong><small>${escapeHTML(candidate.meta)}</small></span>
        <span class="search-result-arrow" aria-hidden="true">↗</span>
      </button>`).join("");
    searchResults.hidden = false;
    searchInput.setAttribute("aria-expanded", "true");
  }

  function submitSearch() {
    if (!searchInput.value.trim()) {
      hideSearchOptions();
      searchFeedback.hidden = true;
      return;
    }
    const matches = findSearchMatches(searchInput.value);
    if (!matches.length) {
      showNoSearchResults();
      return;
    }
    const normalized = normalizeSearchTerm(searchInput.value);
    const exact = matches.find((candidate) => candidate.exactTerms.some((term) => normalizeSearchTerm(term) === normalized));
    chooseSearchResult(exact || matches[0]);
  }

  function renderCountryCards() {
    countryList.innerHTML = countries.map((country, index) => `
      <button class="country-card" type="button" data-country="${escapeHTML(country.id)}" aria-pressed="false">
        <span class="country-card-top"><span class="country-index">${String(index + 1).padStart(2, "0")}</span></span>
        <span class="country-card-name"><img class="country-flag" src="${flagImageURL(country)}" alt="" width="24" height="18" loading="lazy">${escapeHTML(country.localName)}</span>
        <span class="country-card-region">${escapeHTML(country.region)} · ${String(country.count).padStart(2, "0")} NOTES</span>
        <span class="country-card-arrow" aria-hidden="true">↗</span>
      </button>`).join("");
    $("#country-count").textContent = `${countries.length} COUNTRIES`;
    $("#country-count-short").textContent = String(countries.length).padStart(2, "0");
  }

  function renderSafetyCards() {
    safetyCountryList.innerHTML = countries.map((country) => {
      const mainAlert = country.safetyAlerts?.[0];
      const backId = `safety-back-${country.id}`;
      return `
        <article class="safety-country-card" data-flip-card data-pinned="false">
          <div class="safety-card-inner">
            <button class="safety-card-face safety-card-front" type="button" data-flip-front aria-expanded="false" aria-controls="${backId}">
              <span class="safety-card-heading"><span class="safety-country-name"><img class="country-flag" src="${flagImageURL(country)}" alt="" width="24" height="18" loading="lazy"><strong>${escapeHTML(country.localName)}</strong></span><span class="risk-badge">${escapeHTML(mainAlert?.level || "정보")}</span></span>
              <span class="safety-card-topic">${escapeHTML(mainAlert?.title || "현지 안전정보")}</span>
              <span class="safety-flip-cue" aria-hidden="true">↻</span>
            </button>
            <div class="safety-card-face safety-card-back" id="${backId}" aria-hidden="true" inert>
              <div class="safety-card-heading"><span class="safety-country-name"><img class="country-flag" src="${flagImageURL(country)}" alt="" width="24" height="18" loading="lazy"><strong>${escapeHTML(country.localName)}</strong></span><span class="risk-badge">${escapeHTML(mainAlert?.level || "정보")}</span></div>
              <h4>${escapeHTML(mainAlert?.title || "현지 안전정보")}</h4>
              <p class="safety-country-summary">${escapeHTML(mainAlert?.detail || "여행 전 공식 안전 공지를 확인하세요.")}</p>
              ${mainAlert?.source?.url ? `<a class="safety-card-source" href="${safeURL(mainAlert.source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(mainAlert.source.label)} ↗</a>` : ""}
              <div class="safety-card-actions">
                <button class="safety-flip-back" type="button" data-flip-back>앞면</button>
                <button class="safety-detail-link" type="button" data-safety-country="${escapeHTML(country.id)}">국가별 상세 ↗</button>
              </div>
            </div>
          </div>
        </article>`;
    }).join("");
  }

  function setSafetyCardFace(card, flipped, pinned = card.dataset.pinned === "true") {
    card.classList.toggle("is-flipped", flipped);
    card.dataset.pinned = String(pinned);
    const front = card.querySelector("[data-flip-front]");
    const back = card.querySelector(".safety-card-back");
    front.setAttribute("aria-expanded", String(flipped));
    front.setAttribute("aria-hidden", String(flipped));
    if (flipped) back.removeAttribute("inert");
    else back.setAttribute("inert", "");
    back.setAttribute("aria-hidden", String(!flipped));
  }

  function setSelectedCountryUI(country) {
    countryList.querySelectorAll("[data-country]").forEach((button) => {
      const active = button.dataset.country === country?.id;
      button.setAttribute("aria-pressed", String(active));
      button.classList.toggle("is-active", active);
    });
  }

  function resetCountryView() {
    countryDetails.hidden = true;
    selectedCountryId = null;
    setSelectedCountryUI(null);
    filterCountryCards(new Set(countries.map((country) => country.id)));
    resetMapToWorld();
    mapOpenLink.href = mapSearchURL("World map");
    mapStatus.textContent = "WORLD MAP";
    mapCaption.textContent = mapProvider === "google" ? "Google Maps" : "OpenStreetMap fallback";
  }

  function selectCountry(countryId, { toggle = true, openSafety = false, openBoth = true, scroll = true, mapQuery = null, mapZoom = null, mapLabel = null, routeId = null, focusSpotOrder = null } = {}) {
    const country = countryById.get(countryId);
    if (!country) return;

    if (toggle && selectedCountryId === countryId && !countryDetails.hidden) {
      resetCountryView();
      return;
    }

    selectedCountryId = countryId;
    setSelectedCountryUI(country);
    const countryRoutes = routes.filter((route) => route.countryId === countryId);
    const selectedRoute = countryRoutes.find((route) => route.id === routeId) || countryRoutes[0];
    const query = mapQuery || country.travel?.mapsQuery || country.name;
    const zoom = mapZoom || country.zoom || 5;
    mapOpenLink.href = selectedRoute ? googleDirectionsURL(selectedRoute) : mapSearchURL(query);
    mapStatus.textContent = selectedRoute
      ? `${country.name.toUpperCase()} · ROUTE ${selectedRoute.number}`
      : `${country.name.toUpperCase()} · ${country.region}`;
    mapCaption.textContent = mapLabel ? `${country.localName} · ${mapLabel}` : selectedRoute?.title || country.localName;
    renderCountryDetails(country, { openSafety, openBoth });
    countryDetails.hidden = false;
    if (selectedRoute) drawRouteOnMap(selectedRoute.id, { focusOrder: focusSpotOrder });
    else if (mapInstance) panToCountry(country, zoom);

    if (scroll) countryDetails.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function panToCountry(country, zoom = country.zoom || 5) {
    if (mapProvider === "google") {
      mapInstance.panTo({ lat: country.coordinates[0], lng: country.coordinates[1] });
      mapInstance.setZoom(zoom);
    } else if (mapProvider === "leaflet") {
      mapInstance.flyTo(country.coordinates, zoom, { duration: .8 });
    }
  }

  function selectRouteOnMap(routeId, spotOrder = null) {
    const route = routes.find((item) => item.id === routeId);
    if (!route) return;
    if (selectedCountryId !== route.countryId) {
      selectCountry(route.countryId, { toggle: false, openBoth: true, routeId, focusSpotOrder: spotOrder, scroll: false });
    } else if (selectedRouteId === routeId && spotOrder) {
      focusRouteSpot(routeId, spotOrder);
    } else {
      drawRouteOnMap(routeId, { focusOrder: spotOrder });
    }
    mapViewport.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderRouteCards(country) {
    const countryRoutes = country.routes || routes.filter((route) => route.countryId === country.id);
    if (!countryRoutes.length) return '<p class="empty-note">여행 루트가 준비 중입니다.</p>';
    return countryRoutes.map((route) => `
      <article class="mini-route-card" data-route-card="${escapeHTML(route.id)}">
        <div class="mini-route-image"><img src="${safeURL(route.image)}" alt="${escapeHTML(route.imageAlt)}" loading="lazy"><span>ROUTE ${escapeHTML(route.number)}</span></div>
        <div class="mini-route-copy">
          <div class="mini-route-meta"><span>${escapeHTML(route.location)}</span><span>${escapeHTML(route.duration)} · ${escapeHTML(route.distance)}</span></div>
          <h4>${escapeHTML(route.title)}</h4>
          <ol class="route-step-list" aria-label="${escapeHTML(route.title)} 경유 스팟">
            ${(route.routeSpots || []).map((spot) => `
              <li><button class="route-step" type="button" data-route-step="${escapeHTML(route.id)}" data-spot-order="${escapeHTML(spot.order)}" aria-label="${escapeHTML(spot.order)}번 ${escapeHTML(spot.name)} 지도에서 보기">
                <span class="route-step-number">${String(spot.order).padStart(2, "0")}</span><span class="route-step-name">${escapeHTML(spot.name)}</span><span class="route-step-arrow" aria-hidden="true">↗</span>
              </button></li>`).join("")}
          </ol>
          <button class="route-map-select" type="button" data-route-select="${escapeHTML(route.id)}">지도에서 루트 보기 <span aria-hidden="true">⌖</span></button>
          <a class="google-search-link" href="${googleDirectionsURL(route)}" target="_blank" rel="noopener noreferrer">Google 지도 경로 열기 <span aria-hidden="true">↗</span></a>
        </div>
      </article>`).join("");
  }

  function renderRecommendations(items, country, kind) {
    if (!items?.length) return '<p class="empty-note">추천 정보를 준비 중입니다.</p>';
    return `<div class="recommendation-list">${items.map((item) => `
      <details class="recommendation-disclosure">
        <summary>
          <span class="recommendation-summary-copy"><span class="recommendation-area">${escapeHTML(item.area)}</span><strong>${escapeHTML(item.name)}</strong></span>
          <span class="recommendation-chevron" aria-hidden="true">⌄</span>
        </summary>
        <div class="recommendation-detail">
          <p>${escapeHTML(item.detail)}</p>
          ${kind === "food" && item.mustTry ? `<p class="must-try"><strong>꼭 먹을 메뉴</strong><span>${escapeHTML(item.mustTry)}</span></p>` : ""}
          ${kind === "hotel" && item.nearbyTransit ? `<p class="nearby-transit"><strong>교통 거점</strong><span>${escapeHTML(item.nearbyTransit)}</span></p>` : ""}
          <a class="google-review-link" href="${mapSearchURL(item.mapsQuery || `${item.name} ${item.area} ${country.name}`)}" target="_blank" rel="noopener noreferrer">Google Maps에서 평점·${kind === "food" ? "메뉴·" : ""}후기 확인 <span aria-hidden="true">↗</span></a>
        </div>
      </details>`).join("")}</div>`;
  }

  function renderTravelPanel(country) {
    const travel = country.travel || {};
    return `
      <div class="panel-intro"><p class="panel-summary">${escapeHTML(travel.overview || "여행 루트와 현지 정보를 확인하세요.")}</p></div>
      <div class="travel-block">
        <div class="block-heading"><span class="block-sticker sticker-pink" aria-hidden="true">✈</span><div><p>CURATED ROUTES</p><h4>여행 루트</h4></div></div>
        <div class="mini-route-grid">${renderRouteCards(country)}</div>
      </div>
      <div class="travel-info-grid">
        <section class="travel-info-card">
          <div class="block-heading"><span class="block-sticker sticker-orange" aria-hidden="true">⌁</span><div><p>LOCAL TABLE</p><h4>로컬 맛집</h4></div></div>
          ${renderRecommendations(travel.food, country, "food")}
        </section>
        <section class="travel-info-card">
          <div class="block-heading"><span class="block-sticker sticker-purple" aria-hidden="true">⌂</span><div><p>PLACES TO STAY</p><h4>추천 숙소</h4></div></div>
          ${renderRecommendations(travel.hotels, country, "hotel")}
        </section>
      </div>
      <p class="review-method-note">${escapeHTML(data.recommendationNote || "Google 평점과 최근 후기는 지도 링크에서 확인하세요.")}</p>
      <div class="transit-callout"><span class="callout-icon" aria-hidden="true">🚆</span><div><strong>대중교통 팁</strong><p>${escapeHTML(countryRoutesText(country))}</p></div></div>
      <a class="country-map-link" href="${mapSearchURL(travel.mapsQuery || country.name)}" target="_blank" rel="noopener noreferrer">${escapeHTML(country.localName)} Google 지도 <span aria-hidden="true">↗</span></a>`;
  }

  function countryRoutesText(country) {
    const countryRoutes = routes.filter((route) => route.countryId === country.id);
    const tips = [...new Set(countryRoutes.map((route) => route.transit).filter(Boolean))];
    return tips.length ? tips.join(" ") : "현지 교통 수단과 운행 시간을 출발 전에 확인하세요.";
  }

  function renderSafetyPanel(country) {
    const alerts = country.safetyAlerts || [];
    const natural = country.naturalRisk || { level: "정보 확인", title: "자연재해 정보", detail: "공식 기상·재난 공지를 확인하세요." };
    return `
      <p class="advisory-note">여행경보와 현지 상황은 수시로 바뀝니다. 출발 전 공식 공지를 확인하세요.</p>
      <div class="alerts-list">${alerts.map((alert) => `
        <article class="safety-alert">
          <span class="alert-level">${escapeHTML(alert.level)}</span>
          <div class="safety-alert-copy"><h4>${escapeHTML(alert.title)}</h4><p>${escapeHTML(alert.detail)}</p><a href="${safeURL(alert.source?.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(alert.source?.label || "공식 안전 정보")} ↗</a></div>
        </article>`).join("")}</div>
      <article class="natural-risk-card">
        <div class="natural-risk-heading"><span class="block-sticker sticker-sky" aria-hidden="true">⌁</span><div><p>NATURAL HAZARDS</p><h4>${escapeHTML(natural.title)}</h4></div><span class="risk-badge">${escapeHTML(natural.level)}</span></div>
        <p>${escapeHTML(natural.detail)}</p>
        <div class="hazard-links"><a href="${safeURL(data.liveFeeds?.globalDisasterAlerts)}" target="_blank" rel="noopener noreferrer">GDACS 재난 경보 ↗</a><a href="${safeURL(data.liveFeeds?.tsunami)}" target="_blank" rel="noopener noreferrer">쓰나미 경보 ↗</a><a href="${safeURL(data.liveFeeds?.volcano)}" target="_blank" rel="noopener noreferrer">화산 활동 정보 ↗</a></div>
      </article>
      <aside class="profile-callout"><span aria-hidden="true">✳</span><div><strong>FIELD INSIGHT</strong><p>${escapeHTML(country.profileInsight || "공식 안내와 현장 상황을 함께 확인하세요.")}</p></div></aside>
      <a class="official-link country-official-link" href="https://www.0404.go.kr/" target="_blank" rel="noopener noreferrer">외교부에서 ${escapeHTML(country.localName)} 최신 여행경보 확인 ↗</a>`;
  }

  function accordionMarkup(country, type, title, icon, contents, isOpen) {
    const key = `${country.id}-${type}`;
    return `
      <article class="accordion-card${isOpen ? " is-open" : ""}" data-accordion="${key}">
        <button class="accordion-trigger" type="button" aria-expanded="${isOpen}" aria-controls="accordion-body-${key}" id="accordion-trigger-${key}">
          <span class="accordion-icon ${type === "travel" ? "accordion-icon-travel" : "accordion-icon-safety"}" aria-hidden="true">${icon}</span>
          <span class="accordion-title-wrap"><span class="accordion-overline">${type === "travel" ? "TRAVEL CURATION" : "SAFETY INTELLIGENCE"}</span><span class="accordion-title">${title}</span></span>
          <span class="accordion-chevron" aria-hidden="true">⌄</span>
        </button>
        <div class="accordion-content" id="accordion-body-${key}" role="region" aria-labelledby="accordion-trigger-${key}" aria-hidden="${!isOpen}"${isOpen ? "" : " inert"}>
          <div class="accordion-content-clip"><div class="accordion-inner">${contents}</div></div>
        </div>
      </article>`;
  }

  function renderCountryDetails(country, { openSafety = false, openBoth = false } = {}) {
    $("#selected-flag").src = flagImageURL(country);
    $("#selected-flag").alt = "";
    $("#selected-country-name").textContent = country.localName;
    $("#selected-country-overview").textContent = country.travel?.overview || "";
    const travelOpen = openBoth || !openSafety;
    const safetyOpen = openBoth || openSafety;
    accordionHost.innerHTML = `
      ${accordionMarkup(country, "travel", "여행 큐레이션", "✈", renderTravelPanel(country), travelOpen)}
      ${accordionMarkup(country, "safety", "안전 & 리스크 인텔리전스", "🛡", renderSafetyPanel(country), safetyOpen)}`;
  }

  function setupAccordions() {
    accordionHost.addEventListener("click", (event) => {
      const routeSelect = event.target.closest("[data-route-select]");
      if (routeSelect) {
        selectRouteOnMap(routeSelect.dataset.routeSelect);
        return;
      }
      const routeStep = event.target.closest("[data-route-step]");
      if (routeStep) {
        selectRouteOnMap(routeStep.dataset.routeStep, Number(routeStep.dataset.spotOrder));
        return;
      }
      const trigger = event.target.closest(".accordion-trigger");
      if (!trigger) return;
      const card = trigger.closest(".accordion-card");
      const body = card.querySelector(".accordion-content");
      const open = trigger.getAttribute("aria-expanded") !== "true";
      card.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", String(open));
      body.setAttribute("aria-hidden", String(!open));
      if (open) body.removeAttribute("inert");
      else body.setAttribute("inert", "");
    });
  }

  function setupSafetyCardInteractions() {
    safetyCountryList.addEventListener("pointerover", (event) => {
      if (event.pointerType !== "mouse") return;
      const card = event.target.closest("[data-flip-card]");
      if (!card || (event.relatedTarget && card.contains(event.relatedTarget)) || card.dataset.pinned === "true") return;
      setSafetyCardFace(card, true, false);
    });
    safetyCountryList.addEventListener("pointerout", (event) => {
      if (event.pointerType !== "mouse") return;
      const card = event.target.closest("[data-flip-card]");
      if (!card || (event.relatedTarget && card.contains(event.relatedTarget)) || card.dataset.pinned === "true") return;
      setSafetyCardFace(card, false, false);
    });
    safetyCountryList.addEventListener("click", (event) => {
      const countryLink = event.target.closest("[data-safety-country]");
      if (countryLink) {
        selectCountry(countryLink.dataset.safetyCountry, { toggle: false, openSafety: true, openBoth: false });
        return;
      }
      const card = event.target.closest("[data-flip-card]");
      if (!card) return;
      if (event.target.closest("[data-flip-back]")) {
        setSafetyCardFace(card, false, false);
        card.querySelector("[data-flip-front]").focus({ preventScroll: true });
      } else if (event.target.closest("[data-flip-front]")) {
        const pinned = card.dataset.pinned !== "true";
        setSafetyCardFace(card, pinned, pinned);
        if (pinned) card.querySelector("[data-flip-back]").focus({ preventScroll: true });
      }
    });
  }

  function setupNavigation() {
    const menuToggle = $(".menu-toggle");
    const mainNav = $(".main-nav");
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
      mainNav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });
    mainNav.addEventListener("click", (event) => {
      if (!event.target.closest("a")) return;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "메뉴 열기");
      mainNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });

    const navLinks = [...document.querySelectorAll("[data-nav]")];
    const setActive = (target) => navLinks.forEach((link) => {
      const active = link.dataset.nav === target;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    navLinks.forEach((link) => link.addEventListener("click", () => setActive(link.dataset.nav)));

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActive(current.target.id === "journey" ? "journey" : current.target.id === "safety" ? "safety" : "all");
      }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, .1, .25, .5] });
      [$("#top"), $("#journey"), $("#safety")].forEach((section) => observer.observe(section));
    }
  }

  function setupBookIntro() {
    const intro = $("#book-intro");
    const cover = $("#book-cover");
    const openButton = $("#book-open");
    let opening = false;
    let dismissed = false;

    const finishOpening = () => {
      if (dismissed) return;
      dismissed = true;
      intro.classList.add("is-dismissed");
      document.body.classList.remove("intro-locked");
      window.setTimeout(hideIntro, 650);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        hideIntro();
      }
    };

    const hideIntro = () => {
      if (intro.hidden) return;
      intro.hidden = true;
      intro.setAttribute("aria-hidden", "true");
      $("#hero-title").focus({ preventScroll: true });
    };

    const startOpening = () => {
      if (opening) return;
      opening = true;
      cover.setAttribute("aria-expanded", "true");
      openButton.setAttribute("aria-expanded", "true");
      intro.classList.add("is-opening");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) finishOpening();
      else window.setTimeout(finishOpening, 1300);
    };

    cover.addEventListener("transitionend", (event) => {
      if (event.target === cover && event.propertyName === "transform") finishOpening();
    });
    intro.addEventListener("transitionend", (event) => {
      if (event.target !== intro || event.propertyName !== "opacity") return;
      hideIntro();
    });
    intro.addEventListener("click", startOpening);
    document.addEventListener("keydown", (event) => {
      if (intro.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        startOpening();
      } else if (event.key === "Tab") {
        const focusable = [cover, openButton].filter((element) => !element.disabled);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  function setupSearch() {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      submitSearch();
    });
    searchInput.addEventListener("input", updateSearch);
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        hideSearchOptions();
        searchFeedback.hidden = true;
      } else if (event.key === "ArrowDown" && !searchResults.hidden) {
        event.preventDefault();
        searchResults.querySelector(".search-result")?.focus();
      }
    });
    searchResults.addEventListener("click", (event) => {
      const option = event.target.closest("[data-search-result]");
      if (!option) return;
      const candidate = currentSearchMatches[Number(option.dataset.searchResult)];
      if (candidate) chooseSearchResult(candidate);
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".hero-search-wrap")) hideSearchOptions();
    });
  }

  countryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-country]");
    if (button) selectCountry(button.dataset.country);
  });
  $("#close-country").addEventListener("click", resetCountryView);

  searchIndex = makeSearchIndex();
  renderCountryCards();
  renderSafetyCards();
  setupAccordions();
  setupSafetyCardInteractions();
  setupNavigation();
  setupSearch();
  setupBookIntro();
  initializeMap();
})();
