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
        {lesson: 3, hanzi: "性", pinyin: "xìng", meaning: "họ (thường dùng trong 姓)"},
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
