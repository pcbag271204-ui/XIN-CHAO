```javascript
let vocabulary = [];
let currentIndex = 0;
let wordsLearned = 0;
let totalWords = 0;
let currentMode = "hanzi";
let isAnswered = false;

// Elements DOM
const lessonSelect = document.getElementById("lessonSelect");
const practiceMode = document.getElementById("practiceMode");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const hanziText = document.getElementById("hanziText");
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const skipBtn = document.getElementById("skipBtn");
const feedbackText = document.getElementById("feedbackText");
const hintText = document.getElementById("hintText");

// Chuẩn hóa Pinyin: bỏ dấu thanh điệu và khoảng trắng.
// Ví dụ: nǐ hǎo = nihao = ni3hao3 (khi nhập số).
function normalizePinyin(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ü/g, "u")
    .replace(/v/g, "u")
    .replace(/[1-5]/g, "")
    .replace(/\s+/g, "")
    .replace(/[^a-z]/g, "");
}

// Chuẩn hóa nghĩa tiếng Việt và chữ Hán
function normalizeText(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[.,!?;:，。！？；：]/g, "");
}

// Xáo trộn danh sách từ theo Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Chọn kiểu luyện tập
function chooseMode() {
  const selected = practiceMode.value;

  if (selected !== "random") {
    return selected;
  }

  const modes = ["hanzi", "meaning", "pinyin"];
  return modes[Math.floor(Math.random() * modes.length)];
}

// Chọn bài học
function selectLesson(choice) {
  if (choice === "all") {
    vocabulary = [...fullVocabulary];
  } else {
    vocabulary = fullVocabulary.filter(
      item => String(item.lesson).trim() === String(choice).trim()
    );
  }

  // Xáo trộn từ vựng mỗi khi chọn bài
  shuffle(vocabulary);

  currentIndex = 0;
  wordsLearned = 0;
  totalWords = vocabulary.length;
  isAnswered = false;

  userInput.disabled = totalWords === 0;
  checkBtn.disabled = totalWords === 0;
  skipBtn.disabled = totalWords === 0;

  updateProgress();
  loadNextWord();
}

// Hiển thị câu hỏi
function loadNextWord() {
  feedbackText.innerText = "";
  hintText.innerText = "";
  userInput.value = "";
  isAnswered = false;

  userInput.disabled = false;
  checkBtn.disabled = false;
  skipBtn.disabled = false;

  if (totalWords === 0) {
    hanziText.innerText = "Trống";
    feedbackText.innerText = "Bài này chưa có từ vựng.";
    feedbackText.className = "feedback wrong";

    userInput.disabled = true;
    checkBtn.disabled = true;
    skipBtn.disabled = true;
    return;
  }

  if (currentIndex >= totalWords) {
    hanziText.innerText = "🎉";

    feedbackText.innerText =
      `Hoàn thành bài học! Bạn trả lời đúng ${wordsLearned}/${totalWords} từ.`;

    feedbackText.className = "feedback correct";

    hintText.innerText = "Hãy chọn lại bài học để luyện tập tiếp.";

    userInput.disabled = true;
    checkBtn.disabled = true;
    skipBtn.disabled = true;

    return;
  }

  const word = vocabulary[currentIndex];
  currentMode = chooseMode();

  if (currentMode === "hanzi") {
    // Hiện chữ Hán, nhập Pinyin
    hanziText.innerText = word.hanzi;
    userInput.placeholder = "Nhập Pinyin...";
    setQuestionType("Nhập Pinyin của chữ Hán trên");
  } else if (currentMode === "meaning") {
    // Hiện nghĩa, nhập chữ Hán
    hanziText.innerText = word.meaning;
    userInput.placeholder = "输入汉字 / Nhập chữ Hán...";
    setQuestionType("Nhập chữ Hán tương ứng với nghĩa trên");
  } else {
    // Hiện Pinyin, nhập nghĩa
    hanziText.innerText = word.pinyin;
    userInput.placeholder = "Nhập nghĩa tiếng Việt...";
    setQuestionType("Nhập nghĩa tiếng Việt của từ trên");
  }

  userInput.focus();
}

// Cập nhật hướng dẫn nếu HTML có questionType
function setQuestionType(message) {
  const questionType = document.getElementById("questionType");

  if (questionType) {
    questionType.innerText = message;
  }
}

// Kiểm tra đáp án
function checkAnswer() {
  if (currentIndex >= totalWords || isAnswered) return;

  const answer = userInput.value.trim();

  if (!answer) {
    feedbackText.innerText = "Bạn hãy nhập câu trả lời!";
    feedbackText.className = "feedback wrong";
    return;
  }

  const word = vocabulary[currentIndex];
  let correct = false;

  if (currentMode === "hanzi") {
    // Chấp nhận Pinyin có hoặc không có dấu thanh
    correct =
      normalizePinyin(answer) === normalizePinyin(word.pinyin);
  } else if (currentMode === "meaning") {
    correct =
      normalizeText(answer) === normalizeText(word.hanzi);
  } else if (currentMode === "pinyin") {
    correct =
      normalizeText(answer) === normalizeText(word.meaning);
  }

  if (correct) {
    isAnswered = true;
    wordsLearned++;

    feedbackText.innerText = "✔ Chính xác! Giỏi lắm!";
    feedbackText.className = "feedback correct";

    hintText.innerText =
      `Chữ Hán: ${word.hanzi} | ` +
      `Pinyin: ${word.pinyin} | ` +
      `Nghĩa: ${word.meaning}`;

    hintText.className = "hint correct";

    userInput.disabled = true;
    checkBtn.disabled = true;

    currentIndex++;
    updateProgress();

    setTimeout(loadNextWord, 900);
  } else {
    feedbackText.innerText = "✘ Chưa đúng, thử lại nhé!";
    feedbackText.className = "feedback wrong";

    hintText.innerText = "Bạn hãy kiểm tra lại đáp án.";
    hintText.className = "hint wrong";

    userInput.select();
  }
}

// Bỏ qua từ hiện tại
function skipWord() {
  if (currentIndex >= totalWords) return;

  const word = vocabulary[currentIndex];

  feedbackText.innerText = "Đã bỏ qua từ này.";
  feedbackText.className = "feedback wrong";

  hintText.innerText =
    `Đáp án: ${word.hanzi} | ${word.pinyin} | ${word.meaning}`;

  isAnswered = true;
  userInput.disabled = true;
  checkBtn.disabled = true;
  skipBtn.disabled = true;

  currentIndex++;

  setTimeout(loadNextWord, 1000);
}

// Cập nhật tiến độ
function updateProgress() {
  const percent = totalWords > 0
    ? (wordsLearned / totalWords) * 100
    : 0;

  progressFill.style.width = `${percent}%`;

  progressText.innerText =
    `Đã học đúng ${wordsLearned} / ${totalWords} từ`;
}

// Sự kiện
lessonSelect.addEventListener("change", event => {
  selectLesson(event.target.value);
});

checkBtn.addEventListener("click", checkAnswer);
skipBtn.addEventListener("click", skipWord);

userInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

// Đổi chế độ thì bắt đầu lại bài đang chọn
if (practiceMode) {
  practiceMode.addEventListener("change", () => {
    selectLesson(lessonSelect.value);
  });
}

// Bắt đầu ứng dụng
selectLesson(lessonSelect.value);
```
