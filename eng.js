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
    u4p1: [ { en: "park", vi: "công viên", ipa: "/pa:k/" }, { en: "garden", vi: "vườn", ipa: "/'ga:dn/" }, { en: "wardrobe", vi: "tủ quần áo", ipa: "/'wɔ:drǝub/" }, { en: "shopping centre", vi: "trung tâm mua sắm", ipa: "/'fupiŋ sentə(r)/" }, { en: "table", vi: "cái bàn", ipa: "/'teibl/" }, { en: "wall", vi: "tường", ipa: "/wɔ:1/" }, { en: "floor", vi: "sàn nhà", ipa: "/flo:(r)/" }, { en: "sofa", vi: "ghế sô pha", ipa: "/'sǝufa/" }, { en: "school", vi: "trường học", ipa: "/sku:1/" }, { en: "work", vi: "nơi làm việc", ipa: "/w3:k/" }, { en: "home", vi: "nhà", ipa: "/hǝom/" }, { en: "supermarket", vi: "siêu thị", ipa: "/'su:pǝma:kıt/" }, { en: "party", vi: "bữa tiệc", ipa: "/'pa:ti/" }, { en: "airport", vi: "sân bay", ipa: "/'eǝpɔ:t/" }, { en: "train station", vi: "nhà ga tàu", ipa: "/trein 'steifn/" }, { en: "clock", vi: "đồng hồ", ipa: "/klok/" }, { en: "class", vi: "lớp học", ipa: "/kla:s/" }, { en: "English", vi: "tiếng Anh", ipa: "/mglıf" }, { en: "maths", vi: "toán", ipa: "/mæls/" }, { en: "exam", vi: "kỳ thi", ipa: "/ig'zæm/" }, { en: "birthday", vi: "ngày sinh nhật", ipa: "/'b3:0de1/" } ],
    u4p2: [ { en: "morning", vi: "buổi sáng", ipa: "/'mo:nın/" }, { en: "afternoon", vi: "buổi chiều", ipa: "/a:ftə'nu:n/" }, { en: "evening", vi: "buổi tối", ipa: "/'i:vnın/" }, { en: "lunchtime", vi: "giờ ăn trưa", ipa: "/'lantſtaim/" }, { en: "noon", vi: "12 giờ trưa", ipa: "/nu:n/" }, { en: "midday", vi: "12 giờ trưa", ipa: "/mid'dei/" }, { en: "night", vi: "ban đêm", ipa: "/nart/" }, { en: "midnight", vi: "nửa đêm", ipa: "/'mıdnart/" } ],
    u4p3: [ { en: "Monday", vi: "thứ 2", ipa: "/'mander/" }, { en: "Tuesday", vi: "thứ 3", ipa: "/'tju:zder/" }, { en: "Wednesday", vi: "thứ 4", ipa: "/'wenzder/" }, { en: "Thursday", vi: "thứ 5", ipa: "/'03:zder/" }, { en: "Friday", vi: "thứ 6", ipa: "/'fraider/" }, { en: "Saturday", vi: "thứ 7", ipa: "/'sætǝder/" }, { en: "Sunday", vi: "chủ nhật", ipa: "/'sAnder/" } ],
    // === UNIT 5 (Original) ===
    u5p1: [ { en: "play", vi: "chơi", ipa: "/pler/" }, { en: "watch", vi: "xem", ipa: "/wotf/" }, { en: "read", vi: "đọc", ipa: "/ri:d/" }, { en: "walk", vi: "đi bộ", ipa: "/wo:k/" }, { en: "learn", vi: "học", ipa: "/13:n/" }, { en: "visit", vi: "ghé thăm", ipa: "/'VIZIT/" }, { en: "wash", vi: "rửa", ipa: "/WDS/" }, { en: "study", vi: "học", ipa: "/'stadi/" }, { en: "write", vi: "viết", ipa: "/rait/" }, { en: "listen", vi: "nghe", ipa: "/'lısn/" }, { en: "speak", vi: "nói", ipa: "/spi:k/" }, { en: "ride", vi: "đạp, cưỡi", ipa: "/raid/" }, { en: "live", vi: "sống", ipa: "/lιν/" }, { en: "like", vi: "thích", ipa: "laik/" }, { en: "enjoy", vi: "thích", ipa: "/ın'd301/" }, { en: "sing", vi: "hát", ipa: "/sin/" }, { en: "dance", vi: "nhảy", ipa: "/da:ns/" }, { en: "have", vi: "có", ipa: "/hæv/" }, { en: "do", vi: "làm", ipa: "/du:/" }, { en: "eat", vi: "ăn", ipa: "/i:t/" }, { en: "go", vi: "đi", ipa: "/gǝu/" }, { en: "travel", vi: "đi lại, du lịch", ipa: "/'trævl/" }, { en: "help", vi: "giúp đỡ", ipa: "/help/" }, { en: "drink", vi: "uống", ipa: "/drink/" } ],
    u5p2: [ { en: "chess", vi: "cờ vua", ipa: "/tfes/" }, { en: "candy", vi: "kẹo", ipa: "/'kændi/" }, { en: "football", vi: "bóng đá", ipa: "/'futbo:1/" }, { en: "volleyball", vi: "bóng chuyền", ipa: "/ volibo:1/" }, { en: "badminton", vi: "cầu lông", ipa: "/'bædmintən/" }, { en: "tennis", vi: "quần vợt", ipa: "/'tenis/" }, { en: "guitar", vi: "đàn ghi-ta", ipa: "/gi'ta:(r)/" }, { en: "dishes", vi: "bát đĩa", ipa: "/dıfız/" }, { en: "homework", vi: "bài tập về nhà", ipa: "/'hǝomw3:k/" }, { en: "housework", vi: "công việc nhà", ipa: "/'hausw3:k/" }, { en: "bike", vi: "xe đạp", ipa: "/bark/" }, { en: "bus", vi: "xe buýt", ipa: "/bas/" }, { en: "coffee", vi: "cà phê", ipa: "/'kpfi/" }, { en: "university", vi: "đại học", ipa: "/ju:nı'v3:səti/" } ],
    // === UNIT 6 (Original) ===
    u6p1: [ { en: "work", vi: "làm việc", ipa: "/w3:k/" }, { en: "swim", vi: "bơi lội", ipa: "/swIm/" }, { en: "drive", vi: "lái xe", ipa: "/draiv/" }, { en: "share", vi: "dùng chung, ở chung", ipa: "/feǝ(r)/" }, { en: "phone", vi: "gọi điện", ipa: "/fǝon/" }, { en: "get up", vi: "thức dậy", ipa: "/get /" }, { en: "teach", vi: "dạy học", ipa: "/ti:tf/" }, { en: "jog", vi: "chạy bộ", ipa: "/d3pg/" }, { en: "buy", vi: "mua", ipa: "/bar/" }, { en: "water", vi: "tưới nước", ipa: "/'wɔ:tə(r)/" } ],
    u6p2: [ { en: "meat", vi: "thịt", ipa: "/mi:t/" }, { en: "plant", vi: "cây trồng", ipa: "/pla:nt/" }, { en: "weekend", vi: "cuối tuần", ipa: "/wi:k'end/" }, { en: "flat", vi: "căn hộ", ipa: "/flæt/" }, { en: "café", vi: "quán cà phê", ipa: "/'kæfer/" }, { en: "free time", vi: "thời gian rảnh", ipa: "/fri: taım/" }, { en: "ice cream", vi: "kem", ipa: "/'ais kri:m/" }, { en: "food", vi: "đồ ăn", ipa: "/fu:d/" }, { en: "hospital", vi: "bệnh viện", ipa: "/'hospitl/" }, { en: "gym", vi: "phòng tập thể hình", ipa: "/dzım/" } ],
    // === UNIT 7 (Mới) ===
    u7p1: [ { en: "rain", vi: "mưa", ipa: "/rein/" }, { en: "snow", vi: "rơi tuyết", ipa: "/snǝ /" }, { en: "wear", vi: "mặc, đội", ipa: "/weǝ(r)/" }, { en: "finish", vi: "hoàn thành", ipa: "/'fınıf/" }, { en: "sleep", vi: "ngủ", ipa: "/sli:p/" }, { en: "understand", vi: "hiểu", ipa: "/ Andə stænd/" }, { en: "rent", vi: "thuê", ipa: "/rent/" }, { en: "clean", vi: "lau dọn", ipa: "/kli:n/" }, { en: "feed", vi: "cho ăn", ipa: "/fi:d/" }, { en: "want", vi: "muốn", ipa: "/wont/" } ],
    u7p2: [ { en: "bank", vi: "ngân hàng", ipa: "/bænk/" }, { en: "fruit", vi: "quả", ipa: "/fru:t/" }, { en: "vegetable", vi: "rau củ", ipa: "/'vedztəbl/" }, { en: "tea", vi: "trà", ipa: "/ti:/" }, { en: "cinema", vi: "rạp chiếu phim", ipa: "/'sınəmə/" }, { en: "question", vi: "câu hỏi", ipa: "/'kwestfǝn/" }, { en: "pie", vi: "bánh", ipa: "/pai/" }, { en: "toy", vi: "đồ chơi", ipa: "/tol/" }, { en: "violin", vi: "vi-ô-lông", ipa: "/ vaiǝ'lın/" }, { en: "window", vi: "cửa sổ", ipa: "/'windǝu/" }, { en: "summer", vi: "mùa hè", ipa: "/'samǝ(r)/" }, { en: "winter", vi: "mùa đông", ipa: "/'wintǝ(r)/" } ],
    // === UNIT 8 (TỪ PDF) ===
    u8p1: [ { en: "rise", vi: "mọc", ipa: "/raiz/" }, { en: "set", vi: "lặn", ipa: "/set/" }, { en: "leave", vi: "rời", ipa: "/li:v/" }, { en: "start", vi: "bắt đầu", ipa: "/sta:t/" }, { en: "boil", vi: "sôi", ipa: "/boil/" }, { en: "see", vi: "ghé thăm", ipa: "/si:/" }, { en: "hate", vi: "ghét", ipa: "/hert/" }, { en: "tidy", vi: "dọn dẹp", ipa: "/'tardi/" }, { en: "meet", vi: "gặp gỡ", ipa: "/mi:t/" }, { en: "cycle", vi: "đạp xe", ipa: "/'saıkl/" }, { en: "run", vi: "chạy", ipa: "/ran/" }, { en: "turn", vi: "biến thành", ipa: "/t3:n/" }, { en: "cry", vi: "khóc", ipa: "/krai/" } ],
    u8p2: [ { en: "Sun", vi: "mặt trời", ipa: "/san/" }, { en: "world", vi: "thế giới", ipa: "/w3:ld/" }, { en: "East", vi: "phía Đông", ipa: "/i:st/" }, { en: "West", vi: "phía Tây", ipa: "/west/" }, { en: "spring", vi: "mùa xuân", ipa: "/sprin/" }, { en: "autumn/fall", vi: "mùa thu", ipa: "/'ɔ:təm//fɔ:l/" }, { en: "people", vi: "mọi người", ipa: "/'pi:pl/" }, { en: "brother-in-law", vi: "anh/em rể", ipa: "/'braðər ɪn lɔ:/" }, { en: "sister-in-law", vi: "chị/em dâu", ipa: "/'sıstər ɪn lɔ:/" }, { en: "breakfast", vi: "bữa sáng", ipa: "/'brekfǝst/" }, { en: "dinner", vi: "bữa tối", ipa: "/'dınə(r)/" }, { en: "bedroom", vi: "phòng ngủ", ipa: "/'bedru:m/" }, { en: "cartoon", vi: "hoạt hình", ipa: "/ka: tu:n/" }, { en: "novel", vi: "tiểu thuyết", ipa: "/'nɒvl/" }, { en: "tree", vi: "cây cối", ipa: "/tri:/" } ],
    u8p3: [ { en: "hot", vi: "nóng", ipa: "/hɒt/" }, { en: "active", vi: "năng động", ipa: "/'æktiv/" }, { en: "cute", vi: "đáng yêu", ipa: "/kju:t/" }, { en: "clean", vi: "sạch sẽ", ipa: "/kli:n/" }, { en: "tidy", vi: "gọn gàng", ipa: "/'tardi/" }, { en: "neat", vi: "ngăn nắp", ipa: "/ni:t/" }, { en: "yellow", vi: "màu vàng", ipa: "/'jelǝu/" }, { en: "careful", vi: "cẩn thận", ipa: "/'keǝfl/" } ],
    u8p4: [ { en: "always", vi: "luôn luôn", ipa: "/'ɔ:lweiz/" }, { en: "usually", vi: "thường thường", ipa: "/'ju:zuǝli/" }, { en: "often", vi: "thường", ipa: "/'ɒfn/, /'ɒftən/" }, { en: "sometimes", vi: "thỉnh thoảng", ipa: "/'samtaimz/" }, { en: "hardly", vi: "hiếm khi", ipa: "/'ha:dli/" }, { en: "never", vi: "không bao giờ", ipa: "/'nevə(r)/" } ],
    // === UNIT 9 (TỪ PDF) ===
    u9p1: [ { en: "flower", vi: "hoa", ipa: "/'flavǝ(r)/" }, { en: "girl", vi: "cô gái", ipa: "/g3:l/" }, { en: "actor", vi: "diễn viên", ipa: "" }, { en: "moment", vi: "khoảnh khắc", ipa: "/'məmənt/" }, { en: "boy", vi: "chàng trai", ipa: "/bɔɪ/" }, { en: "happiness", vi: "niềm vui", ipa: "/'hæpinǝs/" }, { en: "city", vi: "thành phố", ipa: "/'siti/" }, { en: "artist", vi: "nghệ sĩ", ipa: "/'a:tist/" }, { en: "weather", vi: "thời tiết", ipa: "/'weðǝ(r)/" }, { en: "visitor", vi: "du khách", ipa: "/'vızıtə(r)/" } ],
    u9p2: [ { en: "nice", vi: "tốt, đẹp", ipa: "/nais/" }, { en: "good", vi: "tốt, khoẻ", ipa: "/gud/" }, { en: "great", vi: "tuyệt vời", ipa: "/greit/" }, { en: "easy", vi: "dễ dàng", ipa: "/'i:zi/" }, { en: "beautiful", vi: "đẹp", ipa: "/'bju:tıfl/" }, { en: "suitable", vi: "phù hợp", ipa: "/'su:təbl/" }, { en: "careless", vi: "bất cẩn", ipa: "/'keələs/" } ],
    u9p3: [ { en: "quickly", vi: "nhanh chóng", ipa: "/'kwikli/" }, { en: "carefully", vi: "đầy cẩn thận", ipa: "/'keəfəli/" }, { en: "carelessly", vi: "đầy bất cẩn", ipa: "/'keələsli/" }, { en: "fast", vi: "nhanh", ipa: "/fa:st/" }, { en: "well", vi: "tốt, giỏi", ipa: "/wel/" }, { en: "hard", vi: "chăm chỉ", ipa: "/ha:d/" }, { en: "very", vi: "rất", ipa: "/'veri/" }, { en: "quite", vi: "khá", ipa: "/kwart/" }, { en: "slowly", vi: "một cách chậm rãi", ipa: "/'slǝuli/" } ],
    // === UNIT 10 (TỪ PDF) ===
    u10p1: [ { en: "rest", vi: "nghỉ ngơi", ipa: "/rest/" }, { en: "close", vi: "đóng lại", ipa: "/klǝuz/" }, { en: "type", vi: "gõ", ipa: "/taip/" }, { en: "give", vi: "đưa cho", ipa: "/gɪv/" }, { en: "talk", vi: "nói chuyện", ipa: "/to:k/" }, { en: "fly", vi: "bay", ipa: "/flaɪ/" }, { en: "stand", vi: "đứng", ipa: "/stænd/" }, { en: "wait", vi: "đợi", ipa: "/weɪt/" } ],
    u10p2: [ { en: "gate", vi: "cổng", ipa: "/gert/" }, { en: "living room", vi: "phòng khách", ipa: "/'lıvıŋ ru:m/" }, { en: "dentist", vi: "nha sĩ", ipa: "/'dentist/" }, { en: "letter", vi: "lá thư", ipa: "/'letǝ(r)/" }, { en: "keyboard", vi: "bàn phím", ipa: "/'ki:bo:d/" }, { en: "yard", vi: "sân", ipa: "/ja:d/" } ],
    // === UNIT 11 (TỪ PDF) ===
    u11p1: [ { en: "attend", vi: "tham dự", ipa: "/ǝ'tend/" }, { en: "make", vi: "làm", ipa: "/meik/" }, { en: "mop", vi: "lau, chùi", ipa: "/mɒp/" }, { en: "shop", vi: "mua sắm", ipa: "/ʃɒp/" }, { en: "sit", vi: "ngồi", ipa: "/sIt/" }, { en: "build", vi: "xây dựng", ipa: "/bild/" }, { en: "love", vi: "yêu thích", ipa: "/lʌv/" }, { en: "know", vi: "biết", ipa: "/nǝo/" }, { en: "think", vi: "nghĩ rằng", ipa: "/θɪŋk/" }, { en: "believe", vi: "tin rằng", ipa: "/bɪ'li:v/" } ],
    u11p2: [ { en: "radio", vi: "đài phát thanh", ipa: "/'reidiǝo/" }, { en: "meeting", vi: "cuộc họp", ipa: "/'mi:tın/" }, { en: "answer", vi: "câu trả lời", ipa: "/'a:nsə(r)/" }, { en: "skirt", vi: "váy", ipa: "/sk3:t/" } ],
    // === UNIT 12 (TỪ PDF) ===
    u12p1: [ { en: "begin", vi: "bắt đầu", ipa: "/bi'gin/" }, { en: "break", vi: "làm vỡ", ipa: "/breık/" }, { en: "bring", vi: "mang theo", ipa: "/brin/" }, { en: "come", vi: "đến", ipa: "/kam/" }, { en: "cost", vi: "trị giá", ipa: "/kɒst/" }, { en: "cut", vi: "cắt", ipa: "/kat/" }, { en: "draw", vi: "vẽ", ipa: "/drǝ:/" }, { en: "find", vi: "tìm thấy", ipa: "/faind/" }, { en: "get", vi: "có được", ipa: "/get/" }, { en: "hear", vi: "nghe", ipa: "/hiǝ(r)/" }, { en: "hold", vi: "tổ chức, cầm, nắm", ipa: "/hǝold/" }, { en: "keep", vi: "giữ", ipa: "/ki:p/" }, { en: "pay", vi: "trả tiền", ipa: "/per/" }, { en: "say", vi: "nói", ipa: "/ser/" }, { en: "sell", vi: "bán", ipa: "/sel/" }, { en: "send", vi: "gửi", ipa: "/send/" }, { en: "spend", vi: "dành thời gian, tiền bạc", ipa: "/spend/" }, { en: "take", vi: "cầm, mang", ipa: "/terk/" }, { en: "tell", vi: "kể, bảo", ipa: "/tel/" }, { en: "win", vi: "chiến thắng", ipa: "/wɪn/" }, { en: "feel", vi: "cảm thấy", ipa: "/fi:l/" } ],
    u12p2: [ { en: "hour", vi: "giờ", ipa: "/'aʊǝ(r)/" }, { en: "day", vi: "ngày", ipa: "/der/" }, { en: "story", vi: "câu chuyện", ipa: "/'sto:ri/" }, { en: "vase", vi: "cái bình", ipa: "/va:z/, /veiz/" }, { en: "movie", vi: "bộ phim", ipa: "/'mu:vi/" } ],
    // === UNIT 13 (Mới) ===
    u13p1: [ { en: "bill", vi: "hoá đơn", ipa: "" }, { en: "suit", vi: "bộ com lê", ipa: "" }, { en: "factory", vi: "nhà máy", ipa: "" }, { en: "family", vi: "gia đình", ipa: "" }, { en: "shoe", vi: "giày", ipa: "" }, { en: "contest", vi: "cuộc thi", ipa: "" } ],
    u13p2: [ { en: "cold", vi: "lạnh", ipa: "" }, { en: "fresh", vi: "tươi, mới", ipa: "" }, { en: "close", vi: "gần, thân thiết", ipa: "" } ],
    u13p3: [ { en: "late", vi: "muộn", ipa: "/lert/" }, { en: "abroad", vi: "nước ngoài", ipa: "/ə'bro:d/" } ],
    // === UNIT 14 (Mới) ===
    u14p1: [ { en: "chat", vi: "tán gẫu", ipa: "/tfæt/" }, { en: "fix", vi: "sửa chữa", ipa: "/fiks/" }, { en: "stop", vi: "dừng lại", ipa: "/stop/" }, { en: "arrive", vi: "đến", ipa: "/ə'raiv/" }, { en: "change", vi: "thay, thay đổi", ipa: "/tfeind3/" }, { en: "follow", vi: "lắng nghe, theo dõi", ipa: "/'fɒlǝo/" } ],
    u14p2: [ { en: "bicycle", vi: "xe đạp", ipa: "/'baısıkl/" }, { en: "accident", vi: "vụ tai nạn", ipa: "/'æksıdənt/" }, { en: "police", vi: "cảnh sát", ipa: "/pə'li:s/" }, { en: "clothes", vi: "quần áo", ipa: "/kləudz/" }, { en: "game", vi: "trò chơi", ipa: "/geim/" } ],
    // === UNIT 15 (Mới) ===
    u15p1: [ { en: "receive", vi: "nhận được", ipa: "/ri'si:v/" }, { en: "search", vi: "tìm kiếm", ipa: "/s3:tf/" }, { en: "marry", vi: "kết hôn", ipa: "/'mæri/" }, { en: "lose", vi: "mất", ipa: "/lu:z/" }, { en: "paint", vi: "sơn", ipa: "/peint/" }, { en: "smoke", vi: "hút thuốc", ipa: "/smǝuk/" } ],
    u15p2: [ { en: "match", vi: "trận đấu", ipa: "/mæts/" }, { en: "song", vi: "bài hát", ipa: "/sɒŋ/" }, { en: "essay", vi: "bài luận", ipa: "/'eser/" }, { en: "minute", vi: "phút", ipa: "/'minit/" }, { en: "key", vi: "chìa khoá", ipa: "/ki:/" }, { en: "message", vi: "tin nhắn", ipa: "/'mesıd3/" }, { en: "time (lần)", vi: "lần", ipa: "/taim/" }, { en: "watch (đồng hồ)", vi: "đồng hồ", ipa: "/wɒtʃ/" } ],
    // === UNIT 16 (Mới) ===
    u16p1: [ { en: "return", vi: "quay trở lại", ipa: "/ri't3:n/" }, { en: "check", vi: "kiểm tra", ipa: "/tfek/" }, { en: "lend", vi: "cho mượn", ipa: "/lend/" }, { en: "look", vi: "trông có vẻ", ipa: "/luk/" }, { en: "cancel", vi: "huỷ bỏ", ipa: "/'kænsəl/" }, { en: "carry", vi: "mang, vác", ipa: "/'kæri/" }, { en: "turn on", vi: "bật lên", ipa: "/t3:n ɒn/" } ],
    u16p2: [ { en: "suitcase", vi: "va li", ipa: "/'su:tkeis/" }, { en: "drink", vi: "đồ uống", ipa: "/drink/" }, { en: "juice", vi: "nước ép", ipa: "/dzu:s/" }, { en: "heater", vi: "máy sưởi", ipa: "/'hi:tə(r)/" }, { en: "partner", vi: "bạn đời, đồng hành", ipa: "/'pa:tnə(r)/" } ],
    u16p3: [ { en: "tired", vi: "mệt mỏi", ipa: "/'tarǝd/" }, { en: "hungry", vi: "đói", ipa: "/'hæŋgri/" }, { en: "perfect", vi: "hoàn hảo", ipa: "/'p3:fekt/" } ],
    u16p4: [ { en: "today", vi: "hôm nay", ipa: "/tə'der/" }, { en: "tomorrow", vi: "ngày mai", ipa: "/tə'mɒrǝu/" }, { en: "tonight", vi: "tối nay", ipa: "/tǝ'nait/" }, { en: "soon", vi: "sớm", ipa: "/su:n/" } ],
    // === UNIT 17 (Mới) ===
    u17p1: [ { en: "complete", vi: "hoàn thành", ipa: "/kəm'pli:t/" }, { en: "graduate", vi: "tốt nghiệp", ipa: "/'grædzuǝt/" }, { en: "pass", vi: "vượt qua, thi đỗ", ipa: "/pa:s/" }, { en: "retire", vi: "nghỉ hưu", ipa: "/rı'taıə(r)/" } ],
    u17p2: [ { en: "film", vi: "bộ phim", ipa: "/film/" }, { en: "guest", vi: "khách", ipa: "/gest/" }, { en: "report", vi: "báo cáo", ipa: "/ri'pɔ:t/" }, { en: "project", vi: "dự án", ipa: "/'prɒdzekt/" } ],
    // === UNIT 18 (TỪ PDF) ===
    u18p1: [
        { en: "beach", vi: "bãi biển", ipa: "/bi:tʃ/" },
        { en: "green", vi: "màu xanh", ipa: "/gri:n/" },
        { en: "kid", vi: "đứa trẻ", ipa: "/kıd/" },
        { en: "lip", vi: "môi", ipa: "/lip/" },
        { en: "gift", vi: "món quà", ipa: "/gift/" },
        { en: "foot", vi: "chân", ipa: "/fot/" },
        { en: "cook", vi: "nấu ăn", ipa: "/kɔk/" },
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
    u21p1: [ { en: "rain", vi: "mưa", ipa: "/reın/" }, { en: "cook", vi: "nấu ăn", ipa: "/kuk/" }, { en: "travel", vi: "du lịch", ipa: "/'trævl/" }, { en: "drive", vi: "lái xe", ipa: "/draiv/" }, { en: "come", vi: "đến", ipa: "/kɅm/" } ], // <--- ĐÃ THÊM DẤU PHẨY!
    // ===========================================
    // BỔ SUNG TỪ VỰNG TỪ UNIT 22 - 27
    // ===========================================
    // === UNIT 22 (ĐỘNG TỪ KHUYẾT THIẾU) ===
    u22p1: [
        { en: "touch", vi: "chạm vào", ipa: "/tʌtʃ/" }, // Sửa IPA từ /tats/ thành /tʌtʃ/
        { en: "enter", vi: "tiến vào, đi vào", ipa: "/'entə(r)/" },
        { en: "exercise", vi: "tập thể dục", ipa: "/'eksəsaız/" },
        { en: "borrow", vi: "mượn", ipa: "/'bɒrəʊ/" }, // Sửa IPA
        { en: "park", vi: "đậu xe", ipa: "/pɑ:k/" },
        { en: "sentence", vi: "câu", ipa: "/'sentəns/" },
        { en: "area", vi: "khu vực", ipa: "/'eəriə/" },
        { en: "wine", vi: "rượu", ipa: "/waın/" },
        { en: "rule", vi: "quy định", ipa: "/ru:l/" }, // Sửa IPA từ /ru:1/ thành /ru:l/
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
    u23p3: [ // Danh từ
        { en: "chocolate", vi: "sô cô la", ipa: "/'tʃɒklət/" },
        { en: "plane", vi: "máy bay", ipa: "/pleın/" },
        { en: "basketball", vi: "bóng rổ", ipa: "/'bɑ:skɪtbɔ:l/" },
        { en: "fan", vi: "quạt", ipa: "/fæn/" },
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
        { en: "comic", vi: "truyện tranh", ipa: "/'kɒmɪk/" },
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
u43p1: [ // Danh từ
    { en: "job", vi: "công việc", ipa: "/d3pb/" },
    { en: "driver", vi: "tài xế", ipa: "/'draıvə(r)/" },
    { en: "builder", vi: "thợ xây dựng", ipa: "/'bildə(r)/" },
    { en: "cook", vi: "đầu bếp", ipa: "/kuk/" },
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

}; // <--- Đảm bảo dấu đóng ngoặc nhọn } và dấu chấm phẩy ; nằm ở đây.
// ===========================================
// DỮ LIỆU SỐ ĐẾM (UNIT 20)
// ===========================================
const numberData = [
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
];


// ===========================================
// HỆ THỐNG LOGIC QUIZ (Chung)
// ===========================================

/**
 * Hàm trộn mảng ngẫu nhiên (Fisher-Yates)
 */
function shuffleArray(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ===========================================
// LOGIC CHO QUIZ TỪ VỰNG (FORM 1)
// ===========================================

let currentWordIndex = 0;
let shuffledWordDeck = [];
let allVietnameseDefs = [];
const WORD_QUIZ_CONTAINER_ID = 'master-quiz-container';

function initializeWordQuiz() {
    currentWordIndex = 0;
    
    // Gộp tất cả từ vựng từ các unit lại
    shuffledWordDeck = shuffleArray(Object.values(vocabularyData).flat());
    
    // Lấy tất cả các nghĩa Tiếng Việt để làm lựa chọn sai
    allVietnameseDefs = shuffledWordDeck
        .map(word => word.vi)
        .filter((vi, index, self) => vi && self.indexOf(vi) === index); // Lọc duy nhất

    renderWordQuestion();
}

function renderWordQuestion() {
    const quizContainer = document.getElementById(WORD_QUIZ_CONTAINER_ID);
    if (!quizContainer) return;

    if (currentWordIndex >= shuffledWordDeck.length) {
        quizContainer.innerHTML = `<h3>🎉 Chúc mừng!</h3><p>Bạn đã hoàn thành tất cả ${shuffledWordDeck.length} từ vựng.</p><button class="btn-next" onclick="initializeWordQuiz()">Làm lại từ đầu</button>`;
        return;
    }

    const currentWord = shuffledWordDeck[currentWordIndex];
    const correctVi = currentWord.vi;
    
    // Tạo lựa chọn sai
    let incorrectOptions = [];
    let shuffledAllDefs = shuffleArray(allVietnameseDefs);
    for (let def of shuffledAllDefs) {
        if (def !== correctVi && incorrectOptions.length < 3) {
            incorrectOptions.push(def);
        }
    }

    let options = shuffleArray([correctVi, ...incorrectOptions]);
    const optionPrefixes = ['A', 'B', 'C', 'D'];

    let optionsHTML = options.map((option, index) => {
        const isCorrect = option === correctVi;
        return `<button data-correct="${isCorrect}" onclick="checkWordAnswer(this)">
                    <b>${optionPrefixes[index]}.</b> ${option}
                </button>`;
    }).join('');

    quizContainer.innerHTML = `
        <div class="quiz-question">${currentWord.en}</div>
        <div class="quiz-ipa">${currentWord.ipa || '&nbsp;'}</div>
        <div class="quiz-options">${optionsHTML}</div>
        <div class="quiz-feedback"></div>
        <div class="quiz-controls">
            <span class="quiz-status">Từ ${currentWordIndex + 1} / ${shuffledWordDeck.length}</span>
            <div>
                <button class="btn-5050" onclick="useFiftyFifty('${WORD_QUIZ_CONTAINER_ID}')">50/50</button>
                <button class="btn-next hidden" onclick="nextWordQuestion()">Câu tiếp</button>
            </div>
        </div>
    `;
}

function checkWordAnswer(buttonElement) {
    const quizContainer = document.getElementById(WORD_QUIZ_CONTAINER_ID);
    const isCorrect = buttonElement.dataset.correct === 'true';
    const feedback = quizContainer.querySelector('.quiz-feedback');
    const optionsButtons = quizContainer.querySelectorAll('.quiz-options button');
    
    optionsButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        }
    });

    const btn5050 = quizContainer.querySelector('.btn-5050');
    if(btn5050) btn5050.disabled = true;

    if (isCorrect) {
        buttonElement.classList.add('correct');
        feedback.textContent = 'Chính xác!';
        feedback.className = 'quiz-feedback correct';
        setTimeout(nextWordQuestion, 1000); 
    } else {
        buttonElement.classList.add('incorrect');
        feedback.textContent = 'Chưa đúng!';
        feedback.className = 'quiz-feedback incorrect';
        quizContainer.querySelector('.btn-next').classList.remove('hidden');
    }
}

function nextWordQuestion() {
    currentWordIndex++;
    renderWordQuestion();
}

// ===========================================
// LOGIC CHO QUIZ SỐ ĐẾM (FORM 2)
// ===========================================

let currentNumberIndex = 0;
let shuffledNumberDeck = [];
let allNumberDefs = [];
const NUMBER_QUIZ_CONTAINER_ID = 'number-quiz-container';

function initializeNumberQuiz() {
    currentNumberIndex = 0;
    shuffledNumberDeck = shuffleArray(numberData);
    allNumberDefs = numberData.map(num => num.vi); // Lấy tất cả các số (dạng "1", "2")
    renderNumberQuestion();
}

function renderNumberQuestion() {
    const quizContainer = document.getElementById(NUMBER_QUIZ_CONTAINER_ID);
    if (!quizContainer) return;

    if (currentNumberIndex >= shuffledNumberDeck.length) {
        quizContainer.innerHTML = `<h3>🎉 Chúc mừng!</h3><p>Bạn đã hoàn thành quiz số đếm.</p><button class="btn-next" onclick="initializeNumberQuiz()">Làm lại</button>`;
        return;
    }

    const currentNumber = shuffledNumberDeck[currentNumberIndex];
    const correctVi = currentNumber.vi; // "1", "100", "1,000"

    // Tạo lựa chọn sai
    let incorrectOptions = [];
    let shuffledAllDefs = shuffleArray(allNumberDefs);
    for (let def of shuffledAllDefs) {
        if (def !== correctVi && incorrectOptions.length < 3) {
            incorrectOptions.push(def);
        }
    }

    let options = shuffleArray([correctVi, ...incorrectOptions]);
    const optionPrefixes = ['A', 'B', 'C', 'D'];

    let optionsHTML = options.map((option, index) => {
        const isCorrect = option === correctVi;
        return `<button data-correct="${isCorrect}" onclick="checkNumberAnswer(this)">
                    <b>${optionPrefixes[index]}.</b> ${option}
                </button>`;
    }).join('');

    quizContainer.innerHTML = `
        <div class="quiz-question">${currentNumber.en}</div>
        <div class="quiz-ipa">${currentNumber.ipa || '&nbsp;'}</div>
        <div class="quiz-options">${optionsHTML}</div>
        <div class="quiz-feedback"></div>
        <div class="quiz-controls">
            <span class="quiz-status">Số ${currentNumberIndex + 1} / ${shuffledNumberDeck.length}</span>
            <div>
                <button class="btn-5050" onclick="useFiftyFifty('${NUMBER_QUIZ_CONTAINER_ID}')">50/50</button>
                <button class="btn-next hidden" onclick="nextNumberQuestion()">Câu tiếp</button>
            </div>
        </div>
    `;
}

function checkNumberAnswer(buttonElement) {
    const quizContainer = document.getElementById(NUMBER_QUIZ_CONTAINER_ID);
    const isCorrect = buttonElement.dataset.correct === 'true';
    const feedback = quizContainer.querySelector('.quiz-feedback');
    const optionsButtons = quizContainer.querySelectorAll('.quiz-options button');
    
    optionsButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        }
    });

    const btn5050 = quizContainer.querySelector('.btn-5050');
    if(btn5050) btn5050.disabled = true;

    if (isCorrect) {
        buttonElement.classList.add('correct');
        feedback.textContent = 'Chính xác!';
        feedback.className = 'quiz-feedback correct';
        setTimeout(nextNumberQuestion, 1000); 
    } else {
        buttonElement.classList.add('incorrect');
        feedback.textContent = 'Chưa đúng!';
        feedback.className = 'quiz-feedback incorrect';
        quizContainer.querySelector('.btn-next').classList.remove('hidden');
    }
}

function nextNumberQuestion() {
    currentNumberIndex++;
    renderNumberQuestion();
}

// ===========================================
// HÀM 50/50 (Chung cho cả 2 quiz)
// ===========================================
function useFiftyFifty(containerId) {
    const quizContainer = document.getElementById(containerId);
    const optionsButtons = quizContainer.querySelectorAll('.quiz-options button');
    
    let incorrectButtons = [];
    optionsButtons.forEach(btn => {
        if (btn.dataset.correct === 'false') {
            incorrectButtons.push(btn);
        }
    });

    let shuffledIncorrect = shuffleArray(incorrectButtons);
    shuffledIncorrect[0].classList.add('hidden');
    shuffledIncorrect[1].classList.add('hidden');
    
    quizContainer.querySelector('.btn-5050').disabled = true;
}


// ===========================================
// KHỞI ĐỘNG KHI TẢI TRANG
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo cả 2 quiz
    initializeWordQuiz();
    initializeNumberQuiz();
});