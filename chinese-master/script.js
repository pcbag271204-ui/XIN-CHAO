
/*
========================================
CHINESE MASTER - SCRIPT.JS
========================================

Từ vựng được lưu trực tiếp trong file này.

Format:
{ lesson: 1, hanzi: "你", pinyin: "nǐ", meaning: "bạn" }

Các chế độ:
- random: Ngẫu nhiên cả 3 dạng
- hanzi: Chữ Hán -> nhập Pinyin
- meaning: Nghĩa tiếng Việt -> nhập chữ Hán
- pinyin: Pinyin -> nhập nghĩa tiếng Việt
*/

// ========================================
// 1. DỮ LIỆU TỪ VỰNG
// ========================================

const fullVocabulary = [
    // Bài 1
    { lesson: 1, hanzi: "你", pinyin: "nǐ", meaning: "bạn, anh, chị" },
    { lesson: 1, hanzi: "好", pinyin: "hǎo", meaning: "khỏe, tốt, hay" },
    { lesson: 1, hanzi: "我", pinyin: "wǒ", meaning: "tôi" },
    { lesson: 1, hanzi: "叫", pinyin: "jiào", meaning: "gọi, tên là" },
    { lesson: 1, hanzi: "什么", pinyin: "shénme", meaning: "gì, cái gì" },
    { lesson: 1, hanzi: "名字", pinyin: "míngzi", meaning: "tên" },
    { lesson: 1, hanzi: "您", pinyin: "nín", meaning: "ngài, ông, bà" },
    { lesson: 1, hanzi: "你们", pinyin: "nǐmen", meaning: "các bạn" },
    { lesson: 1, hanzi: "他", pinyin: "tā", meaning: "anh ấy" },
    { lesson: 1, hanzi: "她", pinyin: "tā", meaning: "cô ấy" },
    { lesson: 1, hanzi: "再见", pinyin: "zàijiàn", meaning: "tạm biệt" },
    { lesson: 1, hanzi: "大卫", pinyin: "Dàwèi", meaning: "David" },
    { lesson: 1, hanzi: "王丽", pinyin: "Wáng Lì", meaning: "Wang Li" },
    { lesson: 1, hanzi: "林总", pinyin: "Lín zǒng", meaning: "Tổng Lâm" },
    { lesson: 1, hanzi: "生日", pinyin: "shēngrì", meaning: "sinh nhật" },
    { lesson: 1, hanzi: "公司", pinyin: "gōngsī", meaning: "công ty" },
    { lesson: 1, hanzi: "司机", pinyin: "sījī", meaning: "tài xế" },
    { lesson: 1, hanzi: "吃饭", pinyin: "chīfàn", meaning: "ăn cơm" },
    { lesson: 1, hanzi: "时间", pinyin: "shíjiān", meaning: "thời gian" },
    { lesson: 1, hanzi: "自己", pinyin: "zìjǐ", meaning: "bản thân" }

    // Thêm các từ Bài 2, Bài 3... của bạn ở đây.
    // Giữ nguyên format:
    // { lesson: 2, hanzi: "是", pinyin: "shì", meaning: "là" },
];

// ========================================
// 2. KHAI BÁO CÁC BIẾN
// ========================================

let vocabulary = [];
let currentIndex = 0;
let correctCount = 0;
let currentMode = "random";
let isAnswered = false;
let nextTimer = null;

const $ = id => document.getElementById(id);

const lessonSelect = $("lessonSelect");
const practiceMode = $("practiceMode");
const progressFill = $("progressFill");
const progressText = $("progressText");
const hanziText = $("hanziText");
const questionType = $("questionType");
const userInput = $("userInput");
const checkBtn = $("checkBtn");
const skipBtn = $("skipBtn");
const feedbackText = $("feedbackText");
const hintText = $("hintText");
const answerForm = $("answerForm");
const totalText = $("totalText");

// ========================================
// 3. CHUẨN HÓA CÂU TRẢ LỜI
// ========================================

// Bỏ dấu thanh Pinyin để nǐ hǎo = nihao = ni3hao3
function normalizePinyin(text) {
    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ü/g, "u")
        .replace(/v/g, "u")
        .replace(/[1-5]/g, "")
        .replace(/[^a-z]/g, "");
}

// Chuẩn hóa văn bản tiếng Việt/chữ Hán
function normalizeText(text) {
    return String(text || "")
        .trim()
        .toLowerCase()
        .normalize("NFC")
        .replace(/\s+/g, "")
        .replace(/[.,!?;:，。！？；：、…]/g, "");
}

// Tách các nghĩa tương đương.
// Ví dụ: "bạn, anh, chị" chấp nhận cả "bạn" và "anh".
function getMeaningOptions(meaning) {
    return String(meaning || "")
        .split(/[,，;；/、]/)
        .map(item => normalizeText(item))
        .filter(Boolean);
}

// ========================================
// 4. XÁO TRỘN TỪ VỰNG
// ========================================

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

// ========================================
// 5. CHỌN KIỂU CÂU HỎI
// ========================================

function chooseMode() {
    const selected = practiceMode.value;

    if (selected !== "random") {
        return selected;
    }

    const modes = ["hanzi", "meaning", "pinyin"];

    return modes[Math.floor(Math.random() * modes.length)];
}

// ========================================
// 6. HIỂN THỊ PHẢN HỒI
// ========================================

function setFeedback(message, type = "") {
    feedbackText.textContent = message;
    feedbackText.className = "feedback" + (type ? " " + type : "");
}

function setHint(message, type = "") {
    hintText.textContent = message;
    hintText.className = "hint" + (type ? " " + type : "");
}

// ========================================
// 7. CẬP NHẬT TIẾN ĐỘ
// ========================================

function updateProgress() {
    const total = vocabulary.length;
    const completed = Math.min(currentIndex, total);
    const percent = total > 0 ? (completed / total) * 100 : 0;

    progressFill.style.width = percent + "%";
    progressText.textContent = `${completed} / ${total} từ`;
    totalText.textContent = `Trả lời đúng: ${correctCount} / ${total} từ`;
}

// ========================================
// 8. KHÓA / MỞ ĐIỀU KHIỂN
// ========================================

function setControlsDisabled(disabled) {
    userInput.disabled = disabled;
    checkBtn.disabled = disabled;
    skipBtn.disabled = disabled;
}

// ========================================
// 9. CHỌN BÀI HỌC
// ========================================

function selectLesson() {
    if (nextTimer !== null) {
        clearTimeout(nextTimer);
        nextTimer = null;
    }

    const selectedLesson = lessonSelect.value;

    // Sử dụng fullVocabulary, không sử dụng wordsData.
    vocabulary = fullVocabulary.filter(word => {
        const hasData =
            word.hanzi &&
            word.pinyin &&
            word.meaning &&
            word.lesson !== undefined;

        if (!hasData) return false;

        return selectedLesson === "all" ||
            String(word.lesson) === String(selectedLesson);
    });

    vocabulary = shuffle(vocabulary);

    currentIndex = 0;
    correctCount = 0;
    isAnswered = false;

    loadNextWord();
}

// ========================================
// 10. HIỂN THỊ CÂU HỎI
// ========================================

function loadNextWord() {
    if (nextTimer !== null) {
        clearTimeout(nextTimer);
        nextTimer = null;
    }

    isAnswered = false;

    userInput.value = "";
    userInput.disabled = false;
    checkBtn.disabled = false;
    skipBtn.disabled = false;

    checkBtn.textContent = "Kiểm tra";

    setFeedback("");
    setHint("");

    // Không có từ vựng
    if (fullVocabulary.length === 0) {
        hanziText.textContent = "!";
        questionType.textContent = "Chưa có từ vựng";

        setFeedback("Hãy thêm từ vào mảng fullVocabulary.", "wrong");

        setControlsDisabled(true);
        updateProgress();
        return;
    }

    // Bài học không có từ
    if (vocabulary.length === 0) {
        hanziText.textContent = "暂无词汇";
        questionType.textContent = "Không có từ trong bài này";

        setFeedback(
            "Kiểm tra giá trị lesson trong dữ liệu và index.html.",
            "wrong"
        );

        setControlsDisabled(true);
        updateProgress();
        return;
    }

    // Đã hoàn thành
    if (currentIndex >= vocabulary.length) {
        hanziText.textContent = "🎉";
        questionType.textContent = "HOÀN THÀNH";

        setFeedback(
            `Bạn trả lời đúng ${correctCount}/${vocabulary.length} câu.`,
            "correct"
        );

        setHint("Chọn bài học hoặc chế độ khác để luyện tập tiếp.");

        setControlsDisabled(true);
        updateProgress();
        return;
    }

    const word = vocabulary[currentIndex];

    currentMode = chooseMode();

    if (currentMode === "hanzi") {
        hanziText.textContent = word.hanzi;
        questionType.textContent = "Nhìn chữ Hán, nhập Pinyin";
        userInput.placeholder = "Nhập Pinyin...";
    } else if (currentMode === "meaning") {
        hanziText.textContent = word.meaning;
        questionType.textContent = "Nhìn nghĩa tiếng Việt, nhập chữ Hán";
        userInput.placeholder = "Nhập chữ Hán...";
    } else {
        hanziText.textContent = word.pinyin;
        questionType.textContent = "Nhìn Pinyin, nhập nghĩa tiếng Việt";
        userInput.placeholder = "Nhập nghĩa tiếng Việt...";
    }

    updateProgress();
    userInput.focus();
}

// ========================================
// 11. LẤY ĐÁP ÁN ĐÚNG
// ========================================

function getCorrectAnswer(word) {
    if (currentMode === "hanzi") {
        return word.pinyin;
    }

    if (currentMode === "meaning") {
        return word.hanzi;
    }

    return word.meaning;
}

// ========================================
// 12. KIỂM TRA ĐÁP ÁN
// ========================================

function checkAnswer(event) {
    if (event) event.preventDefault();

    if (isAnswered || currentIndex >= vocabulary.length) {
        return;
    }

    const answer = userInput.value.trim();

    if (!answer) {
        setFeedback("Bạn hãy nhập câu trả lời!", "wrong");
        return;
    }

    const word = vocabulary[currentIndex];
    let correct = false;

    if (currentMode === "hanzi") {
        correct =
            normalizePinyin(answer) === normalizePinyin(word.pinyin);
    } else if (currentMode === "meaning") {
        correct =
            normalizeText(answer) === normalizeText(word.hanzi);
    } else if (currentMode === "pinyin") {
        const acceptedMeanings = getMeaningOptions(word.meaning);

        correct = acceptedMeanings.includes(normalizeText(answer));
    }

    if (correct) {
        isAnswered = true;
        correctCount++;
        currentIndex++;

        setFeedback("✔ Chính xác! Giỏi lắm!", "correct");

        setHint(
            `Chữ Hán: ${word.hanzi} | Pinyin: ${word.pinyin} | Nghĩa: ${word.meaning}`,
            "correct"
        );

        setControlsDisabled(true);
        updateProgress();

        nextTimer = setTimeout(loadNextWord, 1000);
    } else {
        setFeedback("✘ Chưa đúng, thử lại nhé!", "wrong");

        setHint("Hãy kiểm tra lại đáp án rồi thử lần nữa.", "wrong");

        userInput.select();
    }
}

// ========================================
// 13. BỎ QUA TỪ HIỆN TẠI
// ========================================

function skipWord() {
    if (isAnswered || currentIndex >= vocabulary.length) {
        return;
    }

    const word = vocabulary[currentIndex];

    isAnswered = true;
    currentIndex++;

    setFeedback("Đã bỏ qua từ này.", "wrong");

    setHint(
        `Đáp án: ${word.hanzi} | ${word.pinyin} | ${word.meaning}`
    );

    setControlsDisabled(true);
    updateProgress();

    nextTimer = setTimeout(loadNextWord, 1200);
}

// ========================================
// 14. KHỞI ĐỘNG ỨNG DỤNG
// ========================================

function initChineseMaster() {
    if (
        !lessonSelect ||
        !practiceMode ||
        !progressFill ||
        !progressText ||
        !hanziText ||
        !questionType ||
        !userInput ||
        !checkBtn ||
        !skipBtn ||
        !feedbackText ||
        !hintText ||
        !answerForm ||
        !totalText
    ) {
        console.error(
            "Chinese Master: ID trong index.html không khớp script.js."
        );
        return;
    }

    lessonSelect.addEventListener("change", selectLesson);
    practiceMode.addEventListener("change", selectLesson);
    answerForm.addEventListener("submit", checkAnswer);
    skipBtn.addEventListener("click", skipWord);

    selectLesson();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initChineseMaster);
} else {
    initChineseMaster();
}
