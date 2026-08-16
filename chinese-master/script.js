// Dữ liệu từ vựng
const fullVocabulary = [
  // Bài 1
  { lesson: 1, hanzi: "你", pinyin: "nǐ", meaning: "bạn, anh, chị..." },
  { lesson: 1, hanzi: "好", pinyin: "hǎo", meaning: "khỏe, tốt, hay..." },
  { lesson: 1, hanzi: "我", pinyin: "wǒ", meaning: "tôi" },
  { lesson: 1, hanzi: "叫", pinyin: "jiào", meaning: "gọi, tên là" },
  { lesson: 1, hanzi: "什么", pinyin: "shénme", meaning: "gì, cái gì" },
  { lesson: 1, hanzi: "名字", "pinyin": "míngzi", meaning: "tên" },
  { lesson: 1, hanzi: "您", pinyin: "nín", meaning: "ngài, ông, bà..." },
  { lesson: 1, hanzi: "你们", pinyin: "nǐmen", meaning: "các bạn, các anh, các chị..." },
  { lesson: 1, hanzi: "他", pinyin: "tā", meaning: "anh ấy, ông ấy..." },
  { lesson: 1, hanzi: "她", pinyin: "tā", meaning: "cô ấy, bà ấy..." },
  { lesson: 1, hanzi: "再见", pinyin: "zàijiàn", meaning: "tạm biệt, hẹn gặp lại" },
  { lesson: 1, hanzi: "大卫", pinyin: "Dàwèi", meaning: "David" },
  { lesson: 1, hanzi: "王丽", pinyin: "Wáng Lì", meaning: "Wang Li" },
  { lesson: 1, hanzi: "林总", pinyin: "Lín zǒng", meaning: "Tổng/ông Lâm" },
  { lesson: 1, hanzi: "迟到", pinyin: "chídào", meaning: "đến muộn" },
  { lesson: 1, hanzi: "鼻子", pinyin: "bízi", meaning: "mũi" },
  { lesson: 1, hanzi: "一次", pinyin: "yícì", meaning: "một lần" },
  { lesson: 1, hanzi: "机会", pinyin: "jīhuì", meaning: "cơ hội" },
  { lesson: 1, hanzi: "东西", pinyin: "dōngxi", meaning: "đồ đạc" },
  { lesson: 1, hanzi: "生日", pinyin: "shēngrì", meaning: "sinh nhật" },
  { lesson: 1, hanzi: "公司", pinyin: "gōngsī", meaning: "công ty" },
  { lesson: 1, hanzi: "成绩", pinyin: "chéngjì", meaning: "thành tích" },
  { lesson: 1, hanzi: "组织", pinyin: "zǔzhī", meaning: "tổ chức" },
  { lesson: 1, hanzi: "休息", pinyin: "xiūxi", meaning: "nghỉ ngơi" },
  { lesson: 1, hanzi: "司机", pinyin: "sījī", meaning: "tài xế" },
  { lesson: 1, hanzi: "吃饭", pinyin: "chīfàn", meaning: "ăn cơm" },
  { lesson: 1, hanzi: "时间", pinyin: "shíjiān", meaning: "thời gian" },
  { lesson: 1, hanzi: "自己", pinyin: "zìjǐ", meaning: "bản thân" },

  // Bài 2
  { lesson: 2, hanzi: "是", pinyin: "shì", meaning: "là" },
  { lesson: 2, hanzi: "经理", pinyin: "jīnglǐ", meaning: "giám đốc" },
  { lesson: 2, hanzi: "吗", pinyin: "ma", meaning: "...không?" },
  { lesson: 2, hanzi: "不", pinyin: "bù", meaning: "không" },
  { lesson: 2, hanzi: "请问", pinyin: "qǐngwèn", meaning: "xin hỏi" },
  { lesson: 2, hanzi: "谢谢", pinyin: "xièxie", meaning: "cảm ơn" },
  { lesson: 2, hanzi: "不客气", pinyin: "bú kèqi", meaning: "đừng khách sáo" },
  { lesson: 2, hanzi: "员工", pinyin: "yuángōng", meaning: "công nhân viên / nhân viên" },
  { lesson: 2, hanzi: "汉语", pinyin: "Hànyǔ", meaning: "tiếng Hán" },
  { lesson: 2, hanzi: "下雨", pinyin: "xiàyǔ", meaning: "mưa" },
  { lesson: 2, hanzi: "下雪", pinyin: "xiàxuě", meaning: "tuyết rơi" },
  { lesson: 2, hanzi: "所以", pinyin: "suǒyǐ", meaning: "nên" },
  { lesson: 2, hanzi: "工作", pinyin: "gōngzuò", meaning: "làm việc" },
  { lesson: 2, hanzi: "外国", pinyin: "wàiguó", meaning: "nước ngoài" },
  { lesson: 2, hanzi: "选择", pinyin: "xuǎnzé", meaning: "lựa chọn" },
  { lesson: 2, hanzi: "越南", pinyin: "Yuènán", meaning: "Việt Nam" },
  { lesson: 2, hanzi: "千万", pinyin: "qiānwàn", meaning: "nhất định" },
  { lesson: 2, hanzi: "一共", pinyin: "yígòng", meaning: "tổng cộng" },

  // Bài 3
  { lesson: 3, hanzi: "中国", pinyin: "Zhōngguó", meaning: "Trung Quốc" },
  { lesson: 3, hanzi: "人", pinyin: "rén", meaning: "người" },

  // Bài 4
  { lesson: 4, hanzi: "家", pinyin: "jiā", meaning: "nhà, gia đình" },
  { lesson: 4, hanzi: "爸爸", pinyin: "bàba", meaning: "bố" }
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