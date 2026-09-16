// Dữ liệu từ vựng
const fullVocabulary = [
  // Bài 1
  {hanzi: "你", pinyin: "nǐ", meaning: "bạn, anh, chị..."},
        {lesson: 1, hanzi: "好", pinyin: "hǎo", meaning: "khỏe, tốt, hay..."},
        {lesson: 1, hanzi: "我", pinyin: "wǒ", meaning: "tôi"},
        {lesson: 1, hanzi: "叫", pinyin: "jiào", meaning: "gọi, tên là"},
        {lesson: 1, hanzi: "什么", pinyin: "shénme", meaning: "gì, cái gì"},
        {lesson: 1, hanzi: "名字", pinyin: "míngzi", meaning: "tên"},
        {lesson: 1, hanzi: "您", pinyin: "nín", meaning: "ngài, ông, bà..."},
        {lesson: 1, hanzi: "你们", pinyin: "nǐmen", meaning: "các bạn..."},
        {lesson: 1, hanzi: "他", pinyin: "tā", meaning: "anh ấy..."},
        {lesson: 1, hanzi: "她", pinyin: "tā", meaning: "cô ấy..."},
        {lesson: 1, hanzi: "再见", pinyin: "zàijiàn", meaning: "tạm biệt"},
        {lesson: 1, hanzi: "大卫", pinyin: "Dàwèi", meaning: "David"},
        {lesson: 1, hanzi: "王丽", pinyin: "Wáng Lì", meaning: "Wang Li"},
        {lesson: 1, hanzi: "林总", pinyin: "Lín zǒng", meaning: "Tổng Lâm"},
        {lesson: 1, hanzi: "生日", pinyin: "shēngrì", meaning: "sinh nhật"},
        {lesson: 1, hanzi: "公司", pinyin: "gōngsī", meaning: "công ty"},
        {lesson: 1, hanzi: "司机", pinyin: "sījī", meaning: "tài xế"},
        {lesson: 1, hanzi: "吃饭", pinyin: "chīfàn", meaning: "ăn cơm"},
        {lesson: 1, hanzi: "时间", pinyin: "shíjiān", meaning: "thời gian"},
        {lesson: 1, hanzi: "自己", pinyin: "zìjǐ", meaning: "bản thân"},

  // Bài 2
        { lesson: 2, hanzi: "是", pinyin: "shì", meaning: "là"},
        { lesson: 2, hanzi: "经理", pinyin: "jīnglǐ", meaning: "giám đốc"},
        { lesson: 2, hanzi: "吗", pinyin: "ma", meaning: "...không?"},
        { lesson: 2, hanzi: "不", pinyin: "bù", meaning: "không"},
        { lesson: 2, hanzi: "请问", pinyin: "qǐngwèn", meaning: "xin hỏi"},
        { lesson: 2, hanzi: "谢谢", pinyin: "xièxie", meaning: "cảm ơn"},
        { lesson: 2, hanzi: "不客气", pinyin: "bú kèqi", meaning: "đừng khách sáo"},
        { lesson: 2, hanzi: "员工", pinyin: "yuángōng", meaning: "nhân viên"},
        { lesson: 2, hanzi: "汉语", pinyin: "Hànyǔ", meaning: "tiếng Hán"},
        { lesson: 2, hanzi: "下雨", pinyin: "xiàyǔ", meaning: "mưa"},
        { lesson: 2, hanzi: "下雪", pinyin: "xiàxuě", meaning: "tuyết rơi"},
        { lesson: 2, hanzi: "工作", pinyin: "gōngzuò", meaning: "làm việc"},
        { lesson: 2, hanzi: "外国", pinyin: "wàiguó", meaning: "nước ngoài"},
        { lesson: 2, hanzi: "选择", pinyin: "xuǎnzé", meaning: "lựa chọn"},
        { lesson: 2, hanzi: "越南", pinyin: "Yuènán", meaning: "Việt Nam"},
        { lesson: 2, hanzi: "千万", pinyin: "qiānwàn", meaning: "nhất định"},
        { lesson: 2, hanzi: "一共", pinyin: "yígòng", meaning: "tổng cộng"},
        { lesson: 2, hanzi: "也", pinyin: "yě", meaning: "cũng"},
        { lesson: 2, hanzi: "们", pinyin: "men", meaning: "các, chúng"},
        { lesson: 2, hanzi: "阿", pinyin: "ā", meaning: "tiền tố A"},
        { lesson: 2, hanzi: "生词", pinyin: "shēngcí", meaning: "từ mới"},
        { lesson: 2, hanzi: "都", pinyin: "dōu", meaning: "đều"},
        { lesson: 2, hanzi: " 工人", pinyin: "gōngrén", meaning: "công nhân"},
        { lesson: 2, hanzi: "职员", pinyin: "zhíyuán", meaning: "nhân viên (văn phòng)"},
        { lesson: 2, hanzi: "中文", pinyin: "zhōngwén", meaning: "tiếng Trung"},

  // Bài 3
        {lesson: 3, hanzi: "来", pinyin: "lái", meaning: "đến"},
        {lesson: 3, hanzi: "介绍", pinyin: "jièshào", meaning: "giới thiệu"},
        {lesson: 3, hanzi: "一下儿", pinyin: "yíxiàr", meaning: "một chút, một lát"},
        {lesson: 3, hanzi: "认识", pinyin: "rènshi", meaning: "quen, biết"},
        {lesson: 3, hanzi: "高兴", pinyin: "gāoxìng", meaning: "vui, vui mừng"},
        {lesson: 3, hanzi: "贵姓", pinyin: "guìxìng", meaning: "họ gì? (cách hỏi lịch sự)"},
        {lesson: 3, hanzi: "很", pinyin: "hěn", meaning: "rất"},
        {lesson: 3, hanzi: "姓", pinyin: "xìng", meaning: "họ (thường dùng trong 姓)"},
        {lesson: 3, hanzi: "呢", pinyin: "ne", meaning: "trợ từ, nhỉ/thế còn..."},
        {lesson: 3, hanzi: "想", pinyin: "xiǎng", meaning: "muốn"},
        {lesson: 3, hanzi: "玩", pinyin: "wán", meaning: "chơi"},
        {lesson: 3, hanzi: "去", pinyin: "qù", meaning: "đi"},
        {lesson: 3, hanzi: "哪国", pinyin: "nǎ guó", meaning: "nước nào"},
        {lesson: 3, hanzi: "家", pinyin: "jiā", meaning: "nhà, gia đình"},
        {lesson: 3, hanzi: "美国", pinyin: "Měiguó", meaning: "Mỹ, Hoa Kỳ"},
        {lesson: 3, hanzi: "中国", pinyin: "Zhōngguó", meaning: "Trung Quốc"},
        {lesson: 3, hanzi: "北宁", pinyin: "Běiníng", meaning: "Bắc Ninh"},
        {lesson: 3, hanzi: "到", pinyin: "dào", meaning: "đến, tới"},
        {lesson: 3, hanzi: "欢迎", pinyin: "huānyíng", meaning: "chào mừng"},
  
  // Bài 4
        { lesson: 4, hanzi: "一", pinyin: "yī", meaning: "một" },
        { lesson: 4, hanzi: "二", pinyin: "èr", meaning: "hai" },
        { lesson: 4, hanzi: "三", pinyin: "sān", meaning: "ba" },
        { lesson: 4, hanzi: "四", pinyin: "sì", meaning: "bốn" },
        { lesson: 4, hanzi: "五", pinyin: "wǔ", meaning: "năm" },
        { lesson: 4, hanzi: "六", pinyin: "liù", meaning: "sáu" },
        { lesson: 4, hanzi: "七", pinyin: "qī", meaning: "bảy" },
        { lesson: 4, hanzi: "八", pinyin: "bā", meaning: "tám" },
        { lesson: 4, hanzi: "九", pinyin: "jiǔ", meaning: "chín" },
        { lesson: 4, hanzi: "十", pinyin: "shí", meaning: "mười" },
        { lesson: 4, hanzi: "百", pinyin: "bǎi", meaning: "trăm" },
        { lesson: 4, hanzi: "千", pinyin: "qiān", meaning: "nghìn" },
        { lesson: 4, hanzi: "万", pinyin: "wàn", meaning: "mười nghìn" },
        { lesson: 4, hanzi: "亿", pinyin: "yì", meaning: "trăm triệu" },
        { lesson: 4, hanzi: "知道", pinyin: "zhī dào", meaning: "biết" },
        { lesson: 4, hanzi: "会", pinyin: "huì", meaning: "biết / có thể" },
        { lesson: 4, hanzi: "今天", pinyin: "jīn tiān", meaning: "hôm nay" },
        { lesson: 4, hanzi: "昨天", pinyin: "zuó tiān", meaning: "hôm qua" },
        { lesson: 4, hanzi: "明天", pinyin: "míng tiān", meaning: "ngày mai" },
        { lesson: 4, hanzi: "年", pinyin: "nián", meaning: "năm" },
        { lesson: 4, hanzi: "今年", pinyin: "jīn nián", meaning: "năm nay" },
        { lesson: 4, hanzi: "昨年", pinyin: "zuó nián", meaning: "năm ngoái" },
        { lesson: 4, hanzi: "明年", pinyin: "míng nián", meaning: "năm sau" },
        { lesson: 4, hanzi: "月", pinyin: "yuè", meaning: "tháng" },
        { lesson: 4, hanzi: "号", pinyin: "hào", meaning: "ngày (trong ngày tháng)" },
        { lesson: 4, hanzi: "日", pinyin: "rì", meaning: "ngày" },
        { lesson: 4, hanzi: "的", pinyin: "de", meaning: "của" },
        { lesson: 4, hanzi: "生日", pinyin: "shēng rì", meaning: "sinh nhật" },
        { lesson: 4, hanzi: "岁", pinyin: "suì", meaning: "tuổi" },
        { lesson: 4, hanzi: "几", pinyin: "jǐ", meaning: "mấy / bao nhiêu" },
        { lesson: 4, hanzi: "多少", pinyin: "duō shao", meaning: "bao nhiêu" },
        { lesson: 4, hanzi: "手机", pinyin: "shǒu jī", meaning: "điện thoại di động" },
        { lesson: 4, hanzi: "电话", pinyin: "diàn huà", meaning: "điện thoại" },
        { lesson: 4, hanzi: "苹果", pinyin: "píng guǒ", meaning: "Apple / quả táo" },
        { lesson: 4, hanzi: "三星", pinyin: "Sān Xīng", meaning: "Samsung" },
        { lesson: 4, hanzi: "毕业", pinyin: "bì yè", meaning: "tốt nghiệp" },
        { lesson: 4, hanzi: "出生", pinyin: "chū shēng", meaning: "sinh ra" },
        { lesson: 4, hanzi: "谁", pinyin: "shéi", meaning: "ai" },
        { lesson: 4, hanzi: "设", pinyin: "shè", meaning: "đặt / thiết lập" },
        { lesson: 4, hanzi: "那", pinyin: "nà", meaning: "kia / đó" },
  // Bài 5
        { lesson: 5, hanzi: "在", pinyin: "zài", meaning: "ở, tại" },
        { lesson: 5, hanzi: "工作", pinyin: "gōngzuò", meaning: "làm việc, công việc" },
        { lesson: 5, hanzi: "做", pinyin: "zuò", meaning: "làm" },
        { lesson: 5, hanzi: "这儿", pinyin: "zhèr", meaning: "chỗ này, ở đây" },
        { lesson: 5, hanzi: "这里", pinyin: "zhèlǐ", meaning: "nơi này, ở đây" },
        { lesson: 5, hanzi: "哪儿", pinyin: "nǎr", meaning: "ở đâu" },
        { lesson: 5, hanzi: "那里", pinyin: "nàlǐ", meaning: "ở đó" },
        { lesson: 5, hanzi: "哪里", pinyin: "nǎlǐ", meaning: "ở đâu" },
        { lesson: 5, hanzi: "办公室", pinyin: "bàngōngshì", meaning: "văn phòng" },
        { lesson: 5, hanzi: "楼", pinyin: "lóu", meaning: "tầng, tòa nhà" },
        { lesson: 5, hanzi: "办公楼", pinyin: "bàngōnglóu", meaning: "tòa nhà văn phòng" },
        { lesson: 5, hanzi: "生产楼", pinyin: "shēngchǎnlóu", meaning: "tòa nhà sản xuất" },
        { lesson: 5, hanzi: "宿舍楼", pinyin: "sùshèlóu", meaning: "tòa nhà ký túc xá" },
        { lesson: 5, hanzi: "宿舍", pinyin: "sùshè", meaning: "ký túc xá" },
        { lesson: 5, hanzi: "车棚", pinyin: "chēpéng", meaning: "nhà để xe" },
        { lesson: 5, hanzi: "车", pinyin: "chē", meaning: "xe" },
        { lesson: 5, hanzi: "保安室", pinyin: "bǎo'ānshì", meaning: "phòng bảo vệ" },
        { lesson: 5, hanzi: "食堂", pinyin: "shítáng", meaning: "nhà ăn, căng tin" },
        { lesson: 5, hanzi: "饭堂", pinyin: "fàntáng", meaning: "nhà ăn, căng tin" },
        { lesson: 5, hanzi: "卫生间", pinyin: "wèishēngjiān", meaning: "nhà vệ sinh" },
        { lesson: 5, hanzi: "厂房", pinyin: "chǎngfáng", meaning: "nhà xưởng" },
        { lesson: 5, hanzi: "工厂", pinyin: "gōngchǎng", meaning: "nhà máy, công xưởng" },
        { lesson: 5, hanzi: "车间", pinyin: "chējiān", meaning: "xưởng, phân xưởng" },
        { lesson: 5, hanzi: "仓库", pinyin: "cāngkù", meaning: "kho" },
        { lesson: 5, hanzi: "左边", pinyin: "zuǒbian", meaning: "bên trái" },
        { lesson: 5, hanzi: "右边", pinyin: "yòubian", meaning: "bên phải" },
        { lesson: 5, hanzi: "前面", pinyin: "qiánmiàn", meaning: "phía trước" },
        { lesson: 5, hanzi: "后面", pinyin: "hòumiàn", meaning: "phía sau" },
        { lesson: 5, hanzi: "上面", pinyin: "shàngmiàn", meaning: "phía trên" },
        { lesson: 5, hanzi: "下面", pinyin: "xiàmiàn", meaning: "phía dưới" },
        { lesson: 5, hanzi: "里面", pinyin: "lǐmiàn", meaning: "bên trong" },
        { lesson: 5, hanzi: "外面", pinyin: "wàimiàn", meaning: "bên ngoài" },
        { lesson: 5, hanzi: "旁边", pinyin: "pángbiān", meaning: "bên cạnh" },
        { lesson: 5, hanzi: "对面", pinyin: "duìmiàn", meaning: "đối diện" },
        { lesson: 5, hanzi: "中间", pinyin: "zhōngjiān", meaning: "ở giữa" },
        { lesson: 5, hanzi: "附近", pinyin: "fùjìn", meaning: "gần, khu vực lân cận" },
        { lesson: 5, hanzi: "东边", pinyin: "dōngbiān", meaning: "phía đông" },
        { lesson: 5, hanzi: "北边", pinyin: "běibiān", meaning: "phía bắc" },
        { lesson: 5, hanzi: "南边", pinyin: "nánbiān", meaning: "phía nam" },
        { lesson: 5, hanzi: "西边", pinyin: "xībiān", meaning: "phía tây" },
        { lesson: 5, hanzi: "工业区", pinyin: "gōngyèqū", meaning: "khu công nghiệp" },
        { lesson: 5, hanzi: "大学", pinyin: "dàxué", meaning: "đại học" },
        { lesson: 5, hanzi: "中专", pinyin: "zhōngzhuān", meaning: "trung cấp chuyên nghiệp" },
        { lesson: 5, hanzi: "高中", pinyin: "gāozhōng", meaning: "trung học phổ thông" },
        { lesson: 5, hanzi: "初中", pinyin: "chūzhōng", meaning: "trung học cơ sở" },
        { lesson: 5, hanzi: "小学", pinyin: "xiǎoxué", meaning: "tiểu học" },
        { lesson: 5, hanzi: "专业", pinyin: "zhuānyè", meaning: "chuyên ngành" },
        { lesson: 5, hanzi: "最近", pinyin: "zuìjìn", meaning: "gần đây, dạo này" },
        { lesson: 5, hanzi: "忙", pinyin: "máng", meaning: "bận" },
    //Bài 6
        { lesson: 6, hanzi: "买", pinyin: "mǎi", meaning: "mua" },
        { lesson: 6, hanzi: "卖", pinyin: "mài", meaning: "bán" },
        { lesson: 6, hanzi: "水果", pinyin: "shuǐguǒ", meaning: "trái cây, hoa quả" },
        { lesson: 6, hanzi: "香蕉", pinyin: "xiāngjiāo", meaning: "chuối" },
        { lesson: 6, hanzi: "给", pinyin: "gěi", meaning: "cho, đưa" },
        { lesson: 6, hanzi: "别", pinyin: "bié", meaning: "đừng" },
        { lesson: 6, hanzi: "再买", pinyin: "zài mǎi", meaning: "mua thêm" },
        { lesson: 6, hanzi: "斤", pinyin: "jīn", meaning: "cân (0,5 kg)" },
        { lesson: 6, hanzi: "公斤", pinyin: "gōngjīn", meaning: "kilôgam (kg)" },
        { lesson: 6, hanzi: "个", pinyin: "gè", meaning: "cái, chiếc (lượng từ chung)" },
        { lesson: 6, hanzi: "本", pinyin: "běn", meaning: "quyển (sách, vở)" },
        { lesson: 6, hanzi: "件", pinyin: "jiàn", meaning: "cái, món (quần áo, sự việc)" },
        { lesson: 6, hanzi: "箱", pinyin: "xiāng", meaning: "thùng" },
        { lesson: 6, hanzi: "条", pinyin: "tiáo", meaning: "con, chiếc (cá, quần,...)"},
        { lesson: 6, hanzi: "张", pinyin: "zhāng", meaning: "tờ, chiếc (giấy, vé,...)"},
        { lesson: 6, hanzi: "两", pinyin: "liǎng", meaning: "hai (dùng trước lượng từ)" },
        { lesson: 6, hanzi: "把", pinyin: "bǎ", meaning: "cái, chiếc (vật có cán)" },
        { lesson: 6, hanzi: "多少钱", pinyin: "duōshao qián", meaning: "bao nhiêu tiền" },
        { lesson: 6, hanzi: "找", pinyin: "zhǎo", meaning: "tìm; trả lại tiền thừa" },
        { lesson: 6, hanzi: "收", pinyin: "shōu", meaning: "thu, nhận" },
        { lesson: 6, hanzi: "事", pinyin: "shì", meaning: "việc, chuyện" },
        { lesson: 6, hanzi: "老师", pinyin: "lǎoshī", meaning: "giáo viên, thầy cô" },
        { lesson: 6, hanzi: "公司", pinyin: "gōngsī", meaning: "công ty" },
        { lesson: 6, hanzi: "衣服", pinyin: "yīfu", meaning: "quần áo" },
        { lesson: 6, hanzi: "摩托车", pinyin: "mótuōchē", meaning: "xe máy" },
        { lesson: 6, hanzi: "书", pinyin: "shū", meaning: "sách" },
        { lesson: 6, hanzi: "水", pinyin: "shuǐ", meaning: "nước" },
        { lesson: 6, hanzi: "纸巾", pinyin: "zhǐjīn", meaning: "khăn giấy" },
        { lesson: 6, hanzi: "笔", pinyin: "bǐ", meaning: "bút" },
        { lesson: 6, hanzi: "词典", pinyin: "cídiǎn", meaning: "từ điển" },
];

let vocabulary = [];
let currentIndex = 0;
let wordsLearned = 0;
let totalWords = 0;

// Elements DOM
const lessonSelect = document.getElementById("lessonSelect");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const hanziText = document.getElementById("hanziText");
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const skipBtn = document.getElementById("skipBtn");
const feedbackText = document.getElementById("feedbackText");
const hintText = document.getElementById("hintText");

// Chuẩn hóa pinyin (bỏ dấu thanh điệu)
function removePinyinAccents(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}

// Xáo trộn mảng ngẫu nhiên (Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Chọn bài học
function selectLesson(choice) {
  if (choice === "all") {
    vocabulary = [...fullVocabulary];
  } else {
    const lessonNum = parseInt(choice, 10);
    vocabulary = fullVocabulary.filter((item) => item.lesson === lessonNum);
  }

  shuffle(vocabulary);
  currentIndex = 0;
  wordsLearned = 0;
  totalWords = vocabulary.length;

  userInput.disabled = false;
  checkBtn.disabled = false;
  skipBtn.disabled = false;

  updateProgress();
  loadNextWord();
}

// Tải từ tiếp theo
function loadNextWord() {
  if (totalWords === 0) {
    hanziText.innerText = "Trống";
    feedbackText.innerText = "Chưa có từ vựng cho bài học này.";
    feedbackText.className = "feedback wrong";
    hintText.innerText = "";
    userInput.disabled = true;
    checkBtn.disabled = true;
    skipBtn.disabled = true;
    return;
  }

  if (currentIndex < totalWords) {
    const currentWord = vocabulary[currentIndex];
    hanziText.innerText = currentWord.hanzi;
    userInput.value = "";
    feedbackText.innerText = "";
    hintText.innerText = "";
    userInput.focus();
  } else {
    hanziText.innerText = "🎉";
    userInput.disabled = true;
    checkBtn.disabled = true;
    skipBtn.disabled = true;
    feedbackText.innerText = "Tuyệt vời! Bạn đã hoàn thành bài học này!";
    feedbackText.className = "feedback correct";
    hintText.innerText = "";
  }
}

// Kiểm tra đáp án
function checkAnswer() {
  if (currentIndex >= totalWords) return;

  const rawInput = userInput.value.trim();
  const currentWord = vocabulary[currentIndex];

  const userClean = removePinyinAccents(rawInput);
  const correctPinyinClean = removePinyinAccents(currentWord.pinyin);
  const correctHanzi = currentWord.hanzi.trim();

  const isCorrectHanzi = rawInput === correctHanzi;
  const isCorrectPinyin = userClean !== "" && userClean === correctPinyinClean;

  if (isCorrectHanzi || isCorrectPinyin) {
    feedbackText.innerText = "✓ Chính xác!";
    feedbackText.className = "feedback correct";
    hintText.innerText = `Chữ Hán: ${correctHanzi} | Pinyin: ${currentWord.pinyin} | Nghĩa: ${currentWord.meaning}`;
    hintText.className = "hint correct";

    wordsLearned++;
    currentIndex++;
    updateProgress();
    setTimeout(loadNextWord, 800);
  } else {
    feedbackText.innerText = "✗ Chưa đúng rồi, thử lại nhé!";
    feedbackText.className = "feedback wrong";
    hintText.innerText = `Gợi ý: ${currentWord.pinyin} / ${correctHanzi} (${currentWord.meaning})`;
    hintText.className = "hint wrong";
    userInput.value = "";
    userInput.focus();
  }
}

// Bỏ qua từ
function skipWord() {
  if (currentIndex < totalWords) {
    currentIndex++;
    updateProgress();
    loadNextWord();
  }
}

// Cập nhật tiến độ
function updateProgress() {
  const percent = totalWords > 0 ? (wordsLearned / totalWords) * 100 : 0;
  progressFill.style.width = `${percent}%`;
  progressText.innerText = `Đã học ${wordsLearned} / ${totalWords} từ`;
}

// Lắng nghe sự kiện
lessonSelect.addEventListener("change", (e) => selectLesson(e.target.value));
checkBtn.addEventListener("click", checkAnswer);
skipBtn.addEventListener("click", skipWord);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkAnswer();
});

// Khởi chạy
selectLesson("all");
