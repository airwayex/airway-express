


/* ═══════════════════════════
   표준품명 실제 DB (hyundaisf.com에서 직접 추출)
═══════════════════════════ */
const CAT_DB = {
  "1|가방/지갑/패션잡화":[{v:"Textilematerialsbags",t:"가방섬유제"},{v:"Bagsandcases",t:"가방핸드백"},{v:"Leatherbeltsandbandoliers",t:"가죽벨트"},{v:"Leatherfootwear",t:"가죽제부츠"},{v:"Leatherwallets",t:"가죽지갑"},{v:"HatsandCaps",t:"모자"},{v:"BACKPACKOFTEXTILE",t:"백팩"},{v:"Watches",t:"시계"},{v:"Textitlematerialsfootwear",t:"신발"},{v:"Hosiery",t:"양말"},{v:"Umbrellas",t:"우산양산"},{v:"Carrier",t:"캐리어"},{v:"Waterprooffootwear",t:"패션장화"}],
  "1|건강/병원/위생용품":[{v:"Hygienicarticleofrubbers",t:"고무제위생용품"},{v:"Razors",t:"면도기"},{v:"Medicalinstruments",t:"의료용기기"},{v:"Surgicalinstruments",t:"의료용기구"},{v:"Medicalgloves",t:"의료용장갑"},{v:"Disposablemedicalgloves",t:"일회용장갑"},{v:"Medicalcotton",t:"탈지면"}],
  "1|노트북/데스크탑":[{v:"Laptops",t:"노트북"},{v:"Desktopcomputers",t:"데스크탑"},{v:"Tablets",t:"태블릿PC"},{v:"Computeraccessories",t:"컴퓨터액세서리"}],
  "1|의류/잠옷/언더웨어":[{v:"Knittedclothing",t:"니트류"},{v:"Suits",t:"수트/정장"},{v:"Swimwear",t:"수영복"},{v:"Babygarments",t:"아동의류"},{v:"Underwear",t:"언더웨어"},{v:"Jeans",t:"청바지"},{v:"Coats",t:"코트/점퍼"},{v:"T-shirts",t:"티셔츠"},{v:"Pants",t:"팬츠/바지"},{v:"Hoodie",t:"후드티"}],
  "1|장난감/교육완구/인형":[{v:"Dolls",t:"인형"},{v:"Toys",t:"장난감"},{v:"Educationaltoys",t:"교육완구"},{v:"Boardgames",t:"보드게임"},{v:"Lego",t:"레고/블록"}],
  "1|화장품/미용용품":[{v:"Make-upcosmetics",t:"메이크업화장품"},{v:"Skincarecosmetics",t:"스킨케어화장품"},{v:"BabyCosmetic",t:"어린이화장품"},{v:"Foamcleanser",t:"폼클렌징"},{v:"MiniaturePerfume",t:"향수(60ML이하)"},{v:"Massageapparatus",t:"마사지용기기"},{v:"Manicureorpedicuresets",t:"매니큐어/페디큐어"},{v:"Brushesforperson",t:"브러쉬"}],
  "1|휴대폰/액세서리":[{v:"Mobilephones",t:"휴대폰"},{v:"Phoneaccessories",t:"휴대폰 액세서리"},{v:"Phonecase",t:"휴대폰케이스"},{v:"Charger",t:"충전기"},{v:"Earphones",t:"이어폰/헤드셋"},{v:"Smartwatch",t:"스마트워치"}],
  "1|생활/수납/식기/주방기구":[{v:"Kitchenware",t:"주방용품"},{v:"Tableware",t:"식기류"},{v:"Storageitems",t:"수납용품"},{v:"Bedding",t:"침구류"},{v:"Towels",t:"타올/수건"}],
  "1|교육/문구/사무용품":[{v:"Stationery",t:"문구류"},{v:"Books",t:"도서/서적"},{v:"Officeitems",t:"사무용품"}],
  "1|사진/영상/음향가전":[{v:"Cameras",t:"카메라"},{v:"Cameraparts",t:"카메라부품/액세서리"},{v:"Speakers",t:"스피커"},{v:"Headphones",t:"헤드폰"}],
  "1|쥬얼리/시계/선글라스":[{v:"Jewellery",t:"주얼리/귀금속"},{v:"WatchesJewellery",t:"시계"},{v:"Sunglasses",t:"선글라스"}],
  "1|출산/유아용품":[{v:"Babyproducts",t:"유아용품"},{v:"Babyfeeding",t:"수유용품"},{v:"Babyclothing",t:"아기의류"}],
  "1|골프/헬스/수영/자전거":[{v:"Golfequipment",t:"골프용품"},{v:"Fitnessitems",t:"헬스용품"},{v:"Swimequipment",t:"수영용품"},{v:"Bicycleparts",t:"자전거/부품"}],
  "1|가구/조명/인테리어":[{v:"Furniture",t:"가구"},{v:"Lighting",t:"조명"},{v:"Interioraccessories",t:"인테리어소품"}],
  "1|주방/생활/미용가전":[{v:"Cookingappliances",t:"조리가전"},{v:"Beautyappliances",t:"미용가전"},{v:"Homecleaning",t:"청소가전"}],
  "0|건강식품/다이어트":[{v:"Healthfoods",t:"건강식품"},{v:"Dietfoods",t:"다이어트식품"},{v:"Vitamins",t:"비타민/영양제"},{v:"Proteinsupplements",t:"단백질보충제"},{v:"Organicfoods",t:"유기농식품"}],
  "0|차/음료/과자/가공식품":[{v:"Tea",t:"차류"},{v:"Beverages",t:"음료"},{v:"Snacks",t:"과자/스낵"},{v:"Instantfoods",t:"즉석식품"},{v:"Noodles",t:"라면/면류"},{v:"Seaweed",t:"김/해조류"}],
  "0|정육":[{v:"Beef",t:"소고기"},{v:"Pork",t:"돼지고기"},{v:"Chicken",t:"닭고기"},{v:"Processedmeat",t:"가공육류"}]
};

/* ═══════════════════════════════════════════════════════
   AI 상품명 → 표준품명 자동 매핑 테이블
   ★ 업데이트 방법:
     1. 아래 카테고리 섹션에 항목 추가
     2. kw 배열에 영문/한글 키워드 추가
     3. cat1 = 대분류 코드 (CAT_DB 키와 동일)
     4. cat2 = 소분류 코드 (CAT_DB 소분류 v 값과 동일)
     5. cat2t = 화면에 표시될 소분류 한글명
═══════════════════════════════════════════════════════ */
const AI_KEYWORD_MAP = [

  // ─── 건강식품 / 다이어트 ───────────────────────────────
  {kw:['vitamin','비타민','supplement','영양제','omega','오메가','protein','단백질','probiotic','probiotics','collagen','콜라겐','zinc','아연'],
    cat1:'0|건강식품/다이어트', cat2:'Vitamins', cat2t:'비타민/영양제'},
  {kw:['health food','건강식품','diet','다이어트','슬리밍'],
    cat1:'0|건강식품/다이어트', cat2:'Healthfoods', cat2t:'건강식품'},

  // ─── 식품 / 음료 / 과자 ───────────────────────────────
  {kw:['chocolate','초콜렛','초콜릿','choco','milk chocolate','dark chocolate','white chocolate','candy','캔디','캐러멜','caramel'],
    cat1:'0|차/음료/과자/가공식품', cat2:'Snacks', cat2t:'과자/스낵'},
  {kw:['snack','스낵','chip','칩','크래커','cracker','cookie','쿠키','biscuit','비스킷','popcorn','팝콘','pretzel','과자'],
    cat1:'0|차/음료/과자/가공식품', cat2:'Snacks', cat2t:'과자/스낵'},
  {kw:['ramen','라면','noodle','면류','instant noodle','ramyun'],
    cat1:'0|차/음료/과자/가공식품', cat2:'Noodles', cat2t:'라면/면류'},
  {kw:['seaweed','김','dried seaweed','laver'],
    cat1:'0|차/음료/과자/가공식품', cat2:'Seaweed', cat2t:'김/해조류'},
  {kw:['tea','녹차','green tea','홍차','black tea','허브차','herbal tea','보이차'],
    cat1:'0|차/음료/과자/가공식품', cat2:'Tea', cat2t:'차류'},
  {kw:['beverage','음료','juice','주스','drink','드링크','energy drink','sports drink'],
    cat1:'0|차/음료/과자/가공식품', cat2:'Beverages', cat2t:'음료'},
  {kw:['instant food','즉석식품','ready to eat','레토르트','retort','frozen food','냉동식품'],
    cat1:'0|차/음료/과자/가공식품', cat2:'Instantfoods', cat2t:'즉석식품'},

  // ─── 화장품 / 미용용품 ────────────────────────────────
  {kw:['skincare','skin care','스킨케어','toner','토너','serum','세럼','moisturizer','로션','lotion','essence','에센스','ampoule','앰플','eye cream'],
    cat1:'1|화장품/미용용품', cat2:'Skincarecosmetics', cat2t:'스킨케어화장품'},
  {kw:['makeup','make-up','메이크업','foundation','파운데이션','lipstick','립스틱','mascara','eyeshadow','아이섀도','blush','blusher'],
    cat1:'1|화장품/미용용품', cat2:'Make-upcosmetics', cat2t:'메이크업화장품'},
  {kw:['mask','마스크팩','face mask','sheet mask','clay mask','패드'],
    cat1:'1|화장품/미용용품', cat2:'Skincarecosmetics', cat2t:'스킨케어화장품'},
  {kw:['perfume','향수','cologne','코롱','fragrance'],
    cat1:'1|화장품/미용용품', cat2:'MiniaturePerfume', cat2t:'향수(60ML이하)'},
  {kw:['foam cleanser','폼클렌저','클렌징폼','cleanser','클렌저','cleansing'],
    cat1:'1|화장품/미용용품', cat2:'Foamcleanser', cat2t:'폼클렌징'},
  {kw:['manicure','매니큐어','nail','네일','pedicure'],
    cat1:'1|화장품/미용용품', cat2:'Manicureorpedicuresets', cat2t:'매니큐어/페디큐어'},

  // ─── 패션잡화 / 신발 / 가방 ───────────────────────────
  {kw:['shoe','shoes','신발','sneaker','스니커','boot','부츠','slipper','슬리퍼','sandal','샌들','loafer','로퍼'],
    cat1:'1|가방/지갑/패션잡화', cat2:'Textitlematerialsfootwear', cat2t:'신발'},
  {kw:['bag','가방','backpack','백팩','handbag','핸드백','tote','토트백','crossbody','숄더백','clutch'],
    cat1:'1|가방/지갑/패션잡화', cat2:'Bagsandcases', cat2t:'가방핸드백'},
  {kw:['wallet','지갑','card holder','카드지갑'],
    cat1:'1|가방/지갑/패션잡화', cat2:'Leatherwallets', cat2t:'가죽지갑'},
  {kw:['watch','시계','wristwatch','손목시계'],
    cat1:'1|가방/지갑/패션잡화', cat2:'Watches', cat2t:'시계'},
  {kw:['hat','cap','모자','beanie','비니','bucket hat'],
    cat1:'1|가방/지갑/패션잡화', cat2:'HatsandCaps', cat2t:'모자'},
  {kw:['carrier','캐리어','luggage','여행가방','suitcase'],
    cat1:'1|가방/지갑/패션잡화', cat2:'Carrier', cat2t:'캐리어'},

  // ─── 의류 ────────────────────────────────────────────
  {kw:['clothes','clothing','의류','shirt','셔츠','t-shirt','티셔츠','top','tops','블라우스','blouse','sweater','스웨터'],
    cat1:'1|의류/잠옷/언더웨어', cat2:'T-shirts', cat2t:'티셔츠'},
  {kw:['pants','바지','trousers','slacks','shorts','반바지','jogger'],
    cat1:'1|의류/잠옷/언더웨어', cat2:'Pants', cat2t:'팬츠/바지'},
  {kw:['jeans','청바지','denim'],
    cat1:'1|의류/잠옷/언더웨어', cat2:'Jeans', cat2t:'청바지'},
  {kw:['jacket','재킷','coat','코트','hoodie','후드','zip up','jumper','점퍼','windbreaker','패딩','padding','puffer'],
    cat1:'1|의류/잠옷/언더웨어', cat2:'Coats', cat2t:'코트/점퍼'},
  {kw:['underwear','언더웨어','innerwear','bra','브라','boxer','팬티','briefs'],
    cat1:'1|의류/잠옷/언더웨어', cat2:'Underwear', cat2t:'언더웨어'},
  {kw:['swimwear','수영복','bikini','비키니','swim'],
    cat1:'1|의류/잠옷/언더웨어', cat2:'Swimwear', cat2t:'수영복'},
  {kw:['knit','니트','knitwear','cardigan','카디건'],
    cat1:'1|의류/잠옷/언더웨어', cat2:'Knittedclothing', cat2t:'니트류'},

  // ─── 휴대폰 / 전자기기 ───────────────────────────────
  {kw:['phone','핸드폰','smartphone','스마트폰','iphone','galaxy','휴대폰','mobile phone'],
    cat1:'1|휴대폰/액세서리', cat2:'Mobilephones', cat2t:'휴대폰'},
  {kw:['charger','충전기','cable','케이블','adapter','어댑터','power bank','보조배터리'],
    cat1:'1|휴대폰/액세서리', cat2:'Charger', cat2t:'충전기'},
  {kw:['earphone','이어폰','headset','헤드셋','airpods','earbuds','이어버드','headphone','헤드폰'],
    cat1:'1|휴대폰/액세서리', cat2:'Earphones', cat2t:'이어폰/헤드셋'},
  {kw:['phone case','폰케이스','케이스','phone cover','휴대폰케이스'],
    cat1:'1|휴대폰/액세서리', cat2:'Phonecase', cat2t:'휴대폰케이스'},
  {kw:['smartwatch','스마트워치','apple watch','갤럭시워치','fitbit'],
    cat1:'1|휴대폰/액세서리', cat2:'Smartwatch', cat2t:'스마트워치'},
  {kw:['laptop','노트북','macbook','notebook','맥북'],
    cat1:'1|노트북/데스크탑', cat2:'Laptops', cat2t:'노트북'},
  {kw:['tablet','태블릿','ipad','아이패드'],
    cat1:'1|노트북/데스크탑', cat2:'Tablets', cat2t:'태블릿PC'},
  {kw:['speaker','스피커','bluetooth speaker','블루투스스피커'],
    cat1:'1|사진/영상/음향가전', cat2:'Speakers', cat2t:'스피커'},
  {kw:['camera','카메라','dslr','mirrorless','미러리스','캠코더','gopro'],
    cat1:'1|사진/영상/음향가전', cat2:'Cameras', cat2t:'카메라'},

  // ─── 장난감 / 도서 / 스포츠 ─────────────────────────
  {kw:['toy','장난감','lego','레고','building blocks','블록'],
    cat1:'1|장난감/교육완구/인형', cat2:'Toys', cat2t:'장난감'},
  {kw:['doll','인형','stuffed animal','봉제인형','플러시','plush'],
    cat1:'1|장난감/교육완구/인형', cat2:'Dolls', cat2t:'인형'},
  {kw:['book','책','도서','novel','소설','magazine','잡지'],
    cat1:'1|교육/문구/사무용품', cat2:'Books', cat2t:'도서/서적'},
  {kw:['golf','골프','golf club','골프채','golf ball'],
    cat1:'1|골프/헬스/수영/자전거', cat2:'Golfequipment', cat2t:'골프용품'},
  {kw:['fitness','헬스','dumbbell','덤벨','workout','운동기구','yoga mat','요가매트'],
    cat1:'1|골프/헬스/수영/자전거', cat2:'Fitnessitems', cat2t:'헬스용품'},

  // ─── 주얼리 / 선글라스 ───────────────────────────────
  {kw:['sunglasses','선글라스','sunglass'],
    cat1:'1|쥬얼리/시계/선글라스', cat2:'Sunglasses', cat2t:'선글라스'},
  {kw:['jewel','jewellery','주얼리','necklace','목걸이','bracelet','팔찌','ring','반지','earring','귀걸이','pendant'],
    cat1:'1|쥬얼리/시계/선글라스', cat2:'Jewellery', cat2t:'주얼리/귀금속'},

];
// ★ 새 항목 추가 예시:
// {kw:['키워드1','keyword2','키워드3'], cat1:'대분류코드', cat2:'소분류코드', cat2t:'소분류한글명'},

/* ═══════════════════════════
   주소 DB (샘플 - 실제는 카카오 API 연동)
═══════════════════════════ */
const ADDR_DB = [
  {road:'강남대로 123',jibun:'역삼동 123-45',zip:'06234',city:'서울특별시 강남구'},
  {road:'테헤란로 521',jibun:'삼성동 157',zip:'06164',city:'서울특별시 강남구'},
  {road:'해운대해변로 264',jibun:'우동 1408',zip:'48099',city:'부산광역시 해운대구'},
  {road:'수영로 309',jibun:'남천동 2가 12',zip:'48306',city:'부산광역시 수영구'},
  {road:'서면로 68',jibun:'부전동 32-1',zip:'47280',city:'부산광역시 부산진구'},
  {road:'중앙로 100',jibun:'삼도일동 5',zip:'63182',city:'제주특별자치도 제주시'},
  {road:'연삼로 473',jibun:'노형동 2700',zip:'63049',city:'제주특별자치도 제주시'},
  {road:'인계로 178',jibun:'인계동 1115',zip:'16488',city:'경기도 수원시 팔달구'},
  {road:'마포대로 174',jibun:'아현동 742',zip:'04192',city:'서울특별시 마포구'},
  {road:'홍익로 6길 20',jibun:'서교동 357-4',zip:'04050',city:'서울특별시 마포구'},
  {road:'을지로 100',jibun:'을지로2가 199',zip:'04542',city:'서울특별시 중구'},
  {road:'동작대로 107',jibun:'노량진동 140',zip:'07068',city:'서울특별시 동작구'},
  {road:'광교호수공원로 180',jibun:'이의동 1376',zip:'16502',city:'경기도 수원시 영통구'},
  {road:'학동로 101',jibun:'논현동 90-4',zip:'06057',city:'서울특별시 강남구'},
];

/* ═══════════════════════════
   상태 변수
═══════════════════════════ */
let selAddr = null;
/* ═══════════════════════════
   상태 변수
═══════════════════════════ */
let itemRows = [];
let itemIdSeq = 0;
let activeItemId = null;

let selCat1 = '', selCat1Label = '';
let selCat2 = '', selCat2Label = '';
let aiSuggest = null;
const radioVals = {listpass:'1', ccgubun:'1', isbusi:'N', dutytype:'R', isfta:'N'};

/* ═══════════════════════════
   한글 → 영문 이름 자동 변환
═══════════════════════════ */

// 폴백용 자체 성씨 변환 테이블 (name.js 없을 때 사용)
const KOR_FAMILY = {
  '김':'KIM','이':'LEE','박':'PARK','최':'CHOI','정':'JEONG','강':'KANG','조':'CHO',
  '윤':'YOON','장':'JANG','임':'LIM','한':'HAN','신':'SHIN','오':'OH','서':'SEO',
  '권':'KWON','황':'HWANG','송':'SONG','안':'AHN','유':'YOO','류':'RYOO','홍':'HONG',
  '전':'JUN','고':'GOH','문':'MOON','손':'SHON','양':'YANG','배':'BAE','백':'BAEK',
  '허':'HEO','남':'NAM','심':'SHIM','노':'NOH','하':'HA','성':'SUNG','곽':'KWAK',
  '차':'CHA','구':'GOO','우':'WOO','주':'JOO','나':'NA','민':'MIN','지':'JI',
  '엄':'EOM','채':'CHAE','원':'WON','천':'CHUN','방':'BANG','공':'KONG','강':'KANG',
  '현':'HYUN','함':'HAM','변':'BYUN','염':'YEOM','여':'YEO','추':'CHU','도':'DO',
  '소':'SO','석':'SEOK','선':'SUN','설':'SEOL','마':'MA','길':'GIL','탁':'TAK',
};

// 자음(초성/중성/종성) 로마자 변환 테이블
const CHOSUNG = ['G','KK','N','D','DD','R','M','B','BB','S','SS','','J','JJ','CH','K','T','P','H'];
const JUNGSUNG = ['A','AE','YA','YAE','EO','E','YEO','YE','O','WA','WAE','OE','YO','U','Weo','WE','WI','YU','EU','UI','I'];
const JONGSUNG = ['','G','GG','GS','N','NJ','NH','D','L','LG','LM','LB','LS','LT','LP','LH','M','B','BS','S','SS','NG','J','CH','K','T','P','H'];

function korCharToEng(char) {
  const code = char.charCodeAt(0) - 0xAC00;
  if (code < 0 || code > 11171) return char; // 한글 범위 아님
  const cho = Math.floor(code / 588);
  const jung = Math.floor((code % 588) / 28);
  const jong = code % 28;
  return CHOSUNG[cho] + JUNGSUNG[jung] + JONGSUNG[jong];
}

function korWordToEng(word) {
  return [...word].map(c => {
    const code = c.charCodeAt(0);
    if (code >= 0xAC00 && code <= 0xD7A3) return korCharToEng(c);
    return c;
  }).join('');
}

function autoFillEngName(korVal) {
  const kor = korVal.trim();
  if (!kor || kor.length < 2) return;
  // 한글이 아니면 무시
  if (!/[가-힣]/.test(kor)) return;

  let engResult = '';

  // 1순위: hyundaisf.com에서 name.js 로드된 경우 → Change_Eng 사용
  if (typeof Change_Eng === 'function') {
    const mockField = { value: '' };
    Change_Eng(kor, mockField);
    if (mockField.value) engResult = mockField.value;
  }

  // 2순위: 자체 변환 (로컬 테스트용)
  if (!engResult) {
    const firstChar = kor[0];
    const rest = kor.slice(1);
    const familyEng = KOR_FAMILY[firstChar];
    if (familyEng) {
      // 성씨 변환 + 이름 음절 변환
      const givenEng = [...rest].map(c => {
        if (/[가-힣]/.test(c)) return korWordToEng(c);
        return c;
      }).join(' ');
      engResult = familyEng + ' ' + givenEng.trim();
    } else {
      // 성씨 미등록 → 전체 음절 변환
      engResult = [...kor].map((c,i) => {
        if (/[가-힣]/.test(c)) return (i===0?'':' ') + korWordToEng(c);
        return c;
      }).join('').trim();
    }
  }

  if (engResult) {
    const engEl = document.getElementById('engName');
    engEl.value = engResult.toUpperCase();
    // 자동변환 힌트 표시
    const hint = document.getElementById('engName_hint');
    if (hint) hint.style.display = 'block';
    // 에러 초기화
    setErr('engName', 'engName_err', false, '');
  }
}

/* ═══════════════════════════
   영문 강제 입력
═══════════════════════════ */
// 브랜드용 - 한글만 차단, 대소문자 유지
function engOnlyNoUpper(el, errId) {
  const orig = el.value;
  const pos = el.selectionStart;
  const beforeCursor = orig.slice(0, pos);
  const cleanBefore  = beforeCursor.replace(/[^ -]/g, '');
  const cleanFull    = orig.replace(/[^ -]/g, '');
  if (orig !== cleanFull) {
    el.value = cleanFull;
    const newPos = cleanBefore.length;
    try { el.setSelectionRange(newPos, newPos); } catch(e) {}
    if (errId) {
      const errEl = document.getElementById(errId);
      if (errEl) {
        errEl.innerHTML = '⚠ 영문으로 입력해주세요';
        errEl.style.display = 'block';
        clearTimeout(errEl._t);
        errEl._t = setTimeout(() => { errEl.style.display = 'none'; }, 2000);
      }
    }
  }
}

function engOnly(el, errId) {
  const orig = el.value;
  const pos = el.selectionStart;   // 교체 전 커서 위치

  // 허용 문자만 남기되, 앞부분(0~pos)에서 제거된 문자 수를 계산해 커서 위치 보정
  const beforeCursor = orig.slice(0, pos);
  const cleanBefore  = beforeCursor.replace(/[^A-Za-z0-9\s\-'.\/]/g, '');
  const cleanFull    = orig.replace(/[^A-Za-z0-9\s\-'.\/]/g, '').toUpperCase();

  if (orig !== cleanFull) {
    el.value = cleanFull;
    // 커서는 "앞부분에서 살아남은 문자 수" 위치로 복원
    const newPos = cleanBefore.length;
    try { el.setSelectionRange(newPos, newPos); } catch(e) {}

    if (errId) {
      const errEl = document.getElementById(errId);
      if (errEl) {
        errEl.classList.add('show');
        clearTimeout(errEl._t);
        errEl._t = setTimeout(() => errEl.classList.remove('show'), 2000);
      }
    }
  }
}
function validateEng(el, errId) {
  const ok = /^[A-Za-z0-9\s\-'.\/]*$/.test(el.value.trim());
  document.getElementById(errId).classList.toggle('show', !ok && el.value.trim().length > 0);
}

/* ═══════════════════════════
   주소 검색
═══════════════════════════ */
function searchAddr() {
  const q = document.getElementById('addr-query').value.trim();
  if (!q) return;
  document.getElementById('addr-loading').style.display = 'block';
  document.getElementById('addr-results').style.display = 'none';
  setTimeout(() => {
    document.getElementById('addr-loading').style.display = 'none';
    const res = ADDR_DB.filter(a => a.road.includes(q)||a.jibun.includes(q)||a.city.includes(q)||a.zip.includes(q));
    const el = document.getElementById('addr-results');
    if (!res.length) {
      el.innerHTML = '<div style="padding:12px;text-align:center;font-size:13px;color:var(--gray3)">검색 결과가 없습니다<br><span style="font-size:11px">예: 강남 / 해운대 / 마포 / 제주</span></div>';
    } else {
      window._addrRes = res;
      el.innerHTML = res.map((a,i) => `
        <div class="addr-result-item" onclick="pickAddr(${i})">
          <div class="addr-road">${a.city} ${a.road}</div>
          <div class="addr-jibun">지번: ${a.jibun}</div>
          <div class="zip-row"><span class="zip-pill">우편번호</span><span class="zip-num">${a.zip}</span></div>
        </div>`).join('');
    }
    el.style.display = 'block';
  }, 600);
}
function pickAddr(i) {
  const a = window._addrRes[i];
  selAddr = a;
  document.getElementById('addr-search-wrap').style.display = 'none';
  const box = document.getElementById('addr-confirmed');
  box.style.display = 'block';
  document.getElementById('confirmed-zip').textContent = a.zip;
  document.getElementById('confirmed-road').textContent = a.city + ' ' + a.road;
  document.getElementById('confirmed-jibun').textContent = '지번: ' + a.jibun;
  document.getElementById('zipcode').value = a.zip;
  document.getElementById('addr1').value = a.city + ' ' + a.road;
}
function resetAddr() {
  selAddr = null;
  document.getElementById('addr-search-wrap').style.display = 'block';
  document.getElementById('addr-confirmed').style.display = 'none';
  document.getElementById('addr-query').value = '';
  document.getElementById('addr-results').style.display = 'none';
}

/* ═══════════════════════════
   AI 표준품명 자동 분류
═══════════════════════════ */

/* ═══════════════════════════
   다중 상품 행 관리
═══════════════════════════ */
function addItemRow(data) {
  if (itemRows.length >= 10) { showToast('상품은 최대 10개까지 입력 가능합니다'); return; }
  const id = ++itemIdSeq;
  itemRows.push({ id, prodname:'', brand:'', prodsize:'', qty:1, cost:'', costsum:'',
    cat1:'', cat1Label:'', cat2:'', cat2Label:'', listpass:'0', ...(data||{}) });
  renderItemRows();
  setTimeout(() => {
    const el = document.getElementById('item-row-'+id);
    if (el) el.scrollIntoView({behavior:'smooth', block:'center'});
  }, 100);
}

function removeItemRow(id) {
  if (itemRows.length <= 1) { showToast('최소 1개의 상품은 입력해야 합니다'); return; }
  itemRows = itemRows.filter(r => r.id !== id);
  if (activeItemId === id) {
    activeItemId = null;
    selCat1=''; selCat1Label=''; selCat2=''; selCat2Label='';
  }
  renderItemRows();
}

function renderItemRows() {
  const wrap = document.getElementById('item-rows-wrap');
  if (!wrap) return;

  const CAT_LABELS = {
    '1|가방/지갑/패션잡화':'가방/패션','1|건강/병원/위생용품':'건강/위생',
    '1|노트북/데스크탑':'노트북/PC','1|의류/잠옷/언더웨어':'의류',
    '1|장난감/교육완구/인형':'장난감','1|화장품/미용용품':'화장품',
    '1|휴대폰/액세서리':'휴대폰','1|생활/수납/식기/주방기구':'생활/주방',
    '1|교육/문구/사무용품':'교육/문구','1|사진/영상/음향가전':'카메라/음향',
    '1|쥬얼리/시계/선글라스':'주얼리','1|출산/유아용품':'유아용품',
    '1|골프/헬스/수영/자전거':'골프/헬스','1|가구/조명/인테리어':'가구',
    '1|주방/생활/미용가전':'주방가전','0|건강식품/다이어트':'건강식품',
    '0|차/음료/과자/가공식품':'식품/음료','0|정육':'정육류'
  };

  wrap.innerHTML = itemRows.map((row, idx) => {
    const rowId = row.id;
    const num = idx + 1;
    const isFilled = !!row.cat2;

    // 대분류 탭 HTML - data-* 속성 사용
    const cat1Tabs = Object.entries(CAT_LABELS).map(([k, lbl]) =>
      `<span class="std-inline-tab${row.cat1===k?' on':''}"
        data-row="${rowId}" data-cat1="${encodeURIComponent(k)}" data-lbl="${encodeURIComponent(lbl)}"
        onclick="inlineSelectCat1FromEl(this)">${lbl}</span>`
    ).join('');

    // 소분류 목록 HTML - data-* 속성 사용
    const cat2Items = row.cat1 && CAT_DB[row.cat1]
      ? CAT_DB[row.cat1].map(item =>
          `<div class="std-inline-item${row.cat2===item.v?' selected':''}"
            data-row="${rowId}"
            data-cat2="${encodeURIComponent(item.v)}"
            data-cat2l="${encodeURIComponent(item.t)}"
            data-cat1="${encodeURIComponent(row.cat1)}"
            data-cat1l="${encodeURIComponent(CAT_LABELS[row.cat1]||row.cat1.split('|')[1])}"
            onclick="inlineSelectCat2FromEl(this)">${item.t}
          </div>`
        ).join('')
      : `<div style="padding:14px;text-align:center;font-size:12px;color:var(--gray3)">위에서 대분류를 먼저 선택해주세요</div>`;

    return `
    <div class="item-row" id="item-row-${rowId}">
      <div class="item-row-header">
        <span class="item-row-num">상품 ${num}</span>
        ${itemRows.length > 1 ? `<button class="item-row-del" onclick="removeItemRow(${rowId})">×</button>` : ''}
      </div>

      <div class="field">
        <div class="field-label">상품명(영문) <span class="req">*</span> <span class="eng-tag">영문만</span></div>
        <div style="display:flex;gap:7px">
          <input type="text" id="prodname-${rowId}" class="eng-only"
            placeholder="예: Nike Running Shoes, Vitamin C, SK-II Toner..."
            value="${row.prodname}"
            oninput="engOnly(this,'prodname-err-${rowId}');updateRow(${rowId},'prodname',this.value)"
            style="flex:1">
          <button class="btn-search" onclick="aiMatchInline(${rowId})"
            style="white-space:nowrap;font-size:12px;padding:9px 10px">AI 분류</button>
        </div>
        <div class="field-error" id="prodname-err-${rowId}"></div>
      </div>

      <div class="row2">
        <div class="field">
          <div class="field-label">브랜드 <span class="req">*</span></div>
          <input type="text" id="brand-${rowId}" placeholder="예: Nike, Samsung, Chanel, Kirkland..."
            value="${row.brand}" oninput="engOnlyNoUpper(this,'brand-err-${rowId}');updateRow(${rowId},'brand',this.value)">
          <div class="field-error" id="brand-err-${rowId}"></div>
        </div>
        <div class="field">
          <div class="field-label">사이즈/색상</div>
          <input type="text" id="prodsize-${rowId}" placeholder="예: L사이즈, 270mm, Navy Blue..."
            value="${row.prodsize}" oninput="updateRow(${rowId},'prodsize',this.value)">
        </div>
      </div>

      <div class="row2">
        <div class="field">
          <div class="field-label">단가(USD) <span class="req">*</span></div>
          <input type="number" id="cost-${rowId}" placeholder="0.00" step="0.01" min="0"
            value="${row.cost}"
            oninput="updateRow(${rowId},'cost',this.value);calcRowSum(${rowId})">
          <div class="field-hint" style="font-size:10px">미국 달러($) 기준 · 원화면 1350으로 나누기</div>
          <div class="field-error" id="cost-err-${rowId}"></div>
        </div>
        <div class="field">
          <div class="field-label">수량 <span class="req">*</span></div>
          <input type="number" id="qty-${rowId}" value="${row.qty}" min="1"
            oninput="updateRow(${rowId},'qty',this.value);calcRowSum(${rowId})">
        </div>
      </div>

      <div class="field">
        <div class="field-label">소계(USD)</div>
        <input type="text" id="costsum-${rowId}" readonly
          value="${row.costsum||''}" placeholder="자동계산">
      </div>

      <!-- 표준품명 — 인라인 -->
      <div class="field">
        <div class="field-label">표준품명 <span class="req">*</span></div>

        <!-- AI 추천 바 (AI분류 버튼 누르면 표시) -->
        <div class="std-ai-bar" id="std-ai-bar-${rowId}" style="display:none;border-radius:var(--radius-sm) var(--radius-sm) 0 0;margin-bottom:0">
          <span class="ai-text" id="std-ai-text-${rowId}">AI가 분류 중...</span>
          <button class="std-ai-apply" onclick="inlineApplyAI(${rowId})">✓ 적용</button>
          <button class="std-ai-skip" onclick="inlineSkipAI(${rowId})">직접선택</button>
        </div>

        <!-- 선택 트리거 버튼 -->
        <div class="std-trigger ${isFilled?'filled':'empty'}" id="std-trigger-${rowId}"
          onclick="toggleInlineStd(${rowId})">
          ${isFilled
            ? `<span style="font-weight:700">${row.cat1Label}</span>
               <span style="color:var(--gray3);margin:0 4px">›</span>
               <span style="color:var(--green);font-weight:700">${row.cat2Label}</span>
               <span style="float:right;font-size:11px;color:var(--blue)">변경 ▾</span>`
            : `<span>표준품명 선택 ▾</span>`}
        </div>

        <!-- 인라인 드롭다운 (토글) -->
        <div class="std-inline-wrap" id="std-inline-${rowId}">
          <!-- 대분류 탭 -->
          <div class="std-inline-tabs" id="std-cat1-tabs-${rowId}">
            ${cat1Tabs}
          </div>
          <!-- 소분류 목록 -->
          <div class="std-inline-sub" id="std-cat2-list-${rowId}">
            ${cat2Items}
          </div>
        </div>

        <div class="field-error" id="std-err-${rowId}"></div>
      </div>
    </div>`;
  }).join('');

  document.getElementById('item-count').textContent = itemRows.length;
  const addBtn = document.getElementById('btn-add-item');
  if (addBtn) addBtn.style.display = itemRows.length >= 10 ? 'none' : 'block';
  updateGrandTotal();
}


function updateRow(id, field, val) {
  const row = itemRows.find(r => r.id === id);
  if (row) row[field] = val;
}

function calcRowSum(id) {
  const row = itemRows.find(r => r.id === id);
  if (!row) return;
  const cost = parseFloat(row.cost) || 0;
  const qty = parseInt(row.qty) || 1;
  row.costsum = (cost * qty).toFixed(2);
  const el = document.getElementById('costsum-'+id);
  if (el) el.value = row.costsum;
  updateGrandTotal();
}

function updateGrandTotal() {
  const total = itemRows.reduce((sum, r) => sum + (parseFloat(r.costsum)||0), 0);
  const el = document.getElementById('grand-total');
  if (el) el.textContent = total.toFixed(2);
}

/* ═══════════════════════════
   인라인 표준품명 선택 함수
═══════════════════════════ */

// 드롭다운 토글
function toggleInlineStd(rowId) {
  const wrap = document.getElementById('std-inline-'+rowId);
  if (!wrap) return;
  const isOpen = wrap.classList.contains('open');
  // 다른 행 드롭다운 모두 닫기
  document.querySelectorAll('.std-inline-wrap').forEach(el => el.classList.remove('open'));
  if (!isOpen) wrap.classList.add('open');
}

// data-* 속성으로 호출되는 래퍼 함수 (HTML onclick 특수문자 문제 해결)
function inlineSelectCat1FromEl(el) {
  const rowId = parseInt(el.dataset.row);
  const cat1Val = decodeURIComponent(el.dataset.cat1);
  const cat1Label = decodeURIComponent(el.dataset.lbl);
  inlineSelectCat1(rowId, cat1Val, cat1Label);
}
function inlineSelectCat2FromEl(el) {
  const rowId = parseInt(el.dataset.row);
  const cat2Val = decodeURIComponent(el.dataset.cat2);
  const cat2Label = decodeURIComponent(el.dataset.cat2l);
  const cat1Val = decodeURIComponent(el.dataset.cat1);
  const cat1Label = decodeURIComponent(el.dataset.cat1l);
  inlineSelectCat2(rowId, cat2Val, cat2Label, cat1Val, cat1Label);
}

// 대분류 선택
function inlineSelectCat1(rowId, cat1Val, cat1Label) {
  const row = itemRows.find(r => r.id === rowId);
  if (!row) return;
  row.cat1 = cat1Val; row.cat1Label = cat1Label;
  row.cat2 = ''; row.cat2Label = '';

  // 탭 active 표시
  const tabsEl = document.getElementById('std-cat1-tabs-'+rowId);
  if (tabsEl) {
    tabsEl.querySelectorAll('.std-inline-tab').forEach(t => {
      t.classList.toggle('on', t.textContent.trim() === cat1Label);
    });
  }
  // 소분류 목록 업데이트
  const subEl = document.getElementById('std-cat2-list-'+rowId);
  if (subEl) {
    const items = CAT_DB[cat1Val] || [];
    subEl.innerHTML = items.map(item =>
      `<div class="std-inline-item"
        data-row="${rowId}"
        data-cat2="${encodeURIComponent(item.v)}"
        data-cat2l="${encodeURIComponent(item.t)}"
        data-cat1="${encodeURIComponent(cat1Val)}"
        data-cat1l="${encodeURIComponent(cat1Label)}"
        onclick="inlineSelectCat2FromEl(this)">${item.t}
      </div>`
    ).join('') || `<div style="padding:12px;text-align:center;font-size:12px;color:var(--gray3)">항목 없음</div>`;
  }
  // 트리거 업데이트 (대분류만 선택된 상태)
  const trigger = document.getElementById('std-trigger-'+rowId);
  if (trigger) {
    trigger.className = 'std-trigger empty';
    trigger.innerHTML = `<span style="color:var(--blue);font-weight:500">${cat1Label}</span> <span style="color:var(--gray3)">› 소분류 선택 ▾</span>`;
  }
}

// 소분류 선택 → 완료
function inlineSelectCat2(rowId, cat2Val, cat2Label, cat1Val, cat1Label) {
  const row = itemRows.find(r => r.id === rowId);
  if (!row) return;
  row.cat1 = cat1Val; row.cat1Label = cat1Label;
  row.cat2 = cat2Val; row.cat2Label = cat2Label;
  row.listpass = cat1Val.startsWith('1') ? '1' : '0';

  // 표준품명에 따라 목록통관/일반통관 자동 업데이트
  autoSetListpass(row.listpass, cat1Val, cat2Label);

  // 드롭다운 닫기
  const wrap = document.getElementById('std-inline-'+rowId);
  if (wrap) wrap.classList.remove('open');

  // 트리거 업데이트 (완료 상태)
  const trigger = document.getElementById('std-trigger-'+rowId);
  if (trigger) {
    trigger.className = 'std-trigger filled';
    trigger.innerHTML = `<span style="font-weight:700;color:var(--gray5)">${cat1Label}</span>
      <span style="color:var(--gray3);margin:0 4px">›</span>
      <span style="color:var(--green);font-weight:700">${cat2Label}</span>
      <span style="float:right;font-size:11px;color:var(--blue)">변경 ▾</span>`;
  }

  // 에러 제거
  const errEl = document.getElementById('std-err-'+rowId);
  if (errEl) { errEl.innerHTML=''; errEl.classList.remove('show'); }
}

// AI 분류 버튼 → 해당 행 상품명으로 추천
function aiMatchInline(rowId) {
  const row = itemRows.find(r => r.id === rowId);
  if (!row) return;
  const prodname = (document.getElementById('prodname-'+rowId)?.value||'').trim().toLowerCase();
  if (!prodname) { showToast('상품명(영문)을 먼저 입력해주세요'); return; }

  let matched = null;
  for (const rule of AI_KEYWORD_MAP) {
    if (rule.kw.some(k => prodname.includes(k.toLowerCase()))) { matched = rule; break; }
  }

  const aiBar = document.getElementById('std-ai-bar-'+rowId);
  const aiText = document.getElementById('std-ai-text-'+rowId);
  const wrap = document.getElementById('std-inline-'+rowId);

  if (matched) {
    // AI 추천 바 표시
    if (aiBar) {
      aiBar.style.display = 'flex';
      aiBar.dataset.cat1 = matched.cat1;
      aiBar.dataset.cat1label = matched.cat1.split('|')[1];
      aiBar.dataset.cat2 = matched.cat2;
      aiBar.dataset.cat2label = matched.cat2t;
    }
    if (aiText) {
      aiText.innerHTML = `✦ AI 추천: <strong>${matched.cat1.split('|')[1]}</strong> › <strong>${matched.cat2t}</strong>`;
    }
    // 드롭다운 열기 + 해당 대분류 미리 선택
    if (wrap) wrap.classList.add('open');
    inlineSelectCat1(rowId, matched.cat1, matched.cat1.split('|')[1]);
  } else {
    // 매칭 없으면 드롭다운만 열기
    if (aiBar) aiBar.style.display = 'none';
    if (wrap) wrap.classList.add('open');
    showToast('직접 대분류를 선택해주세요');
  }
}

// AI 추천 적용
function inlineApplyAI(rowId) {
  const aiBar = document.getElementById('std-ai-bar-'+rowId);
  if (!aiBar) return;
  inlineSelectCat2(
    rowId,
    aiBar.dataset.cat2,
    aiBar.dataset.cat2label,
    aiBar.dataset.cat1,
    aiBar.dataset.cat1label
  );
  aiBar.style.display = 'none';
}

// AI 추천 건너뛰고 직접선택
function inlineSkipAI(rowId) {
  const aiBar = document.getElementById('std-ai-bar-'+rowId);
  if (aiBar) aiBar.style.display = 'none';
  const wrap = document.getElementById('std-inline-'+rowId);
  if (wrap) wrap.classList.add('open');
}

// 하위 호환용 (기존 코드에서 호출될 수 있는 함수들 — 빈 함수로 유지)
function applyAiSuggest() {}
function applyStdToActiveRow() {}
function buildCat1Grid() {}
function selectCat1() {}
function selectCat2() {}
function showStdSelected() {}
function changeStd() {}
function openStdForRow(id) { toggleInlineStd(id); }
function aiMatchCategoryForRow(id) { aiMatchInline(id); }
function calcSum() { if(itemRows.length>0) calcRowSum(itemRows[0].id); }



/* ═══════════════════════════
   표준품명 → 목록통관 자동 연동
═══════════════════════════ */
function autoSetListpass(listpass, cat1Val, cat2Label) {
  const isList = listpass === '1';

  // 라디오 버튼 자동 선택
  const onId  = isList ? 'r_list_1' : 'r_list_0';
  const offId = isList ? 'r_list_0' : 'r_list_1';
  const onEl  = document.getElementById(onId);
  const offEl = document.getElementById(offId);
  if (onEl)  onEl.classList.add('on');
  if (offEl) offEl.classList.remove('on');
  radioVals.listpass = listpass;

  // 안내 토스트
  const cat1Label = cat1Val.split('|')[1] || '';
  const typeText  = isList ? '목록통관' : '일반통관';
  const reason    = isList
    ? `${cat1Label}은 목록통관 가능 품목입니다`
    : `${cat1Label}은 일반통관 품목입니다`;
  showToast(`📋 ${typeText}으로 자동 설정 — ${reason}`);

  // 4단계 통관 섹션으로 시각적 안내 (잠깐 하이라이트)
  const listBtn = document.getElementById(onId);
  if (listBtn) {
    listBtn.style.transition = 'all .3s';
    listBtn.style.transform = 'scale(1.08)';
    setTimeout(() => { listBtn.style.transform = ''; }, 600);
  }

  // "자동선택" 배지 표시
  const badge = document.getElementById('listpass-auto-badge');
  if (badge) badge.style.display = 'inline';

  // 힌트 텍스트 업데이트
  const hint = document.getElementById('listpass-hint');
  if (hint) {
    if (isList) {
      hint.innerHTML = `✓ <strong>${cat2Label}</strong> 품목은 목록통관 가능합니다 · <a href="#" style="color:var(--blue)">목록가능품목 확인</a>`;
      hint.style.color = 'var(--green)';
    } else {
      hint.innerHTML = `ℹ <strong>${cat2Label}</strong> 품목은 일반통관 대상입니다 · <a href="#" style="color:var(--blue)">목록가능품목 확인</a>`;
      hint.style.color = 'var(--amber)';
    }
  }
}

function clearAutoListpass() {
  // 직접 선택시 자동선택 배지 제거
  const badge = document.getElementById('listpass-auto-badge');
  if (badge) badge.style.display = 'none';
  const hint = document.getElementById('listpass-hint');
  if (hint) {
    hint.innerHTML = '$150 이하 개인물품 목록통관 가능 · <a href="#" style="color:var(--blue)">목록가능품목 확인</a>';
    hint.style.color = '';
  }
}

function pickRadio(field, val, onId, offId) {
  radioVals[field] = val;
  const onEl = document.getElementById(onId);
  const offEl = document.getElementById(offId);
  if (onEl) onEl.classList.add('on');
  if (offEl) offEl.classList.remove('on');
}

// 합계 자동계산 (하위 호환용)
function calcSum() { if(itemRows.length>0) calcRowSum(itemRows[0].id); }

/* ═══════════════════════════
   토스트 알림
═══════════════════════════ */
// 개인통관고유부호 실시간 형식 체크
function checkPccc(el) {
  const val = el.value;
  const status = document.getElementById('pccc-status');
  if (!status) return;
  if (val.length === 0) { status.style.display='none'; return; }
  if (val.length < 13) {
    status.style.display='block';
    status.style.background='#fff3e0';
    status.style.color='#e65100';
    status.style.border='1px solid #ffcc02';
    status.textContent = `⏳ ${val.length}/13자리 입력 중...`;
  } else if (val.length === 13 && val[0] === 'P' && /^P[0-9]{12}$/.test(val)) {
    status.style.display='block';
    status.style.background='#e6f6ed';
    status.style.color='#1a7f4b';
    status.style.border='1px solid #a7f3d0';
    status.textContent = '✓ 올바른 형식이에요!';
  } else {
    status.style.display='block';
    status.style.background='#fdecea';
    status.style.color='#c0392b';
    status.style.border='1px solid #f8a5a5';
    status.textContent = val[0] !== 'P' ? '⚠ P로 시작해야 해요 (대문자)' : '⚠ P 다음에 숫자 12자리를 입력해주세요';
  }
}

let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toast-msg');
  m.textContent = msg;
  t.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

/* 필드 에러 표시/해제 */
function setErr(id, errId, show, msg) {
  const el = document.getElementById(id);
  const err = document.getElementById(errId || (id + '_err'));
  if (el) el.classList.toggle('invalid', show);
  if (err) {
    if (show && msg) err.innerHTML = '⚠ ' + msg;
    err.style.display = show ? 'block' : 'none';
    err.classList.toggle('show', show);
    if (!show) err.innerHTML = '';
  }
}
function clearErr(id, errId) { setErr(id, errId, false); }

/* 스텝별 필수항목 검증 */
function validateStep(n) {
  let firstErr = null;

  function chk(id, errId, failCond, msg) {
    setErr(id, errId, failCond, msg);
    if (failCond && !firstErr) firstErr = {id, msg};
    return !failCond;
  }
  function fv(id) { return (document.getElementById(id)?.value || '').trim(); }

  if (n === 1) {
    const name = fv('send_name');
    const nameParts = name.split(/\s+/).filter(Boolean);
    chk('send_name', 'send_name_err',
      !name || name.trim().length < 2 || !/^[A-Za-z\s\-'.]+$/.test(name),
      !name ? '영문 이름을 입력해주세요' :
      name.trim().length < 2 ? '이름을 2자 이상 입력해주세요' : '영문으로만 입력해주세요');

    const tel = fv('send_telno');
    const telDigits = tel.replace(/\D/g,'');
    chk('send_telno', 'send_telno_err', !tel || telDigits.length < 7,
      !tel ? '전화번호를 입력해주세요' : '올바른 전화번호를 입력해주세요 (예: 510-600-3423)');

    const addr = fv('send_address');
    chk('send_address', 'send_address_err',
      !addr || addr.length < 5,
      !addr ? '미국 주소를 입력해주세요' : '주소를 더 자세히 입력해주세요');
  }

  if (n === 2) {
    const kor = fv('korName');
    chk('korName', 'korName_err', !kor || kor.length < 2 || !/[가-힣]/.test(kor),
      !kor ? '수취인 한글 이름을 입력해주세요' : '한글로 2자 이상 입력해주세요');

    const eng = fv('engName');
    const engParts = eng.split(/\s+/).filter(Boolean);
    chk('engName', 'engName_err',
      !eng || engParts.length < 2 || engParts.some(p => p.length < 2),
      !eng ? '수취인 영문 이름을 입력해주세요' : '성과 이름을 모두 입력해주세요 (예: HONG GILDONG)');

    const mob = fv('mobile');
    const mobDigits = mob.replace(/\D/g,'');
    chk('mobile', 'mobile_err',
      !mob || mobDigits.length < 10 || mobDigits.length > 11,
      !mob ? '핸드폰 번호를 입력해주세요' : '올바른 번호를 입력해주세요 (예: 010-1234-5678)');

    const pccc = fv('registno');
    const pcccFail = !pccc || pccc.length !== 13 || pccc[0] !== 'P' || !/^\d{12}$/.test(pccc.slice(1));
    chk('registno', 'registno_err', pcccFail,
      !pccc ? '개인통관고유부호를 입력해주세요' :
      pccc.length !== 13 ? `13자리를 입력해주세요 (현재 ${pccc.length}자리)` :
      pccc[0] !== 'P' ? 'P로 시작하는 번호를 입력해주세요' :
      'P + 숫자 12자리 형식으로 입력해주세요');

    const addrErr = document.getElementById('addr-err');
    if (!selAddr) {
      const aw = document.getElementById('addr-search-wrap');
      aw.style.border = '1.5px solid var(--red)';
      aw.style.background = '#fff8f8';
      if (addrErr) { addrErr.innerHTML='⚠ 한국 주소를 검색해서 선택해주세요'; addrErr.classList.add('show'); }
      if (!firstErr) firstErr = {id:'addr-query', msg:'한국 주소를 검색해서 선택해주세요'};
    } else {
      document.getElementById('addr-search-wrap').style.border = '';
      document.getElementById('addr-search-wrap').style.background = '';
      if (addrErr) { addrErr.innerHTML=''; addrErr.classList.remove('show'); }
    }
  }

  if (n === 3) {
    // 다중 상품 각 행 검증
    itemRows.forEach((row, idx) => {
      const num = idx + 1;
      const prod = (document.getElementById('prodname-'+row.id)?.value||'').trim();
      const brand = (document.getElementById('brand-'+row.id)?.value||'').trim();
      const cost = parseFloat(document.getElementById('cost-'+row.id)?.value||'');
      const qty = parseInt(document.getElementById('qty-'+row.id)?.value||'');

      // 상품명
      const prodFail = !prod || prod.length < 3 || !/[a-zA-Z]/.test(prod);
      setErr('prodname-'+row.id, 'prodname-err-'+row.id, prodFail,
        !prod ? `상품${num} 상품명을 입력해주세요` :
        prod.length<3 ? `상품${num} 상품명을 3자 이상 입력해주세요` : `상품${num} 영문으로 입력해주세요`);
      if (prodFail && !firstErr) firstErr = {id:'prodname-'+row.id, msg:`상품${num} 상품명(영문)을 입력해주세요`};

      // 브랜드
      const brandFail = !brand || brand.length < 2;
      setErr('brand-'+row.id, 'brand-err-'+row.id, brandFail,
        !brand ? `상품${num} 브랜드를 입력해주세요` : `상품${num} 브랜드를 2자 이상 입력해주세요`);
      if (brandFail && !firstErr) firstErr = {id:'brand-'+row.id, msg:`상품${num} 브랜드를 입력해주세요`};

      // 단가
      const costFail = isNaN(cost) || cost <= 0;
      setErr('cost-'+row.id, 'cost-err-'+row.id, costFail,
        `상품${num} 단가(USD)를 입력해주세요`);
      if (costFail && !firstErr) firstErr = {id:'cost-'+row.id, msg:`상품${num} 단가를 입력해주세요`};

      // 표준품명
      const stdErrEl = document.getElementById('std-err-'+row.id);
      const stdFail = !row.cat2;
      if (stdErrEl) {
        stdErrEl.innerHTML = stdFail ? '⚠ 표준품명을 선택해주세요' : '';
        stdErrEl.classList.toggle('show', stdFail);
      }
      // 드롭다운 열어서 시각적으로 안내
      if (stdFail) {
        const trigger = document.getElementById('std-trigger-'+row.id);
        if (trigger) trigger.style.border = '1.5px solid var(--red)';
      }
      if (stdFail && !firstErr) firstErr = {id:'std-trigger-'+row.id, msg:`상품${num} 표준품명을 선택해주세요`};
    });
  }

  if (firstErr) {
    showToast(firstErr.msg);
    if (firstErr.id) {
      const el = document.getElementById(firstErr.id);
      if (el) setTimeout(() => el.scrollIntoView({behavior:'smooth', block:'center'}), 100);
    }
    return false;
  }
  return true;
}


/* ═══════════════════════════
   스텝 이동 (검증 포함)
═══════════════════════════ */
function goStep(n) {
  // 앞으로 이동할 때만 현재 스텝 검증 (뒤로가기는 검증 안함)
  const currentStep = [1,2,3,4,5].find(i => {
    const el = document.getElementById('step'+i);
    return el && el.style.display !== 'none';
  }) || 1;

  if (n > currentStep) {
    // 현재 스텝 검증
    if (!validateStep(currentStep)) return;
    // 이전 에러 스타일 초기화
    document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  }

  [1,2,3,4,5].forEach(i => {
    document.getElementById('step'+i).style.display = i===n ? 'block' : 'none';
    // step4(통관) 진입 시 회원유형 감지해서 전자상거래 구분 자동 설정
    if (i === 4 && i === n) {
      const isbusiEl = document.getElementById('isbusi');
      const curIsbusi = isbusiEl ? isbusiEl.value : 'N';
      setTimeout(() => updateCcgubun(curIsbusi), 50);
    }
    const si = document.getElementById('si'+i);
    const sc = document.getElementById('sc'+i);
    if (i < n)      { si.className='step-item done';   sc.textContent='✓'; }
    else if (i===n) { si.className='step-item active'; sc.textContent=i; }
    else            { si.className='step-item';         sc.textContent=i; }
  });
  document.getElementById('stepdone').style.display = 'none';
  if (n===5) buildSummary();
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ═══════════════════════════
   요약 빌드
═══════════════════════════ */
function buildSummary() {
  const addrText = selAddr
    ? `[${selAddr.zip}] ${selAddr.city} ${selAddr.road}`
    : '주소 미입력';
  const detail = v('addr2');
  const rows = [
    ['발송인(영문)', v('send_name')],
    ['발송인 전화', v('send_telno')],
    ['미국 주소', v('send_address')],
    ['수취인(한글)', v('korName')],
    ['수취인(영문)', v('engName')],
    ['핸드폰', v('mobile')],
    ['통관고유부호', v('registno')],
    ['한국 주소', addrText + (detail ? ' ' + detail : '')],
    ...itemRows.map((row,idx) => [
      `상품${idx+1}`,
      `${row.prodname}${row.brand?' / '+row.brand:''} · $${row.cost}×${row.qty}개 · ${row.cat2Label||'표준품명미선택'}`
    ]),
    ['상품 종류', itemRows.length + '종'],
    ['박스 수', v('packagecnt') + '박스'],
    ['목록통관', radioVals.listpass==='1'?'목록통관':'일반통관'],
    ['관세 부담', radioVals.dutytype==='R'?'수취인 부담':'송화인 부담'],
  ];
  document.getElementById('summary-body').innerHTML = rows
    .filter(([,val])=>val)
    .map(([l,val])=>`<div class="summary-row"><span class="sum-label">${l}</span><span class="sum-val">${val}</span></div>`)
    .join('');
}

function v(id) { return (document.getElementById(id)?.value || '').trim(); }

/* ═══════════════════════════
   실제 폼 제출 (hyundaisf.com 세션 사용)
═══════════════════════════ */
function submitOrder() {
  // 최종 제출 전 검증
  if (!v('send_name') || !v('send_telno') || !v('send_address')) {
    showToast('발송인 정보를 모두 입력해주세요'); goStep(1); return;
  }
  if (!v('korName') || !v('mobile') || !v('registno')) {
    showToast('수취인 정보를 모두 입력해주세요'); goStep(2); return;
  }
  if (!selAddr) {
    showToast('한국 배송지 주소를 선택해주세요'); goStep(2); return;
  }
  // 상품 전체 검증
  for (const [idx, row] of itemRows.entries()) {
    const num = idx + 1;
    if (!row.prodname || row.prodname.length < 3) {
      showToast(`상품${num} 상품명을 입력해주세요`); goStep(3); return;
    }
    if (!row.brand || row.brand.length < 2) {
      showToast(`상품${num} 브랜드를 입력해주세요`); goStep(3); return;
    }
    if (!row.cost || parseFloat(row.cost) <= 0) {
      showToast(`상품${num} 단가를 입력해주세요`); goStep(3); return;
    }
    if (!row.cat2) {
      showToast(`상품${num} 표준품명을 선택해주세요`); goStep(3); return;
    }
  }

  // 로딩 표시
  document.getElementById('overlay').classList.add('show');

  // 기본 필드 채우기
  const baseMap = {
    f_send_name:'send_name', f_send_telno:'send_telno', f_send_address:'send_address',
    f_korName:'korName', f_engName:'engName', f_telno:'telno', f_mobile:'mobile',
    f_registno:'registno', f_zipcode:'zipcode', f_addr1:'addr1', f_addr2:'addr2',
    f_tranmemo:'tranmemo', f_centermemo:'centermemo',
    f_trackingno:'trackingno', f_packagecnt:'packagecnt',
  };
  Object.entries(baseMap).forEach(([fid, sid]) => {
    const el = document.getElementById(fid);
    const src = document.getElementById(sid);
    if (el && src) el.value = src.value;
  });
  // 라디오 값
  document.getElementById('f_listpass').value = radioVals.listpass;
  document.getElementById('f_ccgubun').value = radioVals.ccgubun;
  document.getElementById('f_isbusi').value = radioVals.isbusi;
  document.getElementById('f_dutytype').value = radioVals.dutytype;
  document.getElementById('f_isfta').value = radioVals.isfta;

  // 다중 상품 hidden 필드 동적 생성
  // ddlinputcnt = 상품 개수
  const container = document.getElementById('f_items_container');
  container.innerHTML = '';
  const addHidden = (name, val) => {
    const inp = document.createElement('input');
    inp.type = 'hidden'; inp.name = name; inp.value = val;
    container.appendChild(inp);
  };
  addHidden('ddlinputcnt', itemRows.length);
  itemRows.forEach((row, idx) => {
    // 기존 폼과 동일한 name으로 여러 개 제출 (배열 방식)
    addHidden('prodname', row.prodname);
    addHidden('brand', row.brand);
    addHidden('prodsize', row.prodsize);
    addHidden('qty', row.qty);
    addHidden('cost', row.cost);
    addHidden('costsum', row.costsum);
    addHidden('ddlAllcategory1', row.cat1);
    addHidden('ddlAllcategory2', row.cat2);
    addHidden('item_listpass', row.listpass);
    addHidden('trackingno', v('trackingno'));
    addHidden('orderno', '');
  });

  // 실제 폼 제출
  // GitHub Pages 테스트 모드 - 실제 제출 대신 확인 메시지
  document.getElementById('overlay').classList.remove('show');
  alert('✓ 테스트 완료!\n\n실제 서버(hyundaisf.com)에서는 이 단계에서 배송신청이 완료됩니다.');
}

/* ═══════════════════════════
   전자상거래 구분 자동 업데이트
═══════════════════════════ */
function updateCcgubun(isbusiVal) {
  const btn1    = document.getElementById('r_cc_1');   // 전자상거래물품
  const btn2    = document.getElementById('r_cc_2');   // 개인간 선물
  const hint    = document.getElementById('ccgubun-hint');
  const notice  = document.getElementById('ccgubun-notice');

  if (isbusiVal === 'Y') {
    // 전자상거래(사업자) 고객: 전자상거래물품 기본 + 개인간 선물 선택 가능
    if (btn1) btn1.style.display = '';
    if (hint) hint.style.display = 'none';
    if (notice) notice.style.display = '';
    // 기본값: 전자상거래물품(1)
    pickRadio('ccgubun','1','r_cc_1','r_cc_2');
  } else {
    // 개인 고객: 개인간 선물 고정
    if (btn1) btn1.style.display = 'none';
    if (hint) { hint.style.display = ''; hint.textContent = '개인 고객은 개인간 선물로 자동 설정됩니다'; }
    if (notice) notice.style.display = 'none';
    pickRadio('ccgubun','2','r_cc_2','r_cc_1');
  }
}

/* ═══════════════════════════
   발송 방법 선택 & Pirate Ship 연동
═══════════════════════════ */

// 패널 토글 (한 번에 하나만 열림)
function toggleMethod(type) {
  const panels = {
    dropoff: 'dropoff-panel',
    pirate:  'pirate-panel',
    online:  'online-panel',
  };
  const target = document.getElementById(panels[type]);
  const isOpen = target?.classList.contains('show');

  // 모두 닫기
  Object.values(panels).forEach(id => {
    document.getElementById(id)?.classList.remove('show');
  });

  // 클릭한 것만 토글
  if (!isOpen) {
    target?.classList.add('show');

    // Pirate Ship 패널 열릴 때 발송인 정보 자동 채우기
    if (type === 'pirate') fillPirateFromInfo();

    // 부드럽게 스크롤
    setTimeout(() => target?.scrollIntoView({behavior:'smooth', block:'center'}), 100);
  }
}

// 발송인 정보를 폼에서 읽어서 채우기
function fillPirateFromInfo() {
  const name    = v('send_name')  || v('f_send_name')  || '';
  const tel     = v('send_telno') || v('f_send_telno') || '510-600-3423';
  const addr    = v('send_address') || v('f_send_address') || '';

  const el = document.getElementById('copy-from');
  if (el) {
    el.innerHTML = [
      name || '(발송인 이름)',
      addr || '(발송인 주소)',
      'Tel: ' + (tel || ''),
    ].filter(Boolean).join('<br>');
  }
}

// 텍스트 복사 (copy-data div 내용)
function copyText(divId, btn) {
  const el = document.getElementById(divId);
  if (!el) return;
  const text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ 복사됨';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '복사'; btn.classList.remove('copied'); }, 2000);
  }).catch(() => {
    // 구버전 브라우저 폴백
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = '✓ 복사됨';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '복사'; btn.classList.remove('copied'); }, 2000);
  });
}

// 창고 주소 복사 (Online 오더용)
function copyWarehouseAddr(btn) {
  const senderName = v('send_name') || v('f_send_name') || 'YOUR NAME';
  const text = `AIRWAY EXPRESS SF
${senderName}
35 Ingold Rd
Burlingame, CA 94010
Tel: 510-600-3423`;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ 복사됨';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '주소 복사'; btn.classList.remove('copied'); }, 2000);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = '✓ 복사됨';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '주소 복사'; btn.classList.remove('copied'); }, 2000);
  });
}

// Pirate Ship 새창으로 열기
function openPirateShip() {
  window.open('https://ship.pirateship.com/ship', '_blank', 'noopener');
}

/* ═══════════════════════════
   초기화
═══════════════════════════ */
function resetAll() {
  selAddr = null; selCat1 = ''; selCat1Label = ''; selCat2 = ''; selCat2Label = ''; aiSuggest = null;
  itemRows = []; itemIdSeq = 0; activeItemId = null;
  Object.assign(radioVals, {listpass:'1',ccgubun:'1',isbusi:'N',dutytype:'R',isfta:'N'});
  document.querySelectorAll('input:not([type=hidden]),textarea').forEach(el=>{
    el.value = el.id==='packagecnt'||el.id==='qty' ? '1' : '';
  });
  resetAddr();
  document.getElementById('stepdone').style.display = 'none';
  document.getElementById('std-selected-display').style.display = 'none';
  document.getElementById('manual-select-ui').style.display = 'none';
  document.getElementById('ai-suggest').style.display = 'none';
  document.getElementById('std-empty').style.display = 'block';
  document.getElementById('ai-badge').textContent = '미선택';
  document.getElementById('ai-badge').className = 'ai-match-badge';
  ['r_list_1','r_cc_1','r_biz_n','r_duty_r','r_fta_n'].forEach(id => {
    const el = document.getElementById(id); if(el) el.classList.add('on');
  });
  ['r_list_0','r_cc_2','r_biz_y','r_duty_s','r_fta_y'].forEach(id => {
    const el = document.getElementById(id); if(el) el.classList.remove('on');
  });
  addItemRow();
  goStep(1);
}
// 외부 클릭시 인라인 드롭다운 닫기
document.addEventListener('click', function(e) {
  if (!e.target.closest('.std-inline-wrap') &&
      !e.target.closest('.std-trigger') &&
      !e.target.closest('.std-ai-bar') &&
      !e.target.closest('.btn-search')) {
    document.querySelectorAll('.std-inline-wrap').forEach(el => el.classList.remove('open'));
  }
});

/* ═══════════════════════════
   빠른 입력 템플릿
═══════════════════════════ */

// 템플릿 데이터
// ⚠ 세관 신고 가격은 고객이 직접 판단·결정해야 합니다
// 아래 값은 일반적인 예시이며 고객이 자유롭게 수정할 수 있습니다
const TEMPLATES = {

  // ── 이지박스 중고의류 (성인 여성)
  easebox: {
    label: '이지박스 (중고의류)',
    notice: '👗 중고 여성의류 이지박스 템플릿이 적용됐어요. 수량과 가격을 실제에 맞게 수정해주세요.',
    items: [
      { prodname:'Used Womens Shirts', brand:'Used', prodsize:'Mixed', qty:5, cost:3,
        cat1:'1|의류/잠옷/언더웨어', cat1Label:'의류/언더웨어', cat2:'T-shirts', cat2Label:'티셔츠', listpass:'1' },
      { prodname:'Used Womens Pants', brand:'Used', prodsize:'Mixed', qty:3, cost:4,
        cat1:'1|의류/잠옷/언더웨어', cat1Label:'의류/언더웨어', cat2:'Pants', cat2Label:'팬츠/바지', listpass:'1' },
      { prodname:'Used Womens Dresses', brand:'Used', prodsize:'Mixed', qty:2, cost:5,
        cat1:'1|의류/잠옷/언더웨어', cat1Label:'의류/언더웨어', cat2:'T-shirts', cat2Label:'티셔츠', listpass:'1' },
    ]
  },

  // ── 이지박스 아동의류
  easebox_kids: {
    label: '이지박스 (아동)',
    notice: '👶 아동의류 이지박스 템플릿이 적용됐어요. 수량과 가격을 수정해주세요.',
    items: [
      { prodname:'Used Kids Shirts', brand:'Used', prodsize:'Mixed', qty:5, cost:2,
        cat1:'1|의류/잠옷/언더웨어', cat1Label:'의류/언더웨어', cat2:'Babygarments', cat2Label:'아동의류', listpass:'1' },
      { prodname:'Used Kids Pants', brand:'Used', prodsize:'Mixed', qty:4, cost:2,
        cat1:'1|의류/잠옷/언더웨어', cat1Label:'의류/언더웨어', cat2:'Babygarments', cat2Label:'아동의류', listpass:'1' },
      { prodname:'Used Kids Jackets', brand:'Used', prodsize:'Mixed', qty:2, cost:4,
        cat1:'1|의류/잠옷/언더웨어', cat1Label:'의류/언더웨어', cat2:'Babygarments', cat2Label:'아동의류', listpass:'1' },
    ]
  },

  // ── 이지박스 신발/잡화
  easebox_shoes: {
    label: '이지박스 (신발/잡화)',
    notice: '👟 중고 신발·잡화 이지박스 템플릿이 적용됐어요.',
    items: [
      { prodname:'Used Womens Shoes', brand:'Used', prodsize:'Mixed', qty:3, cost:4,
        cat1:'1|가방/지갑/패션잡화', cat1Label:'가방/패션잡화', cat2:'Textitlematerialsfootwear', cat2Label:'신발', listpass:'1' },
      { prodname:'Used Handbags', brand:'Used', prodsize:'Mixed', qty:2, cost:5,
        cat1:'1|가방/지갑/패션잡화', cat1Label:'가방/패션잡화', cat2:'Bagsandcases', cat2Label:'가방핸드백', listpass:'1' },
      { prodname:'Used Womens Shirts', brand:'Used', prodsize:'Mixed', qty:4, cost:3,
        cat1:'1|의류/잠옷/언더웨어', cat1Label:'의류/언더웨어', cat2:'T-shirts', cat2Label:'티셔츠', listpass:'1' },
    ]
  },

  // ── 이지박스 책/교재
  easebox_books: {
    label: '이지박스 (책/교재)',
    notice: '📚 책·교재 이지박스 템플릿이 적용됐어요.',
    items: [
      { prodname:'Used Textbooks', brand:'Used', prodsize:'', qty:5, cost:3,
        cat1:'1|교육/문구/사무용품', cat1Label:'교육/문구', cat2:'Books', cat2Label:'도서/서적', listpass:'1' },
      { prodname:'Used Books', brand:'Used', prodsize:'', qty:5, cost:2,
        cat1:'1|교육/문구/사무용품', cat1Label:'교육/문구', cat2:'Books', cat2Label:'도서/서적', listpass:'1' },
    ]
  },

  // ── 새상품 의류/잡화
  new_clothes: {
    label: '새상품 (의류/잡화)',
    notice: '🛍 새상품 의류·잡화 템플릿이 적용됐어요.',
    items: [
      { prodname:'Womens Shirts', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'1|의류/잠옷/언더웨어', cat1Label:'의류/언더웨어', cat2:'T-shirts', cat2Label:'티셔츠', listpass:'1' },
      { prodname:'Womens Pants', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'1|의류/잠옷/언더웨어', cat1Label:'의류/언더웨어', cat2:'Pants', cat2Label:'팬츠/바지', listpass:'1' },
    ]
  },

  // ── 화장품/스킨케어
  cosmetics: {
    label: '화장품/스킨케어',
    notice: '💄 화장품·스킨케어 템플릿이 적용됐어요.',
    items: [
      { prodname:'Skin Care Cream', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'1|화장품/미용용품', cat1Label:'화장품/미용용품', cat2:'Skincarecosmetics', cat2Label:'스킨케어화장품', listpass:'1' },
      { prodname:'Toner', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'1|화장품/미용용품', cat1Label:'화장품/미용용품', cat2:'Skincarecosmetics', cat2Label:'스킨케어화장품', listpass:'1' },
      { prodname:'Serum', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'1|화장품/미용용품', cat1Label:'화장품/미용용품', cat2:'Skincarecosmetics', cat2Label:'스킨케어화장품', listpass:'1' },
    ]
  },

  // ── 건강식품/비타민
  vitamins: {
    label: '건강식품/비타민',
    notice: '💊 건강식품·비타민 템플릿이 적용됐어요. ※ 건강식품은 일반통관 대상입니다.',
    items: [
      { prodname:'Vitamin C Supplement', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'0|건강식품/다이어트', cat1Label:'건강식품', cat2:'Vitamins', cat2Label:'비타민/영양제', listpass:'0' },
      { prodname:'Omega 3 Fish Oil', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'0|건강식품/다이어트', cat1Label:'건강식품', cat2:'Vitamins', cat2Label:'비타민/영양제', listpass:'0' },
    ]
  },

  // ── 전자제품
  electronics: {
    label: '전자제품',
    notice: '📱 전자제품 템플릿이 적용됐어요.',
    items: [
      { prodname:'Phone Accessories', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'1|휴대폰/액세서리', cat1Label:'휴대폰/액세서리', cat2:'Phoneaccessories', cat2Label:'휴대폰 액세서리', listpass:'1' },
    ]
  },

  // ── 식품/스낵
  snacks: {
    label: '식품/스낵',
    notice: '🍫 식품·스낵 템플릿이 적용됐어요. ※ 식품류는 일반통관 대상입니다.',
    items: [
      { prodname:'Chocolate Snacks', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'0|차/음료/과자/가공식품', cat1Label:'식품/음료', cat2:'Snacks', cat2Label:'과자/스낵', listpass:'0' },
      { prodname:'Health Beverages', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'0|차/음료/과자/가공식품', cat1Label:'식품/음료', cat2:'Beverages', cat2Label:'음료', listpass:'0' },
    ]
  },

  // ── 유아용품
  baby: {
    label: '유아용품',
    notice: '🍼 유아용품 템플릿이 적용됐어요.',
    items: [
      { prodname:'Baby Clothing', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'1|출산/유아용품', cat1Label:'유아용품', cat2:'Babyclothing', cat2Label:'아기의류', listpass:'1' },
      { prodname:'Baby Products', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'1|출산/유아용품', cat1Label:'유아용품', cat2:'Babyproducts', cat2Label:'유아용품', listpass:'1' },
    ]
  },

  // ── 골프용품
  golf: {
    label: '골프용품',
    notice: '⛳ 골프용품 템플릿이 적용됐어요.',
    items: [
      { prodname:'Golf Equipment', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'1|골프/헬스/수영/자전거', cat1Label:'골프/헬스', cat2:'Golfequipment', cat2Label:'골프용품', listpass:'1' },
      { prodname:'Golf Clothing', brand:'', prodsize:'', qty:1, cost:0,
        cat1:'1|의류/잠옷/언더웨어', cat1Label:'의류/언더웨어', cat2:'Swimwear', cat2Label:'수영복', listpass:'1' },
    ]
  },
};

let activeTemplate = null;

function applyTemplate(key, btnEl) {
  const tmpl = TEMPLATES[key];
  if (!tmpl) return;
  activeTemplate = key;

  // 버튼 active 표시
  document.querySelectorAll('.template-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  // 기존 상품 행 초기화 후 템플릿 적용
  itemRows = []; itemIdSeq = 0;
  tmpl.items.forEach(item => {
    addItemRow({
      prodname:   item.prodname,
      brand:      item.brand,
      prodsize:   item.prodsize,
      qty:        item.qty,
      cost:       item.cost > 0 ? String(item.cost) : '',
      costsum:    item.cost > 0 ? String(item.cost * item.qty) : '',
      cat1:       item.cat1,
      cat1Label:  item.cat1Label,
      cat2:       item.cat2,
      cat2Label:  item.cat2Label,
      listpass:   item.listpass,
    });
  });

  // 합계 계산
  itemRows.forEach(r => calcRowSum(r.id));

  // 첫 번째 상품으로 목록통관 자동 설정
  const first = itemRows[0];
  if (first && first.cat1) autoSetListpass(first.listpass, first.cat1, first.cat2Label);

  // 안내 메시지 표시
  showToast(`✓ "${tmpl.label}" 템플릿 적용 — 수량·가격을 직접 수정해주세요`);

  // 스캔 로드 바 활용해서 템플릿 안내
  const bar = document.getElementById('scan-loaded-bar');
  if (bar) {
    bar.querySelector('span:first-child').textContent = `✦ ${tmpl.notice}`;
    bar.classList.add('show');
  }

  // 첫 번째 상품 행으로 스크롤
  setTimeout(() => {
    const firstRow = document.getElementById('item-row-' + itemRows[0]?.id);
    if (firstRow) firstRow.scrollIntoView({behavior:'smooth', block:'center'});
  }, 200);
}

/* ═══════════════════════════
   AI 스캔 연동
═══════════════════════════ */
function openAiScan() {
  // 새 창으로 스캔 페이지 열기
  const scanWin = window.open('ai_product_scan.html', 'ai_scan',
    'width=480,height=780,scrollbars=yes,resizable=yes');
  // 결과 수신 함수 등록
  window.receiveScannedProducts = function(products) {
    loadScannedProducts(products);
  };
  // 1초마다 localStorage 체크 (팝업 차단 시 폴백)
  const checkInterval = setInterval(() => {
    const stored = localStorage.getItem('scanned_products');
    if (stored) {
      try {
        const products = JSON.parse(stored);
        loadScannedProducts(products);
        localStorage.removeItem('scanned_products');
        clearInterval(checkInterval);
      } catch(e) {}
    }
    if (scanWin && scanWin.closed) clearInterval(checkInterval);
  }, 500);
}

function loadScannedProducts(products) {
  if (!products || products.length === 0) return;
  // 기존 행 초기화 후 스캔 결과 로드
  itemRows = []; itemIdSeq = 0;
  products.forEach(p => {
    addItemRow({
      prodname: p.prodname || '',
      brand: p.brand || '',
      prodsize: p.prodsize || '',
      cost: p.cost || '',
      qty: parseInt(p.qty) || 1,
      costsum: p.costsum || '',
      cat1: p.cat1 || '',
      cat1Label: p.cat1Label || '',
      cat2: p.cat2 || '',
      cat2Label: p.cat2Label || '',
      listpass: p.listpass || '0',
    });
  });
  // calcSum 전체
  itemRows.forEach(r => calcRowSum(r.id));

  // 첫 번째 상품의 표준품명으로 목록통관 자동 설정
  const firstRow = itemRows[0];
  if (firstRow && firstRow.cat1) {
    autoSetListpass(firstRow.listpass, firstRow.cat1, firstRow.cat2Label);
  }

  // 로드 완료 알림 바 표시
  const bar = document.getElementById('scan-loaded-bar');
  if (bar) bar.classList.add('show');
  showToast(`✓ ${products.length}개 상품이 AI 스캔으로 입력됐습니다`);
}

function clearScanResult() {
  itemRows = []; itemIdSeq = 0;
  addItemRow();
  const bar = document.getElementById('scan-loaded-bar');
  if (bar) bar.classList.remove('show');
}

// 페이지 로드 시 localStorage 스캔 결과 확인
window.addEventListener('load', () => {
  const stored = localStorage.getItem('scanned_products');
  if (stored) {
    try {
      const products = JSON.parse(stored);
      if (products && products.length > 0) loadScannedProducts(products);
      localStorage.removeItem('scanned_products');
    } catch(e) {}
  }
});

// 페이지 로드시 초기 상품 행 1개 생성
addItemRow();


