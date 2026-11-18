/* Content and editorial data for Journey & Archive. Loaded before script.js. */
window.JOURNEY_ARCHIVE_DATA = {
  countries: [
    {
      id: "france", name: "France", localName: "프랑스", countryCode: "fr", region: "EUROPE", coordinates: [46.6, 2.4], zoom: 6, count: 3,
      travel: {
        overview: "파리의 운하와 골목, 베르사유 정원, 리옹의 강변을 잇는 도시 산책 큐레이션.",
        food: [
          { name: "Du Pain et des Idées", area: "Paris · Canal Saint-Martin", detail: "운하 산책 시작점과 가까운 유명 베이커리입니다. 아침 시간에 들르면 빵과 페이스트리를 고르기 좋아요.", mustTry: "에스카르고 피스타슈 초콜라, Pain des Amis 사워도우", mapsQuery: "Du Pain et des Idées Paris" },
          { name: "La Flottille", area: "Versailles · Grand Canal", detail: "베르사유 정원 대운하 옆에 있어 정원 산책 동선 중 식사하기 편합니다. 계절별 영업시간과 예약 가능 여부를 확인하세요.", mustTry: "프랑스식 양파 수프, 크레프 또는 오늘의 계절 메뉴", mapsQuery: "La Flottille Versailles" },
          { name: "Café des Fédérations", area: "Lyon · Presqu’île", detail: "리옹 전통 부숑 요리로 알려진 식당입니다. 점심·저녁 서비스가 나뉠 수 있어 운영시간과 예약을 확인하세요.", mustTry: "퀘넬 드 브로셰, 타블리에 드 사푀르", mapsQuery: "Café des Fédérations Lyon" }
        ],
        hotels: [
          { name: "Hôtel des Grands Boulevards", area: "Paris · Grands Boulevards", detail: "운하·마레 산책 구간과 이어지는 중심부 부티크 호텔.", nearbyTransit: "Grands Boulevards 역 도보권 · 메트로 8·9호선", mapsQuery: "Hôtel des Grands Boulevards Paris" },
          { name: "Hôtel Le Versailles", area: "Versailles · Château", detail: "베르사유 궁전과 정원 입구를 걸어서 방문하기 좋은 숙소.", nearbyTransit: "Versailles Château–Rive Gauche역 및 궁전 도보권", mapsQuery: "Hôtel Le Versailles France" },
          { name: "InterContinental Lyon – Hotel Dieu", area: "Lyon · Presqu’île", detail: "구시가지와 벨쿠르 광장 사이 강변에 있어 도보 일정에 편리합니다.", nearbyTransit: "Bellecour 메트로역 도보권 · 리옹 파르디외역 연결", mapsQuery: "InterContinental Lyon Hotel Dieu" }
        ],
        mapsQuery: "France"
      },
      safetyAlerts: [
        { level: "상시 주의", title: "대도시 집회·파업과 교통 변동", detail: "연금·노동·물가 등 사회 현안 집회와 파업은 예고·규모가 바뀔 수 있습니다. 중심 광장과 관공서 주변을 피하고 당일 대중교통 운행을 확인하세요.", source: { label: "프랑스 여행안전정보 · 영국 FCDO", url: "https://www.gov.uk/foreign-travel-advice/france" } },
        { level: "관광지 주의", title: "소매치기와 절도", detail: "대중교통, 역, 관광명소, 야외 카페에서 휴대전화·지갑 절도에 유의하세요. 가방은 몸 앞쪽에 두고 낯선 사람의 서명·청원 요청으로 주의를 돌리는 수법도 경계하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "낮음–보통", title: "지역별 지진·폭풍", detail: "알프스·피레네 산악 지역은 지진 가능성이 상대적으로 높고, 대서양·지중해 연안은 폭풍·홍수 영향을 받을 수 있습니다. 여행 도시별 기상·재난 공지를 확인하세요." },
      profileInsight: "혼잡한 장소에서는 ‘주의를 끄는 상황’과 ‘접근 기회’가 함께 생깁니다. 집회 인파와 환승 구간에서는 이동 경로·귀중품 관리 계획을 미리 정해두세요."
    },
    {
      id: "cambodia", name: "Cambodia", localName: "캄보디아", countryCode: "kh", region: "SOUTHEAST ASIA", coordinates: [12.6, 104.9], zoom: 6, count: 2,
      travel: {
        overview: "프놈펜의 강변과 시장, 시엠립의 사원 유적을 잇는 역사·도시 여행.",
        food: [
          { name: "Malis Restaurant", area: "Phnom Penh · BKK1", detail: "크메르 전통 요리를 현대적으로 선보이는 현지 대표 레스토랑입니다. 저녁에는 예약을 권합니다.", mustTry: "피시 아목, 캄폿 후추 크랩(제철·수급 확인)", mapsQuery: "Malis Restaurant Phnom Penh" },
          { name: "Khmer Kitchen Restaurant", area: "Siem Reap · Old Market", detail: "올드마켓과 펍 스트리트 사이에 있어 앙코르 관람 후 들르기 편한 현지식 식당.", mustTry: "피시 아목, 크메르 레드 커리, 록락", mapsQuery: "Khmer Kitchen Restaurant Siem Reap" }
        ],
        hotels: [
          { name: "Rosewood Phnom Penh", area: "Phnom Penh · Central Market", detail: "도심 랜드마크와 강변을 둘러보기 좋은 고층 호텔.", nearbyTransit: "중앙시장·리버사이드 차량 이동권 · 공항 이동은 공식 차량 권장", mapsQuery: "Rosewood Phnom Penh" },
          { name: "Shinta Mani Angkor", area: "Siem Reap · French Quarter", detail: "올드마켓과 시내 식당가에 가까워 도심 도보 일정에 편리합니다.", nearbyTransit: "올드마켓 도보권 · 앙코르 유적은 등록 차량으로 이동", mapsQuery: "Shinta Mani Angkor Siem Reap" }
        ],
        mapsQuery: "Cambodia"
      },
      safetyAlerts: [
        { level: "지역별 고위험", title: "온라인 구인사기·감금·강제 범죄", detail: "고수익 해외취업·콜센터·온라인 업무를 미끼로 입국시킨 뒤 여권·통신수단을 빼앗고 감금해 온라인 사기 등을 강요하는 범죄가 보고되어 왔습니다. 구조 과정에서 폭행·협박과 이동 제한이 발생할 수 있습니다. 한국의 여행금지·특별여행주의보는 지역과 기간이 수시로 달라지므로 출국 전 외교부 지도를 확인하고, 검증되지 않은 구인 제안이나 현지 면접 이동을 피하세요.", source: { label: "대한민국 외교부 해외안전여행 · 캄보디아", url: "https://www.0404.go.kr/" } },
        { level: "지역별 주의", title: "국경·외곽 지역의 이동 제한", detail: "일부 국경·외곽 지역은 치안 상황, 지뢰·불발탄 위험, 도로 여건 때문에 여행경보가 달라질 수 있습니다. 지정 구역과 육로 이동 경로를 출발 당일 공식 공지로 재확인하세요.", source: { label: "U.S. Department of State · Cambodia", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/cambodia-travel-advisory.html" } }
      ],
      naturalRisk: { level: "계절 주의", title: "우기 홍수·열대성 폭풍", detail: "우기에는 국지성 홍수와 도로 침수로 이동 시간이 크게 달라질 수 있습니다. 기상 경보와 현지 도로 공지를 확인하고 침수된 도로·하천을 건너지 마세요." },
      profileInsight: "사기 조직은 ‘고수익·급한 출국·비공식 면접’으로 검증 시간을 줄이려 합니다. 계약서·고용주·비자 유형을 독립적으로 확인하고 여권을 타인에게 맡기지 마세요."
    },
    {
      id: "vietnam", name: "Vietnam", localName: "베트남", countryCode: "vn", region: "SOUTHEAST ASIA", coordinates: [16.2, 107.8], zoom: 5.5, count: 3,
      travel: {
        overview: "하노이 골목과 닌빈의 석회암 풍경, 호이안 구시가지와 해변을 만나는 여정.",
        food: [
          { name: "Phở Gia Truyền Bát Đàn", area: "Hanoi · Old Quarter", detail: "하노이 구시가지에서 현지식 퍼를 맛보려는 여행객이 많이 찾는 식당입니다. 식사 시간 대기와 영업시간을 확인하세요.", mustTry: "퍼 보 따이(레어 비프 포), 차콰이(꽈배기 빵 곁들임)", mapsQuery: "Phở Gia Truyền Bát Đàn Hanoi" },
          { name: "Bánh mì Phượng", area: "Hội An · Old Town", detail: "호이안 구시가지에서 인지도가 높은 바인미 가게. 혼잡 시간에는 포장 대기와 운영시간을 확인하세요.", mustTry: "바인미 믹스(모둠), 현지식 돼지고기 바인미", mapsQuery: "Bánh mì Phượng Hội An" },
          { name: "Morning Glory Signature", area: "Hội An · Old Town", detail: "구시가지 중심에서 호이안 지역 음식을 한자리에서 고르기 좋은 식당입니다.", mustTry: "까오러우, 화이트 로즈 만두, 모닝글로리 볶음", mapsQuery: "Morning Glory Signature Hội An" }
        ],
        hotels: [
          { name: "La Siesta Classic Ma May", area: "Hanoi · Old Quarter", detail: "구시가지와 호안끼엠 호수 산책을 시작하기 좋은 중심 숙소.", nearbyTransit: "하노이역에서 차량 이동 · 구시가지 주요 지점 도보권", mapsQuery: "La Siesta Classic Ma May Hanoi" },
          { name: "Tam Coc Garden Resort", area: "Ninh Bình · Tam Coc", detail: "논과 석회암 풍경을 즐기는 닌빈 일정에 맞는 자연형 숙소.", nearbyTransit: "짱안·땀꼭은 자전거·차량 이동 · 하노이에서 예약 차량 권장", mapsQuery: "Tam Coc Garden Resort Ninh Binh" },
          { name: "Allegro Hoi An", area: "Hội An · Old Town", detail: "구시가지 보행 구역과 가까워 도보 일정의 출발점으로 편리합니다.", nearbyTransit: "다낭 공항에서 사전 예약 차량 · 구시가지 도보권", mapsQuery: "Allegro Hoi An" }
        ],
        mapsQuery: "Vietnam"
      },
      safetyAlerts: [
        { level: "상시 주의", title: "교통·도로 안전", detail: "오토바이 교통량이 많고 보행자 횡단 환경이 낯설 수 있습니다. 렌트 전 면허·보험 조건을 확인하고, 헬멧을 착용하며 음주 운전을 피하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } },
        { level: "계절·지역 주의", title: "태풍·홍수·산사태", detail: "중부·북부 해안은 태풍과 집중호우의 영향을 받을 수 있고 산악 지역은 산사태·도로 통제가 발생할 수 있습니다. 우기에는 선박·버스 운행 변경을 확인하세요.", source: { label: "Vietnam National Centre for Hydro-Meteorological Forecasting", url: "https://nchmf.gov.vn/" } }
      ],
      naturalRisk: { level: "계절 높음", title: "태풍·홍수·해안 위험", detail: "계절성 태풍과 홍수는 지역별 편차가 큽니다. 해변에서는 깃발·구조요원 안내를 따르고, 침수 도로와 급류에 접근하지 마세요." },
      profileInsight: "관광객 대상 교통·요금 분쟁은 목적지와 가격을 탑승 전에 확인하면 줄일 수 있습니다. 이동 앱의 차량·기사 정보와 실제 탑승 차량을 대조하세요."
    },
    {
      id: "japan", name: "Japan", localName: "일본", countryCode: "jp", region: "EAST ASIA", coordinates: [36.2, 138.2], zoom: 5.5, count: 2,
      travel: {
        overview: "도쿄의 정원·시장과 교토 동쪽 사찰·운하 산책을 모았습니다.",
        food: [
          { name: "Sushizanmai Honten", area: "Tokyo · Tsukiji", detail: "쓰키지 산책 동선의 대표 스시 체인 본점으로, 늦은 시간까지 영업하는 편입니다. 실제 당일 영업시간을 확인하세요.", mustTry: "혼마구로(참다랑어) 니기리·참치 모둠", mapsQuery: "Sushizanmai Honten Tsukiji Tokyo" },
          { name: "준세이 · 난젠지 유도후", area: "Kyoto · Nanzenji", detail: "난젠지 경내 산책과 함께 들르기 좋은 교토식 두부 요리 전문점. 예약과 점심 마감 시간을 확인하세요.", mustTry: "유도후 정식, 참깨 두부", mapsQuery: "Nanzenji Junsei Kyoto" }
        ],
        hotels: [
          { name: "The Gate Hotel Tokyo by HULIC", area: "Tokyo · Ginza", detail: "긴자·유라쿠초와 도쿄역 사이의 산책·쇼핑 동선에 접근하기 좋은 호텔.", nearbyTransit: "긴자역·히비야역 도보권 · 도쿄역 연결 편리", mapsQuery: "The Gate Hotel Tokyo by HULIC" },
          { name: "Hotel The Celestine Kyoto Gion", area: "Kyoto · Gion", detail: "기온과 히가시야마 관광 구간을 도보로 둘러보기 좋은 숙소.", nearbyTransit: "기온시조역·기요미즈고조역 도보권", mapsQuery: "Hotel The Celestine Kyoto Gion" }
        ],
        mapsQuery: "Japan"
      },
      safetyAlerts: [
        { level: "재난 대비", title: "지진·쓰나미·화산", detail: "일본은 지진과 일부 해안의 쓰나미, 화산 활동 위험이 있습니다. 긴급지진속보·대피 방송을 확인하고 해안에서 강한 흔들림을 느끼면 경보를 기다리지 말고 높은 곳으로 이동하세요.", source: { label: "Japan Meteorological Agency · Disaster Information", url: "https://www.jma.go.jp/jma/en/Activities/earthquake.html" } },
        { level: "계절 주의", title: "태풍·폭우와 교통 중단", detail: "태풍·집중호우 시 철도와 항공이 사전 중단될 수 있습니다. 숙소 대피 안내와 지자체 재난 정보를 확인하고 무리한 이동을 미루세요.", source: { label: "Japan Safe Travel Information", url: "https://www.japan.travel/en/japan-safe-travel-information/" } }
      ],
      naturalRisk: { level: "상시 대비", title: "환태평양 지진대·해안 쓰나미", detail: "여행 도시 인근 지진과 해안 쓰나미 위험은 실시간 관측으로만 판단할 수 있습니다. 지진 발생 시 현지 경보·대피 표지와 JMA 안내를 우선하세요." },
      profileInsight: "재난 직후에는 잘못된 SNS 정보와 혼잡한 이동 수요가 함께 증가합니다. 공식 경보를 기준으로 행동하고, 가족과 만날 장소·연락 방법을 미리 정해두세요."
    },
    {
      id: "italy", name: "Italy", localName: "이탈리아", countryCode: "it", region: "EUROPE", coordinates: [42.8, 12.5], zoom: 6, count: 2,
      travel: {
        overview: "피렌체의 아르노 강과 볼로냐의 아케이드·시장 골목을 천천히 걷습니다.",
        food: [
          { name: "All’Antico Vinaio", area: "Florence · Uffizi", detail: "피렌체식 포카치아 샌드위치로 여행객에게 잘 알려진 가게입니다. 점심 대기 줄과 지점을 확인하세요.", mustTry: "라 파볼로사(토스카나 살루미·크림치즈 샌드위치), 스키아차타", mapsQuery: "All’Antico Vinaio Florence" },
          { name: "Trattoria Anna Maria", area: "Bologna · University Quarter", detail: "볼로냐 전통 생면 파스타를 맛볼 수 있는 오래된 트라토리아입니다. 저녁은 예약을 권합니다.", mustTry: "탈리아텔레 알 라구, 토르텔리니 인 브로도", mapsQuery: "Trattoria Anna Maria Bologna" }
        ],
        hotels: [
          { name: "Hotel Spadai", area: "Florence · Duomo", detail: "두오모와 구시가지 산책 루트의 출발점으로 편리한 도심 호텔.", nearbyTransit: "Santa Maria Novella역에서 도보 이동 가능 · 두오모 인접", mapsQuery: "Hotel Spadai Florence" },
          { name: "Art Hotel Commercianti", area: "Bologna · Piazza Maggiore", detail: "마조레 광장과 콰드릴라테로 시장을 도보로 둘러보기 좋은 중심 숙소.", nearbyTransit: "볼로냐 중앙역에서 버스·택시 이동 · 마조레 광장 인접", mapsQuery: "Art Hotel Commercianti Bologna" }
        ],
        mapsQuery: "Italy"
      },
      safetyAlerts: [
        { level: "관광지 주의", title: "소매치기·대중교통 사기", detail: "역·기차·관광지의 혼잡 구간에서 가방 절도, 비공식 택시·티켓 판매에 유의하세요. 공식 매표소와 등록된 이동 서비스를 이용하세요.", source: { label: "UK Foreign Travel Advice · Italy", url: "https://www.gov.uk/foreign-travel-advice/italy" } },
        { level: "지역별 대비", title: "지진·화산 활동", detail: "아펜니노 산맥과 남부 일부 지역은 지진 위험이 있고, 에트나·베수비오 등 화산 위험은 여행 도시와 거리가 다릅니다. 지역별 경보와 교통 통제를 확인하세요.", source: { label: "Protezione Civile · National Risk", url: "https://www.protezionecivile.gov.it/en/" } }
      ],
      naturalRisk: { level: "지역별 주의", title: "지진·화산·폭염", detail: "여행 루트 주변 위험은 지역마다 다릅니다. 화산 관측소·민방위 경보를 확인하고 여름에는 폭염 시간대 야외 활동을 조정하세요." },
      profileInsight: "교통 허브의 혼잡과 비공식 도움 제안은 절도 위험을 키울 수 있습니다. 표·택시는 공식 채널을 이용하고 목적지와 비용을 사전에 확인하세요."
    },
    {
      id: "spain", name: "Spain", localName: "스페인", countryCode: "es", region: "SOUTHERN EUROPE", coordinates: [40.2, -3.7], zoom: 5.5, count: 2,
      travel: {
        overview: "마드리드의 미술관과 공원, 바르셀로나의 모더니즘 건축과 해안 산책을 잇습니다.",
        food: [
          { name: "Sobrino de Botín", area: "Madrid · Plaza Mayor", detail: "오랜 역사를 지닌 마드리드 전통 식당으로 중심부 도보 일정과 잘 맞습니다.", mustTry: "코치니요 아사도(통구이 새끼돼지), 가스파초", mapsQuery: "Sobrino de Botín Madrid" },
          { name: "Cervecería Catalana", area: "Barcelona · Eixample", detail: "타파스와 핀초를 다양하게 고르기 좋은 인기 식당입니다. 식사 피크 시간 대기를 고려하세요.", mustTry: "파타타스 브라바스, 감바스 알 아히요, 크로케타", mapsQuery: "Cervecería Catalana Barcelona" }
        ],
        hotels: [
          { name: "Room Mate Macarena", area: "Madrid · Gran Vía", detail: "그란비아와 구시가지 산책을 시작하기 좋은 중심 숙소.", nearbyTransit: "Gran Vía 메트로역 인접 · Atocha역 차량·메트로 연결", mapsQuery: "Room Mate Macarena Madrid" },
          { name: "H10 Madison", area: "Barcelona · Gothic Quarter", detail: "구시가지와 바르셀로나 대성당 주변을 도보로 둘러보기 편리합니다.", nearbyTransit: "Jaume I 메트로역 도보권 · Barcelona Sants역 연결", mapsQuery: "H10 Madison Barcelona" }
        ],
        mapsQuery: "Spain"
      },
      safetyAlerts: [
        { level: "관광지 주의", title: "소매치기·가방 절도", detail: "바르셀로나·마드리드의 대중교통, 해변, 관광 명소와 야외 테라스에서 소지품 절도에 유의하세요. 휴대전화는 테이블 가장자리에 두지 말고 공식 택시·호출 서비스를 이용하세요.", source: { label: "UK Foreign Travel Advice · Spain", url: "https://www.gov.uk/foreign-travel-advice/spain" } },
        { level: "현지 공지 확인", title: "집회·파업과 폭염", detail: "대도시 집회와 교통 파업은 일정·노선에 영향을 줄 수 있습니다. 여름철 내륙 폭염과 산불 통제도 확인하고 당일 교통·기상 공지를 살펴보세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "계절별 주의", title: "폭염·산불·홍수", detail: "여름철 내륙은 폭염과 산불, 지중해 연안은 갑작스러운 집중호우 영향을 받을 수 있습니다. AEMET 및 지역 당국의 기상·대피 안내를 확인하세요." },
      profileInsight: "혼잡한 관광지와 야외 식당에서 소지품 관리가 핵심입니다. 집회·산불 통제 구역은 현지 경찰과 지역 당국 안내를 우선하세요."
    },
    {
      id: "portugal", name: "Portugal", localName: "포르투갈", countryCode: "pt", region: "SOUTHERN EUROPE", coordinates: [39.6, -8.0], zoom: 6, count: 2,
      travel: {
        overview: "리스본의 언덕과 트램 골목, 포르투의 도루강변과 와인 저장고를 천천히 걷습니다.",
        food: [
          { name: "Pastéis de Belém", area: "Lisbon · Belém", detail: "벨렝 지구의 대표 파스텔 데 나타 제과점입니다. 식사 시간에는 매장 좌석과 포장 대기 줄을 확인하세요.", mustTry: "오리지널 파스텔 데 나타와 시나몬 토핑", mapsQuery: "Pastéis de Belém Lisbon" },
          { name: "Casa Guedes", area: "Porto · Batalha", detail: "포르투식 돼지고기 샌드위치로 알려진 현지 식당입니다.", mustTry: "산데스 데 페르닐(돼지고기 샌드위치), 양젖 치즈 추가", mapsQuery: "Casa Guedes Porto" }
        ],
        hotels: [
          { name: "Browns Central Hotel", area: "Lisbon · Baixa", detail: "바이샤·시아두 산책과 시내 교통 이용에 편리한 중심 숙소.", nearbyTransit: "Baixa-Chiado 메트로역 도보권 · Rossio역 인접", mapsQuery: "Browns Central Hotel Lisbon" },
          { name: "Pestana Vintage Porto", area: "Porto · Ribeira", detail: "도루강 리베이라 지구와 구시가지 산책을 시작하기 좋은 강변 숙소.", nearbyTransit: "São Bento역 도보 이동 · 강변 트램·버스 연결", mapsQuery: "Pestana Vintage Porto" }
        ],
        mapsQuery: "Portugal"
      },
      safetyAlerts: [
        { level: "관광지 주의", title: "트램·전망대 주변 소매치기", detail: "리스본의 혼잡한 트램과 전망대, 포르투의 강변 관광 구간에서 소지품 절도에 유의하세요. 야간 언덕길은 조명이 밝고 사람이 있는 동선을 이용하세요.", source: { label: "UK Foreign Travel Advice · Portugal", url: "https://www.gov.uk/foreign-travel-advice/portugal" } },
        { level: "계절별 주의", title: "산불·해안 파도", detail: "여름철 내륙 산불과 대서양 해안의 높은 파도·이안류에 주의하세요. 해변 깃발, 구조요원, 산불 통제 안내를 따르세요.", source: { label: "Autoridade Nacional de Emergência e Proteção Civil", url: "https://prociv.gov.pt/en/" } }
      ],
      naturalRisk: { level: "계절별 주의", title: "산불·해안 위험·지진", detail: "건조한 계절에는 산불 위험이 커지고 대서양 해안은 파도와 이안류가 강할 수 있습니다. 포르투갈 본토와 아조레스 제도의 지진 위험은 지역별로 다릅니다." },
      profileInsight: "낯선 사람의 즉석 택시·숙박 제안보다 공식 승강장과 예약 확인을 이용하세요. 해안에서는 수영 실력과 관계없이 당일 파도·깃발 상태를 우선합니다."
    },
    {
      id: "china", name: "China", localName: "중국", countryCode: "cn", region: "EAST ASIA", coordinates: [35.9, 103.8], zoom: 4.5, count: 2,
      travel: {
        overview: "베이징의 황성 유적과 상하이 와이탄·구시가지를 잇는 대도시 문화 산책.",
        food: [
          { name: "Quanjude Roast Duck", area: "Beijing · Qianmen", detail: "베이징 카오야로 널리 알려진 오래된 식당입니다. 지점별 영업·예약 정보를 확인하세요.", mustTry: "베이징 오리구이, 얇은 전병과 파·소스 곁들임", mapsQuery: "Quanjude Roast Duck Qianmen Beijing" },
          { name: "Jia Jia Tang Bao", area: "Shanghai · Huangpu", detail: "상하이식 샤오롱바오를 맛보려는 여행객이 많이 찾는 작은 식당입니다.", mustTry: "게살 샤오롱바오, 신선한 육즙 만두", mapsQuery: "Jia Jia Tang Bao Shanghai" }
        ],
        hotels: [
          { name: "Regent Beijing", area: "Beijing · Wangfujing", detail: "왕푸징과 자금성 동쪽 관광 동선에 접근하기 좋은 도심 호텔.", nearbyTransit: "Dengshikou 메트로역 인접 · 베이징역 차량 연결", mapsQuery: "Regent Beijing" },
          { name: "Central Hotel Shanghai", area: "Shanghai · Nanjing Road", detail: "난징동루·와이탄과 구시가지 산책을 잇기 좋은 중심 숙소.", nearbyTransit: "People's Square·East Nanjing Road 메트로 연결", mapsQuery: "Central Hotel Shanghai" }
        ],
        mapsQuery: "China"
      },
      safetyAlerts: [
        { level: "출발 전 확인", title: "현지 법규·통신·결제 환경", detail: "현지 법률과 신분 확인 절차를 준수하고 여권 사본·숙소 정보를 준비하세요. 일부 해외 앱·웹 서비스가 제한될 수 있어 지도·번역·결제 수단을 출발 전에 점검하세요.", source: { label: "UK Foreign Travel Advice · China", url: "https://www.gov.uk/foreign-travel-advice/china" } },
        { level: "관광지 주의", title: "비공식 가이드·차량 요금 분쟁", detail: "관광지 주변의 무허가 가이드와 호객 차량을 피하고, 등록된 승차 서비스·공식 매표소를 이용하세요. 현지 긴급 연락처와 숙소 주소를 오프라인으로 보관하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "지역별 주의", title: "지진·태풍·집중호우", detail: "중국은 지역이 넓어 서부·남서부 지진, 남부 해안 태풍, 북부·중부 홍수 위험이 서로 다릅니다. 해당 도시의 기상·민방위 경보와 대피 안내를 확인하세요." },
      profileInsight: "여행 전 지도·번역·결제 앱의 오프라인 대안과 숙소 주소를 준비하면 통신 제한이나 네트워크 장애 때 이동 혼란을 줄일 수 있습니다."
    },
    {
      id: "hungary", name: "Hungary", localName: "헝가리", countryCode: "hu", region: "CENTRAL EUROPE", coordinates: [47.2, 19.3], zoom: 6, count: 2,
      travel: {
        overview: "부다페스트의 다뉴브 강변, 성곽 언덕, 온천 건축과 시장을 둘러봅니다.",
        food: [
          { name: "Rosenstein Vendéglő", area: "Budapest · Keleti", detail: "헝가리 전통 요리와 유대계 요리를 함께 내는 가족 운영 식당입니다. 저녁 예약을 권합니다.", mustTry: "굴라시 수프, 치킨 파프리카시", mapsQuery: "Rosenstein Vendéglő Budapest" },
          { name: "Menza", area: "Budapest · Liszt Ferenc tér", detail: "안드라시 거리 산책과 연결되는 인기 헝가리식 비스트로.", mustTry: "치킨 파프리카시와 노케들리, 헝가리식 케이크", mapsQuery: "Menza Budapest restaurant" }
        ],
        hotels: [
          { name: "Hotel Moments Budapest", area: "Budapest · Andrássy út", detail: "성 이슈트반 대성당과 안드라시 거리 산책의 중심 숙소.", nearbyTransit: "Opera 메트로역 인접 · Nyugati역 메트로 연결", mapsQuery: "Hotel Moments Budapest" },
          { name: "Prestige Hotel Budapest", area: "Budapest · Danube", detail: "다뉴브 강변과 세체니 다리 산책로에 가까운 도심 호텔.", nearbyTransit: "Arany János utca 메트로역 도보권", mapsQuery: "Prestige Hotel Budapest" }
        ],
        mapsQuery: "Hungary"
      },
      safetyAlerts: [
        { level: "관광지 주의", title: "환전·택시·야간 유흥가 사기", detail: "환전소와 야간 유흥가에서는 가격·영수증을 확인하고, 길거리 호객이나 비공식 택시를 피하세요. ATM은 은행 내부나 공식 지점에서 이용하세요.", source: { label: "UK Foreign Travel Advice · Hungary", url: "https://www.gov.uk/foreign-travel-advice/hungary" } },
        { level: "교통 확인", title: "집회·대중교통 운행 변경", detail: "중심가 집회나 공사로 지하철·트램 노선이 바뀔 수 있습니다. 출발 전 BKK 운행 공지와 보행 통제 구역을 확인하세요.", source: { label: "Budapest Transport Centre · BKK", url: "https://bkk.hu/en/" } }
      ],
      naturalRisk: { level: "계절별 주의", title: "다뉴브강 홍수·폭염", detail: "봄철 해빙기나 집중호우 뒤 다뉴브 강변 산책로가 통제될 수 있고 여름에는 폭염이 이어질 수 있습니다. 강변 통제와 기상 경보를 확인하세요." },
      profileInsight: "관광객을 겨냥한 과도한 청구는 메뉴·가격이 공개된 업소와 공식 호출 택시를 선택하면 예방에 도움이 됩니다."
    },
    {
      id: "austria", name: "Austria", localName: "오스트리아", countryCode: "at", region: "CENTRAL EUROPE", coordinates: [47.6, 14.1], zoom: 6, count: 2,
      travel: {
        overview: "빈의 링슈트라세와 궁전 정원, 잘츠부르크 구시가지와 알프스 전망을 만납니다.",
        food: [
          { name: "Figlmüller Bäckerstraße", area: "Vienna · Stephansdom", detail: "빈 슈니첼로 잘 알려진 식당으로 구시가지 도보 코스에서 들르기 좋습니다. 예약을 권합니다.", mustTry: "비너 슈니첼, 감자 샐러드", mapsQuery: "Figlmüller Bäckerstraße Vienna" },
          { name: "St. Peter Stiftskulinarium", area: "Salzburg · Old Town", detail: "잘츠부르크 구시가지 중심의 역사적인 레스토랑입니다. 좌석과 공연 운영은 사전 확인하세요.", mustTry: "잘츠부르크 노커를 포함한 오스트리아 전통 메뉴", mapsQuery: "St Peter Stiftskulinarium Salzburg" }
        ],
        hotels: [
          { name: "Hotel Sacher Wien", area: "Vienna · State Opera", detail: "국립 오페라와 링슈트라세 산책의 출발점에 있는 호텔.", nearbyTransit: "Karlsplatz 메트로·트램 환승 도보권 · 중앙역 연결", mapsQuery: "Hotel Sacher Wien" },
          { name: "Hotel Sacher Salzburg", area: "Salzburg · Salzach River", detail: "잘츠부르크 구시가지와 강변 산책을 연결하기 좋은 도심 호텔.", nearbyTransit: "Salzburg Hauptbahnhof에서 버스·택시 이동 · 구시가지 도보권", mapsQuery: "Hotel Sacher Salzburg" }
        ],
        mapsQuery: "Austria"
      },
      safetyAlerts: [
        { level: "산악 지역 주의", title: "알프스 기상·눈사태·등산로", detail: "산악 날씨는 빠르게 변하고 겨울에는 눈사태 위험이 있습니다. 공식 기상과 산악구조대 안내를 확인하고 지정된 트레일·리프트 운영 범위를 벗어나지 마세요.", source: { label: "Austrian Alpine Safety Board", url: "https://www.alpinesicherheit.at/" } },
        { level: "도시 여행 주의", title: "역·관광지 소지품 관리", detail: "빈과 잘츠부르크의 역, 성수기 관광 구간에서 소매치기와 자전거 통행에 유의하세요. 열차 파업·공사 시 대체 노선을 확인하세요.", source: { label: "UK Foreign Travel Advice · Austria", url: "https://www.gov.uk/foreign-travel-advice/austria" } }
      ],
      naturalRisk: { level: "산악·계절 주의", title: "알프스 폭설·눈사태·홍수", detail: "산악 지역은 적설·눈사태·폭우 위험이 계곡과 고도에 따라 다릅니다. 출발 당일 산악 기상과 트레일 폐쇄 공지를 확인하세요." },
      profileInsight: "산악 일정은 체력보다 당일 기상·장비·하산 시간을 기준으로 조정하세요. 등산 계획을 숙소에 알리고 공식 난이도 표지를 따르세요."
    },
    {
      id: "finland", name: "Finland", localName: "핀란드", countryCode: "fi", region: "NORTHERN EUROPE", coordinates: [64.5, 26.0], zoom: 4.5, count: 2,
      travel: {
        overview: "헬싱키의 항구·디자인 지구와 라플란드 로바니에미의 북극권 풍경을 함께 담았습니다.",
        food: [
          { name: "Savotta", area: "Helsinki · Senate Square", detail: "상원광장 인근에서 핀란드 전통 음식을 맛볼 수 있는 식당입니다.", mustTry: "연어 수프, 순록 요리와 카렐리안 파이", mapsQuery: "Restaurant Savotta Helsinki" },
          { name: "Ravintola Nili", area: "Rovaniemi · City Centre", detail: "라플란드 식재료와 지역 요리로 알려진 로바니에미 식당. 예약을 권합니다.", mustTry: "순록 볶음(포로), 클라우드베리 디저트", mapsQuery: "Ravintola Nili Rovaniemi" }
        ],
        hotels: [
          { name: "Scandic Grand Central Helsinki", area: "Helsinki · Central Station", detail: "헬싱키 중앙역 건물과 연결되어 도시 이동과 공항열차 이용이 편리합니다.", nearbyTransit: "헬싱키 중앙역 바로 인접 · 공항열차 출발", mapsQuery: "Scandic Grand Central Helsinki" },
          { name: "Arctic City Hotel", area: "Rovaniemi · City Centre", detail: "시내 식당가와 로바니에미 산타 익스프레스 버스 정류장에 접근하기 좋은 숙소.", nearbyTransit: "Rovaniemi역·공항은 차량 이동 · 시내버스 정류장 인접", mapsQuery: "Arctic City Hotel Rovaniemi" }
        ],
        mapsQuery: "Finland"
      },
      safetyAlerts: [
        { level: "계절 대비", title: "혹한·빙판·짧은 겨울 일조", detail: "겨울에는 기온 저하와 빙판길, 짧은 낮 시간이 이동 안전에 영향을 줍니다. 방한·반사 장비를 준비하고 외곽에서는 이동 계획을 숙소와 공유하세요.", source: { label: "Finnish Meteorological Institute", url: "https://en.ilmatieteenlaitos.fi/" } },
        { level: "자연 지역 주의", title: "라플란드 원거리 이동", detail: "인구가 드문 지역에서는 휴대전화 연결과 교통편이 제한될 수 있습니다. 렌터카는 겨울 도로 조건을 확인하고 연료·귀환 시간을 여유 있게 계획하세요.", source: { label: "UK Foreign Travel Advice · Finland", url: "https://www.gov.uk/foreign-travel-advice/finland" } }
      ],
      naturalRisk: { level: "계절별 주의", title: "한파·폭설·결빙", detail: "라플란드는 폭설·결빙으로 도로와 철도 운행이 바뀔 수 있습니다. 기상청 경보와 도로 상태를 확인하고 오로라 관측 시 지정된 안전 장소를 이용하세요." },
      profileInsight: "오로라 관측은 야간·외곽 이동을 동반합니다. 혼자 비포장로나 얼어붙은 호수로 들어가지 말고, 투어·귀가 교통을 사전에 확정하세요."
    },
    {
      id: "estonia", name: "Estonia", localName: "에스토니아", countryCode: "ee", region: "NORTHERN EUROPE", coordinates: [58.7, 25.5], zoom: 6, count: 2,
      travel: {
        overview: "탈린 중세 구시가지와 카드리오르그 공원·발트해 산책로를 잇는 여정.",
        food: [
          { name: "Rataskaevu 16", area: "Tallinn · Old Town", detail: "탈린 구시가지의 인기 현지 식당으로 에스토니아식 재료를 활용한 메뉴가 있습니다. 예약을 권합니다.", mustTry: "엘크 스튜, 흑빵과 제철 디저트", mapsQuery: "Rataskaevu 16 Tallinn" },
          { name: "Olde Hansa", area: "Tallinn · Town Hall Square", detail: "중세풍 분위기에서 발트 지역 전통 메뉴를 경험할 수 있는 구시가지 식당.", mustTry: "사슴고기 요리, 향신료를 넣은 아몬드 음료", mapsQuery: "Olde Hansa Tallinn" }
        ],
        hotels: [
          { name: "Nunne Boutique Hotel", area: "Tallinn · Old Town", detail: "구시가지 성벽과 주요 보행 코스에 가까운 숙소.", nearbyTransit: "Balti Jaam 기차역·트램 터미널 도보권", mapsQuery: "Nunne Boutique Hotel Tallinn" },
          { name: "Nordic Hotel Forum", area: "Tallinn · Viru Square", detail: "구시가지 입구와 쇼핑·식당가 사이에 있어 대중교통 이용에 편리합니다.", nearbyTransit: "Viru 트램 정류장 인접 · 항구 차량 이동권", mapsQuery: "Nordic Hotel Forum Tallinn" }
        ],
        mapsQuery: "Estonia"
      },
      safetyAlerts: [
        { level: "도시 여행 주의", title: "구시가지·항구 소지품 관리", detail: "탈린 구시가지와 페리 터미널·역 주변에서 소지품을 잘 관리하고, 요금이 표시된 공식 택시나 호출 서비스를 이용하세요.", source: { label: "UK Foreign Travel Advice · Estonia", url: "https://www.gov.uk/foreign-travel-advice/estonia" } },
        { level: "계절 대비", title: "겨울 결빙·해안 기상", detail: "겨울에는 보도와 계단이 얼 수 있고 발트해 연안은 강풍·한파 영향을 받습니다. 미끄럼 방지 신발과 현지 기상 정보를 준비하세요.", source: { label: "Estonian Environment Agency · Weather", url: "https://www.ilmateenistus.ee/?lang=en" } }
      ],
      naturalRisk: { level: "계절별 주의", title: "한파·폭풍·해안 결빙", detail: "겨울 강풍과 결빙은 페리·항공 운항에 영향을 줄 수 있습니다. 항만 운영 공지와 기상 경보를 출발 전에 확인하세요." },
      profileInsight: "페리 일정은 날씨에 따라 바뀔 수 있습니다. 지연 시 대체편·숙박 계획과 항만 이동 시간을 여유 있게 잡으세요."
    },
    {
      id: "germany", name: "Germany", localName: "독일", countryCode: "de", region: "CENTRAL EUROPE", coordinates: [51.2, 10.4], zoom: 5.5, count: 2,
      travel: {
        overview: "베를린 박물관섬과 벽의 흔적, 뮌헨 구시가지와 영국정원을 둘러봅니다.",
        food: [
          { name: "Curry 36", area: "Berlin · Kreuzberg", detail: "베를린 커리부어스트로 잘 알려진 간편 식당입니다. 붐비는 시간대에는 주변 지점을 확인하세요.", mustTry: "커리부어스트와 감자튀김", mapsQuery: "Curry 36 Berlin" },
          { name: "Haxnbauer", area: "Munich · Old Town", detail: "뮌헨 구시가지에서 바이에른식 구이 요리를 맛볼 수 있는 식당입니다.", mustTry: "슈바인스학세(돼지 족발 구이), 프레첼", mapsQuery: "Haxnbauer Munich" }
        ],
        hotels: [
          { name: "Motel One Berlin-Hackescher Markt", area: "Berlin · Mitte", detail: "박물관섬과 하케셔 마르크트 사이의 도보 여행에 편리합니다.", nearbyTransit: "Hackescher Markt S-Bahn·트램 정류장 인접", mapsQuery: "Motel One Berlin-Hackescher Markt" },
          { name: "Hotel Torbräu", area: "Munich · Isartor", detail: "마리엔광장과 이자르 강변 산책을 시작하기 좋은 구시가지 호텔.", nearbyTransit: "Isartor S-Bahn역 도보권 · 중앙역 연결", mapsQuery: "Hotel Torbräu Munich" }
        ],
        mapsQuery: "Germany"
      },
      safetyAlerts: [
        { level: "도시 여행 주의", title: "역·축제 인파 속 절도", detail: "대형역, 크리스마스 마켓, 옥토버페스트 등 혼잡한 행사에서 소매치기와 분실에 주의하세요. 집회·노조 파업 시 대중교통 운행 공지를 확인하세요.", source: { label: "UK Foreign Travel Advice · Germany", url: "https://www.gov.uk/foreign-travel-advice/germany" } },
        { level: "현지 공지 확인", title: "시위·철도 파업과 이동 차질", detail: "대도시 시위나 철도 파업이 예고되면 역·공항 접근 시간이 달라질 수 있습니다. 당일 DB 및 지역 교통 운영 공지를 확인하세요.", source: { label: "Deutsche Bahn · Travel information", url: "https://www.bahn.com/en" } }
      ],
      naturalRisk: { level: "지역별 주의", title: "폭염·홍수·겨울 폭풍", detail: "지역에 따라 폭염, 강 유역 홍수, 겨울 폭풍이 철도·도로에 영향을 줍니다. 독일 기상청 경보와 지역 재난 공지를 확인하세요." },
      profileInsight: "철도 이동은 지연·플랫폼 변경이 있을 수 있어 환승 시간을 확보하고, 역 전광판과 공식 앱을 함께 확인하세요."
    },
    {
      id: "united-kingdom", name: "United Kingdom", localName: "영국", countryCode: "gb", region: "WESTERN EUROPE", coordinates: [54.5, -3.0], zoom: 5, count: 2,
      travel: {
        overview: "런던 템스강변과 웨스트민스터, 에든버러 구시가지와 성곽 언덕을 걷습니다.",
        food: [
          { name: "Dishoom King's Cross", area: "London · King's Cross", detail: "봄베이 카페풍 인도 요리로 알려진 인기 식당입니다. 식사 피크 시간에는 대기 등록과 운영시간을 확인하세요.", mustTry: "블랙 달, 치킨 루비, 갈릭 난", mapsQuery: "Dishoom King's Cross London" },
          { name: "Oink Victoria Street", area: "Edinburgh · Old Town", detail: "에든버러 구시가지에서 간단히 먹기 좋은 로스트 포크 롤 가게.", mustTry: "로스트 포크 롤과 사과 소스", mapsQuery: "Oink Victoria Street Edinburgh" }
        ],
        hotels: [
          { name: "Park Plaza Westminster Bridge", area: "London · South Bank", detail: "웨스트민스터와 런던아이, 사우스뱅크 산책의 출발점으로 편리합니다.", nearbyTransit: "Waterloo역 도보권 · Westminster역 강 건너편", mapsQuery: "Park Plaza Westminster Bridge London" },
          { name: "Apex Grassmarket Hotel", area: "Edinburgh · Grassmarket", detail: "에든버러 성과 로열마일 아래 구시가지 산책에 가까운 숙소.", nearbyTransit: "Waverley역에서 도보·버스 연결", mapsQuery: "Apex Grassmarket Hotel Edinburgh" }
        ],
        mapsQuery: "United Kingdom"
      },
      safetyAlerts: [
        { level: "대도시 주의", title: "휴대전화 날치기·소매치기", detail: "런던 등 대도시의 역·인파 구간에서 휴대전화 날치기와 소매치기를 조심하세요. 길을 걸으며 휴대전화를 오래 들고 있지 말고 차량 도로 쪽 손에 들지 마세요.", source: { label: "UK Foreign Travel Advice · Safety and security", url: "https://www.gov.uk/foreign-travel-advice/uk/safety-and-security" } },
        { level: "현지 공지 확인", title: "집회·교통 파업", detail: "대규모 집회와 철도·지하철 파업은 노선·역 접근을 바꿀 수 있습니다. 런던 교통국과 National Rail의 당일 공지를 확인하세요.", source: { label: "Transport for London · Status updates", url: "https://tfl.gov.uk/status-updates/" } }
      ],
      naturalRisk: { level: "날씨 대비", title: "강풍·폭우·해안 기상", detail: "강풍과 폭우가 열차·항공·해안 산책로에 영향을 줄 수 있습니다. 야외 이동 전 Met Office 경보와 교통 운영 정보를 확인하세요." },
      profileInsight: "런던의 혼잡한 환승 구간에서는 휴대전화를 꺼내기 전 주변을 살피고, 파업일에는 대체 노선과 귀가 시간을 미리 정하세요."
    },
    {
      id: "netherlands", name: "Netherlands", localName: "네덜란드", countryCode: "nl", region: "WESTERN EUROPE", coordinates: [52.2, 5.3], zoom: 6, count: 2,
      travel: {
        overview: "암스테르담 운하와 미술관 지구, 위트레흐트의 돔탑과 오래된 운하를 둘러봅니다.",
        food: [
          { name: "Van Stapele Koekmakerij", area: "Amsterdam · Spuistraat", detail: "갓 구운 초콜릿 쿠키로 잘 알려진 작은 베이커리입니다. 조기 품절과 대기 줄을 고려하세요.", mustTry: "시그니처 다크초콜릿 쿠키", mapsQuery: "Van Stapele Koekmakerij Amsterdam" },
          { name: "The Pantry", area: "Amsterdam · Leidseplein", detail: "스탬폿 등 네덜란드 가정식을 맛볼 수 있는 중심가 식당.", mustTry: "스탬폿, 완두콩 수프(에르텐수프)", mapsQuery: "The Pantry Amsterdam Dutch Restaurant" }
        ],
        hotels: [
          { name: "Pulitzer Amsterdam", area: "Amsterdam · Canal Belt", detail: "운하 지구와 요르단 산책 코스를 따라가기 좋은 중심 숙소.", nearbyTransit: "Westermarkt 트램 정류장 인접 · 중앙역 연결", mapsQuery: "Pulitzer Amsterdam" },
          { name: "Moxy Utrecht", area: "Utrecht · Central Station", detail: "위트레흐트 구시가지와 기차 이동을 함께 계획하기 좋은 숙소.", nearbyTransit: "Utrecht Vaartsche Rijn역 도보권 · 중앙역 트램 연결", mapsQuery: "Moxy Utrecht" }
        ], mapsQuery: "Netherlands"
      },
      safetyAlerts: [
        { level: "도시 여행 주의", title: "자전거 도로·운하 주변 안전", detail: "자전거 전용 도로에 보행하지 말고, 운하 가장자리와 다리에서는 야간·음주 상태로 접근하지 마세요. 역과 관광지 혼잡 구간에서는 소지품 절도에 유의하세요.", source: { label: "Netherlands Worldwide · Travel safety", url: "https://www.netherlandsworldwide.nl/travel" } },
        { level: "교통 확인", title: "철도·도심 교통 운행 변경", detail: "철도 공사와 시위·행사로 노선이 변경될 수 있습니다. NS와 지역 교통 운영사의 당일 공지를 확인하세요.", source: { label: "NS · Travel information", url: "https://www.ns.nl/en/travel-information" } }
      ],
      naturalRisk: { level: "지역별 대비", title: "폭우·폭풍·저지대 홍수", detail: "해수면 아래 저지대와 북해 연안은 폭풍·집중호우에 대비합니다. KNMI와 지역 수자원 당국의 경보, 제방·해안 통제를 확인하세요." },
      profileInsight: "자전거가 보행자보다 우선하는 도로가 많습니다. 교차로에서는 양방향 자전거와 트램 선로를 함께 살피세요."
    },
    {
      id: "iceland", name: "Iceland", localName: "아이슬란드", countryCode: "is", region: "NORDIC REGION", coordinates: [64.9, -18.6], zoom: 5, count: 2,
      travel: {
        overview: "레이캬비크의 항구와 시내, 골든서클의 간헐천·폭포·대지를 잇는 자연 여행.",
        food: [
          { name: "Bæjarins Beztu Pylsur", area: "Reykjavík · Harbour", detail: "항구 근처에서 오래 사랑받아 온 핫도그 가판대입니다.", mustTry: "에이날 메ð 오llu(바삭 양파·생양파·소스 포함 핫도그)", mapsQuery: "Bæjarins Beztu Pylsur Reykjavik" },
          { name: "Messinn", area: "Reykjavík · Downtown", detail: "생선 팬 요리와 아이슬란드식 해산물로 알려진 시내 식당.", mustTry: "버터에 구운 북극곤들매기 또는 오늘의 생선 팬 요리", mapsQuery: "Messinn Reykjavik" }
        ],
        hotels: [
          { name: "Center Hotels Laugavegur", area: "Reykjavík · Laugavegur", detail: "시내 식당가와 버스 투어 승하차 지점에 접근하기 좋은 숙소.", nearbyTransit: "BSÍ 버스터미널 차량 이동권 · 시내 도보권", mapsQuery: "Center Hotels Laugavegur Reykjavik" },
          { name: "Hotel Rangá", area: "South Iceland · Hella", detail: "남부 해안·폭포 구간을 차로 둘러보는 일정의 중간 거점.", nearbyTransit: "대중교통이 제한적이므로 렌터카·투어 사전 예약 필요", mapsQuery: "Hotel Rangá Iceland" }
        ], mapsQuery: "Iceland"
      },
      safetyAlerts: [
        { level: "출발 전 확인", title: "화산 분화·지진·도로 폐쇄", detail: "레이캬네스 반도 등 일부 지역에서는 화산 활동으로 대피·도로 통제가 발생할 수 있습니다. 위험 지역 접근 금지선을 넘지 말고 SafeTravel과 현지 당국 공지를 확인하세요.", source: { label: "Iceland SafeTravel", url: "https://safetravel.is/" } },
        { level: "이동 주의", title: "급변하는 날씨와 노면", detail: "강풍·눈보라·결빙으로 도로가 갑자기 폐쇄될 수 있습니다. 출발 전 도로 상태를 확인하고, F-road와 빙하·온천 지대에는 지정 차량·가이드를 이용하세요.", source: { label: "Iceland Road and Coastal Administration", url: "https://umferdin.is/en" } }
      ],
      naturalRisk: { level: "상시 확인", title: "화산·지진·폭풍", detail: "화산·지진 활동과 강풍 위험은 지역별로 다릅니다. SafeTravel, 기상청, 도로관리청의 실시간 지도를 확인하고 경보 지역에는 진입하지 마세요." },
      profileInsight: "자연 명소에서는 표지된 길과 폐쇄선을 지키세요. 날씨가 좋아 보여도 바람·파도·지열 지대 상황은 짧은 시간에 달라질 수 있습니다."
    },
    {
      id: "switzerland", name: "Switzerland", localName: "스위스", countryCode: "ch", region: "CENTRAL EUROPE", coordinates: [46.8, 8.2], zoom: 6, count: 2,
      travel: {
        overview: "취리히 호숫가와 구시가지, 루체른의 카펠교와 호수 산책을 담았습니다.",
        food: [
          { name: "Zeughauskeller", area: "Zürich · Bahnhofstrasse", detail: "취리히 구시가지 산책 중 들르기 좋은 스위스 전통 식당.", mustTry: "취리히식 송아지 고기 크림 요리, 뢰스티", mapsQuery: "Zeughauskeller Zürich" },
          { name: "Old Swiss House", area: "Lucerne · Löwenplatz", detail: "루체른의 전통적인 분위기와 클래식한 스위스 요리로 알려진 식당.", mustTry: "테이블에서 조리하는 비너 슈니첼, 퐁듀(계절 메뉴 확인)", mapsQuery: "Old Swiss House Lucerne" }
        ],
        hotels: [
          { name: "Ruby Mimi Hotel Zürich", area: "Zürich · Central Station", detail: "취리히 중앙역과 구시가지 사이에 있어 기차 여행에 편리합니다.", nearbyTransit: "Zürich HB 도보권 · 공항 직행열차 이용", mapsQuery: "Ruby Mimi Hotel Zürich" },
          { name: "Hotel des Balances", area: "Lucerne · Old Town", detail: "카펠교와 로이스강변 산책로에 가까운 구시가지 숙소.", nearbyTransit: "루체른역·선착장 도보권", mapsQuery: "Hotel des Balances Lucerne" }
        ], mapsQuery: "Switzerland"
      },
      safetyAlerts: [
        { level: "산악 지역 주의", title: "알프스 기상·눈사태·고산병", detail: "고도와 날씨가 빠르게 바뀌며 등산로·케이블카가 예고 없이 닫힐 수 있습니다. 난이도와 체력을 맞추고 당일 산악 경보와 구조대 안내를 확인하세요.", source: { label: "Swiss Alpine Club · Safety", url: "https://www.sac-cas.ch/en/" } },
        { level: "교통 확인", title: "산악 열차·케이블카 운행", detail: "정비와 기상 악화로 산악 교통이 중단될 수 있습니다. 환승·마지막 하산 시간을 확인하고 운행 중단 시 무리하게 도보 하산하지 마세요.", source: { label: "Swiss Travel System", url: "https://www.myswitzerland.com/en/planning/transport-accommodation/transport/" } }
      ],
      naturalRisk: { level: "산악 대비", title: "눈사태·폭우·산사태", detail: "산악 루트의 눈사태와 폭우·산사태 위험은 계절·고도별로 달라집니다. 연방 재난 포털과 지역 산악 경보를 출발 당일 확인하세요." },
      profileInsight: "산악 전망대 이동은 열차·케이블카 막차 시간을 기준으로 계획하고, 기상 악화 때는 실내 대안 일정으로 전환하세요."
    },
    {
      id: "mongolia", name: "Mongolia", localName: "몽골", countryCode: "mn", region: "EAST ASIA", coordinates: [46.8, 103.8], zoom: 4.5, count: 2,
      travel: {
        overview: "울란바토르의 사찰과 역사 박물관, 테렐지 국립공원의 초원과 바위 지대를 둘러봅니다.",
        food: [
          { name: "Modern Nomads", area: "Ulaanbaatar · Downtown", detail: "몽골 전통 음식을 현대적인 식당 환경에서 맛볼 수 있는 체인.", mustTry: "부즈(찐만두), 호쇼르(튀김 만두), 허르헉(양고기 요리)", mapsQuery: "Modern Nomads Ulaanbaatar" },
          { name: "Luna Blanca", area: "Ulaanbaatar · City Centre", detail: "몽골식과 채식 메뉴를 함께 제공하는 시내 식당.", mustTry: "보르츠 수프 또는 채식 몽골식 만두", mapsQuery: "Luna Blanca Ulaanbaatar" }
        ],
        hotels: [
          { name: "Shangri-La Ulaanbaatar", area: "Ulaanbaatar · Central Tower", detail: "시내 중심부와 박물관·광장 산책에 편리한 호텔.", nearbyTransit: "칭기즈칸 국제공항에서 사전 예약 차량 권장", mapsQuery: "Shangri-La Ulaanbaatar" },
          { name: "Terelj Lodge", area: "Gorkhi-Terelj National Park", detail: "테렐지 자연 구간을 둘러보는 일정의 숙박 거점.", nearbyTransit: "도심 대중교통 없음 · 숙소 차량·가이드 이동 사전 확인", mapsQuery: "Terelj Lodge Mongolia" }
        ], mapsQuery: "Mongolia"
      },
      safetyAlerts: [
        { level: "이동 고위험", title: "장거리 비포장도로·의료 접근성", detail: "도시 밖 장거리 이동은 도로·기상·통신 여건이 급격히 달라질 수 있습니다. 검증된 운전기사·가이드와 이동 계획을 공유하고, 외곽 단독 운전을 피하세요.", source: { label: "UK Foreign Travel Advice · Mongolia", url: "https://www.gov.uk/foreign-travel-advice/mongolia" } },
        { level: "도시 여행 주의", title: "울란바토르 혼잡 구간 소지품 관리", detail: "시장·버스·도심 혼잡 구간에서 소매치기에 유의하고 야간에는 조명이 있는 주요 도로와 공식 차량을 이용하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "계절 대비", title: "혹한·폭풍·급격한 기온 변화", detail: "겨울 혹한과 봄철 강풍·먼지 폭풍은 도로와 항공 운항을 바꿀 수 있습니다. 외곽 이동 전 일기예보, 연료, 통신·비상 물품을 확인하세요." },
      profileInsight: "도심을 벗어나면 도움을 받을 수 있는 거리가 멀어집니다. 운전자·숙소에 동선을 공유하고, 귀환 시각과 비상 연락 수단을 미리 정하세요."
    },
    {
      id: "turkey", name: "Türkiye", localName: "튀르키예", countryCode: "tr", region: "WESTERN ASIA", coordinates: [39.0, 35.0], zoom: 5, count: 2,
      travel: {
        overview: "이스탄불의 술탄아흐메트와 보스포루스, 카파도키아의 계곡과 암굴 유적을 잇습니다.",
        food: [
          { name: "Hamdi Restaurant", area: "Istanbul · Eminönü", detail: "갈라타 다리와 향신료 시장 근처의 케밥 식당으로 전망 좌석은 예약을 권합니다.", mustTry: "아다나 케밥, 피스타치오 케밥, 메제", mapsQuery: "Hamdi Restaurant Istanbul" },
          { name: "Hafız Mustafa 1864", area: "Istanbul · Sirkeci", detail: "이스탄불의 오래된 디저트 가게로 바클라바와 터키식 디저트를 맛볼 수 있습니다.", mustTry: "피스타치오 바클라바, 퀴네페, 터키식 차", mapsQuery: "Hafız Mustafa 1864 Sirkeci" }
        ],
        hotels: [
          { name: "Sirkeci Mansion", area: "Istanbul · Sirkeci", detail: "술탄아흐메트와 에미뇌뉘 관광 동선 사이에 위치한 숙소.", nearbyTransit: "Gülhane 트램역 도보권 · Sirkeci Marmaray역 인접", mapsQuery: "Sirkeci Mansion Istanbul" },
          { name: "Sultan Cave Suites", area: "Cappadocia · Göreme", detail: "괴레메 중심부에서 계곡 산책과 일출 전망 투어를 계획하기 좋은 숙소.", nearbyTransit: "카이세리·네브셰히르 공항에서 예약 셔틀 권장", mapsQuery: "Sultan Cave Suites Göreme" }
        ], mapsQuery: "Türkiye"
      },
      safetyAlerts: [
        { level: "지역별 경보 확인", title: "국경 지역·대도시 보안 공지", detail: "여행경보와 이동 제한은 국경 및 지역별로 다를 수 있습니다. 시위·대규모 행사 주변을 피하고 출발 전 외교부와 현지 당국의 최신 지역 안내를 확인하세요.", source: { label: "UK Foreign Travel Advice · Türkiye", url: "https://www.gov.uk/foreign-travel-advice/turkey" } },
        { level: "관광지 주의", title: "호객·가격 분쟁·소지품 절도", detail: "관광지 주변의 비공식 가이드·택시 호객은 피하고, 메뉴와 요금을 주문·탑승 전에 확인하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "지역별 대비", title: "지진·산불·폭염", detail: "지진 위험은 지역별로 다르고 여름에는 산불·폭염이 발생할 수 있습니다. 지진 시 현지 대피 안내를 따르고 산불 통제 구역에 진입하지 마세요." },
      profileInsight: "관광지 가격은 주문 전 확인하고 영수증을 살펴보세요. 지진이 발생하면 엘리베이터를 피하고 현지 공식 대피 안내를 따르세요."
    },
    {
      id: "egypt", name: "Egypt", localName: "이집트", countryCode: "eg", region: "NORTH AFRICA", coordinates: [26.8, 30.8], zoom: 5, count: 2,
      travel: {
        overview: "카이로의 기자 피라미드와 이슬람 구시가지, 룩소르의 나일강·신전 유적을 둘러봅니다.",
        food: [
          { name: "Abou Tarek", area: "Cairo · Downtown", detail: "카이로식 코샤리로 유명한 도심 식당입니다. 혼잡 시간대와 포장 줄을 고려하세요.", mustTry: "코샤리(쌀·렌틸콩·마카로니와 토마토 소스)", mapsQuery: "Abou Tarek Koshary Cairo" },
          { name: "Felfela", area: "Cairo · Downtown", detail: "이집트 가정식과 메제를 맛볼 수 있는 중심가 식당.", mustTry: "타아메야, 풀 메담메스, 메제 모둠", mapsQuery: "Felfela Restaurant Cairo" }
        ],
        hotels: [
          { name: "Marriott Mena House", area: "Giza · Pyramids", detail: "기자 피라미드 관람을 위한 차량 이동과 숙박을 함께 계획하기 좋은 호텔.", nearbyTransit: "카이로 도심에서 공식 차량·가이드 이동 권장", mapsQuery: "Marriott Mena House Cairo" },
          { name: "Steigenberger Nile Palace", area: "Luxor · Nile Corniche", detail: "룩소르 신전과 나일강변을 둘러보기 좋은 중심 숙소.", nearbyTransit: "Luxor역에서 차량 이동권 · 유적 구간은 공식 차량 권장", mapsQuery: "Steigenberger Nile Palace Luxor" }
        ], mapsQuery: "Egypt"
      },
      safetyAlerts: [
        { level: "지역별 경보 확인", title: "국경·외곽 지역 이동 제한", detail: "일부 국경 및 외곽 지역은 여행경보가 높거나 허가·보안 절차가 필요할 수 있습니다. 기자·룩소르 등 주요 관광지 간 이동도 등록된 가이드·차량을 이용하고 최신 경보 지도를 확인하세요.", source: { label: "UK Foreign Travel Advice · Egypt", url: "https://www.gov.uk/foreign-travel-advice/egypt" } },
        { level: "관광지 주의", title: "호객·비공식 가이드·더위", detail: "유적지 주변의 무허가 가이드와 과도한 요금 요구를 피하고, 입장권은 공식 판매처에서 구입하세요. 한낮 폭염에는 물과 그늘 휴식을 확보하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "기후 대비", title: "폭염·모래폭풍·급격한 기온", detail: "사막·유적지의 폭염과 모래폭풍은 시야·교통에 영향을 줄 수 있습니다. 기상 경보와 투어 운영 공지를 확인하고 충분한 물과 햇빛 차단을 준비하세요." },
      profileInsight: "유적지 이동 전 운전자·가이드의 등록과 요금을 확인하세요. 사막·외곽 구간은 단독 이동을 피하고 숙소에 일정을 공유하세요."
    },
    {
      id: "poland", name: "Poland", localName: "폴란드", countryCode: "pl", region: "CENTRAL EUROPE", coordinates: [52.0, 19.1], zoom: 5.5, count: 2,
      travel: {
        overview: "크라쿠프 구시가지와 바벨성, 바르샤바 왕의 길과 재건된 구시가지를 걷습니다.",
        food: [
          { name: "Pod Aniołami", area: "Kraków · Old Town", detail: "중세 지하 공간에서 폴란드 전통 요리를 맛볼 수 있는 구시가지 식당.", mustTry: "피에로기, żurek 호밀 수프, 오리 요리", mapsQuery: "Pod Aniołami Kraków" },
          { name: "Zapiecek", area: "Warsaw · Old Town", detail: "폴란드식 만두 피에로기로 잘 알려진 바르샤바 식당 체인.", mustTry: "피에로기 루스키에, 양배추·버섯 피에로기", mapsQuery: "Zapiecek Warsaw Old Town" }
        ],
        hotels: [
          { name: "Hotel Stary", area: "Kraków · Main Market Square", detail: "크라쿠프 중앙광장과 바벨성 도보 일정의 중심 숙소.", nearbyTransit: "Kraków Główny역에서 도보·트램 연결", mapsQuery: "Hotel Stary Krakow" },
          { name: "Hotel Bristol, a Luxury Collection Hotel", area: "Warsaw · Royal Route", detail: "왕의 길과 구시가지 산책을 시작하기 좋은 중심 호텔.", nearbyTransit: "Nowy Świat-Uniwersytet 메트로·버스 정류장 인접", mapsQuery: "Hotel Bristol Warsaw" }
        ], mapsQuery: "Poland"
      },
      safetyAlerts: [
        { level: "관광지 주의", title: "역·야간 유흥가 소지품 관리", detail: "대형역과 혼잡한 구시가지에서 소매치기·비공식 택시 호객에 유의하세요. 차량은 공식 앱·승강장을 이용하고 요금을 확인하세요.", source: { label: "UK Foreign Travel Advice · Poland", url: "https://www.gov.uk/foreign-travel-advice/poland" } },
        { level: "현지 공지 확인", title: "집회·철도 운행 변경", detail: "대형 집회와 철도 공사·파업은 도심 이동을 바꿀 수 있습니다. 기차표와 역 플랫폼은 출발 직전 운영사 공지로 확인하세요.", source: { label: "PKP Intercity", url: "https://www.intercity.pl/en/" } }
      ],
      naturalRisk: { level: "계절별 주의", title: "한파·폭우·강 수위", detail: "겨울 한파와 폭설, 집중호우 뒤 강 수위 상승이 교통에 영향을 줄 수 있습니다. 기상청 경보와 지역 교통 안내를 확인하세요." },
      profileInsight: "열차표의 좌석·차량 정보를 확인하고 역 안에서 비공식 환전이나 도움 제안을 경계하세요."
    },
    {
      id: "ukraine", name: "Ukraine", localName: "우크라이나", countryCode: "ua", region: "EASTERN EUROPE", coordinates: [48.4, 31.2], zoom: 5, count: 2,
      travel: {
        overview: "안전 상황이 허용되는 시기의 참고용 도시 문화 루트입니다. 무력 충돌과 공식 여행경보가 해제되기 전 관광 목적 방문을 권하지 않습니다.",
        food: [],
        foodNote: "현재 일반 관광 목적의 식당 추천을 보류합니다. 현지 안전 상황과 운영 여부를 확인할 수 있을 때 정보를 갱신하세요.",
        hotels: [],
        hotelNote: "현재 숙박 추천과 예약 안내를 보류합니다. 출국 전 외교부 여행경보와 항공·국경 운영 상황을 확인하세요.",
        mapsQuery: "Ukraine"
      },
      safetyAlerts: [
        { level: "여행 금지·자제 경보 확인", title: "무력 충돌·미사일·드론 공격 위험", detail: "계엄과 전투, 공습 경보, 기반시설 피해 및 통행 제한이 발생할 수 있습니다. 국가·지역별 여행금지와 대피 안내가 바뀌므로 관광 목적 방문을 계획하지 말고, 외교부 및 현지 당국의 최신 지침을 확인하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } },
        { level: "이동 제한", title: "영공 폐쇄·통금·교통 차질", detail: "항공 운항과 국경 통과, 철도·도로 운행이 제한되거나 갑자기 변경될 수 있습니다. 안전 공지가 해제되기 전에는 일반 관광 루트를 이용하지 마세요.", source: { label: "UK Foreign Travel Advice · Ukraine", url: "https://www.gov.uk/foreign-travel-advice/ukraine" } }
      ],
      naturalRisk: { level: "현장 경보 확인", title: "공습 경보·정전·기상 위험", detail: "현재는 무력 충돌 관련 위험이 최우선입니다. 일반적인 기상·재난 정보보다 공습 경보, 대피소, 계엄·통행 규정을 공식 안내에서 확인하세요." },
      profileInsight: "현지 상황이 급변할 수 있고 영사 지원 접근도 제한될 수 있습니다. 여행경보와 대피 안내가 해제되지 않은 지역은 방문 계획에서 제외하세요."
    },
    {
      id: "greece", name: "Greece", localName: "그리스", countryCode: "gr", region: "SOUTHERN EUROPE", coordinates: [39.0, 22.0], zoom: 5.5, count: 2,
      travel: {
        overview: "아테네 아크로폴리스와 플라카 골목, 산토리니 칼데라와 이아의 노을을 만납니다.",
        food: [
          { name: "O Thanasis", area: "Athens · Monastiraki", detail: "모나스티라키 광장 근처에서 그리스식 그릴 요리를 맛볼 수 있는 대중적인 식당.", mustTry: "기로스·수블라키, 차지키", mapsQuery: "O Thanasis Monastiraki Athens" },
          { name: "To Kati Allo", area: "Athens · Acropolis Museum", detail: "아크로폴리스 박물관과 가까운 가정식 타베르나.", mustTry: "무사카, 그리스식 샐러드, 오늘의 오븐 요리", mapsQuery: "To Kati Allo Athens" }
        ],
        hotels: [
          { name: "Electra Metropolis Athens", area: "Athens · Syntagma", detail: "신타그마 광장과 플라카·아크로폴리스 산책의 중심 숙소.", nearbyTransit: "Syntagma 메트로 환승역 도보권 · 공항 메트로 연결", mapsQuery: "Electra Metropolis Athens" },
          { name: "Canaves Oia Suites", area: "Santorini · Oia", detail: "이아 절벽 마을과 칼데라 전망 산책을 계획하기 좋은 숙소.", nearbyTransit: "산토리니 공항·항구에서 사전 예약 차량 권장", mapsQuery: "Canaves Oia Suites Santorini" }
        ], mapsQuery: "Greece"
      },
      safetyAlerts: [
        { level: "관광지 주의", title: "아테네 소매치기·집회", detail: "아테네 지하철과 관광지에서 소지품을 관리하고, 신타그마 광장 등 집회가 열리는 곳은 당일 교통 공지를 확인하세요.", source: { label: "UK Foreign Travel Advice · Greece", url: "https://www.gov.uk/foreign-travel-advice/greece" } },
        { level: "섬·해안 주의", title: "산불·페리 운항·강한 파도", detail: "여름 산불, 강풍으로 인한 페리 결항, 해변의 이안류 위험을 확인하세요. 현지 소방·해안 경보와 선사 공지를 따르세요.", source: { label: "Greek Civil Protection", url: "https://civilprotection.gov.gr/en" } }
      ],
      naturalRisk: { level: "지역별 대비", title: "지진·산불·폭염", detail: "에게해 지진과 여름철 산불·폭염 위험이 있습니다. 실내 대피 위치를 확인하고 산불 통제 구역과 현지 기상 경보를 따르세요." },
      profileInsight: "섬 여행은 마지막 페리와 대체 숙박을 함께 확인하세요. 산불·강풍 경보가 있는 날에는 전망대와 해안 절벽 접근을 피하세요."
    },
    {
      id: "norway", name: "Norway", localName: "노르웨이", countryCode: "no", region: "NORTHERN EUROPE", coordinates: [61.0, 8.0], zoom: 5, count: 2,
      travel: {
        overview: "오슬로 피오르드와 오페라하우스, 베르겐 브뤼겐과 산악 전망을 잇는 여정.",
        food: [
          { name: "Fiskeriet Youngstorget", area: "Oslo · Youngstorget", detail: "도심에서 노르웨이 해산물과 생선 요리를 맛볼 수 있는 식당·수산 코너.", mustTry: "피시 앤 칩스, 생선 수프, 오늘의 대구", mapsQuery: "Fiskeriet Youngstorget Oslo" },
          { name: "Bryggeloftet & Stuene", area: "Bergen · Bryggen", detail: "브뤼겐 지구의 전통 레스토랑으로 베르겐 지역 요리를 즐길 수 있습니다.", mustTry: "베르겐 피시 수프, 양고기·대구 요리", mapsQuery: "Bryggeloftet Stuene Bergen" }
        ],
        hotels: [
          { name: "Clarion Hotel The Hub", area: "Oslo · Central Station", detail: "오슬로 중앙역과 오페라하우스 산책에 가까운 도심 숙소.", nearbyTransit: "Oslo S 중앙역·공항열차 바로 인접", mapsQuery: "Clarion Hotel The Hub Oslo" },
          { name: "Thon Hotel Rosenkrantz Bergen", area: "Bergen · Bryggen", detail: "브뤼겐과 어시장을 도보로 둘러보기 좋은 중심 호텔.", nearbyTransit: "Bergen역에서 도보권 · 공항버스 정류장 연결", mapsQuery: "Thon Hotel Rosenkrantz Bergen" }
        ], mapsQuery: "Norway"
      },
      safetyAlerts: [
        { level: "야외 활동 주의", title: "피오르드·산악 기상 급변", detail: "산악·피오르드 날씨는 급격히 바뀌며 트레일 폐쇄와 구조 요청이 생길 수 있습니다. DNT·지역 구조대의 당일 상태를 확인하고 혼자 원거리 트레킹을 피하세요.", source: { label: "Norwegian Trekking Association · DNT", url: "https://www.dnt.no/english/" } },
        { level: "교통 확인", title: "페리·산악도로 운행 중단", detail: "폭설·강풍으로 페리와 산악도로가 중단될 수 있습니다. 대체 숙박과 환승 시간을 확보하고 교통사의 운행 공지를 확인하세요.", source: { label: "Norwegian Public Roads Administration", url: "https://www.vegvesen.no/en/traffic-information/" } }
      ],
      naturalRisk: { level: "현지 기상 확인", title: "산사태·눈사태·강풍", detail: "산악·피오르드 지역은 눈사태, 산사태, 강풍 위험이 있습니다. Varsom 경보와 도로·페리 공지를 출발 전에 확인하세요." },
      profileInsight: "긴 야외 구간은 출발 시각·일몰·통신 가능성을 함께 계획하세요. 현지 안내가 폐쇄한 트레일이나 빙하에는 진입하지 마세요."
    },
    {
      id: "australia", name: "Australia", localName: "호주", countryCode: "au", region: "OCEANIA", coordinates: [-25.0, 134.0], zoom: 3.5, count: 2,
      travel: {
        overview: "시드니 항구와 해안 산책로, 멜버른 골목과 정원을 잇는 도시 여행.",
        food: [
          { name: "Sydney Fish Market", area: "Sydney · Pyrmont", detail: "항구 도시의 해산물 시장으로 식당과 테이크아웃 매장이 모여 있습니다.", mustTry: "시드니 락 오이스터, 새우·생선 플래터", mapsQuery: "Sydney Fish Market" },
          { name: "Lune Croissanterie", area: "Melbourne · Fitzroy", detail: "정교한 페이스트리로 잘 알려진 멜버른 베이커리. 지점과 당일 판매 메뉴를 확인하세요.", mustTry: "시그니처 크루아상, 시즌 한정 페이스트리", mapsQuery: "Lune Croissanterie Fitzroy Melbourne" }
        ],
        hotels: [
          { name: "Sydney Harbour Marriott Hotel at Circular Quay", area: "Sydney · Circular Quay", detail: "서큘러키와 오페라하우스·록스 산책의 출발점에 위치합니다.", nearbyTransit: "Circular Quay 역·페리 터미널 도보권 · 공항철도 연결", mapsQuery: "Sydney Harbour Marriott Circular Quay" },
          { name: "QT Melbourne", area: "Melbourne · CBD", detail: "CBD 골목, 극장가, 쇼핑 지구를 걸어서 둘러보기 좋은 호텔.", nearbyTransit: "Parliament역·트램 무료 구역 도보권", mapsQuery: "QT Melbourne hotel" }
        ], mapsQuery: "Australia"
      },
      safetyAlerts: [
        { level: "해변 안전", title: "이안류·강한 자외선·해양 생물", detail: "해변에서는 붉은색·노란색 깃발 사이에서만 수영하고 구조요원 지시를 따르세요. 지역별 해파리·악어 경고와 자외선 지수를 확인하세요.", source: { label: "Surf Life Saving Australia · Beach safety", url: "https://sls.com.au/beach-safety/" } },
        { level: "계절별 주의", title: "산불·폭염·홍수", detail: "지역과 계절에 따라 산불, 폭염, 열대성 폭풍·홍수 위험이 달라집니다. 주·준주 재난 경보와 도로 통제 정보를 확인하세요.", source: { label: "Australian Government · Emergency warnings", url: "https://www.disasterassist.gov.au/" } }
      ],
      naturalRisk: { level: "지역·계절별 대비", title: "산불·폭염·열대성 폭풍", detail: "광대한 국토로 위험 양상이 지역마다 다릅니다. 산불·폭염·홍수 경보를 확인하고, 해안에서는 지정된 수영 구역과 구조요원 안내를 따르세요." },
      profileInsight: "도시 사이 거리가 멀어 이동 시간과 연료·통신을 미리 계획하세요. 야생동물과 해변 위험은 지역별 표지와 현장 안내를 우선합니다."
    },
    {
      id: "canada", name: "Canada", localName: "캐나다", countryCode: "ca", region: "NORTH AMERICA", coordinates: [56.0, -106.0], zoom: 3.5, count: 2,
      travel: {
        overview: "토론토의 호숫가와 다운타운, 밴쿠버의 해안·공원 산책을 중심으로 구성했습니다.",
        food: [
          { name: "PAI Northern Thai Kitchen", area: "Toronto · Entertainment District", detail: "토론토에서 인지도가 높은 태국 음식점으로 점심·저녁 대기가 생길 수 있습니다.", mustTry: "카오소이, 팟타이", mapsQuery: "PAI Northern Thai Kitchen Toronto" },
          { name: "Miku Vancouver", area: "Vancouver · Waterfront", detail: "워터프런트와 캐나다 플레이스 산책에 붙이기 좋은 일본식 해산물 식당.", mustTry: "아부리 연어 오시스시, 시푸드 모둠", mapsQuery: "Miku Vancouver" }
        ],
        hotels: [
          { name: "Fairmont Royal York", area: "Toronto · Union Station", detail: "토론토 중앙역 맞은편에 있어 다운타운과 공항열차 이동의 거점으로 편리합니다.", nearbyTransit: "Union Station 바로 맞은편 · UP Express 공항열차", mapsQuery: "Fairmont Royal York Toronto" },
          { name: "Fairmont Waterfront", area: "Vancouver · Canada Place", detail: "항구와 개스타운·스탠리파크 이동을 계획하기 좋은 중심 호텔.", nearbyTransit: "Waterfront SkyTrain·SeaBus역 도보권", mapsQuery: "Fairmont Waterfront Vancouver" }
        ], mapsQuery: "Canada"
      },
      safetyAlerts: [
        { level: "도시·야외 주의", title: "도심 절도와 야생동물 거리 유지", detail: "대도시 대중교통·관광지에서는 소지품을 관리하고, 국립공원에서는 곰 등 야생동물에게 먹이를 주거나 접근하지 마세요. 공원별 곰 안전 수칙과 폐쇄 구역을 확인하세요.", source: { label: "Government of Canada · Travel advice", url: "https://travel.gc.ca/travelling/advisories" } },
        { level: "계절별 주의", title: "산불 연기·한파·도로 통제", detail: "산불 연기와 겨울 폭설·결빙은 항공·고속도로 이동에 영향을 줄 수 있습니다. 주·준주 재난 경보와 도로 상황을 확인하세요.", source: { label: "Government of Canada · Emergencies", url: "https://www.canada.ca/en/public-safety-canada.html" } }
      ],
      naturalRisk: { level: "지역·계절별 대비", title: "산불·한파·홍수", detail: "광대한 국토로 지역별 위험이 크게 다릅니다. 산불 시즌에는 대기질과 대피 경보, 겨울에는 도로 폐쇄·한파 공지를 확인하세요." },
      profileInsight: "도시 간 이동 거리가 길고 휴대전화 음영 지역이 있습니다. 국립공원·장거리 운전 전 연료, 오프라인 지도, 일정 공유를 준비하세요."
    },
    {
      id: "united-states", name: "United States", localName: "미국", countryCode: "us", region: "NORTH AMERICA", coordinates: [39.0, -98.0], zoom: 3.5, count: 2,
      travel: {
        overview: "뉴욕의 미드타운·센트럴파크와 샌프란시스코의 만·언덕 풍경을 담았습니다.",
        food: [
          { name: "Katz's Delicatessen", area: "New York · Lower East Side", detail: "뉴욕 델리 문화를 경험할 수 있는 오래된 샌드위치 가게입니다. 주문 방식과 대기 줄을 확인하세요.", mustTry: "파스트라미 온 라이 샌드위치", mapsQuery: "Katz's Delicatessen New York" },
          { name: "Tartine Bakery", area: "San Francisco · Mission District", detail: "샌프란시스코 사워도우와 페이스트리로 알려진 베이커리.", mustTry: "컨트리 로프 사워도우, 모닝번", mapsQuery: "Tartine Bakery San Francisco" }
        ],
        hotels: [
          { name: "The New Yorker Hotel", area: "New York · Midtown", detail: "펜역과 매디슨 스퀘어 가든 주변 산책의 교통 거점.", nearbyTransit: "Penn Station·34 St–Penn역 인접 · 공항열차 연결", mapsQuery: "The New Yorker Hotel New York" },
          { name: "Hyatt Centric Fisherman's Wharf", area: "San Francisco · Fisherman's Wharf", detail: "피셔맨스워프와 해안 산책로를 둘러보기 좋은 숙소.", nearbyTransit: "Powell-Hyde 케이블카·시내버스 정류장 인접", mapsQuery: "Hyatt Centric Fisherman's Wharf San Francisco" }
        ], mapsQuery: "United States"
      },
      safetyAlerts: [
        { level: "도시별 확인", title: "지역별 치안·시위와 교통 통제", detail: "안전 상황은 도시·구역별 편차가 큽니다. 야간 낯선 지역 도보를 피하고, 집회·대형 행사 주변 통제와 현지 경찰 안내를 확인하세요.", source: { label: "U.S. Department of State · Travel Advisories", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/" } },
        { level: "응급 대비", title: "응급의료 비용·긴급 연락", detail: "응급의료 비용이 높을 수 있으므로 여행자보험 보장 범위를 확인하세요. 긴급 상황은 911에 연락하고 위치·숙소 주소를 영어로 준비하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "지역·계절별 대비", title: "산불·허리케인·지진·폭염", detail: "서부 산불·지진, 남부 허리케인, 중부 토네이도 등 위험이 지역과 계절에 따라 다릅니다. 주·카운티 재난 경보와 대피 명령을 확인하세요." },
      profileInsight: "도시·주마다 위험과 교통 규칙이 다릅니다. 숙소 주변을 먼저 확인하고 렌터카·주차·통행료 조건을 도시별로 점검하세요."
    },
    {
      id: "mexico", name: "Mexico", localName: "멕시코", countryCode: "mx", region: "NORTH AMERICA", coordinates: [23.6, -102.5], zoom: 4.5, count: 2,
      travel: {
        overview: "멕시코시티의 역사 지구와 오악사카의 시장·식민지 거리를 잇습니다.",
        food: [
          { name: "El Cardenal", area: "Mexico City · Historic Centre", detail: "역사 지구에서 멕시코식 아침 식사와 전통 요리를 맛보기 좋은 식당.", mustTry: "콘차스와 핫초콜릿, 칠라킬레스", mapsQuery: "El Cardenal Centro Histórico Mexico City" },
          { name: "Tlayudas Doña Flavia", area: "Oaxaca · Centro", detail: "오악사카 대표 길거리 음식 틀라유다를 맛볼 수 있는 현지 식당.", mustTry: "틀라유다와 몰레, 메스칼(음주 시 안전 귀가)", mapsQuery: "Tlayudas Doña Flavia Oaxaca" }
        ],
        hotels: [
          { name: "Gran Hotel Ciudad de México", area: "Mexico City · Zócalo", detail: "소칼로와 역사 지구를 도보로 둘러보기 좋은 랜드마크 호텔.", nearbyTransit: "Zócalo 메트로역·도심 주요 노선 인접", mapsQuery: "Gran Hotel Ciudad de México" },
          { name: "Quinta Real Oaxaca", area: "Oaxaca · Centro", detail: "오악사카 중앙 광장과 시장 산책에 가까운 역사 건축 숙소.", nearbyTransit: "ADO 버스터미널에서 차량 이동 · 중심가 도보권", mapsQuery: "Quinta Real Oaxaca" }
        ], mapsQuery: "Mexico"
      },
      safetyAlerts: [
        { level: "주·지역별 경보 확인", title: "치안·고속도로 이동 위험", detail: "안전 권고는 주와 도시, 도로 구간별로 다릅니다. 야간 장거리 운전을 피하고 유료도로·등록된 차량을 이용하세요. 출발 전 외교부 지역별 여행경보를 확인하세요.", source: { label: "U.S. Department of State · Mexico", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html" } },
        { level: "관광지 주의", title: "택시·환전·관광지 호객", detail: "공식 호출 차량과 은행 환전 서비스를 이용하고, 길거리에서 낯선 사람이 권하는 투어·환전은 피하세요. 소지품과 음료를 관리하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "지역·계절별 대비", title: "지진·화산·허리케인", detail: "멕시코시티·태평양 연안은 지진 위험, 일부 화산 주변은 접근 통제, 해안은 허리케인 영향을 받을 수 있습니다. 현지 민방위 경보와 대피 지침을 따르세요." },
      profileInsight: "지역별 이동 안전도가 크게 다르므로 한 도시의 정보를 다른 주에 일반화하지 말고, 이동 경로와 도착 시간을 숙소·동행자와 공유하세요."
    },
    {
      id: "peru", name: "Peru", localName: "페루", countryCode: "pe", region: "SOUTH AMERICA", coordinates: [-9.2, -75.0], zoom: 4.5, count: 2,
      travel: {
        overview: "리마의 태평양 해안과 미라플로레스, 쿠스코의 잉카 유적과 고산 골목을 둘러봅니다.",
        food: [
          { name: "Central", area: "Lima · Barranco", detail: "페루의 지역 식재료를 코스로 풀어내는 유명 레스토랑입니다. 예약과 취소 조건을 미리 확인하세요.", mustTry: "지역별 테이스팅 코스(사전 예약 필수)", mapsQuery: "Central Restaurante Lima" },
          { name: "Chicha por Gastón Acurio", area: "Cusco · Plaza Regocijo", detail: "쿠스코 지역 식재료와 페루 가정식을 현대적으로 선보이는 식당.", mustTry: "쿠이·안데스식 옥수수 메뉴(식재료 표기 확인), 로모 살타도", mapsQuery: "Chicha por Gastón Acurio Cusco" }
        ],
        hotels: [
          { name: "Casa Andina Premium Miraflores", area: "Lima · Miraflores", detail: "해안 절벽 산책로와 미라플로레스 중심 일정을 시작하기 좋은 숙소.", nearbyTransit: "Jorge Chávez 공항은 공식 차량 이동 · 시내버스 정류장 인접", mapsQuery: "Casa Andina Premium Miraflores" },
          { name: "Antigua Casona San Blas", area: "Cusco · San Blas", detail: "쿠스코 중심부와 산블라스 골목을 걸어서 둘러보기 좋은 숙소.", nearbyTransit: "쿠스코 공항에서 공식 택시·호텔 차량 이동 권장", mapsQuery: "Antigua Casona San Blas Cusco" }
        ], mapsQuery: "Peru"
      },
      safetyAlerts: [
        { level: "현지 공지 확인", title: "시위·도로 봉쇄와 열차 운행", detail: "시위와 도로 봉쇄는 공항·철도·마추픽추 접근을 갑자기 바꿀 수 있습니다. 출발 당일 철도·버스 운영사와 현지 당국 공지를 확인하세요.", source: { label: "UK Foreign Travel Advice · Peru", url: "https://www.gov.uk/foreign-travel-advice/peru" } },
        { level: "고산 지역 주의", title: "고산병·관광지 절도", detail: "쿠스코·성스러운 계곡은 고도가 높습니다. 도착 첫날 무리한 활동을 피하고 호흡 곤란·심한 두통 시 의료 도움을 받으세요. 혼잡한 시장에서는 소지품을 관리하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "지역별 대비", title: "안데스 지진·산사태·우기", detail: "안데스 산악 지역은 지진·산사태, 우기에는 도로 단절 위험이 있습니다. 고산·철도 이동 전 기상과 운영 공지를 확인하세요." },
      profileInsight: "고산 일정은 천천히 적응하고 물·휴식 시간을 확보하세요. 시위로 이동편이 바뀔 수 있으므로 귀국 전날에는 장거리 환승을 피하세요."
    },
    {
      id: "nepal", name: "Nepal", localName: "네팔", countryCode: "np", region: "SOUTH ASIA", coordinates: [28.3, 84.0], zoom: 5, count: 2,
      travel: {
        overview: "카트만두 계곡의 사원과 더르바르 광장, 포카라 페와호수와 안나푸르나 전망을 담았습니다.",
        food: [
          { name: "OR2K", area: "Kathmandu · Thamel", detail: "타멜에서 중동·네팔풍 메뉴와 채식 요리를 고르기 좋은 인기 식당.", mustTry: "후무스 플래터, 팔라펠, 모모", mapsQuery: "OR2K Kathmandu" },
          { name: "Thakali Kitchen", area: "Kathmandu · Thamel", detail: "달밧 등 네팔식 타칼리 식사를 맛볼 수 있는 식당.", mustTry: "달밧 타칼리 세트, 치킨·야크 커리", mapsQuery: "Thakali Kitchen Thamel Kathmandu" }
        ],
        hotels: [
          { name: "Kathmandu Marriott Hotel", area: "Kathmandu · Naxal", detail: "타멜과 파슈파티나트 이동을 계획하기 좋은 도심 숙소.", nearbyTransit: "트리부반 국제공항에서 공식 차량 이동 권장", mapsQuery: "Kathmandu Marriott Hotel" },
          { name: "Fish Tail Lodge", area: "Pokhara · Phewa Lake", detail: "페와호수와 포카라 호숫가 일정을 위한 숙소.", nearbyTransit: "포카라 공항·버스터미널에서 차량 이동", mapsQuery: "Fish Tail Lodge Pokhara" }
        ], mapsQuery: "Nepal"
      },
      safetyAlerts: [
        { level: "트레킹 사전 확인", title: "고산병·산악 구조·허가", detail: "고산병은 낮은 고도에서도 발생할 수 있습니다. 트레킹 허가·등록 가이드·보험의 헬기 구조 보장을 확인하고 증상이 나타나면 즉시 하산·의료 상담하세요.", source: { label: "Nepal Tourism Board · Trekking information", url: "https://ntb.gov.np/" } },
        { level: "현지 공지 확인", title: "산사태·도로 봉쇄·집회", detail: "우기 산사태와 도로 사정, 집회로 이동이 중단될 수 있습니다. 장거리 이동 전 항공·버스 운영사와 숙소를 통해 최신 상황을 확인하세요.", source: { label: "UK Foreign Travel Advice · Nepal", url: "https://www.gov.uk/foreign-travel-advice/nepal" } }
      ],
      naturalRisk: { level: "산악·계절 대비", title: "지진·눈사태·산사태", detail: "히말라야 지진과 고산 눈사태, 우기 산사태 위험이 있습니다. 트레킹 전 현지 기상·트레일 상태와 구조 계획을 확인하세요." },
      profileInsight: "고산 트레킹은 일정표보다 신체 증상과 현지 가이드 판단을 우선하세요. 일행과 위치·귀환 예정 시간을 공유하고 혼자 코스를 벗어나지 마세요."
    },
    {
      id: "brazil", name: "Brazil", localName: "브라질", countryCode: "br", region: "SOUTH AMERICA", coordinates: [-10.0, -52.0], zoom: 4, count: 2,
      travel: {
        overview: "리우데자네이루의 코파카바나·슈거로프와 상파울루의 이비라푸에라 공원·도심 미술관을 잇습니다.",
        food: [
          { name: "Bar Urca", area: "Rio de Janeiro · Urca", detail: "과나바라만을 바라보며 간단한 바 음식을 즐길 수 있는 리우의 명소.", mustTry: "새우 파스텔, 바칼랴우 크로켓, 차가운 맥주", mapsQuery: "Bar Urca Rio de Janeiro" },
          { name: "D.O.M.", area: "São Paulo · Jardins", detail: "브라질 식재료를 활용한 현대 요리로 알려진 레스토랑. 예약과 코스 운영을 확인하세요.", mustTry: "브라질 지역 식재료 테이스팅 코스", mapsQuery: "D.O.M. Restaurant São Paulo" }
        ],
        hotels: [
          { name: "Copacabana Palace", area: "Rio de Janeiro · Copacabana", detail: "코파카바나 해변 산책과 시내 이동의 랜드마크 숙소.", nearbyTransit: "Cardeal Arcoverde 메트로역 도보권 · 공항은 공식 차량 이동", mapsQuery: "Copacabana Palace Rio de Janeiro" },
          { name: "Hotel Unique", area: "São Paulo · Jardins", detail: "이비라푸에라 공원과 자르징스 구역에 접근하기 좋은 디자인 호텔.", nearbyTransit: "시내버스·호출 차량 이용 · Congonhas 공항 차량 이동권", mapsQuery: "Hotel Unique São Paulo" }
        ], mapsQuery: "Brazil"
      },
      safetyAlerts: [
        { level: "도시별 주의", title: "강도·휴대전화 날치기", detail: "대도시에서는 해변·교통 허브·야간 보행 중 강도와 휴대전화 절도에 유의하세요. 귀중품 노출을 줄이고 야간에는 등록된 차량을 이용하세요.", source: { label: "UK Foreign Travel Advice · Brazil", url: "https://www.gov.uk/foreign-travel-advice/brazil" } },
        { level: "현지 안내 준수", title: "해변·빈민가 투어와 집회", detail: "해변 깃발과 구조요원 지시를 따르고, 비공식 투어로 낯선 지역에 들어가지 마세요. 대규모 집회와 치안 통제 구역은 피하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "지역·계절별 대비", title: "집중호우·산사태·폭염", detail: "열대성 폭우와 산사태, 고온다습한 날씨가 지역별로 나타날 수 있습니다. 홍수 통제·산사태 경보와 해변 안전 안내를 확인하세요." },
      profileInsight: "현금·휴대전화 노출을 줄이고, 해변과 야외 행사에서는 동행자·귀가 경로를 미리 정하세요."
    },
    {
      id: "chile", name: "Chile", localName: "칠레", countryCode: "cl", region: "SOUTH AMERICA", coordinates: [-30.0, -71.0], zoom: 4, count: 2,
      travel: {
        overview: "산티아고의 산기슭 전망과 산페드로 데 아타카마의 사막·염호 풍경을 만납니다.",
        food: [
          { name: "Como Agua para Chocolate", area: "Santiago · Bellavista", detail: "벨라비스타 구역에서 칠레식 해산물·고기 요리를 맛볼 수 있는 식당.", mustTry: "파스텔 데 초클로, 칠레식 엠파나다", mapsQuery: "Como Agua para Chocolate Santiago Chile" },
          { name: "Adobe", area: "San Pedro de Atacama · Caracoles", detail: "산페드로 중심가에서 안데스 지역 요리를 맛볼 수 있는 식당.", mustTry: "로코토 속채움 요리, 현지 퀴노아·라마 메뉴(제공 여부 확인)", mapsQuery: "Adobe Restaurant San Pedro de Atacama" }
        ],
        hotels: [
          { name: "The Singular Santiago", area: "Santiago · Lastarria", detail: "산티아고 구시가지·미술관 지구와 산책 루트에 가까운 호텔.", nearbyTransit: "Universidad Católica 메트로역 도보권", mapsQuery: "The Singular Santiago" },
          { name: "Hotel Cumbres San Pedro de Atacama", area: "San Pedro de Atacama", detail: "사막 투어 출발 전후 휴식에 적합한 마을 외곽 숙소.", nearbyTransit: "투어 셔틀·도보 이동 · 투어 픽업 범위 사전 확인", mapsQuery: "Hotel Cumbres San Pedro de Atacama" }
        ], mapsQuery: "Chile"
      },
      safetyAlerts: [
        { level: "도시별 주의", title: "시위·도심 통제와 소지품 절도", detail: "산티아고 중심부 집회는 도로·메트로 운행을 바꿀 수 있습니다. 시위 인파를 피하고, 버스터미널·관광지에서 가방과 휴대전화를 관리하세요.", source: { label: "UK Foreign Travel Advice · Chile", url: "https://www.gov.uk/foreign-travel-advice/chile" } },
        { level: "고산 지역 주의", title: "고도·원거리 투어", detail: "아타카마 고원 투어는 고도가 높고 의료시설과 멀 수 있습니다. 고산 증상에 유의하고 투어 운영자·차량·귀환 시각을 확인하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "상시 대비", title: "강진·화산·산불", detail: "칠레는 지진대와 화산 지형이 길게 이어집니다. 지진 시 현지 대피 표지와 SENAPRED 안내를 따르고, 산불·화산 통제 구역에 접근하지 마세요." },
      profileInsight: "사막 투어는 고도·자외선·수분 손실을 고려해 일정을 선택하세요. 지진이 발생하면 해안에서는 쓰나미 대피 표지를 따르세요."
    },
    {
      id: "argentina", name: "Argentina", localName: "아르헨티나", countryCode: "ar", region: "SOUTH AMERICA", coordinates: [-34.0, -64.0], zoom: 4, count: 2,
      travel: {
        overview: "부에노스아이레스의 레콜레타·팔레르모와 이구아수 폭포의 열대 숲길을 담았습니다.",
        food: [
          { name: "Don Julio", area: "Buenos Aires · Palermo", detail: "아르헨티나식 파리야(그릴)로 세계적으로 알려진 레스토랑입니다. 예약을 미리 확인하세요.", mustTry: "아사도·바시오 스테이크, 치미추리", mapsQuery: "Don Julio Buenos Aires" },
          { name: "Café Tortoni", area: "Buenos Aires · Avenida de Mayo", detail: "부에노스아이레스의 유서 깊은 카페로 중심부 산책 중 들르기 좋습니다.", mustTry: "초콜라테 콘 추로스, 알파호르", mapsQuery: "Café Tortoni Buenos Aires" }
        ],
        hotels: [
          { name: "Alvear Palace Hotel", area: "Buenos Aires · Recoleta", detail: "레콜레타와 주요 박물관을 둘러보기 좋은 도심 호텔.", nearbyTransit: "Retiro역·도심 버스 연결 · 공항은 공식 차량 권장", mapsQuery: "Alvear Palace Hotel Buenos Aires" },
          { name: "Gran Meliá Iguazú", area: "Iguazú National Park", detail: "이구아수 국립공원 내 폭포 관람 동선에 위치한 숙소.", nearbyTransit: "푸에르토 이구아수 공항에서 셔틀·차량 이동", mapsQuery: "Gran Meliá Iguazú" }
        ], mapsQuery: "Argentina"
      },
      safetyAlerts: [
        { level: "도시 여행 주의", title: "소매치기·급행 절도", detail: "부에노스아이레스의 환승역·시장·야외 카페에서 휴대전화와 가방 절도에 유의하세요. 현금 인출은 은행 안 ATM을 이용하고 늦은 밤 한적한 거리를 피하세요.", source: { label: "UK Foreign Travel Advice · Argentina", url: "https://www.gov.uk/foreign-travel-advice/argentina" } },
        { level: "현지 공지 확인", title: "집회·파업과 장거리 교통 변경", detail: "집회와 교통 파업으로 중심가 도로·버스가 갑자기 바뀔 수 있습니다. 장거리 버스와 국내선은 출발 전 운행 상태를 다시 확인하세요.", source: { label: "대한민국 외교부 해외안전여행", url: "https://www.0404.go.kr/" } }
      ],
      naturalRisk: { level: "지역별 대비", title: "안데스 지진·홍수·산악 기상", detail: "안데스 지역의 지진·고산 기상과 북부·동부의 홍수 위험은 지역별로 다릅니다. 국립공원·산악 구간의 당일 경보를 확인하세요." },
      profileInsight: "장거리 이동과 환전은 공식 사업자를 이용하고, 현지 파업·환율 변동으로 일정과 결제 계획에 여유를 두세요."
    }
  ],
  liveFeeds: {
    tsunami: "https://www.tsunami.gov/",
    globalDisasterAlerts: "https://www.gdacs.org/",
    volcano: "https://www.volcano.si.edu/"
  },
  mapConfig: {
    // Google Maps JavaScript API 키를 설정하면 Google 지도를 사용합니다. 비워두면 Leaflet/OpenStreetMap으로 자동 대체합니다.
    googleMapsApiKey: "AIzaSyArVFcBKNnAvsQwYe7NfFm1YbsT9B_EY6g"
  },
  recommendationNote: "대표 메뉴와 여행 동선 접근성을 기준으로 큐레이션했습니다. Google 평점·후기 수와 한국어 최신 후기는 수시로 바뀌므로 장소별 지도 링크에서 확인하세요.",
  routes: [
    {
      id: "paris-canal", countryId: "france", number: "01", title: "파리의 운하와 동네 서점", location: "Paris · 2 days", duration: "2일", distance: "8.4 km",
      coordinates: [[48.874, 2.364], [48.872, 2.363], [48.870, 2.360], [48.869, 2.370], [48.867, 2.379]],
      stops: ["카날 생마르탱", "레퓌블리크 광장", "마레 지구", "보주 광장"],
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "파리의 지붕과 에펠탑이 보이는 풍경", note: "아침 빛이 운하에 닿기 전, 10구의 작은 베이커리에서 하루를 시작해요.",
      description: "카날 생마르탱의 수면과 철제 다리를 따라 마레의 오래된 골목까지 이어지는 도심 산책. 아침에는 동네 빵집과 운하가 차분하고, 저녁에는 강변 카페와 바에 활기가 더해집니다.",
      highlights: [
        { name: "카날 생마르탱", detail: "운하를 따라 이어지는 산책로와 아치형 다리, 물가의 카페를 천천히 둘러보세요." },
        { name: "레퓌블리크 광장", detail: "여러 지하철 노선이 만나는 넓은 광장으로, 동네 산책을 시작하거나 쉬어가기 좋아요." },
        { name: "마레 · 보주 광장", detail: "작은 갤러리와 상점이 이어지는 골목을 지나 파리에서 가장 오래된 계획 광장 중 하나를 만납니다." }
      ],
      food: { name: "Du Pain et des Idées · 10구", detail: "버터 향이 진한 페이스트리와 사워도우로 알려진 동네 베이커리예요. 이른 시간에 들르고 휴무일·영업시간은 방문 전 확인하세요." },
      swim: { name: "Bassin de la Villette · 여름 시즌", detail: "여름철 운영되는 Paris Plages의 지정 수영 구역을 확인해 보세요. 운영 기간과 수질·입장 조건은 매해 달라질 수 있어요.", safety: "운영 기간·현장 안전요원 안내 확인" },
      transit: "Métro 5·8·9호선 République역. Navigo Easy에 10회권을 충전하면 편리해요."
    },
    {
      id: "versailles", countryId: "france", number: "02", title: "베르사유 정원 느린 산책", location: "Versailles · 1 day", duration: "하루", distance: "6.2 km",
      coordinates: [[48.8049, 2.1204], [48.8065, 2.1050], [48.8080, 2.0950], [48.809, 2.08], [48.805, 2.075]],
      stops: ["궁전 정원", "라토나 분수", "대운하", "트리아농"],
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "산책길과 푸른 자연이 어우러진 유럽 풍경", note: "정원은 생각보다 넓어요. 궁전 내부보다 바깥 산책에 시간을 넉넉히 남겨두세요.",
      description: "궁전의 화려한 내부를 지나 라토나 분수와 대운하, 트리아농의 숲길로 이어지는 정원 중심 코스입니다. 입장권 종류와 정원 행사 일정에 따라 동선이 달라질 수 있으니 하루를 넉넉히 비워두세요.",
      highlights: [
        { name: "궁전 정원 · 라토나 분수", detail: "정원의 중심축을 따라 걷다 보면 신화 장면을 담은 분수와 정교한 조경을 만납니다." },
        { name: "대운하", detail: "긴 수면과 정원 풍경이 시원하게 열리는 산책 구간. 그늘이 적은 편이라 물과 모자를 준비하세요." },
        { name: "그랑 트리아농", detail: "궁전보다 한적한 정원과 별궁을 둘러볼 수 있어요. 운영 구역과 별도 입장 조건을 미리 확인하세요." }
      ],
      food: { name: "La Flottille · 대운하 옆", detail: "대운하 전망을 보며 식사할 수 있는 정원 내 레스토랑입니다. 좌석과 운영 시간이 계절에 따라 달라질 수 있어 예약·영업 여부를 확인하세요." },
      swim: { name: "정원 산책 코스에는 수영 장소 없음", detail: "대운하와 분수는 관람 공간이며 수영 장소가 아닙니다. 수영을 원하면 베르사유의 공식 실내 수영장 운영 정보를 따로 확인하세요.", safety: "연못·분수 입수 금지 안내 준수" },
      transit: "RER C Versailles Château–Rive Gauche역에서 도보 약 10분. 파업·공사 일정은 출발 전 확인하세요."
    },
    {
      id: "lyon", countryId: "france", number: "03", title: "리옹, 두 강 사이의 오래된 길", location: "Lyon · 2 days", duration: "2일", distance: "7.1 km",
      coordinates: [[45.764, 4.835], [45.762, 4.827], [45.758, 4.822], [45.755, 4.832], [45.760, 4.840]],
      stops: ["벨쿠르 광장", "생장 대성당", "푸르비에르 언덕", "손 강변"],
      image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "리옹의 강과 도시 풍경", note: "푸르비에르 언덕은 푸니쿨라로 오르고, 내려올 때는 골목길을 걸어보세요.",
      description: "손강과 론강 사이의 프레스킬에서 시작해 구시가지의 트라불과 푸르비에르 언덕을 둘러보는 코스입니다. 언덕 구간은 가파르지만, 전망대에서 붉은 지붕과 두 강의 흐름을 한눈에 볼 수 있어요.",
      highlights: [
        { name: "벨쿠르 광장", detail: "프레스킬 중심의 넓은 광장. 양쪽 강변과 구시가지로 이동하기 좋은 출발점입니다." },
        { name: "비외 리옹 · 생장 대성당", detail: "르네상스 시대 건물 사이 골목과 건물 안쪽 통로인 트라불을 둘러보세요." },
        { name: "푸르비에르 전망대", detail: "언덕 위 대성당 주변에서 리옹의 지붕과 두 강을 내려다볼 수 있습니다." }
      ],
      food: { name: "Café des Fédérations · 리옹식 부숑", detail: "퀘넬과 소시송 등 리옹 전통 가정식을 맛볼 수 있는 부숑 스타일 식당입니다. 식사 시간에는 예약을 권해요." },
      swim: { name: "Centre Nautique Tony Bertrand", detail: "론강변의 야외 수영 시설로, 계절에 따라 운영 구역과 시간이 달라집니다. 강 자체가 아닌 지정된 수영장 시설을 이용하세요.", safety: "운영 시즌·수질·입장 규정 확인" },
      transit: "TCL 교통권은 메트로·트램·버스 공용. Fourvière 푸니쿨라는 Vieux Lyon역에서 환승해요."
    },
    {
      id: "hanoi", countryId: "vietnam", number: "04", title: "하노이, 호수와 골목의 아침", location: "Hanoi · 2 days", duration: "2일", distance: "5.8 km",
      coordinates: [[21.035, 105.834], [21.031, 105.850], [21.025, 105.852], [21.028, 105.840], [21.032, 105.835]],
      stops: ["호안끼엠 호수", "구시가지", "동쑤언 시장", "기찻길 골목"],
      image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "하노이 호안끼엠 호수 주변의 도시 풍경", note: "호숫가 산책은 이른 아침이 가장 좋아요. 횡단보도에서는 일정한 속도로 건너세요.",
      description: "호안끼엠 호숫가의 아침 운동 풍경에서 시작해 구시가지의 좁은 골목과 시장을 지나갑니다. 오토바이와 보행자가 함께 움직이는 도시의 리듬을 살피며, 길을 건널 때는 갑자기 멈추거나 뛰지 말고 일정한 속도를 유지하세요.",
      highlights: [
        { name: "호안끼엠 호수", detail: "이른 아침에는 현지 주민의 운동과 호수 주변의 일상을 볼 수 있어요. 응옥썬 사당은 운영 시간을 확인하세요." },
        { name: "구시가지 골목", detail: "거리마다 오래된 상점과 길거리 음식이 이어집니다. 보도 위 오토바이와 노점에 주의하며 걸어요." },
        { name: "동쑤언 시장", detail: "현지 생활용품과 식재료를 살펴볼 수 있는 실내 시장. 혼잡한 시간에는 소지품을 잘 챙기세요." }
      ],
      food: { name: "Phở Gia Truyền Bát Đàn · 구시가지", detail: "하노이식 소고기 쌀국수로 유명한 식당입니다. 식사 시간에는 줄이 생길 수 있고, 재료나 운영 시간은 현장에서 확인하세요." },
      swim: { name: "도심 도보 코스에는 공개 수영장 없음", detail: "호안끼엠 호수는 수영 장소가 아닙니다. 수영은 숙소나 정식 수영 시설의 운영 여부를 확인해 이용하세요.", safety: "호수·도심 운하 입수 금지" },
      transit: "도심은 도보와 앱 호출 차량 조합이 편해요. 버스는 현금 잔돈을 준비하고 노선을 미리 확인하세요."
    },
    {
      id: "ninh-binh", countryId: "vietnam", number: "05", title: "닌빈, 논 사이로 흐르는 강", location: "Ninh Bình · 1 day", duration: "하루", distance: "4.5 km",
      coordinates: [[20.253, 105.919], [20.235, 105.933], [20.222, 105.941], [20.236, 105.925]],
      stops: ["짱안 선착장", "석회암 카르스트", "논길", "호아루"],
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "베트남 북부의 푸른 산과 강", note: "보트 투어와 자전거를 함께 계획하면 풍경을 여러 속도로 만날 수 있어요.",
      description: "석회암 봉우리 사이를 배로 지나고, 논과 마을길을 자전거로 잇는 자연 중심의 하루 코스입니다. 보트 선착장과 유적지가 떨어져 있으니 현지 이동 시간을 여유 있게 잡으세요.",
      highlights: [
        { name: "짱안 보트 선착장", detail: "현지 뱃사공과 함께 동굴과 석회암 절벽 사이를 지나는 보트 코스입니다. 출발 전 코스 길이와 대기 시간을 확인하세요." },
        { name: "논길과 카르스트 풍경", detail: "자전거로 논과 마을 사이를 천천히 둘러보세요. 한낮에는 햇빛이 강해 물과 자외선 차단이 필요합니다." },
        { name: "호아루 고도", detail: "옛 수도의 사당과 유적을 둘러볼 수 있습니다. 짱안과는 이동 거리가 있어 교통편을 미리 정하는 편이 좋아요." }
      ],
      food: { name: "닌빈 산양고기 · 껌짜이", detail: "산양고기 요리와 바삭하게 구운 쌀밥 껌짜이가 이 지역의 대표 음식입니다. 관광지 식당은 메뉴와 가격을 먼저 확인하세요." },
      swim: { name: "자연 수역 수영은 추천하지 않음", detail: "보트 운항 수역과 카르스트 지형은 수영 장소로 관리되지 않을 수 있습니다. 수영은 안전요원과 시설을 갖춘 숙소·공식 시설을 이용하세요.", safety: "보트 수역·동굴 주변 입수 금지" },
      transit: "하노이에서 기차 또는 리무진 버스로 이동. 현지에서는 자전거·택시를 이용하고 돌아오는 편을 예약하세요."
    },
    {
      id: "hoi-an", countryId: "vietnam", number: "06", title: "호이안, 강가의 등불 저녁", location: "Hội An · 2 days", duration: "2일", distance: "6.3 km",
      coordinates: [[15.879, 108.327], [15.877, 108.329], [15.874, 108.326], [15.872, 108.333], [15.876, 108.338]],
      stops: ["내원교", "투본 강", "안방 해변", "야시장"],
      image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "베트남 호이안의 강변 풍경", note: "구시가지는 해 질 무렵 걷고, 한낮에는 그늘이 있는 카페에서 쉬어가요.",
      description: "노란 벽의 구시가지 골목에서 투본강변을 거쳐 안방 해변까지 이어지는 코스입니다. 낮에는 유산 건축을 둘러보고, 해 질 무렵 강가를 산책한 뒤 해변에서 쉬어가세요.",
      highlights: [
        { name: "내원교와 구시가지", detail: "일본식 지붕 다리와 오래된 상가주택이 모여 있는 호이안의 대표 보행 구역입니다. 유료 관람 구역은 통합 티켓을 확인하세요." },
        { name: "투본강", detail: "강변에서 목선과 오래된 집들이 이어지는 풍경을 볼 수 있어요. 배를 탈 때는 정식 선착장과 안전 장비를 확인하세요." },
        { name: "안방 해변", detail: "구시가지에서 자전거·택시로 이동 가능한 해변입니다. 파도와 깃발, 구조요원의 현장 안내를 먼저 확인하세요." }
      ],
      food: { name: "Cao lầu · Bánh mì Phượng", detail: "호이안식 면 요리 까오러우와 바인미를 맛보세요. 유명 가게는 대기 시간이 길 수 있어 주변의 현지 식당도 함께 살펴보면 좋아요." },
      swim: { name: "안방 해변", detail: "해수욕을 계획하기 좋은 해변 구간입니다. 우기·강풍·높은 파도 때는 입수가 제한될 수 있으니 깃발과 구조요원의 지시를 따르세요.", safety: "당일 파도·깃발·구조요원 안내 확인" },
      transit: "다낭 공항에서 셔틀·택시로 약 45분. 구시가지 내 이동은 도보나 자전거가 편리해요."
    },
    {
      id: "phnom-penh-riverside", countryId: "cambodia", number: "11", title: "프놈펜, 강변과 왕궁 산책", location: "Phnom Penh · 1 day", duration: "하루", distance: "5.4 km",
      coordinates: [[11.565, 104.931], [11.563, 104.933], [11.558, 104.937], [11.552, 104.934], [11.557, 104.928]],
      stops: ["왕궁 주변", "국립박물관", "왓 우날롬", "메콩강변"],
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "강과 도심 풍경이 어우러진 동남아 도시", note: "낮에는 햇빛과 더위가 강하니 실내 관람을 섞고 강변은 해 질 무렵 걸어보세요.",
      description: "왕궁 주변의 크메르 건축과 박물관을 둘러본 뒤 톤레삽강·메콩강 합류부의 강변으로 이어지는 도심 코스입니다. 공식 개방 구역과 현장 복장 규정을 확인하세요.",
      highlights: [
        { name: "왕궁 주변", detail: "은빛 지붕과 사원 건축을 볼 수 있는 프놈펜의 대표 명소입니다. 내부 관람 가능 구역과 복장 규정을 확인하세요." },
        { name: "국립박물관", detail: "크메르 조각과 역사 유물을 관람할 수 있습니다. 야외 산책과 함께 더위를 피하기 좋아요." },
        { name: "메콩강변 산책로", detail: "해 질 무렵 강을 따라 걷기 좋지만 차량 진입과 인파가 있어 보행 구역을 이용하세요." }
      ],
      food: { name: "Khmer Surin · 크메르 요리", detail: "아목 생선 요리 등 현지 음식을 맛볼 수 있습니다. 알레르기와 맵기, 결제 수단을 주문 전에 확인하세요." },
      swim: { name: "강변은 수영 장소가 아님", detail: "메콩강은 유속·수질·선박 통행 위험이 있어 입수를 권하지 않습니다. 수영은 안전요원과 시설이 있는 호텔 수영장을 이용하세요.", safety: "강·운하 입수 금지" },
      transit: "도심은 도보와 앱 호출 툭툭을 조합하세요. 차량 번호와 목적지를 탑승 전에 확인하고 야간에는 공식 호출 서비스를 이용하세요."
    },
    {
      id: "siem-reap-temples", countryId: "cambodia", number: "12", title: "시엠립, 앙코르의 새벽 풍경", location: "Siem Reap · 2 days", duration: "2일", distance: "6.8 km",
      coordinates: [[13.412, 103.867], [13.414, 103.884], [13.435, 103.861], [13.447, 103.897], [13.412, 103.867]],
      stops: ["앙코르와트", "앙코르톰", "바이욘", "타프롬"],
      image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "캄보디아 앙코르 유적의 석조 사원 풍경", note: "유적지는 넓고 햇볕이 강해요. 공식 티켓과 운전기사를 이용해 새벽부터 이동하세요.",
      description: "앙코르와트의 새벽빛에서 시작해 앙코르톰과 바이욘, 타프롬의 숲과 석조 유적을 둘러보는 유적 중심 코스입니다. 각 유적 사이 거리가 있어 이동 차량과 입장권을 미리 준비하세요.",
      highlights: [
        { name: "앙코르와트", detail: "해가 뜨기 전부터 관람객이 모입니다. 공식 티켓 판매처와 입장 규정을 확인하고 충분한 물을 준비하세요." },
        { name: "앙코르톰 · 바이욘", detail: "성문과 사면상으로 유명한 유적 단지. 지정된 통로를 이용하고 석조물에 올라가지 마세요." },
        { name: "타프롬", detail: "나무뿌리와 사원이 어우러진 유적으로, 보존을 위해 출입 제한선을 지켜야 합니다." }
      ],
      food: { name: "Khmer Kitchen · 올드마켓", detail: "아목과 록락 등 현지 메뉴를 맛볼 수 있는 시내 식당입니다. 유적지 안 식당은 메뉴 가격을 주문 전에 확인하세요." },
      swim: { name: "숙소의 지정 수영장", detail: "사원 연못과 저수지는 관람·수자원 공간이며 수영 장소가 아닙니다. 더위를 식히려면 숙소의 운영 중인 수영장을 이용하세요.", safety: "사원 수역 입수 금지 · 폭염 시간대 휴식" },
      transit: "유적지 간 이동은 등록된 툭툭·차량을 하루 단위로 예약하면 편리합니다. 운행 범위·대기 시간·요금을 출발 전에 합의하세요."
    },
    {
      id: "tokyo", countryId: "japan", number: "07", title: "도쿄의 작은 정원과 골목", location: "Tokyo · 2 days", duration: "2일", distance: "7.6 km",
      coordinates: [[35.671, 139.765], [35.667, 139.760], [35.665, 139.750], [35.672, 139.744], [35.679, 139.746]],
      stops: ["긴자", "하마리큐 정원", "쓰키지", "도쿄역"],
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "도쿄의 도시 풍경", note: "고층 빌딩 사이 정원에서 잠시 속도를 늦추면 도쿄의 다른 표정이 보여요.",
      description: "긴자의 빽빽한 상점가에서 출발해 하마리큐 정원의 연못과 해안 풍경을 지나 쓰키지 시장 골목으로 걷습니다. 고층 빌딩과 에도 시대 정원이 맞닿는 도쿄의 대비를 느껴보세요.",
      highlights: [
        { name: "긴자", detail: "백화점과 작은 상점, 건축물이 모인 쇼핑 지구입니다. 주말 보행자 천국 운영 여부를 확인하면 걷기 편해요." },
        { name: "하마리큐 정원", detail: "도쿄만과 연결된 물길을 활용한 에도 시대 정원입니다. 입장료와 폐원 시간을 확인하고 천천히 둘러보세요." },
        { name: "쓰키지 장외시장", detail: "초밥과 해산물, 간식 가게가 이어집니다. 이른 시간에 방문하고 시장 통로에서는 보행 흐름을 따라주세요." }
      ],
      food: { name: "쓰키지 장외시장 · 초밥과 계란말이", detail: "해산물 덮밥과 갓 구운 다마고야키 등 간단한 먹거리를 골라 즐겨보세요. 가게별 영업시간은 다르고 재료 소진 시 일찍 닫을 수 있습니다." },
      swim: { name: "도보 코스에는 해수욕장 없음", detail: "하마리큐·쓰키지 주변 바닷물은 수영 구역이 아닙니다. 수영은 도쿄의 정식 실내·야외 풀을 이용하고 운영 일정을 확인하세요.", safety: "항만·운하·정원 수역 입수 금지" },
      transit: "Suica·PASMO 등 교통 IC카드 하나면 충분해요. 출퇴근 시간 혼잡 구간은 여유 있게 이동하세요."
    },
    {
      id: "kyoto", countryId: "japan", number: "08", title: "교토 동쪽, 물과 돌의 길", location: "Kyoto · 1 day", duration: "하루", distance: "5.2 km",
      coordinates: [[35.011, 135.768], [35.013, 135.782], [35.006, 135.787], [35.000, 135.780], [35.004, 135.773]],
      stops: ["난젠지", "철학의 길", "은각사", "기온"],
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "교토의 전통 거리", note: "사람이 붐비기 전 이른 오전에 출발하면 물가의 고요함을 오래 누릴 수 있어요.",
      description: "난젠지의 넓은 경내에서 시작해 철학의 길을 따라 은각사까지 걷고, 저녁에는 기온의 골목을 둘러봅니다. 사찰과 주거지가 가까운 곳이므로 조용히 걷고 사유지 출입을 삼가 주세요.",
      highlights: [
        { name: "난젠지 수로각", detail: "붉은 벽돌 아치와 사찰 정원이 함께 있는 교토 동쪽의 대표 산책 지점입니다." },
        { name: "철학의 길 · 은각사", detail: "운하 옆 벚나무 길을 따라 은각사까지 이어집니다. 사찰 내부 관람은 마감 시간 전에 도착하세요." },
        { name: "기온", detail: "목조 마치야와 좁은 골목이 남아 있는 지역입니다. 주민과 사유 공간을 존중하고 촬영 제한 표지를 확인하세요." }
      ],
      food: { name: "준세이 · 난젠지 유도후", detail: "난젠지 인근에서 교토식 두부 요리 유도후를 맛볼 수 있는 식당입니다. 점심 시간대는 예약 가능 여부와 대기 시간을 확인하세요." },
      swim: { name: "도보 코스에는 수영 장소 없음", detail: "철학의 길 수로와 사찰 연못은 수영 구역이 아닙니다. 수영은 교토의 공공 수영장 등 지정 시설을 이용하세요.", safety: "수로·사찰 연못 입수 금지" },
      transit: "시내버스는 혼잡할 수 있어요. 지하철과 도보를 섞고, IC카드로 탑승하면 편리합니다."
    },
    {
      id: "florence", countryId: "italy", number: "09", title: "피렌체, 아르노 강의 저녁빛", location: "Florence · 1 day", duration: "하루", distance: "4.8 km",
      coordinates: [[43.773, 11.256], [43.769, 11.255], [43.765, 11.249], [43.767, 11.242], [43.771, 11.247]],
      stops: ["두오모", "베키오 다리", "올트라르노", "미켈란젤로 광장"],
      image: "https://images.unsplash.com/photo-1543429257-7eb5d2a0a6c1?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "피렌체의 아르노 강과 다리", note: "강 건너편에서 도시를 바라보는 시간까지 포함해 천천히 걸어보세요.",
      description: "두오모의 대리석 외관에서 시작해 베키오 다리를 건너 올트라르노의 공방 골목을 지나 미켈란젤로 광원의 노을로 마무리하는 코스입니다. 광장과 미술관 주변은 붐비므로 소지품을 주의하세요.",
      highlights: [
        { name: "두오모 광장", detail: "대성당과 종탑, 세례당이 모여 있는 피렌체의 중심입니다. 내부 입장과 돔 등반은 사전 예약이 필요할 수 있어요." },
        { name: "베키오 다리 · 올트라르노", detail: "아르노강 위 다리와 강 건너 장인 공방이 이어집니다. 작은 작업실은 영업시간을 확인하고 둘러보세요." },
        { name: "미켈란젤로 광장", detail: "도시 전체를 내려다볼 수 있는 전망 지점입니다. 해 질 무렵에는 귀가 교통편까지 고려해 이동하세요." }
      ],
      food: { name: "All’Antico Vinaio · 파니니", detail: "갓 구운 포카치아에 지역 식재료를 채운 파니니로 알려진 곳입니다. 대기 줄이 길 수 있으니 주변의 다른 샌드위치 가게도 함께 살펴보세요." },
      swim: { name: "Piscina Costoli · 지정 수영장", detail: "아르노강은 수영 장소가 아닙니다. 여름철 야외 수영을 원하면 시내 공공 수영장의 시즌 운영과 입장 조건을 확인하세요.", safety: "강 입수 금지 · 수영장 운영일 확인" },
      transit: "역사 지구는 도보로 둘러보기 좋아요. 버스는 탑승 전 승차권을 구입·개찰해야 합니다."
    },
    {
      id: "bologna", countryId: "italy", number: "10", title: "볼로냐의 아케이드 산책", location: "Bologna · 1 day", duration: "하루", distance: "5.1 km",
      coordinates: [[44.494, 11.342], [44.493, 11.347], [44.489, 11.346], [44.484, 11.338], [44.489, 11.333]],
      stops: ["마조레 광장", "콰드릴라테로", "산 루카 회랑", "대학 지구"],
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "이탈리아 구시가지의 따뜻한 풍경", note: "아케이드 아래를 따라 걸으면 날씨와 상관없이 도시의 리듬을 느낄 수 있어요.",
      description: "마조레 광장과 중세 탑, 콰드릴라테로 시장 골목을 잇는 볼로냐 구시가지 산책입니다. 긴 회랑 아래로 이어지는 길 덕분에 햇볕이나 가벼운 비를 피하며 걷기 좋아요.",
      highlights: [
        { name: "마조레 광장", detail: "산 페트로니오 대성당과 시청 건물이 둘러싼 도시의 중심 광장입니다." },
        { name: "콰드릴라테로 시장", detail: "치즈·햄·신선 식재료 가게가 모인 오래된 시장 지구. 점심 전후로 활기찬 분위기를 느낄 수 있어요." },
        { name: "대학 지구 · 아케이드", detail: "유럽에서 오래된 대학가와 도시 전역의 회랑길을 따라 걷습니다. 유네스코 회랑 구간의 표지와 보행 예절을 확인하세요." }
      ],
      food: { name: "Trattoria Anna Maria · 볼로냐 파스타", detail: "탈리아텔레 알 라구 등 에밀리아로마냐식 파스타를 맛볼 수 있는 전통 식당입니다. 저녁에는 예약을 권하고, 메뉴와 영업시간을 확인하세요." },
      swim: { name: "도보 코스에는 수영 장소 없음", detail: "구시가지에는 수영 공간이 없습니다. 여름철 수영은 Piscina Sterlino 등 지정 시설의 운영 일정과 이용 조건을 확인하세요.", safety: "분수·도시 수로 입수 금지" },
      transit: "중심부는 도보가 가장 좋아요. 산 루카행 열차는 Piazza Maggiore 인근 정류장에서 출발해요."
    },
    {
      id: "madrid-art-walk", countryId: "spain", number: "13", title: "마드리드, 미술관에서 레티로까지", location: "Madrid · 1 day", duration: "하루", distance: "5.6 km",
      coordinates: [[40.4138, -3.6921], [40.4163, -3.7035], [40.4153, -3.683], [40.4194, -3.6883]],
      stops: ["프라도 미술관", "레티로 공원", "푸에르타 델 솔", "마요르 광장"],
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "마드리드의 역사적인 거리와 건축 풍경", note: "미술관 관람 시간을 정하고 공원과 광장은 저녁 산책으로 이어보세요.",
      transit: "Atocha역에서 도보로 미술관 지구에 접근할 수 있어요. 시내는 메트로·도보 조합이 편리하고 파업 공지를 확인하세요."
    },
    {
      id: "barcelona-modernista", countryId: "spain", number: "14", title: "바르셀로나, 가우디와 바닷바람", location: "Barcelona · 1 day", duration: "하루", distance: "6.1 km",
      coordinates: [[41.4036, 2.1744], [41.3917, 2.1649], [41.3851, 2.1734], [41.3763, 2.1925]],
      stops: ["사그라다 파밀리아", "그라시아 거리", "고딕 지구", "바르셀로네타"],
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "바르셀로나의 건축과 지중해 도시 풍경", note: "사그라다 파밀리아와 구엘 공원은 입장 시간을 미리 예약하세요.",
      transit: "T-casual 교통권과 메트로가 편리합니다. 해변·람블라스의 혼잡 구간에서는 가방을 몸 앞으로 메세요."
    },
    {
      id: "lisbon-alfama", countryId: "portugal", number: "15", title: "리스본, 알파마 언덕과 전망대", location: "Lisbon · 1 day", duration: "하루", distance: "5.2 km",
      coordinates: [[38.7139, -9.1394], [38.7115, -9.1335], [38.7108, -9.1295], [38.7075, -9.1365]],
      stops: ["코메르시우 광장", "리스본 대성당", "알파마", "산타 루치아 전망대"],
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "리스본 구시가지의 지붕과 강 풍경", note: "돌길과 언덕이 많아 미끄럼 방지 신발을 신고 트램 운행 상황을 확인하세요.",
      transit: "Viva Viagem 카드로 메트로·트램을 이용할 수 있어요. 혼잡한 28번 트램에서는 소지품을 주의하세요."
    },
    {
      id: "porto-ribeira", countryId: "portugal", number: "16", title: "포르투, 도루강과 다리의 노을", location: "Porto · 1 day", duration: "하루", distance: "4.7 km",
      coordinates: [[41.1456, -8.6109], [41.1406, -8.6111], [41.1399, -8.6091], [41.1379, -8.6152]],
      stops: ["상벤투역", "렐루 서점", "리베이라", "동 루이스 1세 다리"],
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "포르투의 도루강과 다리 풍경", note: "강변에서 다리 위까지 고저 차가 큽니다. 해 질 무렵 귀가 교통편을 확인하세요.",
      transit: "Andante 교통카드로 메트로·버스를 이용하세요. 구시가지 언덕은 도보가 많아 편한 신발이 좋아요."
    },
    {
      id: "beijing-imperial", countryId: "china", number: "17", title: "베이징, 황성의 중심축", location: "Beijing · 1 day", duration: "하루", distance: "5.9 km",
      coordinates: [[39.9163, 116.3972], [39.9042, 116.3975], [39.8912, 116.4074], [39.8822, 116.4066]],
      stops: ["자금성", "천안문 광장 주변", "경산공원", "천단공원"],
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "중국의 성곽과 역사 유적 풍경", note: "자금성과 천안문 주변은 사전 예약·신분증 확인을 준비하고 운영 규정을 따르세요.",
      transit: "현지 지도·결제 앱과 교통카드를 미리 준비하세요. 주요 관광지는 예약 및 보안 검색으로 시간이 걸릴 수 있습니다."
    },
    {
      id: "shanghai-bund", countryId: "china", number: "18", title: "상하이, 와이탄과 옛 골목", location: "Shanghai · 1 day", duration: "하루", distance: "5.1 km",
      coordinates: [[31.2397, 121.4900], [31.2304, 121.4737], [31.2272, 121.4897], [31.2400, 121.4920]],
      stops: ["와이탄", "난징동루", "예원", "신천지"],
      image: "https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "상하이의 강변 스카이라인과 도시 건축", note: "황푸강 야경은 해 질 무렵부터 붐빕니다. 예원 입장 시간과 현지 결제 수단을 확인하세요.",
      transit: "메트로와 교통카드·모바일 결제를 준비하세요. 택시는 공식 승강장이나 등록 앱을 이용하세요."
    },
    {
      id: "budapest-danube", countryId: "hungary", number: "19", title: "부다페스트, 다뉴브의 두 얼굴", location: "Budapest · 1 day", duration: "하루", distance: "6.0 km",
      coordinates: [[47.4979, 19.0402], [47.5009, 19.0456], [47.5020, 19.0399], [47.4985, 19.0369]],
      stops: ["세체니 다리", "부다 성", "어부의 요새", "국회의사당 강변"],
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "부다페스트 다뉴브강과 국회의사당 야경", note: "부다 언덕은 오르막이 많습니다. 케이블카·버스 운행과 마지막 귀가편을 확인하세요.",
      transit: "24·72시간 교통권과 공식 BKK 앱을 활용하세요. 비공식 환전·택시 호객을 피하세요."
    },
    {
      id: "budapest-thermal", countryId: "hungary", number: "20", title: "부다페스트, 온천과 시장 거리", location: "Budapest · 1 day", duration: "하루", distance: "5.4 km",
      coordinates: [[47.5009, 19.0814], [47.4979, 19.0756], [47.4925, 19.0624], [47.4975, 19.0544]],
      stops: ["세체니 온천", "영웅 광장", "안드라시 거리", "중앙시장"],
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "부다페스트의 온천 건축과 도시 풍경", note: "온천은 수영복·수건·입장 예약 조건을 확인하고 귀중품 보관함을 이용하세요.",
      transit: "메트로 M1과 트램으로 이동하기 좋습니다. 온천 운영·입장 요금은 방문 전 확인하세요."
    },
    {
      id: "vienna-ring", countryId: "austria", number: "21", title: "빈, 링슈트라세와 궁전 정원", location: "Vienna · 1 day", duration: "하루", distance: "6.2 km",
      coordinates: [[48.2082, 16.3738], [48.2030, 16.3688], [48.1985, 16.3719], [48.1845, 16.3122]],
      stops: ["슈테판 대성당", "국립 오페라", "나슈마르크트", "쇤브룬 궁전"],
      image: "https://images.unsplash.com/photo-1516550893923-42082b6c24d7?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "빈의 궁전과 역사적인 도시 풍경", note: "쇤브룬 궁전과 정원은 구시가지에서 떨어져 있어 이동 시간을 넉넉히 잡으세요.",
      transit: "Wiener Linien 24·48·72시간권이 편리합니다. 미술관·궁전 입장권은 공식 사이트에서 확인하세요."
    },
    {
      id: "salzburg-old-town", countryId: "austria", number: "22", title: "잘츠부르크, 구시가지와 성채", location: "Salzburg · 1 day", duration: "하루", distance: "4.3 km",
      coordinates: [[47.8000, 13.0444], [47.7985, 13.0477], [47.7955, 13.0467], [47.7945, 13.0436]],
      stops: ["미라벨 정원", "게트라이데 거리", "모차르트 생가", "호엔잘츠부르크 성채"],
      image: "https://images.unsplash.com/photo-1516550893923-42082b6c24d7?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "잘츠부르크의 구시가지와 알프스 풍경", note: "성채 언덕은 오르막이 있어 푸니쿨라를 이용하면 편리합니다.",
      transit: "구시가지는 도보 이동이 쉽고, Salzburg Card에 대중교통·관광지 혜택이 포함되는지 확인하세요."
    },
    {
      id: "helsinki-harbour", countryId: "finland", number: "23", title: "헬싱키, 항구와 디자인 지구", location: "Helsinki · 1 day", duration: "하루", distance: "5.0 km",
      coordinates: [[60.1699, 24.9384], [60.1675, 24.9522], [60.1608, 24.9565], [60.1638, 24.9417]],
      stops: ["원로원 광장", "마켓 광장", "우스펜스키 성당", "디자인 지구"],
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "헬싱키 항구와 발트해 풍경", note: "섬·항구 페리는 날씨 영향을 받습니다. 바람이 센 날에는 방풍 옷을 준비하세요.",
      transit: "HSL 앱과 AB 구역권으로 트램·버스·페리를 이용하세요. 공항열차는 중앙역에 연결됩니다."
    },
    {
      id: "rovaniemi-arctic", countryId: "finland", number: "24", title: "로바니에미, 북극권의 밤하늘", location: "Rovaniemi · 1 day", duration: "하루", distance: "4.0 km",
      coordinates: [[66.5039, 25.7294], [66.5437, 25.8470], [66.5010, 25.7200], [66.4980, 25.7240]],
      stops: ["로바니에미 강변", "아르크티쿰", "산타클로스 빌리지", "북극권 표식"],
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "핀란드 라플란드의 설원과 북극권 하늘", note: "오로라는 자연 현상이라 관측을 보장할 수 없습니다. 늦은 밤에는 투어·귀가 교통을 미리 예약하세요.",
      transit: "공항·산타클로스 빌리지는 시내버스 또는 예약 셔틀로 이동합니다. 겨울 도로·일조 시간을 확인하세요."
    },
    {
      id: "tallinn-old-town", countryId: "estonia", number: "25", title: "탈린, 성벽 안의 중세 골목", location: "Tallinn · 1 day", duration: "하루", distance: "4.1 km",
      coordinates: [[59.4370, 24.7536], [59.4380, 24.7450], [59.4340, 24.7400], [59.4390, 24.7470]],
      stops: ["라에코야 광장", "톰페아 언덕", "알렉산더 네프스키 성당", "카드리오르그"],
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "탈린 구시가지의 성벽과 붉은 지붕 풍경", note: "구시가지의 돌길은 눈·비에 미끄러울 수 있어 밑창이 안정적인 신발을 신으세요.",
      transit: "Tallinn Card와 트램을 활용하세요. 항구·Balti Jaam 역은 구시가지에서 도보로 연결됩니다."
    },
    {
      id: "tallinn-seaside", countryId: "estonia", number: "26", title: "탈린, 카드리오르그와 발트해", location: "Tallinn · 1 day", duration: "하루", distance: "5.8 km",
      coordinates: [[59.4380, 24.7900], [59.4410, 24.7980], [59.4490, 24.8010], [59.4500, 24.8200]],
      stops: ["카드리오르그 공원", "카드리오르그 미술관", "피리타 해변 산책로"],
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "발트해와 탈린 해안 산책로 풍경", note: "바닷바람이 강할 수 있으니 계절에 맞는 겉옷을 챙기고 해안 폐쇄 공지를 확인하세요.",
      transit: "시내 트램으로 카드리오르그까지 이동한 뒤 공원과 해안 구간은 도보로 둘러보세요."
    },
    {
      id: "berlin-history", countryId: "germany", number: "27", title: "베를린, 박물관섬과 브란덴부르크", location: "Berlin · 1 day", duration: "하루", distance: "6.0 km",
      coordinates: [[52.5163, 13.3777], [52.5170, 13.3890], [52.5169, 13.4010], [52.5194, 13.4011]],
      stops: ["브란덴부르크 문", "운터덴린덴", "박물관섬", "베를린 대성당"],
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "베를린의 역사적인 광장과 도시 건축", note: "박물관섬 내부 관람은 사전 시간 예약 여부를 확인하세요.",
      transit: "AB 구역권으로 U-Bahn·S-Bahn·트램을 이용하세요. 공사와 파업 시 대체 노선을 확인하세요."
    },
    {
      id: "munich-old-town", countryId: "germany", number: "28", title: "뮌헨, 마리엔광장과 영국정원", location: "Munich · 1 day", duration: "하루", distance: "5.3 km",
      coordinates: [[48.1374, 11.5755], [48.1440, 11.5800], [48.1520, 11.5900], [48.1640, 11.6050]],
      stops: ["마리엔광장", "빅투알리엔 시장", "영국정원", "중국탑 비어가든"],
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "뮌헨의 역사적 도심과 공원 풍경", note: "비어가든은 계절·날씨에 따라 운영이 달라집니다. 행사일에는 대중교통 혼잡을 고려하세요.",
      transit: "MVV 당일권과 U-Bahn·트램이 편리합니다. 중앙역과 시장 주변은 혼잡 시간 소지품에 주의하세요."
    },
    {
      id: "london-thames", countryId: "united-kingdom", number: "29", title: "런던, 템스강과 웨스트민스터", location: "London · 1 day", duration: "하루", distance: "5.7 km",
      coordinates: [[51.4994, -0.1273], [51.5007, -0.1246], [51.5050, -0.1160], [51.5033, -0.1195]],
      stops: ["웨스트민스터 사원", "빅벤", "사우스뱅크", "런던아이"],
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "런던의 템스강과 역사적인 도시 전경", note: "템스강변은 야외 보행이 많습니다. 비·강풍 예보와 야간 귀가 노선을 확인하세요.",
      transit: "Contactless 결제나 Oyster로 이동하세요. 지하철 파업·역 폐쇄 공지를 출발 전에 확인하세요."
    },
    {
      id: "edinburgh-old-town", countryId: "united-kingdom", number: "30", title: "에든버러, 성과 로열마일", location: "Edinburgh · 1 day", duration: "하루", distance: "4.6 km",
      coordinates: [[55.9486, -3.1999], [55.9500, -3.1900], [55.9520, -3.1880], [55.9460, -3.2050]],
      stops: ["에든버러 성", "로열마일", "세인트 자일스 대성당", "그래스마켓"],
      image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "에든버러 성과 구시가지의 스카이라인", note: "성곽 언덕과 돌길이 이어져 편한 신발을 권합니다. 축제 기간에는 입장권을 미리 확인하세요.",
      transit: "구시가지는 도보가 가장 편리합니다. Waverley역과 공항 트램의 운행 공지를 확인하세요."
    },
    {
      id: "amsterdam-canals", countryId: "netherlands", number: "31", title: "암스테르담, 운하와 미술관 지구", location: "Amsterdam · 1 day", duration: "하루", distance: "5.0 km",
      coordinates: [[52.3731, 4.8922], [52.3676, 4.9041], [52.3584, 4.8811], [52.3600, 4.8852]],
      stops: ["담 광장", "운하 지구", "안네 프랑크의 집 주변", "레이크스 미술관"],
      image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "암스테르담 운하와 다리 풍경", note: "자전거 도로에 보행하지 말고, 박물관과 안네 프랑크의 집은 사전 예약하세요.",
      transit: "GVB 일일권으로 트램·메트로를 이용하세요. 중앙역과 운하 지구는 도보로 연결됩니다."
    },
    {
      id: "utrecht-canals", countryId: "netherlands", number: "32", title: "위트레흐트, 돔탑과 오래된 운하", location: "Utrecht · 1 day", duration: "하루", distance: "4.2 km",
      coordinates: [[52.0907, 5.1214], [52.0930, 5.1190], [52.0865, 5.1160], [52.0830, 5.1230]],
      stops: ["돔 광장", "돔탑", "오우데흐라흐트 운하", "운하 창고 카페"],
      image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "네덜란드 운하와 구시가지 산책길", note: "돔탑은 시간 지정 입장 여부를 확인하고 운하 지하 산책로의 수위 안내를 따르세요.",
      transit: "Utrecht Centraal역에서 구시가지까지 도보로 이동할 수 있습니다. 지역 버스는 OV-chipkaart·컨택트리스 결제를 확인하세요."
    },
    {
      id: "reykjavik-harbour", countryId: "iceland", number: "33", title: "레이캬비크, 항구와 해안 산책", location: "Reykjavík · 1 day", duration: "하루", distance: "4.6 km",
      coordinates: [[64.1466, -21.9426], [64.1500, -21.9400], [64.1480, -21.9330], [64.1410, -21.9300]],
      stops: ["하르파 콘서트홀", "올드하버", "선 보이저", "할그림스키르캬"],
      image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "레이캬비크 해안과 북대서양 풍경", note: "해안 바람이 강할 수 있어 방풍 겉옷을 준비하고 북극광은 현지 예보를 확인하세요.",
      transit: "시내 중심은 도보가 편리합니다. 공항·블루라군 이동은 사전 예약 셔틀을 이용하세요."
    },
    {
      id: "iceland-golden-circle", countryId: "iceland", number: "34", title: "골든서클, 간헐천과 폭포", location: "South Iceland · 1 day", duration: "하루", distance: "230 km drive",
      coordinates: [[64.2559, -20.5114], [64.3125, -20.3024], [64.3271, -20.1199], [64.1420, -21.9220]],
      stops: ["싱벨리르", "게이시르", "굴포스", "케리드 분화구"],
      image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "아이슬란드 폭포와 화산 지형 풍경", note: "명소 간 거리가 길고 노면·기상이 급변합니다. 도로 폐쇄와 일몰 시간을 확인하세요.",
      transit: "대중교통만으로 연결하기 어려워 등록 투어나 도로 조건에 맞는 렌터카를 계획하세요."
    },
    {
      id: "zurich-lake", countryId: "switzerland", number: "35", title: "취리히, 구시가지와 호숫가", location: "Zürich · 1 day", duration: "하루", distance: "5.1 km",
      coordinates: [[47.3769, 8.5417], [47.3690, 8.5450], [47.3640, 8.5480], [47.3710, 8.5360]],
      stops: ["중앙역", "린덴호프", "프라우뮌스터", "취리히 호수 산책로"],
      image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "취리히 구시가지와 호수 풍경", note: "호숫가 유람선은 계절·시간표가 다르므로 승선 전 운항 정보를 확인하세요.",
      transit: "ZVV 구역권으로 트램·버스·기차를 이용하세요. 공항은 S-Bahn으로 중앙역과 연결됩니다."
    },
    {
      id: "lucerne-lake", countryId: "switzerland", number: "36", title: "루체른, 카펠교와 호수 전망", location: "Lucerne · 1 day", duration: "하루", distance: "4.4 km",
      coordinates: [[47.0502, 8.3093], [47.0520, 8.3050], [47.0580, 8.3100], [47.0510, 8.3150]],
      stops: ["카펠교", "무제크 성벽", "빈사의 사자상", "루체른 호수 선착장"],
      image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "루체른 호수와 산악 풍경", note: "산악 전망대와 유람선은 날씨에 따라 운행이 달라집니다. 시간표를 확인하세요.",
      transit: "루체른역에서 구시가지까지 도보 이동이 편합니다. 호수 유람선은 SBB 시간표와 함께 확인하세요."
    },
    {
      id: "ulaanbaatar-city", countryId: "mongolia", number: "37", title: "울란바토르, 사찰과 도시 전망", location: "Ulaanbaatar · 1 day", duration: "하루", distance: "5.0 km",
      coordinates: [[47.9184, 106.9177], [47.9210, 106.9050], [47.9070, 106.8950], [47.9050, 106.9250]],
      stops: ["간단 사원", "수흐바타르 광장", "국립역사박물관", "자이승 기념관"],
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "몽골의 넓은 초원과 도시 주변 풍경", note: "시내 교통 정체가 심할 수 있어 이동 시간을 넉넉히 잡고 저녁에는 공식 호출 차량을 이용하세요.",
      transit: "도심은 택시·호출 차량이 편리합니다. 외곽 관광은 검증된 운전기사와 왕복 일정을 사전 합의하세요."
    },
    {
      id: "terelj-steppe", countryId: "mongolia", number: "38", title: "테렐지, 거북바위와 초원", location: "Terelj National Park · 1 day", duration: "하루", distance: "80 km drive",
      coordinates: [[47.9920, 107.4500], [47.9870, 107.4690], [47.9750, 107.4200], [47.9630, 107.4050]],
      stops: ["거북바위", "아리야발 사원", "초원 전망 지점"],
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "테렐지 국립공원의 초원과 바위 지형", note: "표시된 길을 벗어나지 말고 기온 변화에 대비하세요. 외곽에서는 통신이 끊길 수 있습니다.",
      transit: "정기 대중교통이 제한적입니다. 숙소·등록 투어를 통해 왕복 차량과 귀환 시간을 확정하세요."
    },
    {
      id: "istanbul-historic", countryId: "turkey", number: "39", title: "이스탄불, 술탄아흐메트와 시장", location: "Istanbul · 1 day", duration: "하루", distance: "5.3 km",
      coordinates: [[41.0086, 28.9802], [41.0054, 28.9768], [41.0110, 28.9830], [41.0165, 28.9700]],
      stops: ["아야 소피아 주변", "블루 모스크", "바실리카 시스턴", "그랜드 바자르"],
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "이스탄불의 모스크와 구시가지 풍경", note: "종교시설 복장 규정과 입장 시간을 확인하고 시장에서는 가격을 흥정 전에 확인하세요.",
      transit: "Istanbulkart로 트램 T1을 이용하면 구시가지 명소 사이 이동이 편합니다. 공식 택시 승강장을 이용하세요."
    },
    {
      id: "cappadocia-valleys", countryId: "turkey", number: "40", title: "카파도키아, 괴레메 계곡 산책", location: "Göreme · 1 day", duration: "하루", distance: "6.2 km",
      coordinates: [[38.6431, 34.8289], [38.6540, 34.8460], [38.6610, 34.8510], [38.6350, 34.8130]],
      stops: ["괴레메 야외박물관", "러브 밸리 전망", "괴레메 마을", "선셋 포인트"],
      image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "카파도키아의 기암 지형과 열기구 풍경", note: "계곡 길은 표면이 고르지 않을 수 있습니다. 열기구는 기상 취소와 공식 운항 공지를 확인하세요.",
      transit: "괴레메 주변은 도보·투어 차량을 이용하세요. 공항 셔틀과 열기구 투어는 등록 업체를 통해 예약하세요."
    },
    {
      id: "cairo-giza", countryId: "egypt", number: "41", title: "카이로, 기자 피라미드와 나일강", location: "Cairo · 1 day", duration: "하루", distance: "12 km drive",
      coordinates: [[29.9792, 31.1342], [29.9765, 31.1310], [29.9950, 31.1670], [30.0444, 31.2357]],
      stops: ["기자 피라미드", "스핑크스", "이집트 박물관", "나일강변"],
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "기자 피라미드와 사막 풍경", note: "유적 간 거리가 멀고 더위가 강합니다. 공식 티켓·등록 가이드와 차량을 이용하세요.",
      transit: "기자 유적과 도심은 거리가 있어 등록 차량·가이드 이동을 권합니다. 요금과 귀환 시간을 미리 확인하세요."
    },
    {
      id: "luxor-temples", countryId: "egypt", number: "42", title: "룩소르, 신전과 나일강 동서안", location: "Luxor · 1 day", duration: "하루", distance: "10 km drive",
      coordinates: [[25.6995, 32.6391], [25.7188, 32.6573], [25.7402, 32.6014], [25.7270, 32.6100]],
      stops: ["룩소르 신전", "카르나크 신전", "왕들의 계곡", "하트셉수트 장제전"],
      image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "룩소르 고대 신전의 석주와 유적", note: "서안과 동안 사이 이동·입장 마감 시간이 달라 출발 순서를 미리 정하세요.",
      transit: "나일강 양안 이동은 공식 페리·등록 차량을 이용하세요. 한낮 폭염을 피해 이른 아침에 출발하세요."
    },
    {
      id: "krakow-old-town", countryId: "poland", number: "43", title: "크라쿠프, 광장과 바벨성", location: "Kraków · 1 day", duration: "하루", distance: "4.8 km",
      coordinates: [[50.0617, 19.9373], [50.0540, 19.9350], [50.0510, 19.9355], [50.0470, 19.9350]],
      stops: ["중앙광장", "성 마리아 성당", "수키엔니체", "바벨성"],
      image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "크라쿠프 구시가지 광장과 역사 건축", note: "중앙광장 행사와 성당 입장 시간을 확인하고 바벨 언덕 오르막에 대비하세요.",
      transit: "구시가지는 도보가 편리하고 외곽은 MPK 트램을 이용하세요. 티켓을 탑승 전에 검표해야 합니다."
    },
    {
      id: "warsaw-royal-route", countryId: "poland", number: "44", title: "바르샤바, 왕의 길과 구시가지", location: "Warsaw · 1 day", duration: "하루", distance: "5.6 km",
      coordinates: [[52.2297, 21.0122], [52.2350, 21.0180], [52.2470, 21.0130], [52.2490, 21.0120]],
      stops: ["문화과학궁전", "대통령궁", "왕궁 광장", "바르샤바 구시가지"],
      image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "바르샤바 구시가지의 광장과 다채로운 건물", note: "왕궁 내부 관람은 운영일·시간을 확인하고 비스와강변은 날씨에 맞춰 걸으세요.",
      transit: "ZTM 교통권으로 메트로·트램·버스를 이용하세요. 중앙역과 구시가지는 대중교통으로 연결됩니다."
    },
    {
      id: "kyiv-historic", countryId: "ukraine", number: "45", title: "키이우, 성 소피아와 언덕길", location: "Kyiv · 참고 루트", duration: "현지 안전 공지 해제 후", distance: "4.5 km",
      coordinates: [[50.4520, 30.5140], [50.4547, 30.5238], [50.4580, 30.5160], [50.4600, 30.5110]],
      stops: ["성 소피아 대성당", "성 미하일 황금돔 수도원", "안드리이 언덕", "드니프로 전망"],
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "키이우의 언덕과 역사적인 성당 풍경", note: "참고용 루트입니다. 무력 충돌과 공식 여행경보가 해제되기 전 방문을 계획하지 마세요.",
      transit: "현재 관광 이동을 권하지 않습니다. 방문 가능 여부와 통행 규정은 외교부·현지 당국 공지에서 확인하세요."
    },
    {
      id: "lviv-old-town", countryId: "ukraine", number: "46", title: "리비우, 구시가지와 시장 광장", location: "Lviv · 참고 루트", duration: "현지 안전 공지 해제 후", distance: "3.8 km",
      coordinates: [[49.8419, 24.0315], [49.8420, 24.0290], [49.8380, 24.0310], [49.8360, 24.0250]],
      stops: ["리노크 광장", "오페라 하우스", "아르메니아 거리", "하이 캐슬 전망"],
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "리비우 구시가지의 탑과 유럽식 건축", note: "참고용 루트입니다. 공습 경보·통행 제한 등 현지 위험이 남아 있으면 이동하지 마세요.",
      transit: "현지 여행경보가 해제되기 전 관광 이동을 권하지 않습니다. 철도·통행 운영은 출발 직전 공식 공지로 확인하세요."
    },
    {
      id: "athens-acropolis", countryId: "greece", number: "47", title: "아테네, 아크로폴리스와 플라카", location: "Athens · 1 day", duration: "하루", distance: "4.6 km",
      coordinates: [[37.9715, 23.7257], [37.9687, 23.7285], [37.9730, 23.7320], [37.9755, 23.7270]],
      stops: ["아크로폴리스", "파르테논 신전", "플라카", "모나스티라키 광장"],
      image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "아테네 아크로폴리스와 고대 석조 유적", note: "아크로폴리스는 사전 시간 예약과 그늘 없는 오르막에 대비하세요.",
      transit: "Athens Metro 2·3호선과 도보가 편리합니다. 집회 시 신타그마역·광장 접근 통제를 확인하세요."
    },
    {
      id: "santorini-caldera", countryId: "greece", number: "48", title: "산토리니, 이아와 칼데라 전망", location: "Santorini · 1 day", duration: "하루", distance: "5.2 km",
      coordinates: [[36.4618, 25.3753], [36.4470, 25.3860], [36.4165, 25.4329], [36.4335, 25.4240]],
      stops: ["이아 마을", "칼데라 길", "피라", "이메로비글리"],
      image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "산토리니 흰 마을과 에게해 칼데라 풍경", note: "절벽길은 난간이 없는 구간이 있습니다. 일몰 시간대 혼잡과 페리 운항을 고려하세요.",
      transit: "KTEL 버스는 계절·시간대별 배차가 달라집니다. 항구·공항 셔틀과 마지막 버스를 미리 확인하세요."
    },
    {
      id: "oslo-fjord", countryId: "norway", number: "49", title: "오슬로, 오페라하우스와 피오르드", location: "Oslo · 1 day", duration: "하루", distance: "5.0 km",
      coordinates: [[59.9075, 10.7530], [59.9060, 10.7380], [59.9110, 10.7340], [59.9140, 10.7270]],
      stops: ["오슬로 오페라하우스", "아케르스후스 요새", "아커 브뤼게", "시청사"],
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "오슬로 항구와 피오르드 해안 풍경", note: "항구 페리와 섬 이동은 계절 시간표를 확인하고 방풍 옷을 챙기세요.",
      transit: "Ruter 앱·교통권으로 트램·메트로·버스를 이용하세요. 중앙역에서 공항열차가 출발합니다."
    },
    {
      id: "bergen-bryggen", countryId: "norway", number: "50", title: "베르겐, 브뤼겐과 플뢰이엔 전망", location: "Bergen · 1 day", duration: "하루", distance: "4.1 km",
      coordinates: [[60.3970, 5.3240], [60.3950, 5.3230], [60.3910, 5.3280], [60.3960, 5.3310]],
      stops: ["브뤼겐", "수산시장", "플뢰이바넨", "플뢰이엔 전망대"],
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "베르겐의 항구와 산악 전망", note: "비가 잦고 산길이 젖어 미끄러울 수 있습니다. 푸니쿨라 운행과 산책로 상태를 확인하세요.",
      transit: "도심은 도보·Bybanen 경전철로 이동하세요. 플뢰이바넨은 날씨와 정비 일정을 확인하세요."
    },
    {
      id: "sydney-harbour", countryId: "australia", number: "51", title: "시드니, 오페라하우스와 항구길", location: "Sydney · 1 day", duration: "하루", distance: "5.5 km",
      coordinates: [[-33.8568, 151.2153], [-33.8610, 151.2100], [-33.8730, 151.2110], [-33.8520, 151.2100]],
      stops: ["서큘러키", "오페라하우스", "왕립식물원", "더 록스"],
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "시드니 오페라하우스와 항구 풍경", note: "항구 페리로 해안 풍경을 볼 수 있습니다. 강한 햇빛과 자외선에 대비하세요.",
      transit: "Opal 카드나 컨택트리스 결제로 페리·기차·버스를 이용하세요. 서큘러키 페리 운항 공지를 확인하세요."
    },
    {
      id: "melbourne-lanes", countryId: "australia", number: "52", title: "멜버른, 골목 카페와 정원", location: "Melbourne · 1 day", duration: "하루", distance: "5.0 km",
      coordinates: [[-37.8136, 144.9631], [-37.8170, 144.9670], [-37.8200, 144.9750], [-37.8300, 144.9790]],
      stops: ["플린더스 스트리트 역", "호시어 레인", "빅토리아 주립도서관", "왕립식물원"],
      image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "멜버른 도심 골목과 정원 풍경", note: "도심 무료 트램 구역과 운영 범위를 확인하고, 하루에도 변하는 날씨에 겹쳐 입을 옷을 준비하세요.",
      transit: "myki 또는 컨택트리스 결제로 트램·기차를 이용하세요. 도심 무료 트램 구역의 경계를 확인하세요."
    },
    {
      id: "toronto-waterfront", countryId: "canada", number: "53", title: "토론토, 호숫가와 다운타운", location: "Toronto · 1 day", duration: "하루", distance: "5.6 km",
      coordinates: [[43.6426, -79.3871], [43.6487, -79.3817], [43.6387, -79.3817], [43.6315, -79.3788]],
      stops: ["CN 타워", "세인트 로렌스 마켓", "하버프런트", "토론토 아일랜드 선착장"],
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "토론토 다운타운과 온타리오호 풍경", note: "페리 운항은 계절·날씨에 따라 바뀝니다. 섬 방문 전 마지막 귀항 시간을 확인하세요.",
      transit: "TTC와 PRESTO 또는 컨택트리스 결제로 이동하세요. UP Express는 Union역과 피어슨 공항을 연결합니다."
    },
    {
      id: "vancouver-seawall", countryId: "canada", number: "54", title: "밴쿠버, 스탠리파크 방파제 길", location: "Vancouver · 1 day", duration: "하루", distance: "6.4 km",
      coordinates: [[49.3000, -123.1300], [49.2910, -123.1450], [49.2820, -123.1200], [49.2750, -123.1350]],
      stops: ["잉글리시 베이", "스탠리파크", "라이언스 게이트 전망", "콜하버"],
      image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "밴쿠버 해안과 산이 어우러진 풍경", note: "자전거와 보행로가 분리된 구간을 지키고 비가 오면 해안 바람에 대비하세요.",
      transit: "Compass Card와 SkyTrain·버스를 이용하세요. SeaBus는 Waterfront역에서 노스밴쿠버로 연결됩니다."
    },
    {
      id: "new-york-midtown", countryId: "united-states", number: "55", title: "뉴욕, 미드타운과 센트럴파크", location: "New York · 1 day", duration: "하루", distance: "6.0 km",
      coordinates: [[40.7580, -73.9855], [40.7614, -73.9776], [40.7681, -73.9819], [40.7812, -73.9665]],
      stops: ["타임스스퀘어", "록펠러센터", "5번가", "센트럴파크 남쪽"],
      image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "뉴욕 미드타운 스카이라인과 도시 전경", note: "인파가 많은 구간에서는 보행 흐름을 따르고, 공원은 해 지기 전 동선을 계획하세요.",
      transit: "OMNY 비접촉 결제로 지하철·버스를 이용하세요. 역 출구와 열차 방향을 탑승 전에 확인하세요."
    },
    {
      id: "san-francisco-bay", countryId: "united-states", number: "56", title: "샌프란시스코, 페리빌딩과 부두", location: "San Francisco · 1 day", duration: "하루", distance: "5.1 km",
      coordinates: [[37.7955, -122.3937], [37.8080, -122.4098], [37.8078, -122.4177], [37.8000, -122.4380]],
      stops: ["페리 빌딩", "엠바카데로", "피어 39", "피셔맨스워프"],
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "샌프란시스코 베이와 골든게이트 브리지 풍경", note: "해안 안개와 바람에 대비해 겉옷을 챙기고 언덕길 이동 시간을 고려하세요.",
      transit: "Clipper 또는 컨택트리스 결제로 Muni를 이용하세요. 케이블카는 지정 승강장에서 탑승하고 요금을 확인하세요."
    },
    {
      id: "mexico-city-historic", countryId: "mexico", number: "57", title: "멕시코시티, 소칼로와 역사 지구", location: "Mexico City · 1 day", duration: "하루", distance: "5.0 km",
      coordinates: [[19.4326, -99.1332], [19.4352, -99.1410], [19.4370, -99.1470], [19.4260, -99.1276]],
      stops: ["소칼로", "메트로폴리탄 대성당", "벨라스 아르테스", "알라메다 공원"],
      image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "멕시코시티 역사 지구의 광장과 건축물", note: "고도가 높은 도시입니다. 첫날은 천천히 걷고 집회·교통 통제 공지를 확인하세요.",
      transit: "Metro·Metrobús 이용 시 교통카드를 준비하세요. 늦은 시간에는 공식 호출 차량을 이용하세요."
    },
    {
      id: "oaxaca-centro", countryId: "mexico", number: "58", title: "오악사카, 산토도밍고와 시장 골목", location: "Oaxaca · 1 day", duration: "하루", distance: "4.3 km",
      coordinates: [[17.0617, -96.7250], [17.0650, -96.7230], [17.0600, -96.7280], [17.0560, -96.7290]],
      stops: ["산토도밍고 성당", "안다도르 마세도니오 알칼라", "베니토 후아레스 시장", "소칼로"],
      image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "오악사카의 색채가 있는 식민지 시대 거리", note: "고도가 높고 햇볕이 강할 수 있어 물을 준비하고 시장 운영 시간을 확인하세요.",
      transit: "중심가는 도보로 둘러볼 수 있습니다. 외곽 유적·공항 이동은 등록 택시나 예약 차량을 이용하세요."
    },
    {
      id: "lima-miraflores", countryId: "peru", number: "59", title: "리마, 미라플로레스 해안 산책", location: "Lima · 1 day", duration: "하루", distance: "5.2 km",
      coordinates: [[-12.1211, -77.0300], [-12.1290, -77.0290], [-12.1350, -77.0220], [-12.1200, -77.0370]],
      stops: ["라르코마르", "말레콘 해안길", "연인의 공원", "케네디 공원"],
      image: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "리마의 태평양 해안 절벽과 산책길", note: "해안 절벽 아래로 내려가지 말고 안개 낀 날에도 보행로 표지와 난간을 따르세요.",
      transit: "미라플로레스 안은 도보·앱 호출 차량이 편리합니다. 공항 이동은 공식 택시·호텔 차량을 예약하세요."
    },
    {
      id: "cusco-inca", countryId: "peru", number: "60", title: "쿠스코, 잉카 돌담과 산블라스", location: "Cusco · 1 day", duration: "하루", distance: "4.4 km",
      coordinates: [[-13.5167, -71.9780], [-13.5160, -71.9750], [-13.5120, -71.9710], [-13.5135, -71.9820]],
      stops: ["아르마스 광장", "코리칸차", "산블라스", "사크사이와만 전망"],
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "쿠스코의 안데스 산맥과 잉카 유적 풍경", note: "해발 약 3,400m라 도착 당일은 천천히 걷고 숨 가쁨·두통 등 고산 증상을 살피세요.",
      transit: "중심부는 도보지만 언덕이 가파릅니다. 고지대 유적은 등록 투어 차량을 이용하고 귀환편을 확인하세요."
    },
    {
      id: "kathmandu-valley", countryId: "nepal", number: "61", title: "카트만두, 더르바르 광장과 사원", location: "Kathmandu · 1 day", duration: "하루", distance: "4.0 km",
      coordinates: [[27.7048, 85.3076], [27.7105, 85.3200], [27.7150, 85.3120], [27.7100, 85.3050]],
      stops: ["카트만두 더르바르 광장", "쿠마리 가르", "스와얌부나트", "타멜"],
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "카트만두 계곡의 사원과 산악 도시 풍경", note: "먼지·교통량이 많고 계단이 이어집니다. 사원 복장과 사진 촬영 안내를 확인하세요.",
      transit: "중심 이동은 공식 택시·예약 차량이 편리합니다. 혼잡 시간에는 이동 시간을 넉넉히 잡으세요."
    },
    {
      id: "pokhara-lakeside", countryId: "nepal", number: "62", title: "포카라, 페와호수와 안나푸르나 전망", location: "Pokhara · 1 day", duration: "하루", distance: "5.0 km",
      coordinates: [[28.2096, 83.9856], [28.2140, 83.9590], [28.2170, 83.9510], [28.2030, 83.9840]],
      stops: ["페와호수", "탈 바라히 사원 선착장", "레이크사이드", "데이비스 폭포"],
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "포카라의 호수와 안나푸르나 산맥 풍경", note: "산악 날씨는 빠르게 바뀝니다. 보트 구명조끼와 트레킹 당일 기상을 확인하세요.",
      transit: "레이크사이드는 도보·자전거로 이동하고 외곽 명소는 등록 차량을 이용하세요. 트레킹 출발 전 허가를 확인하세요."
    },
    {
      id: "rio-copacabana", countryId: "brazil", number: "63", title: "리우, 코파카바나와 슈거로프", location: "Rio de Janeiro · 1 day", duration: "하루", distance: "5.1 km",
      coordinates: [[-22.9711, -43.1822], [-22.9650, -43.1760], [-22.9530, -43.1650], [-22.9500, -43.1560]],
      stops: ["코파카바나 해변", "레미 해변", "우르카", "슈거로프 케이블카"],
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "리우데자네이루 해변과 슈거로프 산 풍경", note: "해변에서는 깃발·구조요원 안내를 따르고 휴대전화·귀중품을 노출하지 마세요.",
      transit: "메트로 MetrôRio와 공식 호출 차량을 이용하세요. 해변에서 어두워진 뒤 한적한 구간은 피하세요."
    },
    {
      id: "sao-paulo-avenida", countryId: "brazil", number: "64", title: "상파울루, 파울리스타와 이비라푸에라", location: "São Paulo · 1 day", duration: "하루", distance: "5.7 km",
      coordinates: [[-23.5614, -46.6560], [-23.5640, -46.6520], [-23.5710, -46.6450], [-23.5870, -46.6570]],
      stops: ["파울리스타 대로", "MASP 미술관", "이비라푸에라 공원", "일본관"],
      image: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "상파울루 도심 스카이라인과 공원 풍경", note: "공원은 넓어 이동 시간을 고려하고 저녁에는 사람이 있는 큰길과 공식 교통을 이용하세요.",
      transit: "메트로 교통카드 Bilhete Único 사용 여부를 확인하세요. 차량 이동은 앱의 번호판·기사 정보를 대조하세요."
    },
    {
      id: "santiago-city", countryId: "chile", number: "65", title: "산티아고, 플라사 데 아르마스와 언덕", location: "Santiago · 1 day", duration: "하루", distance: "5.0 km",
      coordinates: [[-33.4372, -70.6506], [-33.4320, -70.6390], [-33.4250, -70.6340], [-33.4310, -70.6250]],
      stops: ["플라사 데 아르마스", "라 모네다", "산타 루시아 언덕", "산 크리스토발 언덕"],
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "산티아고 도심과 안데스 산맥 전망", note: "고도가 있고 여름 햇빛이 강합니다. 언덕 시설 운영과 대기질 공지를 확인하세요.",
      transit: "Bip! 교통카드로 메트로·버스를 이용하세요. 집회·지진 훈련일에는 중심가 통제를 확인하세요."
    },
    {
      id: "san-pedro-atacama", countryId: "chile", number: "66", title: "아타카마, 사막의 달 풍경", location: "San Pedro de Atacama · 1 day", duration: "하루", distance: "35 km drive",
      coordinates: [[-22.9087, -68.1997], [-22.9190, -68.2350], [-23.0000, -68.2500], [-22.9095, -68.2005]],
      stops: ["산페드로 마을", "달의 계곡", "사막 전망 지점", "마을 광장"],
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "아타카마 사막의 붉은 지형과 광활한 풍경", note: "고도·강한 자외선·큰 일교차에 대비하고 지정된 투어 경로를 벗어나지 마세요.",
      transit: "사막 명소는 도보 접근이 어렵습니다. 등록 투어를 예약하고 고산·야간 투어 안전 안내를 확인하세요."
    },
    {
      id: "buenos-aires-recoleta", countryId: "argentina", number: "67", title: "부에노스아이레스, 레콜레타와 팔레르모", location: "Buenos Aires · 1 day", duration: "하루", distance: "5.4 km",
      coordinates: [[-34.5889, -58.3974], [-34.5875, -58.3930], [-34.5800, -58.4050], [-34.5750, -58.4200]],
      stops: ["레콜레타 묘지", "엘 아테네오 서점", "팔레르모 공원", "말바 미술관"],
      image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "부에노스아이레스의 유럽풍 거리와 공원 풍경", note: "주말 공원·시장 주변은 혼잡할 수 있습니다. 해가 진 뒤 한적한 길은 피하세요.",
      transit: "SUBE 교통카드로 메트로(Subte)·버스를 이용하세요. 호출 차량은 차량 번호를 확인하세요."
    },
    {
      id: "iguazu-falls", countryId: "argentina", number: "68", title: "이구아수, 폭포와 열대 숲길", location: "Iguazú · 1 day", duration: "하루", distance: "8.0 km",
      coordinates: [[-25.6953, -54.4367], [-25.6920, -54.4440], [-25.6860, -54.4380], [-25.6900, -54.4320]],
      stops: ["이구아수 국립공원", "악마의 목구멍", "상·하부 산책로", "정글 열차"],
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "이구아수 폭포와 열대 우림 풍경", note: "폭포 물보라와 젖은 산책로에 대비해 방수 가방을 준비하고 야생동물에 먹이를 주지 마세요.",
      transit: "국립공원 입구에서 공식 정글 열차와 보행로를 이용하세요. 개장·막차 시간을 확인하세요."
    }
  ],
  archive: [
    {
      id: "deepfake", category: "DIGITAL SAFETY", date: "2024 — 계속되는 이슈", title: "딥페이크 사칭과 신뢰의 빈틈", summary: "익숙한 얼굴과 목소리를 빌려, 확인의 순간을 늦추는 수법.",
      mindmap: [
        { label: "중심 주제", title: "합성 미디어를 이용한 사칭", detail: "공개된 사진·음성 등을 합성해 지인, 기관 또는 유명인을 가장하고 송금·정보 제공을 요구하는 피해 유형." },
        { label: "수법 / 특성", title: "긴급성 · 권위 · 익숙함", detail: "짧은 영상통화나 음성 메시지로 급박한 상황을 연출합니다. 발신 경로가 익숙해 보여도 별도 채널로 재확인하는 것이 중요합니다." },
        { label: "법적 쟁점 · 용어", title: "사기 · 명예훼손 · 개인정보", detail: "사실과 다른 정보로 재산상 이익을 취하는 행위는 사기 쟁점이 될 수 있고, 합성물의 유포 목적·내용에 따라 명예·초상·개인정보 관련 책임도 검토됩니다. 관할과 구체적 사실에 따라 판단이 달라집니다." },
        { label: "프로파일링 인사이트", title: "기술보다 상황을 설계한다", detail: "핵심은 합성 품질보다 피해자의 판단 시간을 줄이는 사회공학적 압박입니다. 금전·인증 요청은 통화를 끊고 미리 저장한 번호로 다시 확인하세요." }
      ],
      sources: [
        { label: "FBI — Criminals Use Generative Artificial Intelligence to Facilitate Financial Fraud", url: "https://www.ic3.gov/PSA/2024/PSA240709" },
        { label: "FTC — How to Recognize and Avoid Phishing Scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }
      ]
    },
    {
      id: "ransomware", category: "CYBERSECURITY", date: "2024 — 상시 경계", title: "랜섬웨어, 멈춰 선 일상", summary: "데이터를 잠그는 공격이 병원과 기업의 운영을 흔든다.",
      mindmap: [
        { label: "중심 주제", title: "랜섬웨어와 서비스 중단", detail: "악성코드로 파일이나 시스템을 사용할 수 없게 만든 뒤 금전을 요구하는 사이버 위협. 유출 협박이 함께 나타나기도 합니다." },
        { label: "수법 / 특성", title: "침투 · 확산 · 이중 협박", detail: "피싱, 취약한 원격 접속, 탈취한 계정 등이 침투 경로가 될 수 있습니다. 백업까지 접근해 복구를 어렵게 하거나 데이터 공개를 위협하기도 합니다." },
        { label: "법적 쟁점 · 용어", title: "침해사고 · 통지 의무", detail: "무단 접근과 데이터 유출 여부, 개인정보 처리자의 안전조치·통지 의무가 쟁점입니다. 신고·통지 요건과 기한은 국가 및 사건별로 달라집니다." },
        { label: "프로파일링 인사이트", title: "복구력은 평소에 만들어진다", detail: "공격자는 기술적 취약점뿐 아니라 조직의 백업·권한 관리 공백을 노립니다. 분리 보관한 백업과 정기 복구 훈련이 피해 확산을 줄입니다." }
      ],
      sources: [
        { label: "CISA — Stop Ransomware", url: "https://www.cisa.gov/stopransomware" },
        { label: "ENISA — Threat Landscape", url: "https://www.enisa.europa.eu/topics/cyber-threats" }
      ]
    },
    {
      id: "dark-patterns", category: "CONSUMER RIGHTS", date: "디지털 소비자 이슈", title: "다크패턴, 취소 버튼은 어디에", summary: "가입은 한 번에, 해지는 여러 번에 걸쳐야 하는 이유.",
      mindmap: [
        { label: "중심 주제", title: "사용자 선택을 비트는 인터페이스", detail: "디지털 화면의 설계로 특정 선택을 유도하거나 이용자가 원치 않는 결정을 하도록 만드는 관행을 다룹니다." },
        { label: "수법 / 특성", title: "숨김 · 반복 · 비대칭", detail: "해지 메뉴를 깊숙이 숨기거나, 거절을 어렵게 만들고, 동의 버튼을 더 눈에 띄게 배치하는 방식이 대표적입니다." },
        { label: "법적 쟁점 · 용어", title: "기만성 · 동의의 유효성", detail: "표시가 오인 가능했는지, 동의가 자유롭고 구체적이었는지, 구독·개인정보 처리 조건이 충분히 고지됐는지가 주요 쟁점입니다." },
        { label: "프로파일링 인사이트", title: "마찰의 방향을 살펴보기", detail: "가입과 해지에 필요한 단계 수를 비교해 보세요. 번거로움이 이용자의 이익보다 사업자의 유지율을 향하는지 파악하는 단서가 됩니다." }
      ],
      sources: [
        { label: "FTC — Bringing Dark Patterns to Light", url: "https://www.ftc.gov/reports/bringing-dark-patterns-light" },
        { label: "OECD — Dark commercial patterns", url: "https://www.oecd.org/en/topics/sub-issues/consumer-policy/dark-commercial-patterns.html" }
      ]
    },
    {
      id: "crowdstrike", category: "GLOBAL SYSTEMS", date: "2024.07 — 사례 기록", title: "한 번의 업데이트, 세계의 멈춤", summary: "디지털 인프라의 연결성이 만든 연쇄 중단의 기록.",
      mindmap: [
        { label: "중심 주제", title: "소프트웨어 업데이트와 연쇄 장애", detail: "보안 소프트웨어 업데이트 결함으로 여러 산업의 Windows 기기가 영향을 받으며 항공·의료·금융 서비스 등에 차질이 발생한 사례." },
        { label: "수법 / 특성", title: "악의가 아닌 단일 실패 지점", detail: "악의적 침입 사건과 달리, 배포된 업데이트의 결함과 광범위한 의존성이 동시에 작동해 장애가 빠르게 퍼졌습니다." },
        { label: "법적 쟁점 · 용어", title: "공급망 위험 · 책임 범위", detail: "서비스 계약, 사업자의 주의 의무, 손해의 인과관계와 복구 책임이 검토될 수 있습니다. 책임은 계약과 관할 법률에 따라 달라집니다." },
        { label: "프로파일링 인사이트", title: "집중된 연결은 집중된 위험", detail: "같은 도구와 공급자에 대한 의존이 효율을 높이는 동시에 장애 반경을 키울 수 있습니다. 단계적 배포와 독립 복구 경로가 회복탄력성의 핵심입니다." }
      ],
      sources: [
        { label: "CrowdStrike — Preliminary Post Incident Review", url: "https://www.crowdstrike.com/falcon-content-update-remediation-and-guidance-hub/" },
        { label: "CISA — CrowdStrike Outage", url: "https://www.cisa.gov/news-events/alerts/2024/07/19/crowdstrike-outage" }
      ]
    }
  ]
};
// 최신 기술·사회 범죄 아카이브 (최근 1년 이내 주요 이슈)
const recentArchives = [
  {
    id: "crime-deepfake-2025",
    category: "Digital Crime & Tech",
    shortTitle: "텔레그램 딥페이크 허위영상물 유포와 대응",
    summary: "공개 이미지 등을 악용한 비동의 합성물 제작·유포와 피해 대응 쟁점",
    mindmap: {
      center: "AI 딥페이크 성범죄",
      branch1: {
        title: "수법 및 특성",
          desc: "공개된 사진 등을 동의 없이 합성해 허위영상물을 만들고 메신저 채널 등에서 유포하는 유형. 피해 확산과 재유포 방지가 주요 쟁점"
      },
      branch2: {
        title: "핵심 법적 쟁점 & 용어",
          desc: "성폭력처벌법 제14조의2 관련 허위영상물 편집·반포 쟁점. 플랫폼 책임과 공범 성립 여부는 구체적인 행위와 인식, 증거에 따라 판단"
      },
      branch3: {
        title: "프로파일링 & 인사이트",
          desc: "익명성과 빠른 재유포가 피해를 키울 수 있음. 피해자 보호, 신속한 신고·삭제 지원, 플랫폼의 대응 절차를 함께 살펴볼 필요"
      }
    },
    references: [
      { name: "경찰청", title: "공식 자료", url: "https://www.police.go.kr/" },
      { name: "국가법령정보센터", title: "성폭력처벌법 제14조의2", url: "https://www.law.go.kr/법령/성폭력범죄의처벌등에관한특례법" }
    ]
  },
  {
    id: "crime-deepvoice-phishing",
    category: "AI Financial Scam",
    shortTitle: "AI 음성 합성을 이용한 보이스피싱",
    summary: "가족·지인의 목소리를 흉내 내 긴급 상황을 꾸미고 금전을 요구하는 금융사기 유형",
    mindmap: {
      center: "AI 딥보이스 사기",
      branch1: {
        title: "수법 및 특성",
          desc: "온라인 음성 등을 합성·변조해 지인을 사칭하고 사고나 긴급 상황을 내세워 송금·정보 제공을 요구하는 유형"
      },
      branch2: {
        title: "핵심 법적 쟁점 & 용어",
          desc: "전기통신금융사기피해방지법과 사기죄 적용 여부가 쟁점. 계좌·통신 기록의 확보와 사업자 협조 범위는 사건별 법률 절차에 따라 검토"
      },
      branch3: {
        title: "프로파일링 & 인사이트",
          desc: "합성 음성의 정교함보다 긴급성으로 확인을 막는 사회공학적 압박에 주목. 송금 요청은 별도 연락처와 가족 간 확인 절차로 검증"
      }
    },
    references: [
      { name: "금융감독원", title: "금융사기 예방 정보", url: "https://www.fss.or.kr/" },
      { name: "국가법령정보센터", title: "전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법", url: "https://www.law.go.kr/법령/전기통신금융사기피해방지및피해금환급에관한특별법" }
    ]
  },
  {
    id: "crime-crypto-leading",
    category: "Investment Fraud",
    shortTitle: "가상자산 리딩방과 투자 사기",
    summary: "허위 수익 정보와 유명인 사칭 등을 앞세워 투자자를 유인하는 가상자산 사기 유형",
    mindmap: {
      center: "코인 리딩방 사기",
      branch1: {
        title: "수법 및 특성",
          desc: "메신저 대화방에서 허위 수익 인증·추천 정보를 반복해 신뢰를 쌓고, 검증되지 않은 자산 매수나 추가 입금을 유도하는 유형"
      },
      branch2: {
        title: "핵심 법적 쟁점 & 용어",
          desc: "사기·공모 여부와 자본시장법 적용은 자산의 성격과 구체적 행위에 따라 달라짐. 원금·고수익을 약정한 자금 모집은 유사수신 해당 여부도 검토"
      },
      branch3: {
        title: "프로파일링 & 인사이트",
          desc: "집단 대화와 반복되는 수익 인증은 독립적인 검증을 어렵게 만들 수 있음. 사업자 등록·공시 정보와 거래소 외부 송금 요구를 따로 확인"
      }
    },
    references: [
      { name: "금융위원회", title: "가상자산 정책·보도자료", url: "https://www.fsc.go.kr/" },
      { name: "국가법령정보센터", title: "가상자산 이용자 보호 등에 관한 법률", url: "https://www.law.go.kr/법령/가상자산이용자보호등에관한법률" }
    ]
  },
  {
    id: "crime-lease-scam",
    category: "Real Estate Fraud",
    shortTitle: "법인 명의와 다중 계약을 악용한 전세사기",
    summary: "명의·계약 구조를 복잡하게 만들어 임차인의 보증금 회수를 어렵게 하는 조직적 사기 유형",
    mindmap: {
      center: "조직적 전세사기",
      branch1: {
        title: "수법 및 특성",
          desc: "다수의 명의자·법인과 복잡한 계약을 이용해 책임 소재를 흐리거나, 실제 가치와 위험을 충분히 알리지 않은 채 보증금을 받는 유형"
      },
      branch2: {
        title: "핵심 법적 쟁점 & 용어",
          desc: "사기죄와 가중처벌 적용, 공범별 고의·가담 정도가 쟁점. 임대차보호법상 대항력·우선변제권 등 임차인의 권리도 함께 확인"
      },
      branch3: {
        title: "프로파일링 & 인사이트",
          desc: "개별 계약만으로 위험을 파악하기 어려울 수 있음. 등기·선순위 권리·보증 가입 여부를 계약 전 확인하고 공공 상담 창구를 이용"
      }
    },
    references: [
      { name: "국토교통부", title: "전세사기 피해 지원 정보", url: "https://www.molit.go.kr/" },
      { name: "국가법령정보센터", title: "주택임대차보호법", url: "https://www.law.go.kr/법령/주택임대차보호법" }
    ]
  },
  {
    id: "crime-retail-theft",
    category: "Juvenile Crime Trend",
    shortTitle: "무인점포 절도와 소년사법 쟁점",
    summary: "무인 운영 공간의 관리 공백과 반복 절도, 청소년 보호·책임 문제를 함께 살펴보는 이슈",
    mindmap: {
      center: "무인점포 연쇄 절도",
      branch1: {
        title: "수법 및 특성",
          desc: "야간 등 관리 인력이 적은 시간대에 무인 매장을 대상으로 절도가 반복되는 유형. 매장별 방범 환경과 지역 예방 체계가 함께 논의됨"
      },
      branch2: {
        title: "핵심 법적 쟁점 & 용어",
          desc: "절도죄 성립과 소년법상 연령·보호처분 적용이 쟁점. 형사책임 연령과 절차는 사건 당시 연령 및 구체적 행위에 따라 확인해야 함"
      },
      branch3: {
        title: "프로파일링 & 인사이트",
          desc: "환경 개선과 지역사회 개입을 함께 고려할 필요. 청소년 사건은 피해 회복, 재범 방지, 보호·교육의 균형을 중심으로 살펴봄"
      }
    },
    references: [
      { name: "경찰청", title: "생활안전·범죄예방 자료", url: "https://www.police.go.kr/" },
      { name: "한국형사·법무정책연구원", title: "소년사법·범죄예방 연구", url: "https://www.kicj.re.kr/" }
    ]
  }
].forEach((item) => {
  const branches = item.mindmap;
  window.JOURNEY_ARCHIVE_DATA.archive.push({
    id: item.id,
    category: item.category.toUpperCase(),
    date: "SOCIAL & TECH ISSUE",
    title: item.shortTitle,
    summary: item.summary,
    mindmap: [
      { label: "중심 주제", title: branches.center, detail: item.summary },
      { label: "수법 / 특성", title: branches.branch1.title, detail: branches.branch1.desc },
      { label: "법적 쟁점 · 용어", title: branches.branch2.title, detail: branches.branch2.desc },
      { label: "프로파일링 인사이트", title: branches.branch3.title, detail: branches.branch3.desc }
    ],
    sources: item.references.map((reference) => ({
      label: `${reference.name} — ${reference.title}`,
      url: reference.url
    }))
  });
});

// Normalize routes into ordered waypoint objects and expose them through each country.
window.JOURNEY_ARCHIVE_DATA.countries.forEach((country) => {
  country.routes = window.JOURNEY_ARCHIVE_DATA.routes.filter((route) => route.countryId === country.id);
  country.routes.forEach((route) => {
    const coordinates = Array.isArray(route.coordinates) ? route.coordinates : [];
    const stops = Array.isArray(route.stops) ? route.stops : [];
    const markerCoordinates = coordinates.slice();
    if (markerCoordinates.length > 1 &&
      Math.abs(markerCoordinates[0][0] - markerCoordinates[markerCoordinates.length - 1][0]) < 0.0001 &&
      Math.abs(markerCoordinates[0][1] - markerCoordinates[markerCoordinates.length - 1][1]) < 0.0001) markerCoordinates.pop();
    const spotCount = stops.length ? Math.min(stops.length, markerCoordinates.length) : markerCoordinates.length;
    route.routeSpots = Array.from({ length: spotCount }, (_, index) => {
      const coordinateIndex = spotCount < 2 ? 0 : Math.round(index * (markerCoordinates.length - 1) / (spotCount - 1));
      const [lat, lng] = markerCoordinates[coordinateIndex];
      return {
        order: index + 1,
        name: stops[index] || `경유 지점 ${index + 1}`,
        lat: Number(lat),
        lng: Number(lng),
        desc: route.highlights?.[index]?.detail || route.description || route.note || route.transit || "다음 여행 스팟으로 이동합니다."
      };
    });
  });
  country.routeSpots = country.routes[0]?.routeSpots || [];
});
