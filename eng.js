// ===========================================
// LOGIC DARK MODE (TỪ meun.txt)
// Phải chạy trước để tránh màn hình bị "chớp"
// ===========================================
// Load saved theme
const currentMode = localStorage.getItem('theme') || 'light';
if (currentMode === 'dark') {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
}

// ===========================================
// CÀI ĐẶT QUIZ (MỚI)
// ===========================================
const REVIEW_INTERVAL = 5; // Ôn lại câu sai sau 5 câu đúng (X = 5)

// Biến toàn cục cho Quiz Từ Vựng
let correctWordCount = 0, incorrectWordCount = 0, originalWordDeckLength = 0;
let wordMistakePile = [], newCorrectWordCounter = 0;

// Biến toàn cục cho Quiz Số Đếm
let correctNumberCount = 0, incorrectNumberCount = 0, originalNumberDeckLength = 0;
let numberMistakePile = [], newCorrectNumberCounter = 0;


// ===========================================
// DỮ LIỆU TỪ VỰNG TỪ TẤT CẢ CÁC UNIT
// ===========================================
const vocabularyData = {
    // === UNIT 1 (Original) ===
    u1p1: [ { en: "I", vi: "tôi", ipa: "/ai/" }, { en: "you", vi: "bạn, các bạn", ipa: "/ju/" }, { en: "we", vi: "chúng tôi", ipa: "/wi/" }, { en: "they", vi: "họ, chúng", ipa: "/ /" }, { en: "she", vi: "cô ấy", ipa: "AS" }, { en: "he", vi: "anh ấy", ipa: "/hi/" }, { en: "it", vi: "nó", ipa: "/it/" } ],
    u1p2: [ { en: "my", vi: "của tôi", ipa: "/mai/" }, { en: "your", vi: "của bạn, của các bạn", ipa: "/jo:(r)/" }, { en: "our", vi: "của chúng tôi", ipa: "/'avǝ(r)/" }, { en: "their", vi: "của họ, của chúng", ipa: "/deǝ(r)/" }, { en: "her", vi: "của cô ấy", ipa: "/hə(r)/" }, { en: "his", vi: "của anh ấy", ipa: "/hiz/" }, { en: "its", vi: "của nó", ipa: "/its/" } ],
    u1p3: [ { en: "man", vi: "người đàn ông", ipa: "/mæn/" }, { en: "woman", vi: "người phụ nữ", ipa: "/'women/" }, { en: "father", vi: "bố", ipa: "/'fa:də(r)/" }, { en: "mother", vi: "mẹ", ipa: "/' (r)/" }, { en: "teacher", vi: "giáo viên", ipa: "/'ti:tfə(r)/" }, { en: "student", vi: "học sinh, sinh viên", ipa: "/'stju:dnt/" }, { en: "brother", vi: "anh trai/ em trai", ipa: "" }, { en: "sister", vi: "chị gái/ em gái", ipa: "" }, { en: "baby", vi: "đứa bé", ipa: "" }, { en: "child", vi: "đứa trẻ, đứa con", ipa: "" }, { en: "dog", vi: "chó", ipa: "" }, { en: "cat", vi: "mèo", ipa: "" }, { en: "book", vi: "sách", ipa: "" }, { en: "car", vi: "ô tô", ipa: "" }, { en: "orange", vi: "quả cam", ipa: "" }, { en: "apple", vi: "quả táo", ipa: "" } ],
    u1p4: [ { en: "tall", vi: "cao", ipa: "/to:1/" }, { en: "short", vi: "thấp, ngắn", ipa: "/fo:t/" }, { en: "big", vi: "lớn", ipa: "/big/" }, { en: "small", vi: "nhỏ", ipa: "/smǝ:1/" }, { en: "happy", vi: "vui vẻ", ipa: "/'hæpi/" }, { en: "sad", vi: "buồn", ipa: "/sæd/" } ],
    // === UNIT 2 (Original) ===
    u2p1: [ { en: "uncle", vi: "chú, bác", ipa: "/  /" }, { en: "aunt", vi: "dì, cô", ipa: "/a:nt/" }, { en: "parent", vi: "bố/mẹ", ipa: "/'peǝrǝnt/" }, { en: "children", vi: "con cái, trẻ em", ipa: "/'tfildrǝn/" }, { en: "room", vi: "phòng", ipa: "/ru:m/" }, { en: "kitchen", vi: "bếp", ipa: "/'kitfin/" }, { en: "daughter", vi: "con gái", ipa: "/dɔ:tə(r)/" }, { en: "son", vi: "con trai", ipa: "/san/" }, { en: "picture", vi: "bức tranh", ipa: "/'pıktfə(r)/" }, { en: "box", vi: "cái hộp", ipa: "/boks/" }, { en: "doctor", vi: "bác sĩ", ipa: "/'dvktə(r)/" }, { en: "lawyer", vi: "luật sư", ipa: "/   (r)/" }, { en: "firefighter", vi: "lính cứu hoả", ipa: "/'farǝfaitə(r)/" }, { en: "friend", vi: "bạn bè", ipa: "/frend/" } ],
    u2p2: [ { en: "lovely", vi: "đáng yêu", ipa: "/'lavli/" }, { en: "late", vi: "muộn", ipa: "/lert/" }, { en: "busy", vi: "bận rộn", ipa: "/'bızi/" }, { en: "kind", vi: "tốt bụng", ipa: "/kaind/" }, { en: "new", vi: "mới", ipa: "/nju:/" }, { en: "old", vi: "cũ", ipa: "/ǝuld/" } ],
    // === UNIT 3 (Original) ===
    u3p1: [ { en: "grandfather", vi: "ông", ipa: "/'grænfa: (r)/" }, { en: "grandmother", vi: "bà", ipa: "/'grænmaðǝ(r)/" }, { en: "cousin", vi: "anh/chị/em họ", ipa: "/ kazn/" }, { en: "classmate", vi: "bạn cùng lớp", ipa: "/'kla:smert/" }, { en: "banana", vi: "quả chuối", ipa: "/bə'na:nǝ/" }, { en: "cake", vi: "bánh", ipa: "/keik/" }, { en: "bag", vi: "cái túi, cái cặp", ipa: "/bæg/" }, { en: "desk", vi: "cái bàn", ipa: "/desk/" }, { en: "chair", vi: "cái ghế", ipa: "/tfeǝ(r)/" }, { en: "shirt", vi: "áo sơ mi", ipa: "3:t/" }, { en: "hat", vi: "cái mũ", ipa: "/hæt/" }, { en: "jeans", vi: "quần bò", ipa: "/dzi:nz/" }, { en: "pillow", vi: "cái gối", ipa: "/'pılǝu/" }, { en: "sock", vi: "cái tất", ipa: "/spk/" } ],
    
    // === UNIT 4 (Original) ===
    // *** ĐÃ SỬA 'park' VÀ 'work' ***
    u4p1: [ { en: "park (n)", vi: "công viên", ipa: "/pa:k/" }, { en: "garden", vi: "vườn", ipa: "/'ga:dn/" }, { en: "wardrobe", vi: "tủ quần áo", ipa: "/'wɔ:drǝub/" }, { en: "shopping centre", vi: "trung tâm mua sắm", ipa: "/'fupiŋ sentə(r)/" }, { en: "table", vi: "cái bàn", ipa: "/'teibl/" }, { en: "wall", vi: "tường", ipa: "/wɔ:1/" }, { en: "floor", vi: "sàn nhà", ipa: "/flo:(r)/" }, { en: "sofa", vi: "ghế sô pha", ipa: "/'sǝufa/" }, { en: "school", vi: "trường học", ipa: "/sku:1/" }, { en: "work (n)", vi: "nơi làm việc", ipa: "/w3:k/" }, { en: "home", vi: "nhà", ipa: "/hǝom/" }, { en: "supermarket", vi: "siêu thị", ipa: "/'su:pǝma:kıt/" }, { en: "party", vi: "bữa tiệc", ipa: "/'pa:ti/" }, { en: "airport", vi: "sân bay", ipa: "/'eǝpɔ:t/" }, { en: "train station", vi: "nhà ga tàu", ipa: "/trein 'steifn/" }, { en: "clock", vi: "đồng hồ", ipa: "/klok/" }, { en: "class", vi: "lớp học", ipa: "/kla:s/" }, { en: "English", vi: "tiếng Anh", ipa: "/mglıf" }, { en: "maths", vi: "toán", ipa: "/mæls/" }, { en: "exam", vi: "kỳ thi", ipa: "/ig'zæm/" }, { en: "birthday", vi: "ngày sinh nhật", ipa: "/'b3:0de1/" } ],
    
    u4p2: [ { en: "morning", vi: "buổi sáng", ipa: "/'mo:nın/" }, { en: "afternoon", vi: "buổi chiều", ipa: "/a:ftə'nu:n/" }, { en: "evening", vi: "buổi tối", ipa: "/'i:vnın/" }, { en: "lunchtime", vi: "giờ ăn trưa", ipa: "/'lantſtaim/" }, { en: "noon", vi: "12 giờ trưa", ipa: "/nu:n/" }, { en: "midday", vi: "12 giờ trưa", ipa: "/mid'dei/" }, { en: "night", vi: "ban đêm", ipa: "/nart/" }, { en: "midnight", vi: "nửa đêm", ipa: "/'mıdnart/" } ],
    u4p3: [ { en: "Monday", vi: "thứ 2", ipa: "/'mander/" }, { en: "Tuesday", vi: "thứ 3", ipa: "/'tju:zder/" }, { en: "Wednesday", vi: "thứ 4", ipa: "/'wenzder/" }, { en: "Thursday", vi: "thứ 5", ipa: "/'03:zder/" }, { en: "Friday", vi: "thứ 6", ipa: "/'fraider/" }, { en: "Saturday", vi: "thứ 7", ipa: "/'sætǝder/" }, { en: "Sunday", vi: "chủ nhật", ipa: "/'sAnder/" } ],
    // === UNIT 5 (Original) ===
    // *** ĐÃ SỬA 'watch' VÀ 'drink' ***
    u5p1: [ { en: "play", vi: "chơi", ipa: "/pler/" }, { en: "watch (v)", vi: "xem", ipa: "/wotf/" }, { en: "read", vi: "đọc", ipa: "/ri:d/" }, { en: "walk", vi: "đi bộ", ipa: "/wo:k/" }, { en: "learn", vi: "học", ipa: "/13:n/" }, { en: "visit", vi: "ghé thăm", ipa: "/'VIZIT/" }, { en: "wash", vi: "rửa", ipa: "/WDS/" }, { en: "study", vi: "học", ipa: "/'stadi/" }, { en: "write", vi: "viết", ipa: "/rait/" }, { en: "listen", vi: "nghe", ipa: "/'lısn/" }, { en: "speak", vi: "nói", ipa: "/spi:k/" }, { en: "ride", vi: "đạp, cưỡi", ipa: "/raid/" }, { en: "live", vi: "sống", ipa: "/lιν/" }, { en: "like", vi: "thích", ipa: "laik/" }, { en: "enjoy", vi: "thích", ipa: "/ın'd301/" }, { en: "sing", vi: "hát", ipa: "/sin/" }, { en: "dance", vi: "nhảy", ipa: "/da:ns/" }, { en: "have", vi: "có", ipa: "/hæv/" }, { en: "do", vi: "làm", ipa: "/du:/" }, { en: "eat", vi: "ăn", ipa: "/i:t/" }, { en: "go", vi: "đi", ipa: "/gǝu/" }, { en: "travel", vi: "đi lại, du lịch", ipa: "/'trævl/" }, { en: "help", vi: "giúp đỡ", ipa: "/help/" }, { en: "drink (v)", vi: "uống", ipa: "/drink/" } ],
    
    u5p2: [ { en: "chess", vi: "cờ vua", ipa: "/tfes/" }, { en: "candy", vi: "kẹo", ipa: "/'kændi/" }, { en: "football", vi: "bóng đá", ipa: "/'futbo:1/" }, { en: "volleyball", vi: "bóng chuyền", ipa: "/ volibo:1/" }, { en: "badminton", vi: "cầu lông", ipa: "/'bædmintən/" }, { en: "tennis", vi: "quần vợt", ipa: "/'tenis/" }, { en: "guitar", vi: "đàn ghi-ta", ipa: "/gi'ta:(r)/" }, { en: "dishes", vi: "bát đĩa", ipa: "/dıfız/" }, { en: "homework", vi: "bài tập về nhà", ipa: "/'hǝomw3:k/" }, { en: "housework", vi: "công việc nhà", ipa: "/'hausw3:k/" }, { en: "bike", vi: "xe đạp", ipa: "/bark/" }, { en: "bus", vi: "xe buýt", ipa: "/bas/" }, { en: "coffee", vi: "cà phê", ipa: "/'kpfi/" }, { en: "university", vi: "đại học", ipa: "/ju:nı'v3:səti/" } ],
    // === UNIT 6 (Original) ===
    // *** ĐÃ SỬA 'work' ***
    u6p1: [ { en: "work (v)", vi: "làm việc", ipa: "/w3:k/" }, { en: "swim", vi: "bơi lội", ipa: "/swIm/" }, { en: "drive", vi: "lái xe", ipa: "/draiv/" }, { en: "share", vi: "dùng chung, ở chung", ipa: "/feǝ(r)/" }, { en: "phone", vi: "gọi điện", ipa: "/fǝon/" }, { en: "get up", vi: "thức dậy", ipa: "/get /" }, { en: "teach", vi: "dạy học", ipa: "/ti:tf/" }, { en: "jog", vi: "chạy bộ", ipa: "/d3pg/" }, { en: "buy", vi: "mua", ipa: "/bar/" }, { en: "water", vi: "tưới nước", ipa: "/'wɔ:tə(r)/" } ],
    
    u6p2: [ { en: "meat", vi: "thịt", ipa: "/mi:t/" }, { en: "plant", vi: "cây trồng", ipa: "/pla:nt/" }, { en: "weekend", vi: "cuối tuần", ipa: "/wi:k'end/" }, { en: "flat", vi: "căn hộ", ipa: "/flæt/" }, { en: "café", vi: "quán cà phê", ipa: "/'kæfer/" }, { en: "free time", vi: "thời gian rảnh", ipa: "/fri: taım/" }, { en: "ice cream", vi: "kem", ipa: "/'ais kri:m/" }, { en: "food", vi: "đồ ăn", ipa: "/fu:d/" }, { en: "hospital", vi: "bệnh viện", ipa: "/'hospitl/" }, { en: "gym", vi: "phòng tập thể hình", ipa: "/dzım/" } ],
    // === UNIT 7 (Mới) ===
    // *** ĐÃ SỬA 'clean' ***
    u7p1: [ { en: "rain", vi: "mưa", ipa: "/rein/" }, { en: "snow", vi: "rơi tuyết", ipa: "/snǝ /" }, { en: "wear", vi: "mặc, đội", ipa: "/weǝ(r)/" }, { en: "finish", vi: "hoàn thành", ipa: "/'fınıf/" }, { en: "sleep", vi: "ngủ", ipa: "/sli:p/" }, { en: "understand", vi: "hiểu", ipa: "/ Andə stænd/" }, { en: "rent", vi: "thuê", ipa: "/rent/" }, { en: "clean (v)", vi: "lau dọn", ipa: "/kli:n/" }, { en: "feed", vi: "cho ăn", ipa: "/fi:d/" }, { en: "want", vi: "muốn", ipa: "/wont/" } ],
    
    u7p2: [ { en: "bank", vi: "ngân hàng", ipa: "/bænk/" }, { en: "fruit", vi: "quả", ipa: "/fru:t/" }, { en: "vegetable", vi: "rau củ", ipa: "/'vedztəbl/" }, { en: "tea", vi: "trà", ipa: "/ti:/" }, { en: "cinema", vi: "rạp chiếu phim", ipa: "/'sınəmə/" }, { en: "question", vi: "câu hỏi", ipa: "/'kwestfǝn/" }, { en: "pie", vi: "bánh", ipa: "/pai/" }, { en: "toy", vi: "đồ chơi", ipa: "/tol/" }, { en: "violin", vi: "vi-ô-lông", ipa: "/ vaiǝ'lın/" }, { en: "window", vi: "cửa sổ", ipa: "/'windǝu/" }, { en: "summer", vi: "mùa hè", ipa: "/'samǝ(r)/" }, { en: "winter", vi: "mùa đông", ipa: "/'wintǝ(r)/" } ],
    // === UNIT 8 (TỪ PDF) ===
    u8p1: [ { en: "rise", vi: "mọc", ipa: "/raiz/" }, { en: "set", vi: "lặn", ipa: "/set/" }, { en: "leave", vi: "rời", ipa: "/li:v/" }, { en: "start", vi: "bắt đầu", ipa: "/sta:t/" }, { en: "boil", vi: "sôi", ipa: "/boil/" }, { en: "see", vi: "ghé thăm", ipa: "/si:/" }, { en: "hate", vi: "ghét", ipa: "/hert/" }, { en: "tidy", vi: "dọn dẹp", ipa: "/'tardi/" }, { en: "meet", vi: "gặp gỡ", ipa: "/mi:t/" }, { en: "cycle", vi: "đạp xe", ipa: "/'saıkl/" }, { en: "run", vi: "chạy", ipa: "/ran/" }, { en: "turn", vi: "biến thành", ipa: "/t3:n/" }, { en: "cry", vi: "khóc", ipa: "/krai/" } ],
    u8p2: [ { en: "Sun", vi: "mặt trời", ipa: "/san/" }, { en: "world", vi: "thế giới", ipa: "/w3:ld/" }, { en: "East", vi: "phía Đông", ipa: "/i:st/" }, { en: "West", vi: "phía Tây", ipa: "/west/" }, { en: "spring", vi: "mùa xuân", ipa: "/sprin/" }, { en: "autumn/fall", vi: "mùa thu", ipa: "/'ɔ:təm//fɔ:l/" }, { en: "people", vi: "mọi người", ipa: "/'pi:pl/" }, { en: "brother-in-law", vi: "anh/em rể", ipa: "/'braðər ɪn lɔ:/" }, { en: "sister-in-law", vi: "chị/em dâu", ipa: "/'sıstər ɪn lɔ:/" }, { en: "breakfast", vi: "bữa sáng", ipa: "/'brekfǝst/" }, { en: "dinner", vi: "bữa tối", ipa: "/'dınə(r)/" }, { en: "bedroom", vi: "phòng ngủ", ipa: "/'bedru:m/" }, { en: "cartoon", vi: "hoạt hình", ipa: "/ka: tu:n/" }, { en: "novel", vi: "tiểu thuyết", ipa: "/'nɒvl/" }, { en: "tree", vi: "cây cối", ipa: "/tri:/" } ],
    
    // *** ĐÃ SỬA 'clean' ***
    u8p3: [ { en: "hot", vi: "nóng", ipa: "/hɒt/" }, { en: "active", vi: "năng động", ipa: "/'æktiv/" }, { en: "cute", vi: "đáng yêu", ipa: "/kju:t/" }, { en: "clean (adj)", vi: "sạch sẽ", ipa: "/kli:n/" }, { en: "tidy", vi: "gọn gàng", ipa: "/'tardi/" }, { en: "neat", vi: "ngăn nắp", ipa: "/ni:t/" }, { en: "yellow", vi: "màu vàng", ipa: "/'jelǝu/" }, { en: "careful", vi: "cẩn thận", ipa: "/'keǝfl/" } ],
    
    u8p4: [ { en: "always", vi: "luôn luôn", ipa: "/'ɔ:lweiz/" }, { en: "usually", vi: "thường thường", ipa: "/'ju:zuǝli/" }, { en: "often", vi: "thường", ipa: "/'ɒfn/, /'ɒftən/" }, { en: "sometimes", vi: "thỉnh thoảng", ipa: "/'samtaimz/" }, { en: "hardly", vi: "hiếm khi", ipa: "/'ha:dli/" }, { en: "never", vi: "không bao giờ", ipa: "/'nevə(r)/" } ],
    // === UNIT 9 (TỪ PDF) ===
    u9p1: [ { en: "flower", vi: "hoa", ipa: "/'flavǝ(r)/" }, { en: "girl", vi: "cô gái", ipa: "/g3:l/" }, { en: "actor", vi: "diễn viên", ipa: "" }, { en: "moment", vi: "khoảnh khắc", ipa: "/'məmənt/" }, { en: "boy", vi: "chàng trai", ipa: "/bɔɪ/" }, { en: "happiness", vi: "niềm vui", ipa: "/'hæpinǝs/" }, { en: "city", vi: "thành phố", ipa: "/'siti/" }, { en: "artist", vi: "nghệ sĩ", ipa: "/'a:tist/" }, { en: "weather", vi: "thời tiết", ipa: "/'weðǝ(r)/" }, { en: "visitor", vi: "du khách", ipa: "/'vızıtə(r)/" } ],
    u9p2: [ { en: "nice", vi: "tốt, đẹp", ipa: "/nais/" }, { en: "good", vi: "tốt, khoẻ", ipa: "/gud/" }, { en: "great", vi: "tuyệt vời", ipa: "/greit/" }, { en: "easy", vi: "dễ dàng", ipa: "/'i:zi/" }, { en: "beautiful", vi: "đẹp", ipa: "/'bju:tıfl/" }, { en: "suitable", vi: "phù hợp", ipa: "/'su:təbl/" }, { en: "careless", vi: "bất cẩn", ipa: "/'keələs/" } ],
    u9p3: [ { en: "quickly", vi: "nhanh chóng", ipa: "/'kwikli/" }, { en: "carefully", vi: "đầy cẩn thận", ipa: "/'keəfəli/" }, { en: "carelessly", vi: "đầy bất cẩn", ipa: "/'keələsli/" }, { en: "fast", vi: "nhanh", ipa: "/fa:st/" }, { en: "well", vi: "tốt, giỏi", ipa: "/wel/" }, { en: "hard", vi: "chăm chỉ", ipa: "/ha:d/" }, { en: "very", vi: "rất", ipa: "/'veri/" }, { en: "quite", vi: "khá", ipa: "/kwart/" }, { en: "slowly", vi: "một cách chậm rãi", ipa: "/'slǝuli/" } ],
    // === UNIT 10 (TỪ PDF) ===
    // *** ĐÃ SỬA 'close' ***
    u10p1: [ { en: "rest", vi: "nghỉ ngơi", ipa: "/rest/" }, { en: "close (v)", vi: "đóng lại", ipa: "/klǝuz/" }, { en: "type", vi: "gõ", ipa: "/taip/" }, { en: "give", vi: "đưa cho", ipa: "/gɪv/" }, { en: "talk", vi: "nói chuyện", ipa: "/to:k/" }, { en: "fly", vi: "bay", ipa: "/flaɪ/" }, { en: "stand", vi: "đứng", ipa: "/stænd/" }, { en: "wait", vi: "đợi", ipa: "/weɪt/" } ],
    
    u10p2: [ { en: "gate", vi: "cổng", ipa: "/gert/" }, { en: "living room", vi: "phòng khách", ipa: "/'lıvıŋ ru:m/" }, { en: "dentist", vi: "nha sĩ", ipa: "/'dentist/" }, { en: "letter", vi: "lá thư", ipa: "/'letǝ(r)/" }, { en: "keyboard", vi: "bàn phím", ipa: "/'ki:bo:d/" }, { en: "yard", vi: "sân", ipa: "/ja:d/" } ],
    // === UNIT 11 (TỪ PDF) ===
    u11p1: [ { en: "attend", vi: "tham dự", ipa: "/ǝ'tend/" }, { en: "make", vi: "làm", ipa: "/meik/" }, { en: "mop", vi: "lau, chùi", ipa: "/mɒp/" }, { en: "shop", vi: "mua sắm", ipa: "/ʃɒp/" }, { en: "sit", vi: "ngồi", ipa: "/sIt/" }, { en: "build", vi: "xây dựng", ipa: "/bild/" }, { en: "love", vi: "yêu thích", ipa: "/lʌv/" }, { en: "know", vi: "biết", ipa: "/nǝo/" }, { en: "think", vi: "nghĩ rằng", ipa: "/θɪŋk/" }, { en: "believe", vi: "tin rằng", ipa: "/bɪ'li:v/" } ],
    u11p2: [ { en: "radio", vi: "đài phát thanh", ipa: "/'reidiǝo/" }, { en: "meeting", vi: "cuộc họp", ipa: "/'mi:tın/" }, { en: "answer", vi: "câu trả lời", ipa: "/'a:nsə(r)/" }, { en: "skirt", vi: "váy", ipa: "/sk3:t/" } ],
    // === UNIT 12 (TỪ PDF) ===
    u12p1: [ { en: "begin", vi: "bắt đầu", ipa: "/bi'gin/" }, { en: "break", vi: "làm vỡ", ipa: "/breık/" }, { en: "bring", vi: "mang theo", ipa: "/brin/" }, { en: "come", vi: "đến", ipa: "/kam/" }, { en: "cost", vi: "trị giá", ipa: "/kɒst/" }, { en: "cut", vi: "cắt", ipa: "/kat/" }, { en: "draw", vi: "vẽ", ipa: "/drǝ:/" }, { en: "find", vi: "tìm thấy", ipa: "/faind/" }, { en: "get", vi: "có được", ipa: "/get/" }, { en: "hear", vi: "nghe", ipa: "/hiǝ(r)/" }, { en: "hold", vi: "tổ chức, cầm, nắm", ipa: "/hǝold/" }, { en: "keep", vi: "giữ", ipa: "/ki:p/" }, { en: "pay", vi: "trả tiền", ipa: "/per/" }, { en: "say", vi: "nói", ipa: "/ser/" }, { en: "sell", vi: "bán", ipa: "/sel/" }, { en: "send", vi: "gửi", ipa: "/send/" }, { en: "spend", vi: "dành thời gian, tiền bạc", ipa: "/spend/" }, { en: "take", vi: "cầm, mang", ipa: "/terk/" }, { en: "tell", vi: "kể, bảo", ipa: "/tel/" }, { en: "win", vi: "chiến thắng", ipa: "/wɪn/" }, { en: "feel", vi: "cảm thấy", ipa: "/fi:l/" } ],
    u12p2: [ { en: "hour", vi: "giờ", ipa: "/'aʊǝ(r)/" }, { en: "day", vi: "ngày", ipa: "/der/" }, { en: "story", vi: "câu chuyện", ipa: "/'sto:ri/" }, { en: "vase", vi: "cái bình", ipa: "/va:z/, /veiz/" }, { en: "movie", vi: "bộ phim", ipa: "/'mu:vi/" } ],
    // === UNIT 13 (Mới) ===
    u13p1: [ { en: "bill", vi: "hoá đơn", ipa: "" }, { en: "suit", vi: "bộ com lê", ipa: "" }, { en: "factory", vi: "nhà máy", ipa: "" }, { en: "family", vi: "gia đình", ipa: "" }, { en: "shoe", vi: "giày", ipa: "" }, { en: "contest", vi: "cuộc thi", ipa: "" } ],
    
    // *** ĐÃ SỬA 'close' ***
    u13p2: [ { en: "cold", vi: "lạnh", ipa: "" }, { en: "fresh", vi: "tươi, mới", ipa: "" }, { en: "close (adj)", vi: "gần, thân thiết", ipa: "" } ],
    
    u13p3: [ { en: "late", vi: "muộn", ipa: "/lert/" }, { en: "abroad", vi: "nước ngoài", ipa: "/ə'bro:d/" } ],
    // === UNIT 14 (Mới) ===
    u14p1: [ { en: "chat", vi: "tán gẫu", ipa: "/tfæt/" }, { en: "fix", vi: "sửa chữa", ipa: "/fiks/" }, { en: "stop", vi: "dừng lại", ipa: "/stop/" }, { en: "arrive", vi: "đến", ipa: "/ə'raiv/" }, { en: "change", vi: "thay, thay đổi", ipa: "/tfeind3/" }, { en: "follow", vi: "lắng nghe, theo dõi", ipa: "/'fɒlǝo/" } ],
    u14p2: [ { en: "bicycle", vi: "xe đạp", ipa: "/'baısıkl/" }, { en: "accident", vi: "vụ tai nạn", ipa: "/'æksıdənt/" }, { en: "police", vi: "cảnh sát", ipa: "/pə'li:s/" }, { en: "clothes", vi: "quần áo", ipa: "/kləudz/" }, { en: "game", vi: "trò chơi", ipa: "/geim/" } ],
    // === UNIT 15 (Mới) ===
    u15p1: [ { en: "receive", vi: "nhận được", ipa: "/ri'si:v/" }, { en: "search", vi: "tìm kiếm", ipa: "/s3:tf/" }, { en: "marry", vi: "kết hôn", ipa: "/'mæri/" }, { en: "lose", vi: "mất", ipa: "/lu:z/" }, { en: "paint", vi: "sơn", ipa: "/peint/" }, { en: "smoke", vi: "hút thuốc", ipa: "/smǝuk/" } ],
    
    // *** ĐÃ SỬA 'time (lần)' VÀ 'watch (đồng hồ)' ***
    u15p2: [ { en: "match", vi: "trận đấu", ipa: "/mæts/" }, { en: "song", vi: "bài hát", ipa: "/sɒŋ/" }, { en: "essay", vi: "bài luận", ipa: "/'eser/" }, { en: "minute", vi: "phút", ipa: "/'minit/" }, { en: "key", vi: "chìa khoá", ipa: "/ki:/" }, { en: "message", vi: "tin nhắn", ipa: "/'mesıd3/" }, { en: "time (lần)", vi: "lần", ipa: "/taim/" }, { en: "watch (n)", vi: "đồng hồ", ipa: "/wɒtʃ/" } ],
    
    // === UNIT 16 (Mới) ===
    u16p1: [ { en: "return", vi: "quay trở lại", ipa: "/ri't3:n/" }, { en: "check", vi: "kiểm tra", ipa: "/tfek/" }, { en: "lend", vi: "cho mượn", ipa: "/lend/" }, { en: "look", vi: "trông có vẻ", ipa: "/luk/" }, { en: "cancel", vi: "huỷ bỏ", ipa: "/'kænsəl/" }, { en: "carry", vi: "mang, vác", ipa: "/'kæri/" }, { en: "turn on", vi: "bật lên", ipa: "/t3:n ɒn/" } ],
    
    // *** ĐÃ SỬA 'drink' ***
    u16p2: [ { en: "suitcase", vi: "va li", ipa: "/'su:tkeis/" }, { en: "drink (n)", vi: "đồ uống", ipa: "/drink/" }, { en: "juice", vi: "nước ép", ipa: "/dzu:s/" }, { en: "heater", vi: "máy sưởi", ipa: "/'hi:tə(r)/" }, { en: "partner", vi: "bạn đời, đồng hành", ipa: "/'pa:tnə(r)/" } ],
    
    u16p3: [ { en: "tired", vi: "mệt mỏi", ipa: "/'tarǝd/" }, { en: "hungry", vi: "đói", ipa: "/'hæŋgri/" }, { en: "perfect", vi: "hoàn hảo", ipa: "/'p3:fekt/" } ],
    u16p4: [ { en: "today", vi: "hôm nay", ipa: "/tə'der/" }, { en: "tomorrow", vi: "ngày mai", ipa: "/tə'mɒrǝu/" }, { en: "tonight", vi: "tối nay", ipa: "/tǝ'nait/" }, { en: "soon", vi: "sớm", ipa: "/su:n/" } ],
    // === UNIT 17 (Mới) ===
    u17p1: [ { en: "complete", vi: "hoàn thành", ipa: "/kəm'pli:t/" }, { en: "graduate", vi: "tốt nghiệp", ipa: "/'grædzuǝt/" }, { en: "pass", vi: "vượt qua, thi đỗ", ipa: "/pa:s/" }, { en: "retire", vi: "nghỉ hưu", ipa: "/rı'taıə(r)/" } ],
    u17p2: [ { en: "film", vi: "bộ phim", ipa: "/film/" }, { en: "guest", vi: "khách", ipa: "/gest/" }, { en: "report", vi: "báo cáo", ipa: "/ri'pɔ:t/" }, { en: "project", vi: "dự án", ipa: "/'prɒdzekt/" } ],
    // === UNIT 18 (TỪ PDF) ===
    // *** ĐÃ SỬA 'cook' VÀ 'fan' ***
    u18p1: [
        { en: "beach", vi: "bãi biển", ipa: "/bi:tʃ/" },
        { en: "green", vi: "màu xanh", ipa: "/gri:n/" },
        { en: "kid", vi: "đứa trẻ", ipa: "/kıd/" },
        { en: "lip", vi: "môi", ipa: "/lip/" },
        { en: "gift", vi: "món quà", ipa: "/gift/" },
        { en: "foot", vi: "chân", ipa: "/fot/" },
        { en: "cook (v)", vi: "nấu ăn", ipa: "/kɔk/" },
        { en: "moon", vi: "mặt trăng", ipa: "/mu:n/" },
        { en: "camera", vi: "máy ảnh", ipa: "/'kæmrə/" },
        { en: "bird", vi: "con chim", ipa: "/b3:d/" },
        { en: "nurse", vi: "y tá", ipa: "/n3:s/" },
        { en: "bed", vi: "cái giường", ipa: "/bed/" },
        { en: "head", vi: "đầu", ipa: "/hed/" },
        { en: "many", vi: "nhiều", ipa: "/'meni/" },
        { en: "fan", vi: "cái quạt", ipa: "/fæn/" },
        { en: "bad", vi: "tồi tệ, xấu xa", ipa: "/bæd/" },
        { en: "stamp", vi: "con tem", ipa: "/stæmp/" },
        { en: "shut", vi: "đóng lại", ipa: "/ʃʌt/" },
        { en: "cup", vi: "cốc, tách", ipa: "/kʌp/" },
        { en: "lock", vi: "cái khoá", ipa: "/lɔk/" },
        { en: "war", vi: "chiến tranh", ipa: "/wɔ:(r)/" },
        { en: "ball", vi: "quả bóng", ipa: "/bɔ:l/" },
        { en: "here", vi: "ở đây", ipa: "/hıə(r)/" },
        { en: "near", vi: "gần", ipa: "/nıə(r)/" },
        { en: "fear", vi: "nỗi sợ", ipa: "/fıə(r)/" },
        { en: "face", vi: "khuôn mặt", ipa: "/feıs/" },
        { en: "sure", vi: "chắc chắn", ipa: "/ʃɔə(r)/" },
        { en: "tour", vi: "chuyến đi", ipa: "/tʊə(r)/" },
        { en: "pure", vi: "tinh khiết", ipa: "/pjʊə(r)/" },
        { en: "coin", vi: "đồng xu", ipa: "/kɔın/" },
        { en: "choice", vi: "sự lựa chọn", ipa: "/tʃɔıs/" },
        { en: "boat", vi: "cái thuyền", ipa: "/bəʊt/" },
        { en: "show", vi: "chương trình", ipa: "/ʃəʊ/" },
        { en: "pair", vi: "cặp, đôi", ipa: "/peə(r)/" },
        { en: "care", vi: "quan tâm", ipa: "/keə(r)/" },
        { en: "fair", vi: "ngang bằng", ipa: "/feə(r)/" },
        { en: "high", vi: "cao", ipa: "/haı/" },
        { en: "price", vi: "giá cả", ipa: "/praıs/" },
        { en: "now", vi: "bây giờ", ipa: "/naʊ/" },
        { en: "cow", vi: "con bò", ipa: "/kaʊ/" },
        { en: "mouth", vi: "cái miệng", ipa: "/maʊθ/" },
        { en: "pen", vi: "cái bút", ipa: "/pen/" },
        { en: "pan", vi: "cái chảo", ipa: "/pæn/" },
        { en: "copy", vi: "sao chép", ipa: "/'kɔpi/" },
        { en: "button", vi: "cái cúc", ipa: "/'batn/" },
        { en: "ladder", vi: "cái thang", ipa: "/'lædə(r)/" },
        { en: "date", vi: "buổi hẹn hò", ipa: "/deıt/" },
        { en: "fat", vi: "béo", ipa: "/fæt/" },
        { en: "move", vi: "di chuyển", ipa: "/mu:v/" },
        { en: "van", vi: "xe tải", ipa: "/væn/" },
        { en: "voice", vi: "giọng", ipa: "/vɔıs/" },
        { en: "thin", vi: "gầy, mảnh mai", ipa: "/θın/" },
        { en: "throw", vi: "ném đi", ipa: "/rǝu/" },
        { en: "this", vi: "cái này", ipa: "/ðıs/" },
        { en: "cage", vi: "cái lồng, cái chuồng", ipa: "/keıdʒ/" },
        { en: "sick", vi: "ốm", ipa: "/sık/" },
        { en: "castle", vi: "lâu đài", ipa: "/'ka:sl/" },
        { en: "sand", vi: "cát", ipa: "/sænd/" },
        { en: "sauce", vi: "nước sốt", ipa: "/sɔ:s/" },
        { en: "zero", vi: "số không", ipa: "/'zıərəʊ/" },
        { en: "music", vi: "âm nhạc", ipa: "/'mju:zık/" },
        { en: "rose", vi: "hoa hồng", ipa: "/rəʊz/" },
        { en: "ship", vi: "con tàu", ipa: "/ʃıp/" },
        { en: "treasure", vi: "kho báu", ipa: "/'treʒə(r)/" },
        { en: "television", vi: "ti-vi", ipa: "/'telıvıʒn/" },
        { en: "massage", vi: "mát xa", ipa: "/'mæsa:ʒ/" },
        { en: "nut", vi: "hạt", ipa: "/nʌt/" },
        { en: "ring", vi: "nhẫn", ipa: "/rıŋ/" },
        { en: "hair", vi: "tóc", ipa: "/heə(r)/" },
        { en: "land", vi: "đất", ipa: "/lænd/" },
        { en: "red", vi: "đỏ", ipa: "/red/" },
        { en: "web", vi: "trang web", ipa: "/web/" },
        { en: "word", vi: "từ", ipa: "/w3:d/" },
        { en: "wet", vi: "ướt", ipa: "/wet/" }
    ],
    // === UNIT 19 (TỪ PDF) ===
    u19p1: [
        { en: "hotel", vi: "khách sạn", ipa: "/həʊ'tel/" },
        { en: "suppose", vi: "cho rằng", ipa: "/sə'pəʊz/" },
        { en: "comic", vi: "truyện tranh", ipa: "/'kɒmık/" },
        { en: "modernise", vi: "hiện đại hoá", ipa: "/'mɒdənaız/" },
        { en: "agree", vi: "đồng ý", ipa: "/ə'gri:/" },
        { en: "open", vi: "mở", ipa: "/'əʊpən/" }
    ],
    // === UNIT 21 (TỪ PDF) ===
    // *** ĐÃ SỬA 'cook' ***
    u21p1: [ { en: "rain", vi: "mưa", ipa: "/reın/" }, { en: "cook (v)", vi: "nấu ăn", ipa: "/kuk/" }, { en: "travel", vi: "du lịch", ipa: "/'trævl/" }, { en: "drive", vi: "lái xe", ipa: "/draiv/" }, { en: "come", vi: "đến", ipa: "/kɅm/" } ],
    
    // === UNIT 22 (ĐỘNG TỪ KHUYẾT THIẾU) ===
    // *** ĐÃ SỬA 'park' ***
    u22p1: [
        { en: "touch", vi: "chạm vào", ipa: "/tʌtʃ/" },
        { en: "enter", vi: "tiến vào, đi vào", ipa: "/'entə(r)/" },
        { en: "exercise", vi: "tập thể dục", ipa: "/'eksəsaız/" },
        { en: "borrow", vi: "mượn", ipa: "/'bɒrəʊ/" },
        { en: "park (v)", vi: "đậu xe", ipa: "/pɑ:k/" },
        { en: "sentence", vi: "câu", ipa: "/'sentəns/" },
        { en: "area", vi: "khu vực", ipa: "/'eəriə/" },
        { en: "wine", vi: "rượu", ipa: "/waın/" },
        { en: "rule", vi: "quy định", ipa: "/ru:l/" },
        { en: "pencil", vi: "bút chì", ipa: "/'pensl/" },
        { en: "long", vi: "dài", ipa: "/lɒŋ/" },
        { en: "hard", vi: "cứng", ipa: "/hɑ:d/" },
        { en: "free", vi: "miễn phí", ipa: "/fri:/" },
        { en: "alone", vi: "một mình", ipa: "/ə'ləʊn/" },
        { en: "here", vi: "ở đây", ipa: "/hɪə(r)/" }
    ],
    // === UNIT 23 (LIÊN TỪ AND BUT OR SO VÀ BECAUSE) ===
    u23p1: [ // Động từ
        { en: "catch", vi: "bắt xe", ipa: "/kætʃ/" },
        { en: "laugh", vi: "cười", ipa: "/lɑ:f/" },
        { en: "prefer", vi: "thích gì hơn", ipa: "/prɪ'fɜ:(r)/" }
    ],
    u23p2: [ // Tính từ
        { en: "rich", vi: "giàu có", ipa: "/rɪtʃ/" },
        { en: "unhappy", vi: "không vui", ipa: "/ʌn'hæpi/" },
        { en: "sick", vi: "ốm", ipa: "/sɪk/" },
        { en: "ill", vi: "ốm", ipa: "/ɪl/" }
    ],
    
    // *** ĐÃ SỬA 'fan' (chuẩn hóa 'vi') ***
    u23p3: [ // Danh từ
        { en: "chocolate", vi: "sô cô la", ipa: "/'tʃɒklət/" },
        { en: "plane", vi: "máy bay", ipa: "/pleın/" },
        { en: "basketball", vi: "bóng rổ", ipa: "/'bɑ:skɪtbɔ:l/" },
        { en: "fan", vi: "cái quạt", ipa: "/fæn/" },
        { en: "jacket", vi: "áo khoác", ipa: "/'dʒækɪt/" },
        { en: "pizza", vi: "bánh pizza", ipa: "/'pi:tsə/" },
        { en: "black", vi: "màu đen", ipa: "/blæk/" },
        { en: "white", vi: "màu trắng", ipa: "/waıt/" }
    ],
    
    u23p4: [ // Trạng từ
        { en: "heavily", vi: "nặng hạt, lớn", ipa: "/'hevɪli/" },
        { en: "extremely", vi: "cực kỳ", ipa: "/ɪk'stri:mli/" }
    ],
    // === UNIT 24 (LIÊN TỪ CHỈ THỜI GIAN) ===
    u24p1: [ // Động từ
        { en: "brush", vi: "rửa, đánh", ipa: "/brʌʃ/" },
        { en: "go out", vi: "ra ngoài", ipa: "/gəʊ aʊt/" },
        { en: "move", vi: "chuyển", ipa: "/mu:v/" },
        { en: "visit", vi: "ghé thăm", ipa: "/'vɪzɪt/" },
        { en: "get home", vi: "về nhà", ipa: "/get həʊm/" }
    ],
    u24p2: [ // Danh từ
        { en: "shopping mall", vi: "trung tâm mua sắm", ipa: "/'ʃɒpɪŋ mɔ:l/" },
        { en: "bed", vi: "giường", ipa: "/bed/" },
        { en: "job", vi: "công việc", ipa: "/dʒɒb/" },
        { en: "office", vi: "văn phòng", ipa: "/'ɒfɪs/" },
        { en: "bridge", vi: "cây cầu", ipa: "/brɪdʒ/" },
        { en: "college", vi: "trường đại học", ipa: "/'kɒlɪdʒ/" },
        { en: "phone", vi: "điện thoại", ipa: "/fəʊn/" },
        { en: "pagoda", vi: "ngôi chùa", ipa: "/pə'gəʊdə/" }
    ],
    u24p3: [ // Tính từ
        { en: "young", vi: "trẻ", ipa: "/jʌŋ/" },
        { en: "bad", vi: "tồi tệ", ipa: "/bæd/" }
    ],
    // === UNIT 25 (LIÊN TỪ CHỈ SỰ ĐỐI LẬP) ===
    u25p1: [ // Động từ
        { en: "receive", vi: "nhận được", ipa: "/rɪ'si:v/" },
        { en: "continue", vi: "tiếp tục", ipa: "/kən'tɪnju:/" }
    ],
    u25p2: [ // Danh từ
        { en: "comic", vi: "truyện tranh", ipa: "/'kɒmık/" },
        { en: "trip", vi: "chuyến đi", ipa: "/trɪp/" },
        { en: "grade", vi: "điểm số", ipa: "/greɪd/" },
        { en: "present", vi: "món quà", ipa: "/'preznt/" }
    ],
    u25p3: [ // Tính từ
        { en: "shy", vi: "ngại ngùng", ipa: "/ʃaɪ/" },
        { en: "sociable", vi: "hoà đồng, dễ gần", ipa: "/'səʊʃəbl/" },
        { en: "expensive", vi: "đắt", ipa: "/ɪk'spensɪv/" },
        { en: "cheap", vi: "rẻ", ipa: "/tʃi:p/" }
    ],
    u25p4: [ // Trạng từ
        { en: "still", vi: "vẫn", ipa: "/stɪl/" },
        { en: "slowly", vi: "chậm rãi", ipa: "/'sləʊli/" }
    ],
    // === UNIT 26 (CÂU ĐIỀU KIỆN LOẠI 1) ===
    u26p1: [ // Động từ
        { en: "ask", vi: "hỏi", ipa: "/ɑ:sk/" },
        { en: "return", vi: "trả lại", ipa: "/rɪ'tɜ:n/" },
        { en: "go camping", vi: "đi cắm trại", ipa: "/gəʊ 'kæmpɪŋ/" },
        { en: "get lost", vi: "bị lạc đường", ipa: "/get lɒst/" },
        { en: "become", vi: "trở nên, trở thành", ipa: "/bɪ'kʌm/" },
        { en: "use", vi: "sử dụng", ipa: "/ju:z/" }
    ],
    u26p2: [ // Danh từ
        { en: "zoo", vi: "sở thú", ipa: "/zu:/" },
        { en: "key", vi: "chìa khoá", ipa: "/ki:/" },
        { en: "dictionary", vi: "từ điển", ipa: "/'dɪkʃənri/" },
        { en: "beer", vi: "bia", ipa: "/bɪə(r)/" },
        { en: "umbrella", vi: "cái ô", ipa: "/ʌm'brelə/" },
        { en: "beach", vi: "bãi biển", ipa: "/bi:tʃ/" },
        { en: "calculator", vi: "máy tính", ipa: "/'kælkjəleɪtə(r)/" },
        { en: "map", vi: "bản đồ", ipa: "/mæp/" }
    ],
    u26p3: [ // Tính từ
        { en: "free", vi: "rảnh rỗi", ipa: "/fri:/" },
        { en: "famous", vi: "nổi tiếng", ipa: "/'feɪməs/" },
        { en: "sunny", vi: "có nắng", ipa: "/'sʌni/" },
        { en: "fat", vi: "béo", ipa: "/fæt/" }
    ],
    // === UNIT 27 (CÂU ĐIỀU KIỆN LOẠI 2) ===
    u27p1: [ // Động từ
        { en: "join", vi: "tham gia", ipa: "/dʒɔɪn/" },
        { en: "plant", vi: "trồng", ipa: "/plɑ:nt/" },
        { en: "repair", vi: "sửa chữa", ipa: "/rɪ'peə(r)/" }
    ],
    u27p2: [ // Danh từ
        { en: "team", vi: "đội, nhóm", ipa: "/ti:m/" },
        { en: "market", vi: "chợ", ipa: "/'mɑ:kɪt/" },
        { en: "lottery", vi: "xô số", ipa: "/'lɒtəri/" },
        { en: "garden", vi: "vườn", ipa: "/'gɑ:dn/" },
        { en: "primary school", vi: "trường tiểu học", ipa: "/'praɪməri sku:l/" },
        { en: "sunflower", vi: "hoa hướng dương", ipa: "/'sʌnflaʊə(r)/" },
        { en: "mechanic", vi: "thợ máy", ipa: "/mɪ'kænɪk/" },
        { en: "camera", vi: "máy ảnh", ipa: "/'kæmrə/" },
        { en: "laptop", vi: "máy tính xách tay", ipa: "/'læptɒp/" }
    ],
    // === UNIT 28 (CÂU ĐIỀU KIỆN LOẠI 3) ===
u28p1: [ // Động từ
    { en: "miss", vi: "bỏ lỡ", ipa: "" },
    { en: "fail", vi: "trượt", ipa: "/feil/" },
    { en: "remember", vi: "nhớ", ipa: "/rı'membə(r)/" },
    { en: "fall", vi: "rơi, ngã", ipa: "/fo:1/" },
    { en: "prepare", vi: "chuẩn bị", ipa: "/pri peǝ(r)/" }
],
u28p2: [ // Danh từ
    { en: "theatre", vi: "rạp hát", ipa: "/' (r)/" },
    { en: "raincoat", vi: "áo mưa", ipa: "/'reinkǝut/" },
    { en: "ladder", vi: "cái thang", ipa: "" },
    { en: "swimming pool", vi: "bể bơi", ipa: "/'swımıŋ pu:l/" }
],
// === UNIT 29 (LUYỆN NGHE ĐIỀN TỪ) ===
u29p1: [
    { en: "name", vi: "tên", ipa: "" },
    { en: "spell", vi: "đánh vần", ipa: "" },
    { en: "phone number", vi: "số điện thoại", ipa: "" }
],
// === UNIT 30 (LUYỆN NGHE CHÉP CHÍNH TẢ) ===
// (Unit 30 không có danh sách từ vựng "A. VOCABULARY")
// === UNIT 31 (LUYỆN NGHE VỀ GIỜ) ===
u31p1: [ // Tên môn học
    { en: "geography", vi: "môn địa lý", ipa: "" },
    { en: "chemistry", vi: "môn hoá học", ipa: "" },
    { en: "biology", vi: "môn sinh học", ipa: "" },
    { en: "history", vi: "môn lịch sử", ipa: "/'histri/" }
],
u31p2: [ // Động từ
    { en: "end", vi: "kết thúc", ipa: "/end/" },
    { en: "take off", vi: "cất cánh", ipa: "/'teik of/" }
],
// === UNIT 32 (LUYỆN NGHE NGÀY THÁNG) ===
u32p1: [ // Các tháng trong năm
    { en: "January", vi: "tháng một", ipa: "/'dzænjuəri/" },
    { en: "February", vi: "tháng hai", ipa: "/'februəri/" },
    { en: "March", vi: "tháng ba", ipa: "/ma:tf/" },
    { en: "April", vi: "tháng tư", ipa: "/'eıprǝl/" },
    { en: "May", vi: "tháng năm", ipa: "/mer/" },
    { en: "June", vi: "tháng sáu", ipa: "/dzu:n/" },
    { en: "July", vi: "tháng bảy", ipa: "/dzu'laı/" },
    { en: "August", vi: "tháng tám", ipa: "/ :gǝst/" },
    { en: "September", vi: "tháng chín", ipa: "/sep'tembǝ(r)/" },
    { en: "October", vi: "tháng mười", ipa: "/vk təbə(r)/" },
    { en: "November", vi: "tháng mười một", ipa: "/nǝu'vembə(r)/" },
    { en: "December", vi: "tháng mười hai", ipa: "/di'sembə(r)/" }
],
// === UNIT 33 (LUYỆN NGHE VỀ ĐỊA ĐIỂM) ===
u33p1: [ // Địa điểm
    { en: "library", vi: "thư viện", ipa: "/'laıbrǝri/" },
    { en: "post office", vi: "bưu điện", ipa: "/'pǝust pfis/" },
    { en: "cinema", vi: "rạp chiếu phim", ipa: "/'sınəmə/" },
    { en: "museum", vi: "bảo tàng", ipa: "/mju'zi:ǝm/" },
    { en: "book shop", vi: "hiệu sách", ipa: "/'bukfpp/" },
    { en: "bar", vi: "quán bar", ipa: "/ba:(r)/" },
    { en: "church", vi: "nhà thờ", ipa: "/tf3:tf/" },
    { en: "gallery", vi: "phòng triển lãm", ipa: "/'gæləri/" },
    { en: "pharmacy", vi: "hiệu thuốc", ipa: "/'fa:məsi/" },
    { en: "zoo", vi: "sở thú", ipa: "/zu:/" },
    { en: "restaurant", vi: "nhà hàng", ipa: "/'restront/" },
    { en: "police station", vi: "sở cảnh sát", ipa: "/pǝ'li:s steıfn/" }
],
u33p2: [ // Con vật
    { en: "elephant", vi: "con voi", ipa: "/'elıfǝnt/" },
    { en: "tiger", vi: "con hổ", ipa: "/'taigə(r)/" }
],
u34p1: [ // Danh từ
    { en: "trousers", vi: "quần dài", ipa: "/'trauzǝz/" },
    { en: "glass", vi: "cốc", ipa: "/gla:s/" },
    { en: "blouse", vi: "áo cánh", ipa: "/blauz/" },
    { en: "bookshelves", vi: "giá sách", ipa: "/'bokfelvz/" },
    { en: "grapes", vi: "quả nho", ipa: "/greips/" },
    { en: "printer", vi: "máy in", ipa: "/'printə(r)/" },
    { en: "pen", vi: "cái bút", ipa: "/pen/" },
    { en: "cup", vi: "tách cà phê/trà", ipa: "/kɒp/" }
],
// === UNIT 35 (ĐẠI TỪ PHẢN THÂN) ===
u35p1: [ // Danh từ
    { en: "software", vi: "phần mềm", ipa: "/'softweǝ(r)/" },
    { en: "bathroom", vi: "phòng tắm", ipa: "/'ba:0ru:m/" },
    { en: "meal", vi: "bữa ăn", ipa: "/mi:l/" },
    { en: "knife", vi: "cái dao", ipa: "/naif/" }
],
u35p2: [ // Động từ
    { en: "install", vi: "cài đặt", ipa: "/in'sto:1/" },
    { en: "blame", vi: "đổ lỗi", ipa: "/blerm/" },
    { en: "introduce", vi: "giới thiệu", ipa: "/ intrǝ'dju:s/" },
    { en: "enjoy", vi: "tận hưởng", ipa: "/ın'd301/" },
    { en: "dress", vi: "mặc", ipa: "/dres/" },
    { en: "hurt", vi: "làm đau", ipa: "/h3:t/" },
    { en: "move", vi: "di chuyển", ipa: "/mu:v/" }
],
// === UNIT 36 (SỰ HÒA HỢP VỀ THÌ) ===
u36p1: [ // Danh từ
    { en: "hide-and-seek", vi: "trốn tìm", ipa: "/ haıd ǝn 'si:k/" },
    { en: "hair", vi: "tóc", ipa: "/heǝ(r)/" },
    { en: "sunglasses", vi: "kính râm", ipa: "/'sangla:sız/" },
    { en: "gate", vi: "cổng", ipa: "/gert/" },
    { en: "Christmas", vi: "Giáng Sinh", ipa: "/'krısmǝs/" },
    { en: "husband", vi: "chồng", ipa: "/'hazbənd/" },
    { en: "salary", vi: "lương", ipa: "/'sæləri/" },
    { en: "fridge", vi: "tủ lạnh", ipa: "/frid3/" },
    { en: "festival", vi: "lễ hội", ipa: "/'festrvl/" },
    { en: "club", vi: "câu lạc bộ", ipa: "/klab/" }
],
u36p2: [ // Động từ
    { en: "post", vi: "đăng tải", ipa: "/pǝust/" },
    { en: "dye", vi: "nhuộm", ipa: "/dai/" },
    { en: "decorate", vi: "trang trí", ipa: "/'dekǝreit/" },
    { en: "perform", vi: "biểu diễn", ipa: "/pǝ'fo:m/" }
],
// === UNIT 37 (TIẾNG ANH GIAO TIẾP 1) ===
u37p1: [ // Tính từ
    { en: "rainy", vi: "nhiều mưa", ipa: "/'reini/" },
    { en: "chilly", vi: "lạnh cóng", ipa: "/'tfili/" },
    { en: "cool", vi: "mát mẻ", ipa: "/ku:1/" },
    { en: "foggy", vi: "nhiều sương mù", ipa: "/'fogi/" },
    { en: "cloudy", vi: "nhiều mây", ipa: "/'klaudi/" }
],
u37p2: [ // Trạng từ
    { en: "right", vi: "bên phải", ipa: "/rait/" },
    { en: "left", vi: "bên trái", ipa: "/left/" },
    { en: "straight", vi: "thẳng", ipa: "/streit/" }
],
u37p3: [ // Động từ
    { en: "turn", vi: "rẽ", ipa: "/t3:n/" },
    { en: "cross", vi: "băng qua", ipa: "/kros/" }
],
u37p4: [ // Giới từ
    { en: "next to", vi: "bên cạnh", ipa: "/'nekst tǝ/" },
    { en: "opposite", vi: "đối diện", ipa: "/'ppǝzıt/" },
    { en: "in front of", vi: "đằng trước", ipa: "/ın frant ǝv/" },
    { en: "behind", vi: "đằng sau", ipa: "/bi'haind/" }
],
// === UNIT 38 (LIÊN TỪ TƯƠNG HỖ) ===
u38p1: [ // Danh từ
    { en: "medal", vi: "huy chương", ipa: "/'medl/" },
    { en: "milk", vi: "sữa", ipa: "/milk/" },
    { en: "sugar", vi: "đường", ipa: "/'fugǝ(r)/" },
    { en: "milk tea", vi: "trà sữa", ipa: "/ milk 'ti:/" },
    { en: "grass", vi: "cỏ", ipa: "/gra:s/" },
    { en: "waiter", vi: "bồi bàn nam", ipa: "/'weitǝ(r)/" },
    { en: "Chinese", vi: "tiếng Trung", ipa: "/tfar'ni:z/" }
],
u38p2: [ // Động từ
    { en: "eat out", vi: "ăn ngoài tiệm", ipa: "/i:t aut/" },
    { en: "act", vi: "diễn xuất", ipa: "/ækt/" }
],
u38p3: [ // Tính từ
    { en: "friendly", vi: "thân thiện", ipa: "/'frendli/" },
    { en: "helpful", vi: "nhiệt tình giúp đỡ", ipa: "/'helpfl/" },
    { en: "colourful", vi: "đầy màu sắc", ipa: "/'kalǝfl/" },
    { en: "boring", vi: "nhàm chán", ipa: "/'bɔ:rıŋ/" },
    { en: "red", vi: "màu đỏ", ipa: "/red/" },
    { en: "blue", vi: "màu xanh", ipa: "/blu:/" }
],
u38p4: [ // Trạng từ
    { en: "fluently", vi: "trôi chảy", ipa: "/'flu:ǝntli/" },
    { en: "clearly", vi: "rõ ràng", ipa: "/'klıǝli/" }
],
// === UNIT 39 (LUYỆN NGHE QUỐC GIA CHÂU LỤC) ===
u39p1: [ // Quốc gia
    { en: "Vietnam", vi: "Việt Nam", ipa: "/vi:et'na:m/" },
    { en: "Britain", vi: "Anh", ipa: "/'britn/" },
    { en: "China", vi: "Trung Quốc", ipa: "/'tfaınǝ/" },
    { en: "Japan", vi: "Nhật Bản", ipa: "/dzə'pæn/" },
    { en: "America", vi: "Mĩ", ipa: "/ə'mer.ı.kǝ/" },
    { en: "Korea", vi: "Hàn Quốc", ipa: "/kə'ri:ǝ/" },
    { en: "France", vi: "Pháp", ipa: "/fra:ns/" },
    { en: "Australia", vi: "Úc", ipa: "/p'streıliǝ/" },
    { en: "Spain", vi: "Tây Ban Nha", ipa: "/spein/" },
    { en: "Germany", vi: "Đức", ipa: "/'d33:məni/" },
    { en: "India", vi: "Ấn Độ", ipa: "/'ındiǝ/" },
    { en: "Russia", vi: "Nga", ipa: "/'rʌʃǝ/" }
],
u39p2: [ // Quốc tịch
    { en: "Vietnamese", vi: "người Việt Nam", ipa: "/vietnǝ'mi:z/" },
    { en: "British", vi: "người Anh", ipa: "/'britif/" },
    { en: "Chinese", vi: "người Trung Quốc", ipa: "/tfar'ni:z/" },
    { en: "Japanese", vi: "người Nhật Bản", ipa: "/dzæpə'ni:z/" },
    { en: "American", vi: "người Mĩ", ipa: "/ə'merıkən/" },
    { en: "Korean", vi: "người Hàn Quốc", ipa: "/kə'ri:ǝn/" },
    { en: "French", vi: "người Pháp", ipa: "/frents/" },
    { en: "Australian", vi: "người Úc", ipa: "/p'streıliǝn/" },
    { en: "Spanish", vi: "người Tây Ban Nha", ipa: "/'spænıf/" },
    { en: "German", vi: "người Đức", ipa: "/'d33:mən/" },
    { en: "Indian", vi: "người Ấn Độ", ipa: "/'ındiən/" },
    { en: "Russian", vi: "người Nga", ipa: "/'rʌʃn/" }
],
u39p3: [ // Châu lục
    { en: "Asia", vi: "châu Á", ipa: "/'erzǝ/" },
    { en: "Africa", vi: "châu Phi", ipa: "/'æfrıkə/" },
    { en: "Europe", vi: "châu Âu", ipa: "/'juǝrǝp/" },
    { en: "Australia", vi: "châu Úc", ipa: "/p'streiliǝ/" },
    { en: "North America", vi: "Bắc Mĩ", ipa: "/ nɔ:0 ǝ'merıkə/" },
    { en: "South America", vi: "Nam Mĩ", ipa: "/ sau ǝ'merıkə/" },
    { en: "Antarctica", vi: "Nam Cực", ipa: "/æn'ta:ktıkə/" }
],
u39p4: [ // Tính từ
    { en: "peaceful", vi: "yên bình", ipa: "/'pi:sfl/" },
    { en: "warm", vi: "ấm áp", ipa: "/wo:m/" },
    { en: "noisy", vi: "náo nhiệt, ồn ào", ipa: "/'nəızi/" },
    { en: "crowded", vi: "đông đúc", ipa: "/'kraudıd/" },
    { en: "lively", vi: "sống động", ipa: "/'larvli/" },
    { en: "modern", vi: "hiện đại", ipa: "/'mpdn/" }
],
u39p5: [ // Danh từ
    { en: "nationality", vi: "quốc tịch", ipa: "/ næsə'næləti/" },
    { en: "countryside", vi: "vùng quê", ipa: "/'kantrisaıd/" }
],
// === UNIT 40 (LUYỆN NGHE VỀ SỞ THÍCH) ===
u40p1: [ // Động từ
    { en: "collect", vi: "sưu tầm", ipa: "/kə'lekt/" },
    { en: "fly", vi: "thả (diều)", ipa: "/flat/" },
    { en: "knit", vi: "đan lát", ipa: "/nit/" },
    { en: "go hiking", vi: "đi bộ đường dài", ipa: "/gǝu 'haıkın/" },
    { en: "do gardening", vi: "làm vườn", ipa: "/du: 'ga:dnın/" },
    { en: "surf", vi: "lướt (mạng)", ipa: "/s3:f/" },
    { en: "photograph", vi: "chụp ảnh", ipa: "/'fəətəgra:f/" },
    { en: "go skating", vi: "trượt băng", ipa: "/gǝu 'skeıtın/" },
    { en: "go backpacking", vi: "đi phượt", ipa: "/gǝu 'bækpækın/" },
    { en: "go climbing", vi: "leo núi", ipa: "/gǝu 'klaımıŋ/" }
],
u40p2: [ // Danh từ
    { en: "kite", vi: "cánh diều", ipa: "/kait/" },
    { en: "card", vi: "bài", ipa: "/ka:d/" },
    { en: "instrument", vi: "nhạc cụ", ipa: "/'instrəmənt/" },
    { en: "video game", vi: "trò chơi điện tử", ipa: "/'vidiǝu geım/" },
    { en: "stamp", vi: "tem thư", ipa: "/stæmp/" },
    { en: "coin", vi: "đồng xu", ipa: "/koin/" },
    { en: "the Net", vi: "mạng Internet", ipa: "/də net/" },
    { en: "folk music", vi: "nhạc dân gian", ipa: "/'fǝuk mju:zık/" },
    { en: "hobby", vi: "sở thích", ipa: "/'hobi/" },
    { en: "fairy tale", vi: "truyện cổ tích", ipa: "/'feǝri teil/" }
],
u40p3: [ // Cụm tính từ
    { en: "fond of", vi: "thích", ipa: "/fond ǝv/" },
    { en: "keen on", vi: "thích", ipa: "/ki:n on/" }
],
// === UNIT 41 (LUYỆN NGHE VỀ PHƯƠNG TIỆN GIAO THÔNG) ===
u41p1: [ // Danh từ
    { en: "taxi", vi: "xe taxi", ipa: "/'tæksi/" },
    { en: "coach", vi: "xe khách", ipa: "/kǝuts/" },
    { en: "van", vi: "xe tải nhỏ", ipa: "/væn/" },
    { en: "truck", vi: "xe tải lớn", ipa: "/trak/" },
    { en: "motorbike", vi: "xe máy", ipa: "/'mərtəbaık/" },
    { en: "tram", vi: "xe điện", ipa: "/træm/" },
    { en: "boat", vi: "thuyền", ipa: "/bǝut/" },
    { en: "airplane", vi: "máy bay", ipa: "/'eǝplein/" },
    { en: "helicopter", vi: "trực thăng", ipa: "/'helikoptə(r)/" },
    { en: "ship", vi: "tàu", ipa: "/Sip/" },
    { en: "traffic lights", vi: "đèn giao thông", ipa: "/'træfık larts/" },
    { en: "traffic jam", vi: "tắc đường", ipa: "/'træfik dzæm/" },
    { en: "island", vi: "hòn đảo", ipa: "/'ailand/" }
],
u42p1: [ // Danh từ
    { en: "sport", vi: "thể thao", ipa: "/spo:t/" },
    { en: "table tennis", vi: "bóng bàn", ipa: "/'teibl tenis/" },
    { en: "baseball", vi: "bóng chày", ipa: "/'beisbo:1/" }, // PDF ghi "bóng rổ"
    { en: "golf", vi: "gôn", ipa: "/golf/" },
    { en: "karate", vi: "võ karate", ipa: "/kə'ra:ti/" },
    { en: "boxing", vi: "đấm bốc", ipa: "/'boksın/" },
    { en: "horse riding", vi: "cưỡi ngựa", ipa: "/'hɔ:s raıdıŋ/" },
    { en: "weightlifting", vi: "cử tạ", ipa: "/'weitlıftın/" },
    { en: "net", vi: "lưới", ipa: "/net/" },
    { en: "club", vi: "gậy chơi gôn", ipa: "/klab/" },
    { en: "ball", vi: "quả bóng", ipa: "/bo:1/" },
    { en: "skateboard", vi: "ván trượt", ipa: "/'skeitbɔ:d/" },
    { en: "fishing rod", vi: "cần câu cá", ipa: "/'fifin rod/" },
    { en: "boxing gloves", vi: "găng tay đấm bốc", ipa: "/'buksıŋ glavz/" }
],
u42p2: [ // Động từ
    { en: "go diving", vi: "lặn", ipa: "/gǝo 'daıvın/" },
    { en: "go skiing", vi: "trượt tuyết", ipa: "/gǝo 'ski:n/" },
    { en: "go surfing", vi: "lướt sóng", ipa: "/gǝo 's3:fin/" },
    { en: "go scuba diving", vi: "lặn có bình khí", ipa: "/gǝo 'sku:bə darvıŋ/" },
    { en: "go running", vi: "chạy", ipa: "/gǝo 'ranın/" },
    { en: "go jogging", vi: "chạy bộ", ipa: "/gǝo 'dzugin/" },
    { en: "go fishing", vi: "câu cá", ipa: "/ gǝo 'fısın/" },
    { en: "go rowing", vi: "chèo thuyền", ipa: "/ gǝo 'rəvin/" }
],
u42p3: [ // Tính từ
    { en: "favourite", vi: "ưa thích", ipa: "/'fervǝrıt/" },
    { en: "interesting", vi: "thú vị", ipa: "/'intrǝstın/" }
],
// === UNIT 43 (LUYỆN NGHE VỀ NGHỀ NGHIỆP) ===
// *** ĐÃ SỬA 'cook' ***
u43p1: [ // Danh từ
    { en: "job", vi: "công việc", ipa: "/d3pb/" },
    { en: "driver", vi: "tài xế", ipa: "/'draıvə(r)/" },
    { en: "builder", vi: "thợ xây dựng", ipa: "/'bildə(r)/" },
    { en: "cook (n)", vi: "đầu bếp", ipa: "/kuk/" },
    { en: "baker", vi: "thợ làm bánh", ipa: "/'beıkə(r)/" },
    { en: "policeman", vi: "viên cảnh sát", ipa: "/pə'li:smən/" },
    { en: "farmer", vi: "nông dân", ipa: "/'fa:mə(r)/" },
    { en: "hairdresser", vi: "thợ làm tóc", ipa: "/'heǝdresǝ(r)/" },
    { en: "tailor", vi: "thợ may", ipa: "/'teılə(r)/" },
    { en: "painter", vi: "thợ sơn", ipa: "/'peintǝ(r)/" },
    { en: "dancer", vi: "vũ công", ipa: "/'da:nsə(r)/" },
    { en: "singer", vi: "ca sĩ", ipa: "/'sıŋə(r)/" },
    { en: "architect", vi: "kiến trúc sư", ipa: "/'a:kitekt/" },
    { en: "florist", vi: "người bán hoa", ipa: "/'florist/" },
    { en: "musician", vi: "nhạc công", ipa: "/mju zıfn/" },
    { en: "writer", vi: "nhà văn", ipa: "/'raitə(r)/" },
    { en: "pilot", vi: "phi công", ipa: "/'pailǝt/" },
    { en: "flight attendant", vi: "tiếp viên hàng không", ipa: "/'flaıt ǝtendənt/" },
    { en: "barber", vi: "thợ cắt tóc", ipa: "/'ba:bə(r)/" },
    { en: "chef", vi: "đầu bếp", ipa: "/fef/" },
    { en: "engineer", vi: "kỹ sư", ipa: "/endzı'nıə(r)/" },
    { en: "guide", vi: "hướng dẫn viên", ipa: "/gard/" }
],
// === UNIT 44 (LUYỆN NGHE VỀ CÔNG NGHỆ) ===
u44p1: [ // Danh từ
    { en: "mobile phone", vi: "điện thoại di động", ipa: "/ məubail 'fǝon/" },
    { en: "tablet", vi: "máy tính bảng", ipa: "/'tæblǝt/" },
    { en: "account", vi: "tài khoản", ipa: "/ə'kaunt/" },
    { en: "app", vi: "ứng dụng", ipa: "/æp/" },
    { en: "AI", vi: "trí tuệ nhân tạo", ipa: "/ er 'ai/" },
    { en: "mouse", vi: "con chuột", ipa: "/ maus/" },
    { en: "microphone", vi: "mic", ipa: "/'maıkrəfəon/" },
    { en: "MP3 player", vi: "máy chơi nhạc", ipa: "/em pi: 'Ori: pleıə(r)/" },
    { en: "headphones", vi: "tai nghe", ipa: "/'hedfǝonz/" },
    { en: "Wi-Fi", vi: "mạng không dây", ipa: "/'wal far/" },
    { en: "air conditioner", vi: "điều hoà", ipa: "/'eə kəndısənə(r)/" },
    { en: "washing machine", vi: "máy giặt", ipa: "/'wpsın məfi:n/" },
    { en: "remote control", vi: "điều khiển từ xa", ipa: "/rı məət kən'trǝol/" },
    { en: "microwave", vi: "lò vi sóng", ipa: "/'maıkrǝwerv/" },
    { en: "oven", vi: "lò nướng", ipa: "/'Avn/" },
    { en: "iron", vi: "bàn là", ipa: "/'aiǝn/" },
    { en: "cooker", vi: "nồi nấu", ipa: "/'kukə(r)/" },
    { en: "hairdryer", vi: "máy sấy tóc", ipa: "/'heǝdraıə(r)/" },
    { en: "dishwasher", vi: "máy rửa bát", ipa: "/'difwpsǝ(r)/" },
    { en: "charger", vi: "cái sạc", ipa: "/'tfa:dzə(r)/" }
],
u44p2: [ // Động từ
    { en: "download", vi: "tải xuống", ipa: "" },
    { en: "turn off", vi: "tắt đi", ipa: "" }
],
// === UNIT 45 (GIAO TIẾP 2) ===
// (Unit 45 không có danh sách từ vựng "A. VOCABULARY")
// === UNIT 46 (NOTE-TAKING) ===
// (Unit 46 không có danh sách từ vựng "A. VOCABULARY")
// === UNIT 47 (PARAPHRASING) ===
u47p1: [ // Danh từ
    { en: "pet", vi: "thú cưng", ipa: "" },
    { en: "animal", vi: "động vật", ipa: "" },
    { en: "vehicle", vi: "xe cộ", ipa: "" },
    { en: "clothes", vi: "quần áo", ipa: "" },
    { en: "doll", vi: "búp bê", ipa: "" },
    { en: "price", vi: "giá cả", ipa: "" },
    { en: "sweater", vi: "áo len", ipa: "" },
    { en: "monkey", vi: "con khỉ", ipa: "" }
],
u47p2: [ // Từ hạn định
    { en: "some", vi: "một số", ipa: "/sAm/" },
    { en: "many", vi: "nhiều", ipa: "/'meni/" },
    { en: "any", vi: "bất kỳ", ipa: "/'eni/" },
    { en: "a lot of", vi: "nhiều", ipa: "/ə lpt əv/" }
],
// === UNIT 48 (THUYẾT TRÌNH) ===
u48p1: [ // Danh từ
    { en: "presentation", vi: "bài thuyết trình", ipa: "/prezn'terfn/" },
    { en: "part", vi: "phần", ipa: "/pa:t/" },
    { en: "topic", vi: "chủ đề", ipa: "/'topik/" },
    { en: "capital", vi: "thủ đô", ipa: "/'kæpıtl/" },
    { en: "knowledge", vi: "kiến thức", ipa: "/'nolid3/" },
    { en: "experience", vi: "kinh nghiệm", ipa: "/ık'spıəriəns/" }
],
u48p2: [ // Trạng từ
    { en: "together", vi: "cùng nhau", ipa: "/tə gedə(r)/" },
    { en: "also", vi: "cũng", ipa: "/'ɔ:lsǝu/" }, // Sửa IPA
    { en: "firstly", vi: "đầu tiên", ipa: "/'f3:stli/" },
    { en: "secondly", vi: "thứ hai", ipa: "/'sekəndli/" },
    { en: "next", vi: "tiếp theo", ipa: "/nekst/" },
    { en: "finally", vi: "cuối cùng", ipa: "/'faınǝli/" }
],
u48p3: [ // Tính từ
    { en: "introvert", vi: "hướng nội", ipa: "" },
    { en: "extrovert", vi: "hướng ngoại", ipa: "" },
    { en: "cheerful", vi: "vui vẻ", ipa: "" },
    { en: "outgoing", vi: "dễ gần", ipa: "" },
    { en: "quiet", vi: "ít nói", ipa: "" },
    { en: "shy", vi: "rụt rè", ipa: "" },
    { en: "different", vi: "khác nhau", ipa: "" }
],
    // === FAMILY (Gia đình) ===
    family: [
        { en: "parent", vi: "bố hoặc mẹ", ipa: "/ˈpeərənt/" },
        { en: "father", vi: "bố", ipa: "/ˈfɑː.ðər/" },
        { en: "mother", vi: "mẹ", ipa: "/ˈmʌð.ər/" },
        { en: "child", vi: "con cái (số ít)", ipa: "/tʃaɪld/" },
        { en: "children", vi: "con cái (số nhiều)", ipa: "/ˈtʃɪl.drən/" },
        { en: "son", vi: "con trai", ipa: "/sʌn/" },
        { en: "daughter", vi: "con gái", ipa: "/ˈdɔː.tər/" },
        { en: "twin", vi: "sinh đôi", ipa: "/twin/" },
        { en: "triplet", vi: "sinh ba", ipa: "/ˈtrɪp.lət/" },
        { en: "sibling", vi: "anh/chị/em ruột", ipa: "/ˈsɪb.lɪŋ/" },
        { en: "sister", vi: "chị gái", ipa: "/ˈsɪs.tər/" },
        { en: "brother", vi: "anh trai", ipa: "/ˈbrʌð.ər/" },
        { en: "husband", vi: "chồng", ipa: "/ˈhʌz.bənd/" },
        { en: "wife", vi: "vợ", ipa: "/waɪf/" },
        { en: "grandparent", vi: "ông hoặc bà", ipa: "/ˈɡrænpeərənt/" },
        { en: "grandmother", vi: "bà ngoại/bà nội", ipa: "/ˈɡrænmʌðə(r)/" },
        { en: "grandfather", vi: "ông ngoại/ông nội", ipa: "/ˈɡrænfɑːðə(r)/" },
        { en: "grandchild", vi: "cháu", ipa: "/ˈɡræn.tʃaɪld/" },
        { en: "grandson", vi: "cháu trai", ipa: "/ˈɡræn.sʌn/" },
        { en: "granddaughter", vi: "cháu gái", ipa: "/ˈɡræn.dɔː.tər/" },
        { en: "nephew", vi: "cháu trai", ipa: "/ˈnev.juː/" },
        { en: "niece", vi: "cháu gái", ipa: "/niːs/" },
        { en: "cousin", vi: "anh chị em họ", ipa: "/ˈkʌz.ən/" },
        { en: "uncle", vi: "chú/bác trai/cậu", ipa: "/ˈʌŋ.kəl/" },
        { en: "aunt", vi: "cô/dì/bác gái", ipa: "/ɑːnt/" },
        { en: "godfather", vi: "bố đỡ đầu", ipa: "/ˈɡɒdˌfɑː.ðər/" },
        { en: "godmother", vi: "mẹ đỡ đầu", ipa: "/ˈɡɒdˌmʌð.ər/" },
        { en: "godson", vi: "con trai đỡ đầu", ipa: "/ˈɡɒd.sʌn/" },
        { en: "goddaughter", vi: "con gái đỡ đầu", ipa: "/ˈɡɒdˌdɔː.tər/" },
        { en: "father-in-law", vi: "bố chồng/bố vợ", ipa: "/ˈfɑː.ðər.ɪn.lɔː/" },
        { en: "mother-in-law", vi: "mẹ chồng/mẹ vợ", ipa: "/ˈmʌð.ə.rɪn.lɔː/" },
        { en: "son-in-law", vi: "con rể", ipa: "/ˈsʌn.ɪn.lɔː/" },
        { en: "daughter-in-law", vi: "con dâu", ipa: "/ˈdɔː.tər.ɪn.lɔː/" },
        { en: "sister-in-law", vi: "chị dâu/em dâu", ipa: "/ˈsɪs.tə.rɪn.lɔː/" },
        { en: "brother-in-law", vi: "anh rể/em rể", ipa: "/ˈbrʌð.ə.rɪn.lɔː/" },
        { en: "relative", vi: "họ hàng", ipa: "/ˈrel.ə.tɪv/" }
    ],

    // === CLOTHES (Quần áo) ===
    clothes: [
        { en: "shirt", vi: "áo sơ mi", ipa: "/ʃɜːt/" },
        { en: "t-shirt", vi: "áo phông", ipa: "/ˈtiː ʃɜːt/" },
        { en: "trousers", vi: "quần dài", ipa: "/ˈtraʊzəz/" },
        { en: "dress", vi: "đầm", ipa: "/dres/" },
        { en: "skirt", vi: "chân váy", ipa: "/skɜːt/" },
        { en: "coat", vi: "áo khoác dài", ipa: "/kəʊt/" },
        { en: "jacket", vi: "áo khoác", ipa: "/ˈdʒækɪt/" },
        { en: "sweater", vi: "áo len", ipa: "/ˈswetə(r)/" },
        { en: "jeans", vi: "quần jeans", ipa: "/dʒiːnz/" },
        { en: "cardigan", vi: "áo ca-đi-gan", ipa: "/ˈkɑːdɪɡən/" },
        { en: "pants", vi: "quần dài", ipa: "/pænts/" },
        { en: "shorts", vi: "quần đùi", ipa: "/ʃɔːts/" },
        { en: "house dress", vi: "váy mặc ở nhà", ipa: "/haus dres/" },
        { en: "maternity dress", vi: "váy bầu", ipa: "/məˈtɜːnɪti dres/" },
        { en: "wedding gown", vi: "váy cưới", ipa: "/ˈwedɪŋ ɡaʊn/" },
        { en: "blouse", vi: "áo sơ mi nữ", ipa: "/blaʊz/" },
        { en: "miniskirt", vi: "chân váy ngắn", ipa: "/ˈmɪniskɜːt/" },
        { en: "night gown", vi: "đầm ngủ", ipa: "/naɪt ɡaʊn/" },
        { en: "bib overalls", vi: "quần sạc lô", ipa: "/ˈbɪb əʊvərɔːlz/" },
        { en: "pyjamas", vi: "đồ pi-ya-ma", ipa: "/pəˈdʒɑːməz/" },
        { en: "bathrobe", vi: "áo choàng tắm", ipa: "/ˈbɑːθrəʊb/" },
        { en: "swimsuit", vi: "đồ bơi", ipa: "/ˈswɪmsuːt/" },
        { en: "pleated skirt", vi: "váy xếp ly", ipa: "/ˈpliːtɪd skɜːt/" },
        { en: "blazer", vi: "áo khoác blazer", ipa: "/ˈbleɪzə(r)/" },
        { en: "tank top", vi: "áo ba lỗ", ipa: "/ˈtæŋk tɒp/" },
        { en: "evening dress", vi: "đầm dạ hội", ipa: "/ˈiːvnɪŋ dres/" },
        { en: "slip dress", vi: "đầm hai dây", ipa: "/slɪp dres/" },
        { en: "crop top", vi: "áo crop top", ipa: "/ˈkrɒp tɒp/" },
        { en: "leggings", vi: "quần ôm sát", ipa: "/ˈleɡɪŋz/" },
        { en: "maxi", vi: "đầm maxi", ipa: "/ˈmæksi/" }
    ],

    // === ENVIRONMENT (Môi trường) ===
    environment: [
        { en: "acid rain", vi: "mưa a xít", ipa: "/ˈæsɪd reɪn/" },
        { en: "atmosphere", vi: "khí quyển", ipa: "/ˈætməsfɪə/" },
        { en: "biodiversity", vi: "sự đa dạng sinh học", ipa: "/ˌbaɪoʊdəˈvɜːrsəti/" },
        { en: "catastrophe", vi: "thảm họa", ipa: "/kəˈtæstrəfi/" },
        { en: "climate", vi: "khí hậu", ipa: "/ˈklaɪmət/" },
        { en: "climate change", vi: "hiện tượng biến đổi khí hậu", ipa: "/ˈklaɪmət tʃeɪndʒ/" },
        { en: "creature", vi: "sinh vật", ipa: "/ˈkriːtʃə/" },
        { en: "destruction", vi: "sự phá hủy", ipa: "/dɪsˈtrʌkʃən/" },
        { en: "disposal", vi: "sự vứt bỏ", ipa: "/dɪsˈpəʊzəl/" },
        { en: "desertification", vi: "quá trình sa mạc hóa", ipa: "/dɪˌzɜːtɪfɪˈkeɪʃən/" },
        { en: "deforestation", vi: "sự phá rừng", ipa: "/dɪˌfɒrɪˈsteɪʃ(ə)n/" },
        { en: "dust", vi: "bụi bẩn", ipa: "/dʌst/" },
        { en: "earthquake", vi: "cơn động đất", ipa: "/ˈɜːθkweɪk/" },
        { en: "ecology", vi: "sinh thái học", ipa: "/ɪˈkɒlədʒi/" },
        { en: "ecosystem", vi: "hệ sinh thái", ipa: "/ˈiːkəʊˌsɪstəm/" },
        { en: "alternative energy", vi: "năng lượng thay thế", ipa: "/ɔːlˈtɜːnətɪv ˈenədʒi/" },
        { en: "environment", vi: "môi trường", ipa: "/ɪnˈvaɪrənmənt/" },
        { en: "environmentalist", vi: "nhà môi trường học", ipa: "/ɪnˌvaɪrənˈmentəlɪst/" },
        { en: "erosion", vi: "sự xói mòn", ipa: "/ɪˈrəʊʒən/" },
        { en: "exhaust", vi: "khí thải", ipa: "/ɪɡˈzɔːst/" },
        { en: "famine", vi: "nạn đói", ipa: "/ˈfæmɪn/" },
        { en: "pesticide", vi: "thuốc trừ sâu", ipa: "/ˈpestɪsaɪd/" },
        { en: "fertilizer", vi: "phân bón", ipa: "/ˈfɜːtɪlaɪzə/" },
        { en: "greenhouse effect", vi: "hiệu ứng nhà kính", ipa: "/ˈɡriːnhaʊs ɪˈfekt/" },
        { en: "industrial waste", vi: "chất thải công nghiệp", ipa: "/ɪnˈdʌstrɪəl weɪst/" }
    ],

    // === CHARACTER (Tính cách) ===
    character: [
        { en: "affection", vi: "sự yêu mến, sự quý trọng", ipa: "/əˈfekʃən/" },
        { en: "ambition", vi: "ước mơ, khát vọng", ipa: "/æmˈbɪʃən/" },
        { en: "assurance", vi: "sự tin tưởng, sự đảm bảo", ipa: "/əˈʃʊrəns/" },
        { en: "authenticity", vi: "sự chân thật, tính xác thực", ipa: "/ɔːˌθentɪˈsɪti/" },
        { en: "boldness", vi: "sự dũng cảm, gan dạ", ipa: "/ˈbəʊldnəs/" },
        { en: "bravery", vi: "sự can đảm, lòng dũng cảm", ipa: "/ˈbreɪvri/" },
        { en: "calmness", vi: "sự bình tĩnh", ipa: "/ˈkɑːmnəs/" },
        { en: "carefulness", vi: "sự cẩn thận", ipa: "/ˈkeəfʊlnəs/" },
        { en: "charity", vi: "sự từ thiện, tình người", ipa: "/ˈtʃærəti/" },
        { en: "compassion", vi: "sự thông cảm, lòng trắc ẩn", ipa: "/kəmˈpæʃən/" },
        { en: "confidence", vi: "sự tự tin, sự tin tưởng", ipa: "/ˈkɒnfɪdəns/" },
        { en: "courage", vi: "sự can đảm, sự dũng mãnh", ipa: "/ˈkʌrɪdʒ/" },
        { en: "creativity", vi: "sự sáng tạo, tính sáng tạo", ipa: "/ˌkriːeɪˈtɪvəti/" },
        { en: "decisiveness", vi: "sự quả quyết, sự kiên quyết", ipa: "/dɪˈsaɪsɪvnəs/" },
        { en: "determination", vi: "sự quả quyết, sự kiên định", ipa: "/dɪˌtɜːmɪˈneɪʃn/" },
        { en: "diligence", vi: "sự cần cù, sự siêng năng", ipa: "/ˈdɪlɪdʒəns/" },
        { en: "empathy", vi: "sự đồng cảm, sự thông cảm", ipa: "/ˈempəθi/" },
        { en: "enthusiasm", vi: "sự nhiệt tình, sự hăng hái", ipa: "/ɪnˈθjuːziæzəm/" },
        { en: "faithfulness", vi: "sự trung thành, lòng trung thành", ipa: "/ˈfeɪθfʊlnəs/" },
        { en: "flexibility", vi: "sự linh hoạt, tính linh hoạt", ipa: "/ˌfleksəˈbɪləti/" },
        { en: "forgiveness", vi: "sự tha thứ, sự khoan dung", ipa: "/fəˈɡɪvnəs/" },
        { en: "generosity", vi: "sự rộng lượng, sự hào phóng", ipa: "/ˌdʒenəˈrɒsəti/" },
        { en: "gentleness", vi: "sự nhẹ nhàng, sự hiền dịu", ipa: "/ˈdʒentlnəs/" },
        { en: "gratitude", vi: "sự biết ơn, lòng biết ơn", ipa: "/ˈɡrætɪtjuːd/" },
        { en: "happiness", vi: "sự hạnh phúc, niềm vui", ipa: "/ˈhæpɪnəs/" },
        { en: "harmony", vi: "sự hòa thuận, sự hài hòa", ipa: "/ˈhɑːməni/" },
        { en: "honesty", vi: "sự thật thà, tính trung thực", ipa: "/ˈɒnɪsti/" },
        { en: "humility", vi: "sự khiêm tốn, tính khiêm tốn", ipa: "/hjuːˈmɪləti/" },
        { en: "humor", vi: "sự hài hước, tính hài hước", ipa: "/ˈhjuːmə/" },
        { en: "innovation", vi: "sự đổi mới, tính đổi mới", ipa: "/ˌɪnəʊˈveɪʃn/" },
        { en: "integrity", vi: "sự toàn vẹn, tính liêm chính", ipa: "/ɪnˈteɡrəti/" },
        { en: "joy", vi: "sự vui mừng, sự hạnh phúc", ipa: "/dʒɔɪ/" },
        { en: "kindness", vi: "sự tử tế, tính nhân từ", ipa: "/ˈkaɪndnəs/" },
        { en: "loyalty", vi: "sự trung thành, tính trung thành", ipa: "/ˈlɔɪəlti/" },
        { en: "mindfulness", vi: "sự tỉnh táo, tính tỉnh táo", ipa: "/ˈmaɪndfʊlnəs/" },
        { en: "modesty", vi: "sự khiêm nhường, tính khiêm nhường", ipa: "/ˈmɒdəsti/" },
        { en: "openness", vi: "sự cởi mở, tính cởi mở", ipa: "/ˈəʊpənəs/" }
    ],

    // === EMOTIONS (Cảm xúc) ===
    emotions: [
        { en: "amused", vi: "vui vẻ", ipa: "/əˈmjuːzd/" },
        { en: "delighted", vi: "rất hạnh phúc", ipa: "/dɪˈlaɪtɪd/" },
        { en: "ecstatic", vi: "vô cùng hạnh phúc", ipa: "/ɪkˈstætɪk/" },
        { en: "enthusiastic", vi: "nhiệt tình", ipa: "/ɪnˌθjuːziˈæstɪk/" },
        { en: "excited", vi: "hứng thú", ipa: "/ɪkˈsaɪtɪd/" },
        { en: "great", vi: "tuyệt vời", ipa: "/ɡreɪt/" },
        { en: "happy", vi: "hạnh phúc", ipa: "/ˈhæpi/" },
        { en: "intrigued", vi: "hiếu kỳ", ipa: "/ɪnˈtriːɡd/" },
        { en: "keen", vi: "ham thích, tha thiết", ipa: "/kiːn/" },
        { en: "nonplussed", vi: "ngạc nhiên đến nỗi không biết phải làm gì", ipa: "/ˌnɒnˈplʌst/" },
        { en: "overwhelmed", vi: "choáng ngợp", ipa: "/ˌəʊvəˈwelmd/" },
        { en: "over the moon", vi: "rất sung sướng", ipa: "/ˈəʊvə ðə muːn/" },
        { en: "overjoyed", vi: "cực kỳ hứng thú", ipa: "/ˌəʊvəˈdʒɔɪd/" },
        { en: "positive", vi: "lạc quan", ipa: "/ˈpɒzətɪv/" },
        { en: "relaxed", vi: "thư giãn, thoải mái", ipa: "/rɪˈlækst/" },
        { en: "seething", vi: "rất tức giận nhưng giấu kín", ipa: "/ˈsiːðɪŋ/" },
        { en: "surprised", vi: "ngạc nhiên", ipa: "/səˈpraɪzd/" },
        { en: "terrific", vi: "tuyệt vời", ipa: "/təˈrɪfɪk/" },
        { en: "wonderful", vi: "tuyệt vời", ipa: "/ˈwʌndəfl/" }
    ],
// === RELATIONSHIPS (Mối quan hệ) ===
    relationships: [
        { en: "mother", vi: "mẹ", ipa: "/ˈmʌð.ər/" },
        { en: "father", vi: "ba", ipa: "/ˈfɑː.ðər/" },
        { en: "brother", vi: "anh/em trai", ipa: "/ˈbrʌð.ər/" },
        { en: "sister", vi: "chị/em gái", ipa: "/ˈsɪs.tər/" },
        { en: "sibling", vi: "anh/chị/em ruột", ipa: "/ˈsɪb.lɪŋ/" },
        { en: "uncle", vi: "chú/bác", ipa: "/ˈʌŋ.kəl/" },
        { en: "aunt", vi: "cô/dì", ipa: "/ɑːnt/" },
        { en: "nephew", vi: "cháu trai", ipa: "/ˈnef.juː/" },
        { en: "niece", vi: "cháu gái", ipa: "/niːs/" },
        { en: "cousin", vi: "anh/chị/em họ hàng", ipa: "/ˈkʌz.ən/" },
        { en: "relative", vi: "họ hàng", ipa: "/ˈrel.ə.tɪv/" },
        { en: "ancestor", vi: "tổ tiên", ipa: "/ˈæn.ses.tər/" },
        { en: "descendant", vi: "hậu duệ", ipa: "/dɪˈsen.dənt/" },
        { en: "wedding", vi: "đám cưới", ipa: "/ˈwed.ɪŋ/" },
        { en: "reunion", vi: "tụ họp", ipa: "/ˌriːˈjuː.njən/" },
        { en: "holiday", vi: "ngày lễ", ipa: "/ˈhɒl.ə.deɪ/" },
        { en: "funeral", vi: "tang lễ", ipa: "/ˈfjuː.nər.əl/" },
        { en: "inherit", vi: "thừa kế", ipa: "/ɪnˈher.ɪt/" },
        { en: "adopt", vi: "nhận nuôi", ipa: "/əˈdɒpt/" },
        { en: "nurture", vi: "nuôi nấng", ipa: "/ˈnɜː.tʃər/" },
        { en: "acquaintance", vi: "người quen", ipa: "/əˈkweɪn.təns/" },
        { en: "companion", vi: "bạn đồng hành", ipa: "/kəmˈpæn.jən/" },
        { en: "classmate", vi: "bạn cùng lớp", ipa: "/ˈklɑːs.meɪt/" },
        { en: "schoolmate", vi: "bạn cùng trường", ipa: "/ˈskuːl.meɪt/" }
    ],

    // === LOVE (Tình yêu) ===
    love: [
        { en: "affection", vi: "tình yêu, tình cảm", ipa: "/əˈfekʃən/" },
        { en: "passion", vi: "đam mê, say mê", ipa: "/ˈpæʃən/" },
        { en: "devotion", vi: "tận tụy, sự tận hiến", ipa: "/dɪˈvoʊʃən/" },
        { en: "infatuation", vi: "sự mê hoặc, say đắm", ipa: "/ɪnˌfætʃʊˈeɪʃən/" },
        { en: "intimacy", vi: "sự gần gũi, thân mật", ipa: "/ˈɪntəməsi/" },
        { en: "romance", vi: "tình yêu lãng mạn", ipa: "/roʊˈmæns/" },
        { en: "adoration", vi: "sự sùng bái, tôn kính", ipa: "/ˌædəˈreɪʃən/" },
        { en: "cherish", vi: "yêu thương, quý trọng", ipa: "/ˈtʃerɪʃ/" },
        { en: "attraction", vi: "sự hấp dẫn, lôi cuốn", ipa: "/əˈtrækʃən/" },
        { en: "commitment", vi: "sự cam kết, tận tụy", ipa: "/kəˈmɪtmənt/" },
        { en: "enamored", vi: "mê muội, si mê", ipa: "/ɪˈnæmərd/" },
        { en: "endearment", vi: "lời yêu thương, lời quý mến", ipa: "/ɪnˈdɪrmənt/" },
        { en: "fondness", vi: "tình cảm, tình thương", ipa: "/ˈfɑːndnəs/" },
        { en: "heartthrob", vi: "người khiến tim đập thình thịch", ipa: "/ˈhɑːrtθrɑːb/" },
        { en: "courtship", vi: "sự cầu hôn, sự tán tỉnh", ipa: "/ˈkɔːrtʃɪp/" },
        { en: "yearning", vi: "sự khát khao, sự mong mỏi", ipa: "/ˈjɜːrnɪŋ/" },
        { en: "tenderness", vi: "sự ân cần, sự nhẹ nhàng", ipa: "/ˈtendərnəs/" },
        { en: "fidelity", vi: "lòng trung thành, trung thực", ipa: "/fɪˈdelɪti/" },
        { en: "soulmate", vi: "bạn tâm giao, hợp tâm hồn", ipa: "/ˈsoʊlmeɪt/" }
    ],

    // === FOOD (Đồ ăn) ===
    food: [
        { en: "appetizer", vi: "món khai vị", ipa: "/ˈæpɪtaɪzər/" },
        { en: "entree", vi: "món chính", ipa: "/ˈɑːntreɪ/" },
        { en: "cuisine", vi: "ẩm thực", ipa: "/kwɪˈzin/" },
        { en: "recipe", vi: "công thức nấu ăn", ipa: "/ˈresɪpi/" },
        { en: "ingredient", vi: "nguyên liệu", ipa: "/ɪnˈɡridiənt/" },
        { en: "savory", vi: "ngon mồm, đậm đà", ipa: "/ˈseɪvəri/" },
        { en: "spicy", vi: "cay", ipa: "/ˈspaɪsi/" },
        { en: "indulgent", vi: "phung phí, thỏa mãn", ipa: "/ɪnˈdʌldʒənt/" },
        { en: "wholesome", vi: "lành mạnh, bổ dưỡng", ipa: "/ˈhoʊl.səm/" },
        { en: "gourmet", vi: "ẩm thực tinh hoa", ipa: "/ˈɡʊrmeɪ/" },
        { en: "delicious", vi: "ngon miệng, thơm ngon", ipa: "/dɪˈlɪʃəs/" },
        { en: "buffet", vi: "tiệc tự chọn", ipa: "/ˈbʊfeɪ/" },
        { en: "presentation", vi: "cách trình bày, thể hiện", ipa: "/ˌprezənˈteɪʃən/" },
        { en: "simmer", vi: "ninh nhỏ lửa", ipa: "/ˈsɪmər/" },
        { en: "bake", vi: "nướng", ipa: "/beɪk/" },
        { en: "grill", vi: "nướng trên lửa than", ipa: "/ɡrɪl/" },
        { en: "steam", vi: "hấp", ipa: "/stim/" },
        { en: "sauté", vi: "xào", ipa: "/sɔːˈteɪ/" },
        { en: "garnish", vi: "trang trí, điểm tô", ipa: "/ˈɡɑːrnɪʃ/" }
    ],

    // === DRINKS (Đồ uống) ===
    drinks: [
        { en: "coffee", vi: "cà phê", ipa: "/ˈkɒfi/" },
        { en: "tea", vi: "trà", ipa: "/tiː/" },
        { en: "juice", vi: "nước trái cây", ipa: "/dʒuːs/" },
        { en: "water", vi: "nước", ipa: "/ˈwɔːtər/" },
        { en: "soda", vi: "nước có ga", ipa: "/ˈsoʊdə/" },
        { en: "milk", vi: "sữa", ipa: "/mɪlk/" },
        { en: "smoothie", vi: "sinh tố", ipa: "/ˈsmuːði/" },
        { en: "cocktail", vi: "cocktail", ipa: "/ˈkɑːkteɪl/" },
        { en: "beer", vi: "bia", ipa: "/bɪr/" },
        { en: "wine", vi: "rượu vang", ipa: "/waɪn/" },
        { en: "champagne", vi: "rượu sâm banh", ipa: "/ʃæmˈpeɪn/" },
        { en: "whiskey", vi: "rượu whiskey", ipa: "/ˈwɪski/" },
        { en: "soda water", vi: "nước suối có ga", ipa: "/ˈsoʊdə ˈwɔːtər/" },
        { en: "lemonade", vi: "nước chanh", ipa: "/ˌleməˈneɪd/" },
        { en: "hot chocolate", vi: "sữa nóng cacao", ipa: "/ˌhɒt ˈtʃɔːklət/" },
        { en: "iced tea", vi: "trà đá", ipa: "/aɪst tiː/" },
        { en: "energy drink", vi: "nước giải khát", ipa: "/ˈenərdʒi drɪŋk/" },
        { en: "fruit punch", vi: "nước trái cây có rượu", ipa: "/fruːt pʌntʃ/" },
        { en: "herbal tea", vi: "trà thảo dược", ipa: "/ˈhɜːrbəl tiː/" },
        { en: "soft drink", vi: "nước ngọt, nước có ga", ipa: "/sɒft drɪŋk/" }
    ],

    // === FRUITS (Trái cây) ===
    fruits: [
        { en: "apple", vi: "quả táo", ipa: "/ˈæpəl/" },
        { en: "banana", vi: "quả chuối", ipa: "/bəˈnænə/" },
        { en: "orange", vi: "quả cam", ipa: "/ˈɔːrɪndʒ/" },
        { en: "strawberry", vi: "quả dâu tây", ipa: "/ˈstrɔːbəri/" },
        { en: "watermelon", vi: "dưa hấu", ipa: "/ˈwɔːtərmelən/" },
        { en: "pineapple", vi: "quả dứa", ipa: "/ˈpaɪnˌæpəl/" },
        { en: "mango", vi: "quả xoài", ipa: "/ˈmæŋɡoʊ/" },
        { en: "grape", vi: "quả nho", ipa: "/ɡreɪp/" },
        { en: "lemon", vi: "quả chanh", ipa: "/ˈlemən/" },
        { en: "cherry", vi: "quả anh đào", ipa: "/ˈtʃeri/" },
        { en: "peach", vi: "quả đào", ipa: "/piːtʃ/" },
        { en: "pear", vi: "quả lê", ipa: "/per/" },
        { en: "kiwi", vi: "quả kiwi", ipa: "/ˈkiwi/" },
        { en: "blueberry", vi: "quả việt quất", ipa: "/ˈbluːˌberi/" },
        { en: "raspberry", vi: "quả mâm xôi", ipa: "/ˈræzˌberi/" },
        { en: "avocado", vi: "quả bơ", ipa: "/ˌævəˈkɑːdoʊ/" },
        { en: "coconut", vi: "quả dừa", ipa: "/ˈkoʊkəˌnʌt/" },
        { en: "pomegranate", vi: "quả lựu", ipa: "/ˈpɑːmɪɡrænɪt/" },
        { en: "passion fruit", vi: "quả chanh dây", ipa: "/ˈpæʃən ˌfruːt/" },
        { en: "apricot", vi: "quả mơ", ipa: "/ˈeɪprɪkɑːt/" }
    ],

    // === VEGETABLES (Rau củ quả) ===
    vegetables: [
        { en: "carrot", vi: "cà rốt", ipa: "/ˈkærət/" },
        { en: "broccoli", vi: "súp lơ xanh", ipa: "/ˈbrɒkəli/" },
        { en: "lettuce", vi: "rau diếp", ipa: "/ˈletɪs/" },
        { en: "cucumber", vi: "dưa chuột", ipa: "/ˈkjuːkʌmbər/" },
        { en: "tomato", vi: "cà chua", ipa: "/təˈmeɪtoʊ/" },
        { en: "spinach", vi: "rau bina", ipa: "/ˈspɪnɪdʒ/" },
        { en: "cabbage", vi: "bắp cải", ipa: "/ˈkæbɪdʒ/" },
        { en: "onion", vi: "hành tây", ipa: "/ˈʌnjən/" },
        { en: "garlic", vi: "tỏi", ipa: "/ˈɡɑːrlɪk/" },
        { en: "potato", vi: "khoai tây", ipa: "/pəˈteɪtoʊ/" },
        { en: "bell pepper", vi: "ớt chuông", ipa: "/bel ˈpepər/" },
        { en: "zucchini", vi: "bí đỏ", ipa: "/zuːˈkiːni/" },
        { en: "eggplant", vi: "cà tím", ipa: "/ˈeɡˌplænt/" },
        { en: "cauliflower", vi: "bông cải trắng", ipa: "/ˈkɑːlɪˌflaʊər/" },
        { en: "pumpkin", vi: "bí ngô", ipa: "/ˈpʌmpkɪn/" },
        { en: "sweet potato", vi: "khoai lang", ipa: "/swiːt pəˈteɪtoʊ/" },
        { en: "asparagus", vi: "măng tây", ipa: "/əˈspærəɡəs/" },
        { en: "radish", vi: "củ cải đỏ", ipa: "/ˈrædɪʃ/" },
        { en: "beet", vi: "củ cải đường", ipa: "/bit/" },
        { en: "green bean", vi: "đậu bắp", ipa: "/ɡrin bin/" }
    ],
     // === SEAFOOD (Hải sản) ===
    seafood: [
        { en: "shrimp", vi: "tôm", ipa: "/ʃrɪmp/" },
        { en: "crab", vi: "cua", ipa: "/kræb/" },
        { en: "lobster", vi: "tôm hùm", ipa: "/ˈlɑːbstər/" },
        { en: "oyster", vi: "hàu", ipa: "/ˈɔɪstər/" },
        { en: "scallop", vi: "sò điệp", ipa: "/ˈskɒləp/" },
        { en: "clam", vi: "nghêu", ipa: "/klæm/" },
        { en: "squid", vi: "mực", ipa: "/skwɪd/" },
        { en: "octopus", vi: "bạch tuộc", ipa: "/ˈɒktəpəs/" },
        { en: "mussels", vi: "con trai", ipa: "/ˈmʌsəlz/" },
        { en: "fish", vi: "cá", ipa: "/fɪʃ/" },
        { en: "salmon", vi: "cá hồi", ipa: "/ˈsæmən/" },
        { en: "tuna", vi: "cá ngừ", ipa: "/ˈtuːnə/" },
        { en: "cod", vi: "cá tuyết", ipa: "/kɒd/" },
        { en: "haddock", vi: "cá tuyết trắng", ipa: "/ˈhædək/" },
        { en: "sardine", vi: "cá mòi", ipa: "/sɑːrˈdiːn/" },
        { en: "anchovy", vi: "cá cơm", ipa: "/ˈæntʃəvi/" },
        { en: "trout", vi: "cá hồi nướng", ipa: "/traʊt/" },
        { en: "shrimp cocktail", vi: "món tôm sốt cocktail", ipa: "/ʃrɪmp ˈkɒkteɪl/" },
        { en: "caviar", vi: "trứng cá hồi", ipa: "/ˈkæviɑːr/" },
        { en: "calamari", vi: "mực nướng", ipa: "/kəˈlæməri/" }
    ],

    // === VIETNAMESE DISHES (Món ăn Việt Nam) ===
    vietnameseDishes: [
        { en: "pho", vi: "phở", ipa: "/foʊ/" },
        { en: "banh mi", vi: "bánh mì", ipa: "/bæn miː/" },
        { en: "fresh spring rolls", vi: "gỏi cuốn", ipa: "/freʃ sprɪŋ rəʊlz/" },
        { en: "grilled pork with noodles", vi: "bún chả", ipa: "/ɡrɪld pɔːk wɪð ˈnuːdlz/" },
        { en: "braised fish", vi: "cá kho", ipa: "/breɪzd fɪʃ/" },
        { en: "shaking beef", vi: "bò lúc lắc", ipa: "/ˈʃeɪkɪŋ biːf/" },
        { en: "broken rice", vi: "cơm tấm", ipa: "/ˈbrəʊkən raɪs/" },
        { en: "vietnamese pancake", vi: "bánh xèo", ipa: "/ˌvjetnəˈmiːz ˈpænkeɪk/" },
        { en: "grilled chicken", vi: "gà nướng", ipa: "/ɡrɪld ˈtʃɪkɪn/" },
        { en: "fried spring rolls", vi: "nem rán", ipa: "/fraɪd sprɪŋ rəʊlz/" },
        { en: "crab noodle soup", vi: "bún riêu", ipa: "/kræb ˈnuːdl suːp/" },
        { en: "sour soup", vi: "canh chua", ipa: "/ˈsaʊə suːp/" },
        { en: "green papaya salad", vi: "gỏi đu đủ", ipa: "/ɡriːn pəˈpaɪə ˈsæləd/" },
        { en: "steamed rice rolls", vi: "bánh cuốn", ipa: "/stiːmd raɪs rəʊlz/" },
        { en: "fried fish", vi: "cá chiên", ipa: "/fraɪd fɪʃ/" },
        { en: "beef stew", vi: "bò kho", ipa: "/biːf stjuː/" },
        { en: "stir-fried noodles", vi: "mì xào", ipa: "/stɜː-fraɪd ˈnuːdlz/" },
        { en: "fish cake", vi: "chả cá", ipa: "/fɪʃ keɪk/" },
        { en: "water fern cake", vi: "bánh bèo", ipa: "/ˈwɔːtə fɜːn keɪk/" },
        { en: "thick noodle soup", vi: "bánh canh", ipa: "/θɪk ˈnuːdl suːp/" }
    ],

    // === COOKING (Nấu ăn) ===
    cooking: [
        { en: "recipe", vi: "công thức nấu ăn", ipa: "/ˈresəpi/" },
        { en: "ingredient", vi: "nguyên liệu", ipa: "/ɪnˈɡriːdiənt/" },
        { en: "utensil", vi: "dụng cụ nấu ăn", ipa: "/juːˈtensəl/" },
        { en: "chopping board", vi: "thớt cắt", ipa: "/ˈtʃɑːpɪŋ bɔːrd/" },
        { en: "knife", vi: "dao", ipa: "/naɪf/" },
        { en: "cutting", vi: "cắt", ipa: "/ˈkʌtɪŋ/" },
        { en: "peeling", vi: "gọt", ipa: "/ˈpiːlɪŋ/" },
        { en: "boiling", vi: "sôi", ipa: "/ˈbɔɪlɪŋ/" },
        { en: "frying", vi: "chiên", ipa: "/ˈfraɪɪŋ/" },
        { en: "baking", vi: "nướng", ipa: "/ˈbeɪkɪŋ/" },
        { en: "grilling", vi: "nướng (lưới)", ipa: "/ˈɡrɪlɪŋ/" },
        { en: "sautéing", vi: "xào", ipa: "/sɔːˈteɪɪŋ/" },
        { en: "simmering", vi: "ninh", ipa: "/ˈsɪmərɪŋ/" },
        { en: "stirring", vi: "khuấy", ipa: "/ˈstɜːrɪŋ/" },
        { en: "whisking", vi: "đánh (trứng, kem)", ipa: "/ˈwɪskɪŋ/" },
        { en: "marinating", vi: "ướp (thịt)", ipa: "/ˈmærɪneɪtɪŋ/" },
        { en: "seasoning", vi: "gia vị", ipa: "/ˈsiːzənɪŋ/" },
        { en: "tasting", vi: "nếm thử", ipa: "/ˈteɪstɪŋ/" },
        { en: "garnish", vi: "trang trí", ipa: "/ˈɡɑːrnɪʃ/" },
        { en: "plating", vi: "dọn đĩa", ipa: "/ˈpleɪtɪŋ/" }
    ],

    // === HOBBIES (Sở thích) ===
    hobbies: [
        { en: "painting", vi: "hội họa", ipa: "/ˈpeɪntɪŋ/" },
        { en: "photography", vi: "nhiếp ảnh", ipa: "/fəˈtɑːɡrəfi/" },
        { en: "gardening", vi: "làm vườn", ipa: "/ˈɡɑːrdnɪŋ/" },
        { en: "cooking", vi: "nấu ăn", ipa: "/ˈkʊkɪŋ/" },
        { en: "reading", vi: "đọc sách", ipa: "/ˈriːdɪŋ/" },
        { en: "writing", vi: "viết", ipa: "/ˈraɪtɪŋ/" },
        { en: "drawing", vi: "vẽ", ipa: "/ˈdrɔːɪŋ/" },
        { en: "hiking", vi: "leo núi", ipa: "/ˈhaɪkɪŋ/" },
        { en: "fishing", vi: "câu cá", ipa: "/ˈfɪʃɪŋ/" },
        { en: "knitting", vi: "đan len", ipa: "/ˈnɪtɪŋ/" },
        { en: "dancing", vi: "khiêu vũ", ipa: "/ˈdænsɪŋ/" },
        { en: "playing guitar", vi: "chơi guitar", ipa: "/ˈpleɪɪŋ ɡɪˈtɑːr/" },
        { en: "playing piano", vi: "chơi piano", ipa: "/ˈpleɪɪŋ piˈænoʊ/" },
        { en: "playing chess", vi: "chơi cờ", ipa: "/ˈpleɪɪŋ tʃes/" },
        { en: "playing tennis", vi: "chơi quần vợt", ipa: "/ˈpleɪɪŋ ˈtenɪs/" },
        { en: "collecting stamps", vi: "sưu tập tem", ipa: "/kəˈlektɪŋ stæmps/" },
        { en: "birdwatching", vi: "quan sát chim", ipa: "/ˈbɜːrdˌwɑːtʃɪŋ/" },
        { en: "playing video games", vi: "chơi game", ipa: "/ˈpleɪɪŋ ˈvɪdi.oʊ ɡeɪmz/" },
        { en: "cycling", vi: "đi xe đạp", ipa: "/ˈsaɪklɪŋ/" }
    ],

    // === MUSIC (Âm nhạc) ===
    music: [
        { en: "melody", vi: "giai điệu", ipa: "/ˈmelədi/" },
        { en: "rhythm", vi: "nhịp điệu", ipa: "/ˈrɪðəm/" },
        { en: "harmony", vi: "âm điệu", ipa: "/ˈhɑːrməni/" },
        { en: "tempo", vi: "nhịp độ", ipa: "/ˈtempoʊ/" },
        { en: "beat", vi: "nhịp", ipa: "/biːt/" },
        { en: "lyrics", vi: "lời bài hát", ipa: "/ˈlɪrɪks/" },
        { en: "chorus", vi: "đoạn hợp xướng", ipa: "/ˈkɔːrəs/" },
        { en: "verse", vi: "đoạn hợp ca", ipa: "/vɜːrs/" },
        { en: "solo", vi: "màn trình diễn đơn", ipa: "/ˈsoʊloʊ/" },
        { en: "duet", vi: "hòa âm đôi", ipa: "/ˈduːet/" },
        { en: "orchestra", vi: "dàn nhạc", ipa: "/ˈɔːrkɪstrə/" },
        { en: "conductor", vi: "người chỉ huy dàn nhạc", ipa: "/kənˈdʌktər/" },
        { en: "instrument", vi: "nhạc cụ", ipa: "/ˈɪnstrəmənt/" },
        { en: "piano", vi: "đàn piano", ipa: "/piˈænoʊ/" },
        { en: "guitar", vi: "đàn guitar", ipa: "/ɡɪˈtɑːr/" },
        { en: "violin", vi: "đàn vi-ô-lông", ipa: "/ˈvaɪəlɪn/" },
        { en: "trumpet", vi: "kèn trumpet", ipa: "/ˈtrʌmpɪt/" },
        { en: "drums", vi: "trống", ipa: "/drʌmz/" },
        { en: "voice", vi: "giọng", ipa: "/vɔɪs/" },
        { en: "concert", vi: "buổi hòa nhạc", ipa: "/ˈkɑːnsərt/" }
    ],

    // === SHOPPING ===
    shopping: [
        { en: "shop", vi: "cửa hàng", ipa: "/ʃɑːp/" },
        { en: "store", vi: "cửa hàng", ipa: "/stɔːr/" },
        { en: "mall", vi: "trung tâm mua sắm", ipa: "/mɔːl/" },
        { en: "market", vi: "chợ", ipa: "/ˈmɑːrkɪt/" },
        { en: "customer", vi: "khách hàng", ipa: "/ˈkʌstəmər/" },
        { en: "sale", vi: "giảm giá", ipa: "/seɪl/" },
        { en: "discount", vi: "giảm giá", ipa: "/ˈdɪskaʊnt/" },
        { en: "cashier", vi: "thu ngân", ipa: "/kæˈʃɪər/" },
        { en: "receipt", vi: "biên lai", ipa: "/rɪˈsiːpt/" },
        { en: "basket", vi: "giỏ", ipa: "/ˈbæskɪt/" },
        { en: "cart", vi: "xe đẩy hàng", ipa: "/kɑːrt/" },
        { en: "aisle", vi: "lối đi", ipa: "/aɪl/" },
        { en: "checkout", vi: "quầy thanh toán", ipa: "/ˈtʃekaʊt/" },
        { en: "payment", vi: "thanh toán", ipa: "/ˈpeɪmənt/" },
        { en: "size", vi: "kích cỡ", ipa: "/saɪz/" },
        { en: "fitting room", vi: "phòng thử đồ", ipa: "/ˈfɪtɪŋ ruːm/" },
        { en: "hanger", vi: "móc treo áo", ipa: "/ˈhæŋər/" },
        { en: "shelf", vi: "kệ", ipa: "/ʃelf/" }
    ],

    // === TRAVEL (Du lịch) ===
    travel: [
        { en: "travel", vi: "du lịch", ipa: "/ˈtrævəl/" },
        { en: "trip", vi: "chuyến đi", ipa: "/trɪp/" },
        { en: "destination", vi: "điểm đến", ipa: "/ˌdestɪˈneɪʃən/" },
        { en: "itinerary", vi: "lịch trình", ipa: "/aɪˈtɪnərəri/" },
        { en: "tourist", vi: "du khách", ipa: "/ˈtʊrɪst/" },
        { en: "sightseeing", vi: "tham quan", ipa: "/ˈsaɪtˌsiːɪŋ/" },
        { en: "explore", vi: "khám phá", ipa: "/ɪkˈsplɔːr/" },
        { en: "adventure", vi: "cuộc phiêu lưu", ipa: "/ədˈventʃər/" },
        { en: "accommodation", vi: "chỗ ở", ipa: "/əˌkɑːməˈdeɪʃən/" },
        { en: "hotel", vi: "khách sạn", ipa: "/hoʊˈtel/" },
        { en: "hostel", vi: "nhà trọ", ipa: "/ˈhɑːstəl/" },
        { en: "passport", vi: "hộ chiếu", ipa: "/ˈpæspɔːrt/" },
        { en: "visa", vi: "visa", ipa: "/ˈviːzə/" },
        { en: "luggage", vi: "hành lý", ipa: "/ˈlʌɡɪdʒ/" },
        { en: "airport", vi: "sân bay", ipa: "/ˈerˌpɔːrt/" },
        { en: "departure", vi: "khởi hành", ipa: "/dɪˈpɑːrtʃər/" },
        { en: "arrival", vi: "đến nơi", ipa: "/əˈraɪvəl/" },
        { en: "currency", vi: "tiền tệ", ipa: "/ˈkɜːrənsi/" },
        { en: "exchange", vi: "trao đổi", ipa: "/ɪksˈtʃeɪndʒ/" },
        { en: "guide", vi: "hướng dẫn viên", ipa: "/ɡaɪd/" }
    ],

    // === PHOTOGRAPHY (Chụp ảnh) ===
    photography: [
        { en: "photography", vi: "nhiếp ảnh", ipa: "/fəˈtɑːɡrəfi/" },
        { en: "camera", vi: "máy ảnh", ipa: "/ˈkæmərə/" },
        { en: "lens", vi: "ống kính", ipa: "/lenz/" },
        { en: "shutter", vi: "cửa khẩu (trong máy ảnh)", ipa: "/ˈʃʌtər/" },
        { en: "focus", vi: "lấy nét", ipa: "/ˈfoʊkəs/" },
        { en: "exposure", vi: "chụp sáng", ipa: "/ɪkˈspoʊʒər/" },
        { en: "aperture", vi: "khẩu độ", ipa: "/ˈæpərtʃər/" },
        { en: "ISO", vi: "độ nhạy sáng ISO", ipa: "/ˌaɪeˈsoʊ/" },
        { en: "shutter speed", vi: "tốc độ chụp", ipa: "/ˈʃʌtər spiːd/" },
        { en: "white balance", vi: "cân bằng trắng", ipa: "/waɪt ˈbæləns/" },
        { en: "composition", vi: "cách bố trí", ipa: "/ˌkɑːmpəˈzɪʃən/" },
        { en: "frame", vi: "khung ảnh", ipa: "/freɪm/" },
        { en: "zoom", vi: "thu phóng", ipa: "/zuːm/" },
        { en: "portrait", vi: "chân dung", ipa: "/ˈpɔːrtrɪt/" },
        { en: "landscape", vi: "phong cảnh", ipa: "/ˈlændskeɪp/" },
        { en: "megapixel", vi: "triệu điểm ảnh", ipa: "/ˈmeɡəˌpɪksəl/" },
        { en: "editing", vi: "chỉnh sửa", ipa: "/ˈedɪtɪŋ/" }
    ],

    // === ENTERTAINMENT (Giải trí) ===
    entertainment: [
        { en: "entertainment", vi: "giải trí", ipa: "/ˌentərˈteɪnmənt/" },
        { en: "movie", vi: "phim", ipa: "/ˈmuːvi/" },
        { en: "theater", vi: "rạp hát, nhà hát", ipa: "/ˈθiːətər/" },
        { en: "concert", vi: "buổi hòa nhạc", ipa: "/ˈkɑːnsərt/" },
        { en: "performance", vi: "biểu diễn", ipa: "/pərˈfɔːrməns/" },
        { en: "music", vi: "âm nhạc", ipa: "/ˈmjuːzɪk/" },
        { en: "dance", vi: "khiêu vũ", ipa: "/dæns/" },
        { en: "festival", vi: "lễ hội", ipa: "/ˈfestəvəl/" },
        { en: "exhibition", vi: "triển lãm", ipa: "/ˌeksɪˈbɪʃən/" },
        { en: "art", vi: "nghệ thuật", ipa: "/ɑːrt/" },
        { en: "comedy", vi: "hài kịch", ipa: "/ˈkɑːmədi/" },
        { en: "drama", vi: "kịch", ipa: "/ˈdrɑːmə/" },
        { en: "actor", vi: "diễn viên", ipa: "/ˈæktər/" },
        { en: "actress", vi: "nữ diễn viên", ipa: "/ˈæktrəs/" },
        { en: "audience", vi: "khán giả", ipa: "/ˈɔːdiəns/" },
        { en: "ticket", vi: "vé", ipa: "/ˈtɪkɪt/" },
        { en: "applause", vi: "tràng pháo tay", ipa: "/əˈplɔːz/" },
        { en: "performer", vi: "nghệ sĩ", ipa: "/pərˈfɔːrmər/" },
        { en: "show", vi: "chương trình", ipa: "/ʃoʊ/" }
    ],

    // === MOVIE GENRES (Các thể loại phim) ===
    movieGenres: [
        { en: "action", vi: "hành động", ipa: "/ˈækʃən/" },
        { en: "adventure", vi: "phiêu lưu", ipa: "/ədˈventʃər/" },
        { en: "comedy", vi: "hài", ipa: "/ˈkɑːmədi/" },
        { en: "drama", vi: "kịch, tình cảm", ipa: "/ˈdrɑːmə/" },
        { en: "thriller", vi: "hồi hộp", ipa: "/ˈθrɪlər/" },
        { en: "horror", vi: "kinh dị", ipa: "/ˈhɔːrər/" },
        { en: "romance", vi: "tình cảm", ipa: "/ˈroʊmæns/" },
        { en: "science fiction", vi: "khoa học viễn tưởng", ipa: "/ˈsaɪəns ˈfɪkʃən/" },
        { en: "fantasy", vi: "huyền bí, ảo tưởng", ipa: "/ˈfæntəsi/" },
        { en: "animation", vi: "hoạt hình", ipa: "/ˌænɪˈmeɪʃən/" },
        { en: "musical", vi: "nhạc kịch", ipa: "/ˈmjuːzɪkəl/" },
        { en: "documentary", vi: "phim tài liệu", ipa: "/ˌdɑːkjəˈmentəri/" },
        { en: "crime", vi: "tội phạm", ipa: "/kraɪm/" },
        { en: "suspense", vi: "căng thẳng, hồi hộp", ipa: "/səˈspens/" },
        { en: "western", vi: "phim miền Tây", ipa: "/ˈwestərn/" },
        { en: "historical", vi: "lịch sử", ipa: "/hɪˈstɔːrɪkəl/" },
        { en: "war", vi: "chiến tranh", ipa: "/wɔːr/" },
        { en: "romantic comedy", vi: "hài lãng mạn", ipa: "/roʊˈmæntɪk ˈkɑːmədi/" },
        { en: "biopic", vi: "phim truyện tiểu sử", ipa: "/ˈbaɪɑːpɪk/" }
    ],

    // === BOOK GENRES (Các thể loại sách) ===
    bookGenres: [
        { en: "fiction", vi: "tiểu thuyết", ipa: "/ˈfɪkʃən/" },
        { en: "non-fiction", vi: "phi hư cấu", ipa: "/nɑnˈfɪkʃən/" },
        { en: "mystery", vi: "bí ẩn, trinh thám", ipa: "/ˈmɪstəri/" },
        { en: "romance", vi: "tình cảm", ipa: "/ˈroʊmæns/" },
        { en: "science fiction", vi: "khoa học viễn tưởng", ipa: "/ˈsaɪəns ˈfɪkʃən/" },
        { en: "fantasy", vi: "huyền bí", ipa: "/ˈfæntəsi/" },
        { en: "thriller", vi: "ly kỳ", ipa: "/ˈθrɪlər/" },
        { en: "horror", vi: "kinh dị", ipa: "/ˈhɔːrər/" },
        { en: "biography", vi: "tiểu sử", ipa: "/baɪˈɑːɡrəfi/" },
        { en: "autobiography", vi: "tự truyện", ipa: "/ˌɔːtoʊbaɪˈɑːɡrəfi/" },
        { en: "historical fiction", vi: "tiểu thuyết lịch sử", ipa: "/hɪˈstɔːrɪkəl ˈfɪkʃən/" },
        { en: "poetry", vi: "thơ", ipa: "/ˈpoʊətri/" },
        { en: "drama", vi: "kịch", ipa: "/ˈdrɑːmə/" },
        { en: "comedy", vi: "hài", ipa: "/ˈkɑːmədi/" },
        { en: "adventure", vi: "phiêu lưu", ipa: "/ədˈventʃər/" },
        { en: "young adult", vi: "thanh thiếu niên", ipa: "/jʌŋ ˈædʌlt/" },
        { en: "children's", vi: "thiếu nhi", ipa: "/ˈtʃɪldrənz/" },
        { en: "self-help", vi: "tự giúp bản thân", ipa: "/ˌself ˈhelp/" },
        { en: "historical romance", vi: "tình cảm lịch sử", ipa: "/hɪˈstɔːrɪkəl ˈroʊmæns/" }
    ],

    // === BEAUTY (Làm đẹp) ===
    beauty: [
        { en: "beauty", vi: "vẻ đẹp", ipa: "/ˈbjuːti/" },
        { en: "attractive", vi: "hấp dẫn", ipa: "/əˈtræktɪv/" },
        { en: "radiant", vi: "rực rỡ, tươi sáng", ipa: "/ˈreɪdiənt/" },
        { en: "glamorous", vi: "quyến rũ, sang trọng", ipa: "/ˈɡlæmərəs/" },
        { en: "elegant", vi: "thanh lịch, tao nhã", ipa: "/ˈelɪɡənt/" },
        { en: "stunning", vi: "ngoạn mục, gây ấn tượng", ipa: "/ˈstʌnɪŋ/" },
        { en: "graceful", vi: "duyên dáng, uyển chuyển", ipa: "/ˈɡreɪsfəl/" },
        { en: "charming", vi: "quyến rũ, thu hút", ipa: "/ˈtʃɑːrmɪŋ/" },
        { en: "flawless", vi: "hoàn hảo, không tỳ vết", ipa: "/ˈflɔːlɪs/" },
        { en: "youthful", vi: "trẻ trung, tươi trẻ", ipa: "/ˈjuːθfəl/" },
        { en: "vibrant", vi: "sôi động, sáng láng", ipa: "/ˈvaɪbrənt/" },
        { en: "alluring", vi: "quyến rũ, lôi cuốn", ipa: "/əˈljʊrɪŋ/" },
        { en: "sophisticated", vi: "tinh vi, phức tạp", ipa: "/səˈfɪstɪkeɪtɪd/" },
        { en: "stylish", vi: "phong cách, lịch lãm", ipa: "/ˈstaɪlɪʃ/" }
    ],
    // === SPORTS (Các môn thể thao) ===
    sports: [
        { en: "sport", vi: "môn thể thao", ipa: "/spɔːrt/" },
        { en: "athlete", vi: "vận động viên", ipa: "/ˈæθliːt/" },
        { en: "team", vi: "đội", ipa: "/tiːm/" },
        { en: "competition", vi: "cuộc thi, cạnh tranh", ipa: "/ˌkɒmpɪˈtɪʃən/" },
        { en: "tournament", vi: "giải đấu, giải thể thao", ipa: "/ˈtʊərnəmənt/" },
        { en: "referee", vi: "trọng tài", ipa: "/ˈrefəriː/" },
        { en: "stadium", vi: "sân vận động", ipa: "/ˈsteɪdiəm/" },
        { en: "coach", vi: "huấn luyện viên", ipa: "/koʊtʃ/" },
        { en: "champion", vi: "nhà vô địch", ipa: "/ˈtʃæmpiən/" },
        { en: "victory", vi: "chiến thắng", ipa: "/ˈvɪktəri/" },
        { en: "defeat", vi: "thất bại", ipa: "/dɪˈfiːt/" },
        { en: "medal", vi: "huy chương", ipa: "/ˈmedl/" },
        { en: "record", vi: "kỷ lục", ipa: "/ˈrekɔːrd/" },
        { en: "equipment", vi: "trang thiết bị", ipa: "/ɪˈkwɪpmənt/" },
        { en: "fitness", vi: "thể lực", ipa: "/ˈfɪtnəs/" },
        { en: "endurance", vi: "sức bền", ipa: "/ɪnˈdʊrəns/" },
        { en: "agility", vi: "sự nhanh nhẹn", ipa: "/əˈdʒɪləti/" },
        { en: "strength", vi: "sức mạnh", ipa: "/streŋθ/" },
        { en: "flexibility", vi: "sự linh hoạt", ipa: "/ˌfleksəˈbɪlɪti/" }
    ],

    // === SOCCER (Bóng đá) ===
    soccer: [
        { en: "football", vi: "bóng đá", ipa: "/ˈfʊtbɔːl/" },
        { en: "goal", vi: "bàn thắng", ipa: "/ɡoʊl/" },
        { en: "player", vi: "cầu thủ", ipa: "/ˈpleɪər/" },
        { en: "referee", vi: "trọng tài", ipa: "/ˈrefəriː/" },
        { en: "team", vi: "đội", ipa: "/tiːm/" },
        { en: "coach", vi: "huấn luyện viên", ipa: "/koʊtʃ/" },
        { en: "captain", vi: "đội trưởng", ipa: "/ˈkæptən/" },
        { en: "match", vi: "trận đấu", ipa: "/mætʃ/" },
        { en: "stadium", vi: "sân vận động", ipa: "/ˈsteɪdiəm/" },
        { en: "dribble", vi: "đi bóng", ipa: "/ˈdrɪbəl/" },
        { en: "pass", vi: "chuyền bóng", ipa: "/pæs/" },
        { en: "shoot", vi: "sút bóng", ipa: "/ʃuːt/" },
        { en: "tackle", vi: "phá bóng, cắt bóng", ipa: "/ˈtækəl/" },
        { en: "penalty", vi: "đá phạt đền", ipa: "/ˈpenəlti/" },
        { en: "corner", vi: "quả phạt góc", ipa: "/ˈkɔːrnər/" },
        { en: "header", vi: "đánh đầu", ipa: "/ˈhedər/" },
        { en: "foul", vi: "vi phạm", ipa: "/faʊl/" },
        { en: "offside", vi: "việt vị", ipa: "/ˈɔfˌsaɪd/" },
        { en: "substitution", vi: "thay người", ipa: "/ˌsʌbstɪˈtuːʃən/" },
        { en: "league", vi: "giải bóng đá", ipa: "/liːɡ/" }
    ],

    // === HOUSE (Nhà cửa) ===
    house: [
        { en: "house", vi: "nhà", ipa: "/haʊs/" },
        { en: "apartment", vi: "căn hộ", ipa: "/əˈpɑːrtmənt/" },
        { en: "bedroom", vi: "phòng ngủ", ipa: "/ˈbedruːm/" },
        { en: "living room", vi: "phòng khách", ipa: "/ˈlɪvɪŋ ruːm/" },
        { en: "kitchen", vi: "nhà bếp", ipa: "/ˈkɪtʃɪn/" },
        { en: "bathroom", vi: "phòng tắm", ipa: "/ˈbæθruːm/" },
        { en: "balcony", vi: "ban công", ipa: "/ˈbælkəni/" },
        { en: "backyard", vi: "sân sau", ipa: "/ˈbækjɑːrd/" },
        { en: "garden", vi: "vườn", ipa: "/ˈɡɑːrdən/" },
        { en: "garage", vi: "nhà để xe", ipa: "/ˈɡærɑːʒ/" },
        { en: "roof", vi: "mái nhà", ipa: "/ruːf/" },
        { en: "wall", vi: "bức tường", ipa: "/wɔːl/" },
        { en: "floor", vi: "sàn", ipa: "/flɔːr/" },
        { en: "window", vi: "cửa sổ", ipa: "/ˈwɪndoʊ/" },
        { en: "door", vi: "cửa", ipa: "/dɔːr/" },
        { en: "staircase", vi: "cầu thang", ipa: "/ˈsterkeɪs/" },
        { en: "furniture", vi: "nội thất", ipa: "/ˈfɜːrnɪtʃər/" },
        { en: "rent", vi: "thuê, tiền thuê", ipa: "/rent/" },
        { en: "landlord", vi: "chủ nhà, chủ nhà trọ", ipa: "/ˈlændlɔːrd/" },
        { en: "tenant", vi: "người thuê nhà", ipa: "/ˈtenənt/" }
    ],

    // === KITCHEN (Nhà bếp) ===
    kitchen: [
        { en: "kitchen", vi: "nhà bếp", ipa: "/ˈkɪtʃɪn/" },
        { en: "stove", vi: "bếp", ipa: "/stoʊv/" },
        { en: "oven", vi: "lò nướng", ipa: "/ˈʌvən/" },
        { en: "refrigerator", vi: "tủ lạnh", ipa: "/rɪˈfrɪdʒəreɪtər/" },
        { en: "microwave", vi: "lò vi sóng", ipa: "/ˈmaɪkrəˌweɪv/" },
        { en: "sink", vi: "bồn rửa", ipa: "/sɪŋk/" },
        { en: "faucet", vi: "vòi nước", ipa: "/ˈfɔːsɪt/" },
        { en: "dishwasher", vi: "máy rửa chén", ipa: "/ˈdɪʃˌwɑːʃər/" },
        { en: "countertop", vi: "mặt bếp", ipa: "/ˈkaʊntərˌtɑːp/" },
        { en: "cabinet", vi: "tủ", ipa: "/ˈkæbənɪt/" },
        { en: "cutting board", vi: "thớt cắt", ipa: "/ˈkʌtɪŋ bɔːrd/" },
        { en: "knife", vi: "con dao", ipa: "/naɪf/" },
        { en: "spoon", vi: "cái thìa", ipa: "/spuːn/" },
        { en: "fork", vi: "cái nĩa", ipa: "/fɔːrk/" },
        { en: "plate", vi: "đĩa", ipa: "/pleɪt/" },
        { en: "bowl", vi: "tô", ipa: "/boʊl/" },
        { en: "pot", vi: "nồi", ipa: "/pɒt/" },
        { en: "pan", vi: "chảo", ipa: "/pæn/" },
        { en: "whisk", vi: "cái đánh trứng", ipa: "/wɪsk/" },
        { en: "blender", vi: "máy xay", ipa: "/ˈblendər/" }
    ],

    // === TET (Tết) ===
    tet: [
        { en: "tet holiday", vi: "Tết", ipa: "/tet ˈhɑlədeɪ/" },
        { en: "lunar new year", vi: "Tết Nguyên đán", ipa: "/ˈlunər njuː jɪr/" },
        { en: "celebration", vi: "lễ kỷ niệm", ipa: "/ˌseləˈbreɪʃən/" },
        { en: "family reunion", vi: "sum họp gia đình", ipa: "/ˈfæməli riːˈjunjən/" },
        { en: "red envelope", vi: "phong bì đỏ", ipa: "/red ɪnˈveloʊp/" },
        { en: "firecrackers", vi: "pháo hoa", ipa: "/ˈfaɪərˌkrækərz/" },
        { en: "traditional", vi: "truyền thống", ipa: "/trəˈdɪʃənəl/" },
        { en: "customs", vi: "phong tục", ipa: "/ˈkʌstəmz/" },
        { en: "lion dance", vi: "múa lân", ipa: "/ˈlaɪən dæns/" },
        { en: "dragon dance", vi: "múa rồng", ipa: "/ˈdræɡən dæns/" },
        { en: "ancestor worship", vi: "thờ cúng tổ tiên", ipa: "/ˈænsestər ˈwɜːrʃɪp/" },
        { en: "traditional food", vi: "đồ ăn truyền thống", ipa: "/trəˈdɪʃənəl fuːd/" },
        { en: "sticky rice cake", vi: "bánh chưng/bánh dày", ipa: "/ˈstɪki raɪs keɪk/" },
        { en: "pickled vegetables", vi: "dưa hành", ipa: "/ˈpɪkl̩d ˈvedʒtəbəlz/" },
        { en: "banh tet", vi: "bánh tét", ipa: "/bʌn tet/" },
        { en: "five-fruit tray", vi: "mâm ngũ quả", ipa: "/faɪv-fruːt treɪ/" },
        { en: "ancestral altar", vi: "bàn thờ tổ tiên", ipa: "/ænˈsestrəl ˈɔːltər/" },
        { en: "wishes", vi: "lời chúc", ipa: "/ˈwɪʃɪz/" },
        { en: "cultural heritage", vi: "di sản văn hóa", ipa: "/ˈkʌltʃərəl ˈherɪtɪdʒ/" },
        { en: "festive atmosphere", vi: "không khí lễ hội", ipa: "/ˈfestɪv ˈætˌmɑːsfɪr/" }
    ],

    // === DAILY LIFE (Đời sống) ===
    dailyLife: [
        { en: "lifestyle", vi: "lối sống", ipa: "/ˈlaɪfˌstaɪl/" },
        { en: "routine", vi: "lịch trình", ipa: "/ruˈtin/" },
        { en: "healthy", vi: "lành mạnh", ipa: "/ˈhelθi/" },
        { en: "exercise", vi: "tập luyện", ipa: "/ˈeksərˌsaɪz/" },
        { en: "diet", vi: "chế độ ăn uống", ipa: "/ˈdaɪət/" },
        { en: "balanced", vi: "cân đối", ipa: "/ˈbælənst/" },
        { en: "stress", vi: "căng thẳng", ipa: "/stres/" },
        { en: "relaxation", vi: "thư giãn", ipa: "/ˌriːlækˈseɪʃən/" },
        { en: "meditation", vi: "thiền", ipa: "/ˌmedɪˈteɪʃən/" },
        { en: "mindfulness", vi: "tỉnh thức", ipa: "/ˈmaɪndfəlnəs/" },
        { en: "sleep", vi: "giấc ngủ", ipa: "/sliːp/" },
        { en: "hobbies", vi: "sở thích", ipa: "/ˈhɑbiz/" },
        { en: "socialize", vi: "giao lưu", ipa: "/ˈsoʊʃəˌlaɪz/" },
        { en: "leisure", vi: "thời gian rảnh rỗi", ipa: "/ˈliʒər/" },
        { en: "self-care", vi: "chăm sóc bản thân", ipa: "/self-ker/" },
        { en: "work-life balance", vi: "cân bằng công việc và cuộc sống", ipa: "/wɜrk-laɪf ˈbæləns/" },
        { en: "productivity", vi: "năng suất", ipa: "/ˌproʊˌdʌkˈtɪvəti/" },
        { en: "well-being", vi: "sự khỏe mạnh", ipa: "/wel ˈbiɪŋ/" },
        { en: "personal development", vi: "phát triển cá nhân", ipa: "/ˈpɜrsənəl dɪˈveləpmənt/" }
    ],

    // === ANIMALS (Con vật) ===
    animals: [
        { en: "dog", vi: "chó", ipa: "/dɔɡ/" },
        { en: "cat", vi: "mèo", ipa: "/kæt/" },
        { en: "lion", vi: "sư tử", ipa: "/ˈlaɪən/" },
        { en: "tiger", vi: "hổ", ipa: "/ˈtaɪɡər/" },
        { en: "elephant", vi: "voi", ipa: "/ˈeləfənt/" },
        { en: "giraffe", vi: "hươu cao cổ", ipa: "/dʒəˈræf/" },
        { en: "monkey", vi: "khỉ", ipa: "/ˈmʌŋki/" },
        { en: "bear", vi: "gấu", ipa: "/ber/" },
        { en: "dolphin", vi: "cá heo", ipa: "/ˈdɒlfɪn/" },
        { en: "shark", vi: "cá mập", ipa: "/ʃɑrk/" },
        { en: "horse", vi: "ngựa", ipa: "/hɔrs/" },
        { en: "cow", vi: "bò", ipa: "/kaʊ/" },
        { en: "sheep", vi: "cừu", ipa: "/ʃip/" },
        { en: "rabbit", vi: "thỏ", ipa: "/ˈræbɪt/" },
        { en: "bird", vi: "chim", ipa: "/bɜrd/" },
        { en: "butterfly", vi: "bướm", ipa: "/ˈbʌtərflaɪ/" },
        { en: "fish", vi: "cá", ipa: "/fɪʃ/" },
        { en: "snake", vi: "rắn", ipa: "/sneɪk/" },
        { en: "spider", vi: "nhện", ipa: "/ˈspaɪdər/" },
        { en: "turtle", vi: "rùa", ipa: "/ˈtɜrtl̩/" }
    ],

    // === FLOWERS (Hoa) ===
    flowers: [
        { en: "rose", vi: "hoa hồng", ipa: "/roʊz/" },
        { en: "sunflower", vi: "hoa hướng dương", ipa: "/ˈsʌnˌflaʊər/" },
        { en: "daisy", vi: "cúc", ipa: "/ˈdeɪzi/" },
        { en: "tulip", vi: "hoa tulip", ipa: "/ˈtjuːlɪp/" },
        { en: "lily", vi: "hoa huệ", ipa: "/ˈlɪli/" },
        { en: "orchid", vi: "hoa lan", ipa: "/ˈɔrkɪd/" },
        { en: "daffodil", vi: "hoa thuỷ tiên", ipa: "/ˈdæfəˌdɪl/" },
        { en: "carnation", vi: "hoa cẩm chướng", ipa: "/kɑrˈneɪʃən/" },
        { en: "lavender", vi: "hoa oải hương", ipa: "/ˈlævəndər/" },
        { en: "peony", vi: "hoa mẫu đơn", ipa: "/ˈpiːni/" },
        { en: "hibiscus", vi: "hoa bụp giấm", ipa: "/hɪˈbɪskəs/" },
        { en: "cherry blossom", vi: "hoa anh đào", ipa: "/ˈtʃeri ˈblɑsəm/" },
        { en: "marigold", vi: "hoa cúc vạn thọ", ipa: "/ˈmærɪˌgoʊld/" },
        { en: "jasmine", vi: "hoa nhài", ipa: "/ˈdʒæzmɪn/" },
        { en: "chrysanthemum", vi: "hoa cúc", ipa: "/krɪˈsænθəməm/" },
        { en: "violet", vi: "hoa violet", ipa: "/ˈvaɪələt/" },
        { en: "geranium", vi: "hoa giấy", ipa: "/dʒəˈreɪniəm/" },
        { en: "iris", vi: "hoa diên vĩ", ipa: "/ˈaɪrɪs/" },
        { en: "lotus", vi: "hoa sen", ipa: "/ˈloʊtəs/" },
        { en: "dahlia", vi: "hoa huệ tây", ipa: "/ˈdeɪliə/" }
    ],

    // === CHRISTMAS (Giáng sinh) ===
    christmas: [
        { en: "christmas", vi: "Giáng sinh", ipa: "/ˈkrɪsməs/" },
        { en: "santa claus", vi: "Ông già Noel", ipa: "/ˈsæntə klɔz/" },
        { en: "christmas tree", vi: "Cây thông Noel", ipa: "/ˈkrɪsməs triː/" },
        { en: "decorations", vi: "Trang trí", ipa: "/ˌdekəˈreɪʃənz/" },
        { en: "gifts", vi: "Quà tặng", ipa: "/ɡɪfts/" },
        { en: "stockings", vi: "Ống túi đựng quà", ipa: "/ˈstɑkɪŋz/" },
        { en: "reindeer", vi: "Tuần lộc", ipa: "/ˈreɪnˌdɪr/" },
        { en: "sleigh", vi: "Xe trượt tuyết", ipa: "/sleɪ/" },
        { en: "snowman", vi: "Người tuyết", ipa: "/ˈsnoʊˌmæn/" },
        { en: "mistletoe", vi: "Cây phù dung", ipa: "/ˈmɪsəlˌtoʊ/" },
        { en: "holly", vi: "Cây nguyệt quế", ipa: "/ˈhɑli/" },
        { en: "wreath", vi: "Vòng hoa", ipa: "/riːθ/" },
        { en: "carols", vi: "Bài hát Giáng sinh", ipa: "/ˈkærəlz/" },
        { en: "nativity", vi: "Màn trình diễn Giáng sinh", ipa: "/nəˈtɪvəti/" },
        { en: "candles", vi: "Nến", ipa: "/ˈkændəlz/" },
        { en: "gingerbread", vi: "Bánh quy gừng", ipa: "/ˈdʒɪndʒərˌbred/" },
        { en: "eggnog", vi: "Rượu trứng", ipa: "/ˈeɡˌnɔɡ/" },
        { en: "fireplace", vi: "Lò sưởi, lò lửa", ipa: "/ˈfaɪərˌpleɪs/" },
        { en: "ornaments", vi: "Đồ trang trí", ipa: "/ˈɔrnəmənts/" },
        { en: "snowflake", vi: "Tuyết rơi", ipa: "/ˈsnoʊˌfleɪk/" }
    ],

    // === COLORS (Màu sắc) ===
    colors: [
        { en: "blue", vi: "Màu xanh dương", ipa: "/bluː/" },
        { en: "green", vi: "Màu xanh lá cây", ipa: "/ɡriːn/" },
        { en: "yellow", vi: "Màu vàng", ipa: "/ˈjeloʊ/" },
        { en: "orange", vi: "Màu cam", ipa: "/ˈɔrɪndʒ/" },
        { en: "pink", vi: "Màu hồng", ipa: "/pɪŋk/" },
        { en: "purple", vi: "Màu tím", ipa: "/ˈpɜrpl̩/" },
        { en: "black", vi: "Màu đen", ipa: "/blæk/" },
        { en: "white", vi: "Màu trắng", ipa: "/waɪt/" },
        { en: "gray", vi: "Màu xám", ipa: "/ɡreɪ/" },
        { en: "brown", vi: "Màu nâu", ipa: "/braʊn/" },
        { en: "silver", vi: "Màu bạc", ipa: "/ˈsɪlvər/" },
        { en: "gold", vi: "Màu vàng (vàng óng)", ipa: "/ɡoʊld/" },
        { en: "turquoise", vi: "Màu ngọc lam", ipa: "/ˈtɜrkwɔɪz/" },
        { en: "magenta", vi: "Màu đỏ hồng", ipa: "/məˈdʒentə/" },
        { en: "indigo", vi: "Màu chàm", ipa: "/ˈɪndɪɡoʊ/" },
        { en: "coral", vi: "Màu san hô", ipa: "/ˈkɔrəl/" },
        { en: "beige", vi: "Màu be", ipa: "/beɪʒ/" },
        { en: "lavender", vi: "Màu oải hương", ipa: "/ˈlævəndər/" },
        { en: "maroon", vi: "Màu đỏ nâu", ipa: "/məˈrun/" },
        { en: "red", vi: "Màu đỏ", ipa: "/red/" }
    ],
    // === TRANSPORTATION (Phương tiện giao thông) ===
    transportation: [
        { en: "car", vi: "Xe hơi", ipa: "/kɑr/" },
        { en: "bus", vi: "Xe buýt", ipa: "/bʌs/" },
        { en: "train", vi: "Tàu hỏa", ipa: "/treɪn/" },
        { en: "bicycle", vi: "Xe đạp", ipa: "/ˈbaɪsɪkəl/" },
        { en: "motorcycle", vi: "Xe máy", ipa: "/ˈmoʊtərˌsaɪkəl/" },
        { en: "taxi", vi: "Xe taxi", ipa: "/ˈtæksi/" },
        { en: "subway", vi: "Xe điện ngầm", ipa: "/ˈsʌbˌweɪ/" },
        { en: "tram", vi: "Xe điện", ipa: "/træm/" },
        { en: "airplane", vi: "Máy bay", ipa: "/ˈerˌpleɪn/" },
        { en: "helicopter", vi: "Trực thăng", ipa: "/ˈhelɪˌkɑptər/" },
        { en: "ship", vi: "Tàu", ipa: "/ʃɪp/" },
        { en: "boat", vi: "Thuyền", ipa: "/boʊt/" },
        { en: "ferry", vi: "Phà", ipa: "/ˈferi/" },
        { en: "truck", vi: "Xe tải", ipa: "/trʌk/" },
        { en: "van", vi: "Xe bán tải", ipa: "/væn/" },
        { en: "scooter", vi: "Xe tay ga", ipa: "/ˈskutər/" },
        { en: "skateboard", vi: "Ván trượt", ipa: "/ˈskeɪtˌbɔrd/" },
        { en: "roller skates", vi: "Giày trượt bánh xe", ipa: "/ˈroʊlər skeɪts/" },
        { en: "segway", vi: "Xe điện tự cân bằng", ipa: "/ˈseɡweɪ/" },
        { en: "hot air balloon", vi: "Khinh khí cầu", ipa: "/hɑt er bəˈlun/" }
    ],

    // === TRAFFIC SIGNS (Biển báo giao thông) ===
    trafficSigns: [
        { en: "stop sign", vi: "Biển stop", ipa: "/stɑp saɪn/" },
        { en: "yield sign", vi: "Biển nhường đường", ipa: "/jild saɪn/" },
        { en: "speed limit", vi: "Giới hạn tốc độ", ipa: "/spid ˈlɪmɪt/" },
        { en: "no entry", vi: "Cấm vào", ipa: "/noʊ ˈentri/" },
        { en: "one-way", vi: "Đường một chiều", ipa: "/wʌn-weɪ/" },
        { en: "no parking", vi: "Cấm đỗ xe", ipa: "/noʊ ˈpɑrkɪŋ/" },
        { en: "pedestrian crossing", vi: "Vạch qua đường cho người đi bộ", ipa: "/pəˈdestriən ˈkrɔsɪŋ/" },
        { en: "school zone", vi: "Khu vực trường học", ipa: "/skul zoʊn/" },
        { en: "road work ahead", vi: "Công trường trên đường", ipa: "/roʊd wɜrk əˈhed/" },
        { en: "no u-turn", vi: "Cấm quay đầu", ipa: "/noʊ ˈjuˈtɜrn/" },
        { en: "railroad crossing", vi: "Vạch chung cầu đường", ipa: "/ˈreɪlˌroʊd ˈkrɔsɪŋ/" },
        { en: "traffic light", vi: "Đèn giao thông", ipa: "/ˈtræfɪk laɪt/" },
        { en: "bicycle lane", vi: "Làn đường cho xe đạp", ipa: "/ˈbaɪsɪkəl leɪn/" },
        { en: "no overtaking", vi: "Cấm vượt", ipa: "/noʊ ˈoʊvərˌteɪkɪŋ/" },
        { en: "detour", vi: "Đường vòng qua", ipa: "/ˈdiːtʊr/" },
        { en: "bus stop", vi: "Bến xe buýt", ipa: "/bʌs stɑp/" },
        { en: "airport", vi: "Sân bay", ipa: "/ˈerˌpɔrt/" },
        { en: "train station", vi: "Ga tàu", ipa: "/treɪn ˈsteɪʃən/" },
        { en: "parking garage", vi: "Nhà để xe", ipa: "/ˈpɑrkɪŋ ˈɡærɪdʒ/" },
        { en: "crosswalk", vi: "Vạch dành cho người đi bộ", ipa: "/ˈkrɔswɔk/" }
    ],

    // === OCCUPATIONS (Các nghề nghiệp) ===
    occupations: [
        { en: "doctor", vi: "Bác sĩ", ipa: "/ˈdɑktər/" },
        { en: "teacher", vi: "Giáo viên", ipa: "/ˈtiːtʃər/" },
        { en: "engineer", vi: "Kỹ sư", ipa: "/ˌendʒɪˈnɪr/" },
        { en: "lawyer", vi: "Luật sư", ipa: "/ˈlɔjər/" },
        { en: "nurse", vi: "Y tá", ipa: "/nɜrs/" },
        { en: "police officer", vi: "Cảnh sát", ipa: "/pəˈlis ˈɔfɪsər/" },
        { en: "firefighter", vi: "Lính cứu hỏa", ipa: "/ˈfaɪrˌfaɪtər/" },
        { en: "chef", vi: "Đầu bếp", ipa: "/ʃef/" },
        { en: "accountant", vi: "Kế toán viên", ipa: "/əˈkaʊntənt/" },
        { en: "architect", vi: "Kiến trúc sư", ipa: "/ˈɑr.kɪ.tekt/" },
        { en: "programmer", vi: "Lập trình viên", ipa: "/ˈproʊˌɡræmər/" },
        { en: "writer", vi: "Nhà văn", ipa: "/ˈraɪtər/" },
        { en: "actor", vi: "Diễn viên", ipa: "/ˈæktər/" },
        { en: "singer", vi: "Ca sĩ", ipa: "/ˈsɪŋər/" },
        { en: "mechanic", vi: "Thợ máy", ipa: "/məˈkænɪk/" },
        { en: "electrician", vi: "Thợ điện", ipa: "/ɪˌlekˈtrɪʃən/" },
        { en: "carpenter", vi: "Thợ mộc", ipa: "/ˈkɑrpəntər/" },
        { en: "photographer", vi: "Nhiếp ảnh gia", ipa: "/fəˈtɑːɡrəfər/" },
        { en: "salesperson", vi: "Nhân viên bán hàng", ipa: "/ˈseɪlzˌpɜrsən/" },
        { en: "astronaut", vi: "Phi hành gia", ipa: "/ˈæstrəˌnɔt/" }
    ],

    // === HEALTH (Sức khỏe) ===
    health: [
        { en: "doctor", vi: "Bác sĩ", ipa: "/ˈdɑktər/" },
        { en: "patient", vi: "Bệnh nhân", ipa: "/ˈpeɪʃənt/" },
        { en: "nurse", vi: "Y tá", ipa: "/nɜrs/" },
        { en: "hospital", vi: "Bệnh viện", ipa: "/ˈhɑːspɪtəl/" },
        { en: "medicine", vi: "Thuốc", ipa: "/ˈmedɪsɪn/" },
        { en: "pharmacy", vi: "Hiệu thuốc", ipa: "/ˈfɑrməsi/" },
        { en: "appointment", vi: "Cuộc hẹn", ipa: "/əˈpɔɪntmənt/" },
        { en: "diagnosis", vi: "Chẩn đoán", ipa: "/ˌdaɪəɡˈnoʊsɪs/" },
        { en: "prescription", vi: "Đơn thuốc", ipa: "/prɪˈskrɪpʃən/" },
        { en: "surgery", vi: "Phẫu thuật", ipa: "/ˈsɜrdʒəri/" },
        { en: "vaccine", vi: "Vắc-xin", ipa: "/ˈvæksiːn/" },
        { en: "health", vi: "Sức khỏe", ipa: "/helθ/" },
        { en: "fitness", vi: "Sức khỏe, thể chất", ipa: "/ˈfɪtnɪs/" },
        { en: "exercise", vi: "Tập thể dục", ipa: "/ˈeksərˌsaɪz/" },
        { en: "nutrition", vi: "Dinh dưỡng", ipa: "/nuˈtrɪʃən/" },
        { en: "wellness", vi: "Sự khỏe mạnh, sự an lành", ipa: "/ˈwelnəs/" },
        { en: "allergy", vi: "Dị ứng", ipa: "/ˈælərdʒi/" },
        { en: "fever", vi: "Sốt", ipa: "/ˈfiːvər/" },
        { en: "headache", vi: "Đau đầu", ipa: "/ˈhedˌeɪk/" },
        { en: "stress", vi: "Căng thẳng", ipa: "/stres/" }
    ],

    // === DISEASES (Các loại bệnh) ===
    diseases: [
        { en: "fever", vi: "Sốt", ipa: "/ˈfiːvər/" },
        { en: "cough", vi: "Ho", ipa: "/kɑf/" },
        { en: "headache", vi: "Đau đầu", ipa: "/ˈhedˌeɪk/" },
        { en: "sore throat", vi: "Đau họng", ipa: "/sɔr θroʊt/" },
        { en: "runny nose", vi: "Sổ mũi", ipa: "/ˈrʌni noʊz/" },
        { en: "sneezing", vi: "Hắt hơi", ipa: "/ˈsnizɪŋ/" },
        { en: "fatigue", vi: "Mệt mỏi", ipa: "/fəˈtiːɡ/" },
        { en: "nausea", vi: "Buồn nôn", ipa: "/ˈnɔːziə/" },
        { en: "dizziness", vi: "Chóng mặt", ipa: "/ˈdɪznəs/" },
        { en: "vomiting", vi: "Nôn mửa", ipa: "/ˈvɑmɪtɪŋ/" },
        { en: "diarrhea", vi: "Tiêu chảy", ipa: "/daɪəˈriə/" },
        { en: "rash", vi: "Nổi mẩn", ipa: "/ræʃ/" },
        { en: "swelling", vi: "Sưng", ipa: "/ˈswelɪŋ/" },
        { en: "chills", vi: "Rùng mình", ipa: "/tʃɪlz/" },
        { en: "shortness of breath", vi: "Khó thở", ipa: "/ˈʃɔrtnəs ʌv breθ/" },
        { en: "stomachache", vi: "Đau bụng", ipa: "/ˈstʌməkˌeɪk/" },
        { en: "back pain", vi: "Đau lưng", ipa: "/bæk peɪn/" },
        { en: "joint pain", vi: "Đau khớp", ipa: "/dʒɔɪnt peɪn/" },
        { en: "numbness", vi: "Tê liệt", ipa: "/ˈnʌmnəs/" }
    ],

    // === EDUCATION (Giáo dục) ===
    education: [
        { en: "curriculum", vi: "Chương trình học", ipa: "/kəˈrɪkjələm/" },
        { en: "classroom", vi: "Lớp học", ipa: "/ˈklæsruːm/" },
        { en: "teacher", vi: "Giáo viên", ipa: "/ˈtiːtʃər/" },
        { en: "student", vi: "Học sinh", ipa: "/ˈstjuːdənt/" },
        { en: "learning", vi: "Việc học", ipa: "/ˈlɜːrnɪŋ/" },
        { en: "knowledge", vi: "Kiến thức", ipa: "/ˈnɑːlɪdʒ/" },
        { en: "homework", vi: "Bài tập về nhà", ipa: "/ˈhoʊmwɜːrk/" },
        { en: "assignment", vi: "Bài tập được giao", ipa: "/əˈsaɪnmənt/" },
        { en: "test", vi: "Bài kiểm tra", ipa: "/test/" },
        { en: "exam", vi: "Kỳ thi", ipa: "/ɪɡˈzæm/" },
        { en: "grade", vi: "Điểm số", ipa: "/ɡreɪd/" },
        { en: "school", vi: "Trường học", ipa: "/skuːl/" },
        { en: "university", vi: "Đại học", ipa: "/ˌjuːnɪˈvɜːrsɪti/" },
        { en: "lecture", vi: "Bài giảng", ipa: "/ˈlektʃər/" },
        { en: "research", vi: "Nghiên cứu", ipa: "/rɪˈsɜːrtʃ/" },
        { en: "library", vi: "Thư viện", ipa: "/ˈlaɪbrəri/" },
        { en: "degree", vi: "Bằng cấp", ipa: "/dɪˈɡriː/" },
        { en: "scholarship", vi: "Học bổng", ipa: "/ˈskɒlərʃɪp/" },
        { en: "distance learning", vi: "Học từ xa", ipa: "/ˈdɪstəns ˈlɜːrnɪŋ/" },
        { en: "extracurricular", vi: "Ngoại khóa", ipa: "/ˌekstrəkəˈrɪkjələr/" }
    ],

    // === SUBJECTS (Các môn học) ===
    subjects: [
        { en: "mathematics", vi: "Toán học", ipa: "/ˌmæθəˈmætɪks/" },
        { en: "science", vi: "Khoa học", ipa: "/ˈsaɪəns/" },
        { en: "history", vi: "Lịch sử", ipa: "/ˈhɪstəri/" },
        { en: "geography", vi: "Địa lý", ipa: "/dʒiˈɑːɡrəfi/" },
        { en: "literature", vi: "Văn học", ipa: "/ˈlɪtərətʃər/" },
        { en: "english", vi: "Tiếng Anh", ipa: "/ˈɪŋɡlɪʃ/" },
        { en: "art", vi: "Mỹ thuật", ipa: "/ɑːrt/" },
        { en: "music", vi: "Âm nhạc", ipa: "/ˈmjuːzɪk/" },
        { en: "physical education", vi: "Giáo dục thể chất", ipa: "/ˈfɪzɪkəl ˌedjuˈkeɪʃən/" },
        { en: "chemistry", vi: "Hóa học", ipa: "/ˈkemɪstri/" },
        { en: "physics", vi: "Vật lý", ipa: "/ˈfɪzɪks/" },
        { en: "biology", vi: "Sinh học", ipa: "/baɪˈɑːlədʒi/" },
        { en: "economics", vi: "Kinh tế", ipa: "/ˌiːkəˈnɑːmɪks/" },
        { en: "psychology", vi: "Tâm lý học", ipa: "/saɪˈkɒlədʒi/" },
        { en: "sociology", vi: "Xã hội học", ipa: "/ˌsoʊsiˈɒlədʒi/" },
        { en: "computer science", vi: "Khoa học máy tính", ipa: "/kəmˈpjuːtər ˈsaɪəns/" },
        { en: "foreign language", vi: "Ngoại ngữ", ipa: "/ˈfɔːrən ˈlæŋɡwɪdʒ/" },
        { en: "ethics", vi: "Đạo đức", ipa: "/ˈeθɪks/" },
        { en: "philosophy", vi: "Triết học", ipa: "/fɪˈlɒsəfi/" },
        { en: "political science", vi: "Khoa học chính trị", ipa: "/pəˈlɪtɪkəl ˈsaɪəns/" }
    ],

    // === SKILLS (Kỹ năng) ===
    skills: [
        { en: "communication", vi: "Giao tiếp", ipa: "/kəˌmjuːnɪˈkeɪʃən/" },
        { en: "leadership", vi: "Lãnh đạo", ipa: "/ˈliːdərʃɪp/" },
        { en: "teamwork", vi: "Làm việc nhóm", ipa: "/ˈtiːmwɜːrk/" },
        { en: "problem-solving", vi: "Giải quyết vấn đề", ipa: "/ˈprɒbləm ˈsɒlvɪŋ/" },
        { en: "adaptability", vi: "Tính thích nghi", ipa: "/əˌdæptəˈbɪləti/" },
        { en: "time management", vi: "Quản lý thời gian", ipa: "/taɪm ˈmænɪdʒmənt/" },
        { en: "critical thinking", vi: "Tư duy phản biện", ipa: "/ˈkrɪtɪkəl ˈθɪŋkɪŋ/" },
        { en: "creativity", vi: "Sáng tạo", ipa: "/kriːeɪˈtɪvɪti/" },
        { en: "emotional intelligence", vi: "Trí tuệ cảm xúc", ipa: "/ɪˌmoʊʃənəl ˌɪnˈtelɪdʒəns/" },
        { en: "collaboration", vi: "Hợp tác", ipa: "/kəˌlæbəˈreɪʃən/" },
        { en: "conflict resolution", vi: "Giải quyết xung đột", ipa: "/ˈkɒnflɪkt ˌrezəˈluːʃən/" },
        { en: "decision-making", vi: "Quyết định", ipa: "/dɪˈsɪʒən ˌmeɪkɪŋ/" },
        { en: "negotiation", vi: "Đàm phán", ipa: "/nɪˌɡoʊʃiˈeɪʃən/" },
        { en: "presentation skills", vi: "Kỹ năng thuyết trình", ipa: "/ˌprezənˈteɪʃən ˈskɪlz/" },
        { en: "interpersonal skills", vi: "Kỹ năng giao tiếp", ipa: "/ˌɪntərˈpɜːrsənəl ˈskɪlz/" },
        { en: "networking", vi: "Mạng lưới", ipa: "/ˈnetˌwɜːrkɪŋ/" },
        { en: "self-motivation", vi: "Tự thúc đẩy", ipa: "/ˌself ˌmoʊtɪˈveɪʃən/" },
        { en: "empathy", vi: "Đồng cảm", ipa: "/ˈempəθi/" },
        { en: "conflict management", vi: "Quản lý xung đột", ipa: "/ˈkɒnflɪkt ˈmænɪdʒmənt/" }
    ],

    // === VIETNAMESE FESTIVALS (Các lễ hội ở Việt Nam) ===
    vietnameseFestivals: [
        { en: "tet", vi: "Tết", ipa: "/tet/" },
        { en: "mid-autumn festival", vi: "Tết Trung Thu", ipa: "/mɪd ˈɔːtən ˈfestəvəl/" },
        { en: "hung kings' temple festival", vi: "Lễ hội Đền Hùng", ipa: "/hʌŋ kɪŋz ˈtempəl ˈfestəvəl/" },
        { en: "lantern festival", vi: "Lễ hội đèn lồng", ipa: "/ˈlæntərn ˈfestəvəl/" },
        { en: "hue festival", vi: "Festival Huế", ipa: "/hjuː ˈfestəvəl/" },
        { en: "da lat flower festival", vi: "Lễ hội hoa Đà Lạt", ipa: "/dɑː lɑːt ˈflaʊər ˈfestəvəl/" },
        { en: "buffalo fighting festival", vi: "Lễ hội đấu trâu", ipa: "/ˈbʌfəloʊ ˈfaɪtɪŋ ˈfestəvəl/" },
        { en: "reunification day", vi: "Ngày Thống nhất", ipa: "/ˌriːjunɪfɪˈkeɪʃən ˈdeɪ/" },
        { en: "victory day", vi: "Ngày Chiến thắng", ipa: "/ˈvɪktəri ˈdeɪ/" },
        { en: "vietnamese new year", vi: "Năm mới theo lịch Việt", ipa: "/viˌetnəˈmis njuː ˈjɪr/" },
        { en: "nguyen tieu festival", vi: "Lễ hội Nguyên Tiêu", ipa: "/nʊjɛn tiːˈjuː ˈfestəvəl/" },
        { en: "cau ngu festival", vi: "Lễ hội Cầu Ngư", ipa: "/kɑː nuː ˈfestəvəl/" },
        { en: "perfume pagoda festival", vi: "Lễ hội Chùa Hương", ipa: "/pərˈfjuːm pəˈɡoʊdə ˈfestəvəl/" },
        { en: "giong festival", vi: "Lễ hội Gióng", ipa: "/ɡiːɒŋ ˈfestəvəl/" },
        { en: "kate festival", vi: "Lễ hội Kate", ipa: "/keɪt ˈfestəvəl/" },
        { en: "do son buffalo fighting festival", vi: "Lễ hội đấu trâu Đồ Sơn", ipa: "/duː sʌn ˈbʌfəloʊ ˈfaɪtɪŋ ˈfestəvəl/" }
    ],

    // === MID-AUTUMN FESTIVAL (Tết trung thu) ===
    midAutumnFestival: [
        { en: "mooncake", vi: "Bánh trung thu", ipa: "/ˈmuːnkeɪk/" },
        { en: "lantern", vi: "Đèn lồng", ipa: "/ˈlæntərn/" },
        { en: "mid-autumn festival", vi: "Lễ hội Trung thu", ipa: "/mɪd ˈɔːtən ˈfestəvəl/" },
        { en: "full moon", vi: "Trăng tròn", ipa: "/fʊl mun/" },
        { en: "family reunion", vi: "Đoàn tụ gia đình", ipa: "/ˈfæməli ˌriːˈjunjən/" },
        { en: "moon gazing", vi: "Nhìn trăng", ipa: "/mun ˈɡeɪzɪŋ/" },
        { en: "mooncake making", vi: "Làm bánh trung thu", ipa: "/ˈmuːnkeɪk ˌmeɪkɪŋ/" },
        { en: "festival", vi: "Lễ hội", ipa: "/ˈfestəvəl/" },
        { en: "tradition", vi: "Truyền thống", ipa: "/trəˈdɪʃən/" },
        { en: "lantern procession", vi: "Diễu hành đèn lồng", ipa: "/ˈlæntərn prəˈseʃən/" },
        { en: "moon worship", vi: "Tế thần trăng", ipa: "/mun ˈwɜːrʃɪp/" },
        { en: "harvest", vi: "Mùa thu hoạch", ipa: "/ˈhɑːrvɪst/" },
        { en: "moon festival games", vi: "Trò chơi trong lễ hội Trung thu", ipa: "/mun ˈfestəvəl ɡeɪmz/" },
        { en: "mooncake exchange", vi: "Trao đổi bánh trung thu", ipa: "/ˈmuːnkeɪk ɪksˈtʃeɪndʒ/" },
        { en: "delicious", vi: "Ngon", ipa: "/dɪˈlɪʃəs/" },
        { en: "mooncake box", vi: "Hộp bánh trung thu", ipa: "/ˈmuːnkeɪk bɒks/" },
        { en: "lantern riddles", vi: "Đố đèn lồng", ipa: "/ˈlæntərn ˈrɪdəlz/" },
        { en: "lotus", vi: "Sen", ipa: "/ˈloʊtəs/" },
        { en: "pomelo", vi: "Bưởi", ipa: "/ˈpɒməloʊ/" },
        { en: "mooncake filling", vi: "Nhân bánh trung thu", ipa: "/ˈmuːnkeɪk ˈfɪlɪŋ/" }
    ],

    // === FOLK GAMES (Trò chơi dân gian) ===
    folkGames: [
        { en: "folk games", vi: "Trò chơi dân gian", ipa: "/foʊk ɡeɪmz/" },
        { en: "tug of war", vi: "Kéo co", ipa: "/tʌɡ ʌv wɔːr/" },
        { en: "blind man's bluff", vi: "Trò chơi Bịp bợm", ipa: "/blaɪnd mænz blʌf/" },
        { en: "shuttlecock", vi: "Cầu lông", ipa: "/ˈʃʌtl̩kɒk/" },
        { en: "hopscotch", vi: "Nhảy chân sáo", ipa: "/ˈhɑːpskɑːtʃ/" },
        { en: "marbles", vi: "Bi gỗ", ipa: "/ˈmɑːrbəlz/" },
        { en: "skipping rope", vi: "Nhảy dây", ipa: "/ˈskɪpɪŋ roʊp/" },
        { en: "bamboo stilts", vi: "Giày gỗ", ipa: "/ˈbæmbuː stɪlts/" },
        { en: "mancala", vi: "Cờ cá ngựa", ipa: "/mæŋˈkɑːlə/" },
        { en: "kite flying", vi: "Thả diều", ipa: "/kaɪt ˈflaɪɪŋ/" },
        { en: "cockfighting", vi: "Đá gà", ipa: "/ˈkɒkˌfaɪtɪŋ/" },
        { en: "fan dancing", vi: "Múa quạt", ipa: "/fæn ˈdænsɪŋ/" },
        { en: "water puppetry", vi: "Múa rối nước", ipa: "/ˈwɔːtər ˈpʌpɪtri/" },
        { en: "jackstones", vi: "Bài tát", ipa: "/ˈdʒækstənz/" },
        { en: "five stones", vi: "Ném gạch", ipa: "/faɪv stoʊnz/" },
        { en: "congkak", vi: "Cờ cau", ipa: "/ˈtʃɒŋkæk/" },
        { en: "stick and hoop", vi: "Đu quay", ipa: "/stɪk ænd hup/" },
        { en: "cat's cradle", vi: "Dây nhảy cầu", ipa: "/kæts ˈkreɪdəl/" },
        { en: "pinata", vi: "Búp bê đập", ipa: "/pɪˈnɑːtə/" },
        { en: "egg rolling", vi: "Lăn trứng", ipa: "/eɡ ˈroʊlɪŋ/" }
    ],

    // === CULTURE (Văn hóa) ===
    culture: [
        { en: "culture", vi: "Văn hóa", ipa: "/ˈkʌltʃər/" },
        { en: "tradition", vi: "Truyền thống", ipa: "/trəˈdɪʃən/" },
        { en: "customs", vi: "Phong tục", ipa: "/ˈkʌstəmz/" },
        { en: "heritage", vi: "Di sản", ipa: "/ˈherɪtɪdʒ/" },
        { en: "ritual", vi: "Nghi lễ", ipa: "/ˈrɪtʃuəl/" },
        { en: "ceremony", vi: "Lễ nghi", ipa: "/ˈserəˌmoʊni/" },
        { en: "folklore", vi: "Văn hóa dân gian", ipa: "/ˈfoʊklɔːr/" },
        { en: "artifacts", vi: "Đồ cổ", ipa: "/ˈɑːrtɪˌfækts/" },
        { en: "cultural exchange", vi: "Trao đổi văn hóa", ipa: "/ˈkʌltʃərəl ɪksˈtʃeɪndʒ/" },
        { en: "diversity", vi: "Đa dạng", ipa: "/daɪˈvɜrsɪti/" },
        { en: "multicultural", vi: "Đa văn hóa", ipa: "/ˌmʌltiˈkʌltʃərəl/" },
        { en: "ethnicity", vi: "Dân tộc", ipa: "/eθˈnɪsɪti/" },
        { en: "language", vi: "Ngôn ngữ", ipa: "/ˈlæŋɡwɪdʒ/" },
        { en: "cuisine", vi: "Ẩm thực", ipa: "/kwɪˈzin/" },
        { en: "festivals", vi: "Lễ hội", ipa: "/ˈfestəvəlz/" },
        { en: "symbols", vi: "Biểu tượng", ipa: "/ˈsɪmbəlz/" },
        { en: "cultural identity", vi: "Nhận thức văn hóa", ipa: "/ˈkʌltʃərəl aɪˈdentɪti/" },
        { en: "cultural heritage", vi: "Di sản văn hóa", ipa: "/ˈkʌltʃərəl ˈherɪtɪdʒ/" },
        { en: "artistic", vi: "Mỹ thuật", ipa: "/ɑːrˈtɪstɪk/" },
        { en: "values", vi: "Giá trị", ipa: "/ˈvæljuːz/" }
    ],

    // === ART (Nghệ thuật) ===
    art: [
        { en: "art", vi: "Nghệ thuật", ipa: "/ɑːrt/" },
        { en: "painting", vi: "Tranh", ipa: "/ˈpeɪntɪŋ/" },
        { en: "sculpture", vi: "Điêu khắc", ipa: "/ˈskʌlptʃər/" },
        { en: "drawing", vi: "Vẽ", ipa: "/ˈdrɔːɪŋ/" },
        { en: "photography", vi: "Nhiếp ảnh", ipa: "/fəˈtɑːɡrəfi/" },
        { en: "gallery", vi: "Phòng trưng bày", ipa: "/ˈɡæləri/" },
        { en: "exhibit", vi: "Triển lãm", ipa: "/ɪɡˈzɪbɪt/" },
        { en: "sculptor", vi: "Nhà điêu khắc", ipa: "/ˈskʌlptər/" },
        { en: "brush", vi: "Cọ", ipa: "/brʌʃ/" },
        { en: "palette", vi: "Bảng màu", ipa: "/ˈpælɪt/" },
        { en: "canvas", vi: "Bức tranh", ipa: "/ˈkænvəs/" },
        { en: "sketch", vi: "Bản phác thảo", ipa: "/sketʃ/" },
        { en: "pottery", vi: "Gốm sứ", ipa: "/ˈpɑːtəri/" },
        { en: "ceramics", vi: "Gốm sứ", ipa: "/səˈræmɪks/" },
        { en: "abstract", vi: "Trừu tượng", ipa: "/ˈæbstrækt/" },
        { en: "landscape", vi: "Phong cảnh", ipa: "/ˈlændskeɪp/" },
        { en: "portrait", vi: "Chân dung", ipa: "/ˈpɔːrtrət/" },
        { en: "artistic", vi: "Mỹ thuật", ipa: "/ɑːrˈtɪstɪk/" },
        { en: "composition", vi: "Cách bố trí", ipa: "/ˌkɑːmpəˈzɪʃən/" },
        { en: "artwork", vi: "Tác phẩm nghệ thuật", ipa: "/ˈɑːrtwɜːrk/" }
    ],

    // === BUSINESS (Kinh doanh) ===
    business: [
        { en: "entrepreneur", vi: "Doanh nhân", ipa: "/ˌɑːntrəprəˈnər/" },
        { en: "start-up", vi: "Công ty khởi nghiệp", ipa: "/ˈstɑːrtʌp/" },
        { en: "investor", vi: "Nhà đầu tư", ipa: "/ɪnˈvestər/" },
        { en: "profit", vi: "Lợi nhuận", ipa: "/ˈprɒfɪt/" },
        { en: "loss", vi: "Lỗ", ipa: "/lɔːs/" },
        { en: "market", vi: "Thị trường", ipa: "/ˈmɑrkɪt/" },
        { en: "sales", vi: "Doanh số", ipa: "/seɪlz/" },
        { en: "customer", vi: "Khách hàng", ipa: "/ˈkʌstəmər/" },
        { en: "advertising", vi: "Quảng cáo", ipa: "/ˈædvərˌtaɪzɪŋ/" },
        { en: "brand", vi: "Thương hiệu", ipa: "/brænd/" },
        { en: "partnership", vi: "Đối tác", ipa: "/ˈpɑrtnərˌʃɪp/" },
        { en: "investment", vi: "Đầu tư", ipa: "/ɪnˈvestmənt/" },
        { en: "competition", vi: "Cạnh tranh", ipa: "/ˌkɑmpəˈtɪʃən/" },
        { en: "strategy", vi: "Chiến lược", ipa: "/ˈstrætədʒi/" },
        { en: "entrepreneurship", vi: "Tinh thần khởi nghiệp", ipa: "/ˌɑːntrəprəˈnɜrʃɪp/" },
        { en: "stock", vi: "Cổ phiếu", ipa: "/stɑk/" },
        { en: "revenue", vi: "Doanh thu", ipa: "/ˈrevəˌnjuː/" },
        { en: "negotiation", vi: "Đàm phán", ipa: "/nɪˌɡoʊʃiˈeɪʃən/" },
        { en: "collaboration", vi: "Hợp tác", ipa: "/kəˌlæbəˈreɪʃən/" }
    ],

    // === CITY (Thành phố) ===
    city: [
        { en: "urban", vi: "Đô thị", ipa: "/ˈɜːrbən/" },
        { en: "downtown", vi: "Trung tâm thành phố", ipa: "/ˈdaʊntaʊn/" },
        { en: "suburb", vi: "Ngoại ô", ipa: "/ˈsʌrbɜːrb/" },
        { en: "skyline", vi: "Đường chân trời", ipa: "/ˈskaɪlaɪn/" },
        { en: "traffic", vi: "Giao thông", ipa: "/ˈtræfɪk/" },
        { en: "pedestrian", vi: "Người đi bộ", ipa: "/pəˈdestriən/" },
        { en: "avenue", vi: "Đại lộ", ipa: "/ˈævənuː/" },
        { en: "boulevard", vi: "Đại lộ", ipa: "/ˈbuːləˌvɑːrd/" },
        { en: "intersection", vi: "Ngã tư", ipa: "/ˌɪntərˈsekʃən/" },
        { en: "sidewalk", vi: "Vỉa hè", ipa: "/ˈsaɪdwɔːk/" },
        { en: "park", vi: "Công viên", ipa: "/pɑːrk/" },
        { en: "museum", vi: "Bảo tàng", ipa: "/mjuːˈziəm/" },
        { en: "library", vi: "Thư viện", ipa: "/ˈlaɪbrəri/" },
        { en: "restaurant", vi: "Nhà hàng", ipa: "/ˈrestərɒnt/" },
        { en: "shopping mall", vi: "Trung tâm mua sắm", ipa: "/ˈʃɑpɪŋ mɔːl/" },
        { en: "skyscraper", vi: "Tòa nhà chọc trời", ipa: "/ˈskaɪˌskreɪpər/" },
        { en: "neighborhood", vi: "Khu phố", ipa: "/ˈneɪbərˌhʊd/" },
        { en: "public transport", vi: "Phương tiện giao thông công cộng", ipa: "/ˈpʌblɪk ˈtrænspɔːrt/" },
        { en: "landmark", vi: "Địa danh nổi tiếng", ipa: "/ˈlændmɑːrk/" },
        { en: "fountain", vi: "Đài phun nước", ipa: "/ˈfaʊntɪn/" }
    ],

    // === COUNTRIES (Tên các nước) ===
    countries: [
        { en: "united states", vi: "Hoa Kỳ", ipa: "/juːˌnaɪtɪd ˈsteɪts/" },
        { en: "canada", vi: "Canada", ipa: "/ˈkænədə/" },
        { en: "mexico", vi: "Mexico", ipa: "/ˈmeksɪkoʊ/" },
        { en: "brazil", vi: "Brazil", ipa: "/brəˈzɪl/" },
        { en: "france", vi: "Pháp", ipa: "/fræns/" },
        { en: "germany", vi: "Đức", ipa: "/ˈdʒɜːrməni/" },
        { en: "italy", vi: "Ý", ipa: "/ˈɪtəli/" },
        { en: "spain", vi: "Tây Ban Nha", ipa: "/speɪn/" },
        { en: "united kingdom", vi: "Vương quốc Anh", ipa: "/juːˌnaɪtɪd ˈkɪŋdəm/" },
        { en: "russia", vi: "Nga", ipa: "/ˈrʌʃə/" },
        { en: "china", vi: "Trung Quốc", ipa: "/ˈtʃaɪnə/" },
        { en: "japan", vi: "Nhật Bản", ipa: "/dʒəˈpæn/" },
        { en: "india", vi: "Ấn Độ", ipa: "/ˈɪndiə/" },
        { en: "australia", vi: "Úc", ipa: "/ɔːˈstreɪliə/" },
        { en: "south korea", vi: "Hàn Quốc", ipa: "/saʊθ kəˈriə/" },
        { en: "saudi arabia", vi: "Ả Rập Xê Út", ipa: "/ˌsɔːdi əˈreɪbiə/" },
        { en: "egypt", vi: "Ai Cập", ipa: "/ˈiːdʒɪpt/" },
        { en: "south africa", vi: "Nam Phi", ipa: "/saʊθ ˈæfrɪkə/" },
        { en: "nigeria", vi: "Nigeria", ipa: "/naɪˈdʒɪəriə/" },
        { en: "argentina", vi: "Argentina", ipa: "/ˌɑːrdʒənˈtiːnə/" },
        { en: "vietnam", vi: "Việt Nam", ipa: "/viːetˈnɑːm/" }
    ],

    // === OFFICE LIFE (Đời sống công sở) ===
    officeLife: [
        { en: "colleague", vi: "Đồng nghiệp", ipa: "/ˈkɒliːɡ/" },
        { en: "manager", vi: "Quản lý", ipa: "/ˈmænɪdʒər/" },
        { en: "meeting", vi: "Cuộc họp", ipa: "/ˈmiːtɪŋ/" },
        { en: "deadline", vi: "Hạn chót", ipa: "/ˈded.laɪn/" },
        { en: "project", vi: "Dự án", ipa: "/ˈprɒdʒekt/" },
        { en: "presentation", vi: "Bài thuyết trình", ipa: "/ˌprez.ənˈteɪ.ʃən/" },
        { en: "teamwork", vi: "Làm việc nhóm", ipa: "/ˈtiːm.wɜːk/" },
        { en: "email", vi: "Email", ipa: "/ˈiːmeɪl/" },
        { en: "report", vi: "Báo cáo", ipa: "/rɪˈpɔːt/" },
        { en: "schedule", vi: "Lịch trình", ipa: "/ˈʃedjuːl/" },
        { en: "overtime", vi: "Làm thêm giờ", ipa: "/ˈəʊ.və.taɪm/" },
        { en: "promotion", vi: "Thăng chức", ipa: "/prəˈməʊ.ʃən/" },
        { en: "conference", vi: "Hội nghị", ipa: "/ˈkɒn.fər.əns/" },
        { en: "workload", vi: "Khối lượng công việc", ipa: "/ˈwɜːk.loʊd/" },
        { en: "office", vi: "Văn phòng", ipa: "/ˈɒf.ɪs/" },
        { en: "desk", vi: "Bàn làm việc", ipa: "/desk/" },
        { en: "meeting room", vi: "Phòng họp", ipa: "/ˈmiːtɪŋ ruːm/" },
        { en: "printer", vi: "Máy in", ipa: "/ˈprɪn.tər/" },
        { en: "business trip", vi: "Chuyến công tác", ipa: "/ˈbɪz.nəs trɪp/" }
    ]
    ,
    // ===========================================
    // DỮ LIỆU SỐ ĐẾM (UNIT 20)
    // ===========================================
    numbers: [
        // 1-20
        { en: "one", vi: "1", ipa: "/wʌn/" },
        { en: "two", vi: "2", ipa: "/tuː/" },
        { en: "three", vi: "3", ipa: "/θriː/" },
        { en: "four", vi: "4", ipa: "/fɔː(r)/" },
        { en: "five", vi: "5", ipa: "/faɪv/" },
        { en: "six", vi: "6", ipa: "/sɪks/" },
        { en: "seven", vi: "7", ipa: "/ˈsɛvn/" },
        { en: "eight", vi: "8", ipa: "/eɪt/" },
        { en: "nine", vi: "9", ipa: "/naɪn/" },
        { en: "ten", vi: "10", ipa: "/tɛn/" },
        { en: "eleven", vi: "11", ipa: "/ɪˈlɛvn/" },
        { en: "twelve", vi: "12", ipa: "/twɛlv/" },
        { en: "thirteen", vi: "13", ipa: "/θɜːˈtiːn/" },
        { en: "fourteen", vi: "14", ipa: "/fɔːˈtiːn/" },
        { en: "fifteen", vi: "15", ipa: "/fɪfˈtiːn/" },
        { en: "sixteen", vi: "16", ipa: "/sɪksˈtiːn/" },
        { en: "seventeen", vi: "17", ipa: "/sɛvnˈtiːn/" },
        { en: "eighteen", vi: "18", ipa: "/eɪˈtiːn/" },
        { en: "nineteen", vi: "19", ipa: "/naɪnˈtiːn/" },
        { en: "twenty", vi: "20", ipa: "/ˈtwɛnti/" },
        // Hàng chục
        { en: "thirty", vi: "30", ipa: "/ˈθɜːti/" },
        { en: "forty", vi: "40", ipa: "/ˈfɔːti/" },
        { en: "fifty", vi: "50", ipa: "/ˈfɪfti/" },
        { en: "sixty", vi: "60", ipa: "/ˈsɪksti/" },
        { en: "seventy", vi: "70", ipa: "/ˈsɛvnti/" },
        { en: "eighty", vi: "80", ipa: "/ˈeɪti/" },
        { en: "ninety", vi: "90", ipa: "/ˈnaɪnti/" },
        // Hàng lớn
        { en: "one hundred", vi: "100", ipa: "/wʌn ˈhʌndrəd/" },
        { en: "one hundred and one", vi: "101", ipa: "/wʌn ˈhʌndrəd ənd wʌn/" },
        { en: "one thousand", vi: "1,000", ipa: "/wʌn ˈθaʊznd/" },
        { en: "ten thousand", vi: "10,000", ipa: "/tɛn ˈθaʊznd/" },
        { en: "one hundred thousand", vi: "100,000", ipa: "/wʌn ˈhʌndrəd ˈθaʊznd/" },
        { en: "one million", vi: "1,000,000", ipa: "/wʌn ˈmɪljən/" },
        { en: "one billion", vi: "1,000,000,000", ipa: "/wʌn ˈbɪljən/" }
    ]
};
// ===========================================
// CUSTOM MODAL (HỘP THOẠI ĐẸP) (ĐÃ SỬA LỖI)
// ===========================================
class CustomModal {
    constructor() {
        this.overlay = document.getElementById('custom-modal-overlay');
        this.modalBox = document.getElementById('custom-modal-box');
        this.messageEl = document.getElementById('custom-modal-message');
        this.inputEl = document.getElementById('custom-modal-input');
        this.okBtn = document.getElementById('custom-modal-btn-ok');
        this.cancelBtn = document.getElementById('custom-modal-btn-cancel');
    }

    show(message, options = {}) {
        const { type = 'alert', defaultValue = '' } = options;
        
        this.messageEl.innerText = message;
        
        if (type === 'prompt') {
            this.inputEl.classList.remove('hidden');
            this.inputEl.value = defaultValue;
            this.cancelBtn.classList.remove('hidden');
        } else if (type === 'confirm') {
            this.inputEl.classList.add('hidden');
            this.cancelBtn.classList.remove('hidden');
        } else { // 'alert'
            this.inputEl.classList.add('hidden');
            this.cancelBtn.classList.add('hidden');
        }

        this.overlay.classList.remove('hidden');
        
        if (type === 'prompt') {
            this.inputEl.focus();
            this.inputEl.select();
        } else {
            this.okBtn.focus();
        }

        // Xử lý phím Enter / Escape
        const handleKeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.okBtn.click();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                this.cancelBtn.click();
            }
        };
        document.addEventListener('keydown', handleKeydown);

        return new Promise((resolve) => {
            // Hàm dọn dẹp và giải quyết
            const complete = (value) => {
                document.removeEventListener('keydown', handleKeydown);
                this.hide();
                resolve(value);
            };

            this.okBtn.onclick = () => {
                if (type === 'prompt') {
                    complete(this.inputEl.value);
                } else {
                    complete(true); // 'confirm' or 'alert'
                }
            };

            this.cancelBtn.onclick = () => {
                if (type === 'prompt') {
                    complete(null);
                } else {
                    complete(false); // 'confirm'
                }
            };

            this.overlay.onclick = (e) => {
                if (e.target === this.overlay) {
                    this.cancelBtn.click(); // Kích hoạt logic "Cancel"
                }
            };
        });
    }

    // Hàm hide() bây giờ CHỈ ẩn UI
    hide() {
        this.overlay.classList.add('hidden');
        // Xóa các trình xử lý sự kiện để tránh gọi lại
        this.okBtn.onclick = null;
        this.cancelBtn.onclick = null;
        this.overlay.onclick = null;
    }

    // Các hàm tiện ích (không đổi)
    alert(message) {
        return this.show(message, { type: 'alert' });
    }
    confirm(message) {
        return this.show(message, { type: 'confirm' });
    }
    prompt(message, defaultValue = '') {
        return this.show(message, { type: 'prompt', defaultValue });
    }
}
// Khởi tạo một đối tượng modal toàn cục
const MyModal = new CustomModal();
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function speakText(event, text) {
    event.stopPropagation();
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    } else {
        MyModal.alert('Trình duyệt không hỗ trợ API phát âm.');
    }
}

function translateText(event, text) {
    event.stopPropagation();
    const encodedText = encodeURIComponent(text);
    const url = `https://translate.google.com/?sl=auto&tl=vi&text=${encodedText}&op=translate`;
    const features = `width=600,height=700,left=${(screen.width-600)/2},top=${(screen.height-700)/2},resizable=yes,scrollbars=yes`;
    window.open(url, 'googleTranslatePopup', features);
}

// ===========================================
// QUIZ CLASS
// ===========================================
class QuizManager {
    constructor(containerId, data, type = 'word') {
        this.containerId = containerId; // e.g., "master-quiz-container" or "lib-My-List-1"
        this.data = data;
        this.type = type; // 'word', 'number', or 'custom'
        this.currentIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.mistakePile = [];
        this.newCorrectCounter = 0;
        this.shuffledDeck = [];
        this.originalLength = 0;
        this.allOptions = [];
        this.storageKey = `quizState_${this.containerId}`;
        this.timeoutId = null;
    }

    initialize() {
        this.currentIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.mistakePile = [];
        this.newCorrectCounter = 0;

        if (!this.loadState()) {
            if (this.type === 'word') {
                this.shuffledDeck = shuffleArray(Object.values(this.data).filter(Array.isArray).flat());
            } else { 
                this.shuffledDeck = shuffleArray(this.data);
            }
            this.originalLength = this.shuffledDeck.length;
            
             this.allOptions = [...new Set(
                shuffleArray(Object.values(vocabularyData).filter(Array.isArray).flat())
                .map(item => item.vi)
                .filter(Boolean) 
            )];
            
            this.render();
        }
    }

    saveState() {
        const state = {
            currentIndex: this.currentIndex,
            correctCount: this.correctCount,
            incorrectCount: this.incorrectCount,
            mistakePile: this.mistakePile,
            newCorrectCounter: this.newCorrectCounter,
            shuffledDeck: this.shuffledDeck,
            originalLength: this.originalLength,
        };
        localStorage.setItem(this.storageKey, JSON.stringify(state));
    }

    loadState() {
        const savedState = localStorage.getItem(this.storageKey);
        if (savedState) {
            const state = JSON.parse(savedState);
            this.currentIndex = state.currentIndex;
            this.correctCount = state.correctCount;
            this.incorrectCount = state.incorrectCount;
            this.mistakePile = state.mistakePile;
            this.newCorrectCounter = state.newCorrectCounter;
            this.shuffledDeck = state.shuffledDeck;
            this.originalLength = state.originalLength;
            
            this.allOptions = [...new Set(
                shuffleArray(Object.values(vocabularyData).filter(Array.isArray).flat())
                .map(item => item.vi)
                .filter(Boolean)
            )];
            this.render();
            return true;
        }
        return false;
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        if (this.currentIndex >= this.shuffledDeck.length) {
            this.renderComplete(container);
            return;
        }

        const current = this.shuffledDeck[this.currentIndex];
        const correctAnswer = current.vi;
        
        const incorrectOptions = this.allOptions
            .filter(opt => opt !== correctAnswer)
            .slice(0, 3);
        
        const options = shuffleArray([correctAnswer, ...incorrectOptions]);
        const prefixes = ['A', 'B', 'C', 'D'];

        container.innerHTML = `
            <div class="quiz-question">
                <span>${current.en}</span>
                <button class="btn-audio" title="Phát âm" onclick="speakText(event, '${current.en}')">🔊</button>
                <button class="btn-translate" title="Dịch" onclick="translateText(event, '${current.en}')">Dịch</button>
            </div>
            <div class="quiz-ipa">${current.ipa || '&nbsp;'}</div>
            <div class="quiz-options">
                ${options.map((opt, i) => `
                    <button data-correct="${opt === correctAnswer}" onclick="quizManagers['${this.containerId}'].checkAnswer(this)">
                        <b>${prefixes[i]}.</b> ${opt}
                    </button>
                `).join('')}
            </div>
            <div class="quiz-feedback"></div>
            <div class="quiz-controls">
                <span class="quiz-status">Câu ${this.currentIndex + 1} / ${this.originalLength} | Cần ôn: ${this.mistakePile.length}</span>
                <div>
                    <button class="btn-reset" onclick="quizManagers['${this.containerId}'].reset()">Làm lại</button>
                    <button class="btn-5050" onclick="quizManagers['${this.containerId}'].useFiftyFifty()">50/50</button>
                    <button class="btn-next hidden" onclick="quizManagers['${this.containerId}'].next()">Câu tiếp</button>
                </div>
            </div>
        `;
    }

    checkAnswer(btn) {
        const container = document.getElementById(this.containerId);
        const isCorrect = btn.dataset.correct === 'true';
        const feedback = container.querySelector('.quiz-feedback');
        const buttons = container.querySelectorAll('.quiz-options button');
        const current = this.shuffledDeck[this.currentIndex];

        buttons.forEach(b => {
            b.disabled = true;
            if (b.dataset.correct === 'true') b.classList.add('correct');
        });

        const btn5050 = container.querySelector('.btn-5050');
        if (btn5050) btn5050.disabled = true;

        if (isCorrect) {
            this.correctCount++;
            const mistakeIndex = this.mistakePile.indexOf(current);
            
            if (mistakeIndex > -1) {
                this.mistakePile.splice(mistakeIndex, 1);
            } else {
                this.newCorrectCounter++;
            }

            btn.classList.add('correct');
            feedback.textContent = 'Chính xác!';
            feedback.className = 'quiz-feedback correct';
            
            if (this.timeoutId) clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => this.next(), 1000);
        } else {
            this.incorrectCount++;
            if (!this.mistakePile.includes(current)) {
                this.mistakePile.push(current);
            }

            btn.classList.add('incorrect');
            feedback.textContent = 'Chưa đúng!';
            feedback.className = 'quiz-feedback incorrect';
            container.querySelector('.btn-next').classList.remove('hidden');
        }
    }

    next() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }

        this.currentIndex++;

        if (this.newCorrectCounter >= REVIEW_INTERVAL && this.mistakePile.length > 0) {
            const review = this.mistakePile.shift();
            this.shuffledDeck.splice(this.currentIndex, 0, review);
            this.newCorrectCounter = 0;
        }

        this.render();
        this.saveState();
    }

    useFiftyFifty() {
        const container = document.getElementById(this.containerId);
        const buttons = [...container.querySelectorAll('.quiz-options button')];
        const incorrectBtns = buttons.filter(b => b.dataset.correct === 'false');
        
        shuffleArray(incorrectBtns).slice(0, 2).forEach(b => b.classList.add('hidden'));
        container.querySelector('.btn-5050').disabled = true;
    }

    async reset() {
        const confirmed = await MyModal.confirm("Bạn có chắc chắn muốn làm lại từ đầu không? Toàn bộ tiến trình đã lưu sẽ bị xoá.");
        if (confirmed) {
            localStorage.removeItem(this.storageKey);
            this.initialize();
        }
    }

    renderComplete(container) {
        localStorage.removeItem(this.storageKey); 
        
        let buttons = `<button class="btn-next" onclick="quizManagers['${this.containerId}'].initialize()">Làm lại</button>`;
        
        if (this.type === 'custom') {
            buttons += `<button class="btn-next" onclick="quizManagers['${this.containerId}'].extendLibrary()">Thêm từ mới</button>`;
            buttons += `<button class="btn-reset" onclick="quizManagers['${this.containerId}'].deleteLibrary()">Xoá thư viện</button>`;
        }

        container.innerHTML = `
            <h3>🎉 Chúc mừng!</h3>
            <p>Bạn đã hoàn thành ${this.originalLength} câu hỏi gốc.</p>
            <p class="quiz-score">
                Kết quả: 
                <span class="correct-score">${this.correctCount} Lượt Đúng</span> / 
                <span class="incorrect-score">${this.incorrectCount} Lượt Sai</span>
            </p>
            ${buttons}
        `;
    }

    async extendLibrary() {
        if (this.type !== 'custom') return;

        const libName = document.getElementById(`${this.containerId}-title`).textContent;
        const libraries = JSON.parse(localStorage.getItem('myLibraries'));
        let currentLibrary = libraries[libName] || [];
        
        const numStr = await MyModal.prompt(`Thư viện "${libName}" hiện có ${currentLibrary.length} từ.\nBạn muốn thêm bao nhiêu từ mới?`, "10");
        if (numStr === null || isNaN(numStr) || parseInt(numStr) <= 0) return;
        
        const numToAdd = parseInt(numStr);
        
        let fullPool = [];
        for (const key in vocabularyData) {
            if (key !== 'numbers' && Array.isArray(vocabularyData[key])) {
                fullPool = fullPool.concat(vocabularyData[key]);
            }
        }
        const uniquePool = [...new Map(fullPool.map(item => [item['en'], item])).values()];
        
        const currentWordsSet = new Set(currentLibrary.map(item => item.en));
        const availablePool = uniquePool.filter(item => !currentWordsSet.has(item.en));
        
        if (availablePool.length === 0) {
            MyModal.alert("Bạn đã học hết tất cả từ vựng trong kho!");
            return;
        }
        
        const wordsToGet = Math.min(numToAdd, availablePool.length);
        const newWords = shuffleArray(availablePool).slice(0, wordsToGet);
        
        const updatedLibrary = currentLibrary.concat(newWords);
        libraries[libName] = updatedLibrary;
        localStorage.setItem('myLibraries', JSON.stringify(libraries));
        
        MyModal.alert(`Đã thêm ${wordsToGet} từ mới vào "${libName}".\nTổng số: ${updatedLibrary.length} từ.`);
        
        this.data = updatedLibrary;
        this.initialize();
    }

    async deleteLibrary() {
        if (this.type !== 'custom') return;
        
        const libName = document.getElementById(`${this.containerId}-title`).textContent;
        const success = await deleteLibrary(libName);
        
        if (success) {
            document.getElementById('main-menu').classList.remove('hidden');
            document.getElementById('quiz-area').classList.add('hidden');
        }
    }
}

// ===========================================
// GLOBAL QUIZ MANAGERS
// ===========================================
const quizManagers = {};

// ===========================================
// HÀM QUẢN LÝ THƯ VIỆN (TÁI CẤU TRÚC)
// ===========================================

async function deleteLibrary(libName) {
    const confirmed = await MyModal.confirm(`Bạn có chắc chắn muốn XOÁ vĩnh viễn thư viện "${libName}" không?`);
        
    if (!confirmed) {
        return false; 
    }
    
    const libraries = JSON.parse(localStorage.getItem('myLibraries') || '{}');
    delete libraries[libName];
    localStorage.setItem('myLibraries', JSON.stringify(libraries));
    
    const quizId = 'lib-' + libName.replace(/\s+/g, '-');
    delete quizManagers[quizId];
    
    document.getElementById(quizId + '-section')?.remove();
    document.querySelector(`[data-lib-name="${libName}"]`)?.remove();
    
    return true; 
}


function loadMyLibraries() {
    const libraries = JSON.parse(localStorage.getItem('myLibraries') || '{}');
    const grid = document.getElementById('custom-library-grid');
    grid.innerHTML = ''; 
    
    for (const libName in libraries) {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.textContent = libName;
        const quizId = 'lib-' + libName.replace(/\s+/g, '-'); 
        btn.setAttribute('data-quiz', quizId);
        btn.setAttribute('data-lib-name', libName); 
        
        btn.addEventListener('click', () => {
            showQuiz(quizId);
        });

        grid.appendChild(btn);
        
        createQuizSection(quizId, libName);
    }
}

function createQuizSection(quizId, libName) {
    const quizArea = document.getElementById('quiz-area');
    if (document.getElementById(quizId + '-section')) return;
    
    const section = document.createElement('section');
    section.id = quizId + '-section';
    section.className = 'unit-section hidden';
    
    section.innerHTML = `
        <h2 id="${quizId}-title">${libName}</h2>
        <div id="${quizId}" class="quiz-container"></div>
    `;
    quizArea.appendChild(section);
}


async function createNewLibrary() {
    const libName = await MyModal.prompt("Nhập tên thư viện của bạn:", "Bài học 1");
    if (libName === null || libName.trim() === '') return; 

    const libraries = JSON.parse(localStorage.getItem('myLibraries') || '{}');
    if (libraries[libName]) {
        MyModal.alert("Tên thư viện này đã tồn tại!");
        return;
    }
    
    const numStr = await MyModal.prompt("Bạn muốn học bao nhiêu từ?", "20");
    if (numStr === null || isNaN(numStr) || parseInt(numStr) <= 0) return;
    let numWords = parseInt(numStr);

    let fullPool = [];
    for (const key in vocabularyData) {
        if (key !== 'numbers' && Array.isArray(vocabularyData[key])) {
            fullPool = fullPool.concat(vocabularyData[key]);
        }
    }
    const uniquePool = [...new Map(fullPool.map(item => [item['en'], item])).values()];
    let shuffledPool = shuffleArray(uniquePool);
    
    if (numWords > shuffledPool.length) {
        MyModal.alert(`Chỉ có ${shuffledPool.length} từ trong kho.\nĐã tạo thư viện với ${shuffledPool.length} từ.`);
        numWords = shuffledPool.length;
    }
    
    const newLibraryWords = shuffledPool.slice(0, numWords);
    
    libraries[libName] = newLibraryWords;
    localStorage.setItem('myLibraries', JSON.stringify(libraries));
    
    loadMyLibraries();
    MyModal.alert(`Đã tạo thư viện "${libName}" với ${numWords} từ.`);
}

// ===========================================
// LOGIC BẢNG QUẢN LÝ (MỚI)
// ===========================================
function openLibraryManager() {
    const listContainer = document.getElementById('manager-panel-list');
    const panel = document.getElementById('manager-panel-overlay');
    listContainer.innerHTML = ''; 
    
    const libraries = JSON.parse(localStorage.getItem('myLibraries') || '{}');
    const libNames = Object.keys(libraries);
    
    if (libNames.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center;">Bạn chưa có thư viện nào.</p>';
    } else {
        libNames.forEach(libName => {
            const words = libraries[libName];
            const wordCount = words.length;

            const item = document.createElement('div');
            item.className = 'manager-panel-item';
            
            item.innerHTML = `
                <span class="manager-panel-item-name">${libName} (${wordCount} từ)</span>
                <div class="manager-panel-item-actions">
                    <button class="btn-view-lib">Xem</button>
                    <button class="btn-delete-lib">Xóa</button>
                </div>
            `;
            
            item.querySelector('.btn-view-lib').addEventListener('click', () => {
                viewLibraryWords(libName, words);
            });
            
            item.querySelector('.btn-delete-lib').addEventListener('click', async () => {
                const success = await deleteLibrary(libName);
                if (success) {
                    openLibraryManager();
                }
            });
            
            listContainer.appendChild(item);
        });
    }
    
    panel.classList.remove('hidden');
}

function viewLibraryWords(libName, wordsArray) {
    if (!wordsArray) { 
        const libraries = JSON.parse(localStorage.getItem('myLibraries') || '{}');
        wordsArray = libraries[libName] || [];
    }
    
    const formattedString = wordsArray
        .map((word, i) => `${i + 1}. ${word.en}: ${word.vi}`)
        .join('\n');
        
    const message = `Danh sách từ trong "${libName}":\n\n${formattedString}`;
    
    MyModal.alert(message);
}


// ===========================================
// KHỞI ĐỘNG
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    const mainMenu = document.getElementById('main-menu');
    const quizArea = document.getElementById('quiz-area');
    const categoryButtons = document.querySelectorAll('.category-btn[data-quiz]');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');

    window.showQuiz = function(quizId) {
        mainMenu.classList.add('hidden');
        quizArea.classList.remove('hidden');

        document.querySelectorAll('.unit-section').forEach(section => {
            section.classList.add('hidden');
        });

        const quizSectionId = quizId + '-section';
        document.getElementById(quizSectionId)?.classList.remove('hidden');

        if (!quizManagers[quizId]) {
            let data, type;
            if (quizId.startsWith('lib-')) {
                const libName = document.querySelector(`[data-quiz="${quizId}"]`).dataset.libName;
                const libraries = JSON.parse(localStorage.getItem('myLibraries'));
                data = libraries[libName];
                type = 'custom';
            } else if (quizId === 'number-quiz-container') {
                data = vocabularyData.numbers;
                type = 'number';
            } else { // master-quiz-container
                data = vocabularyData;
                type = 'word';
            }
            
            if (data) { 
                quizManagers[quizId] = new QuizManager(quizId, data, type);
                quizManagers[quizId].initialize();
            } else {
                MyModal.alert("Lỗi: Không tìm thấy dữ liệu cho thư viện này. (Có thể đã bị xóa)");
                showMainMenu(); 
            }
        } else {
             quizManagers[quizId].initialize();
        }
    }
    
    function showMainMenu() {
        mainMenu.classList.remove('hidden');
        quizArea.classList.add('hidden');
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quizId = button.getAttribute('data-quiz');
            showQuiz(quizId);
        });
    });

    loadMyLibraries();

    document.getElementById('create-library-btn').addEventListener('click', createNewLibrary);

    backToMenuBtn?.addEventListener('click', showMainMenu);

    // --- Logic Menu (Dark Mode) ---
    const body = document.body;
    const menuBtn = document.getElementById('menuBtn');
    const menuPanel = document.getElementById('menuPanel');
    const toggleBtn = document.getElementById('toggleBtn');

    menuBtn?.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menuPanel.classList.toggle('show');
    });
    
    document.addEventListener('click', (e) => {
        if (menuBtn && menuPanel && !menuBtn.contains(e.target) && !menuPanel.contains(e.target)) {
            menuBtn.classList.remove('active');
            menuPanel.classList.remove('show');
        }
    });
    
    toggleBtn?.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        body.classList.toggle('light-mode', isDark);
        body.classList.toggle('dark-mode', !isDark);
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
    
    // --- SỰ KIỆN CHO BẢNG QUẢN LÝ (MỚI) ---
    const managerPanel = document.getElementById('manager-panel-overlay');
    const manageBtn = document.getElementById('manage-library-btn');
    const closeManageBtn = document.getElementById('manager-panel-close-btn');
    
    manageBtn.addEventListener('click', openLibraryManager);
    
    closeManageBtn.addEventListener('click', () => {
        managerPanel.classList.add('hidden');
    });
    
    managerPanel.addEventListener('click', (e) => {
        if (e.target === managerPanel) {
            managerPanel.classList.add('hidden');
        }
    });
});
