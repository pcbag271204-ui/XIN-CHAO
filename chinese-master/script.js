
"use strict";

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
    { lesson: 1, hanzi: "自己", pinyin: "zìjǐ", meaning: "bản thân" },

    // Bài 2 - thêm từ vựng của bạn tại đây
    // { lesson: 2, hanzi: "是", pinyin: "shì", meaning: "là" },

    // Bài 3 - thêm từ vựng của bạn tại đây
    // { lesson: 3, hanzi: "来", pinyin: "lái", meaning: "đến" },

    // Bài 4, 5, 6, 7 và H2-1:
    // Giữ cùng format, ví dụ:
    // { lesson: "H2-1", hanzi: "正在", pinyin: "zhèngzài", meaning: "đang" },
];

// ========================================
// 2. BIẾN ỨNG DỤNG
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
// 3. CHUẨN HÓA ĐÁP ÁN
// ========================================

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

function normalizeText(text) {
    return String(text || "")
        .trim()
        .toLowerCase()
        .normalize("NFC")
        .replace(/\s+/g, "")
        .replace(/[.,!?;:，。！？；：、…]/g, "");
}

function getMeaningOptions(meaning) {
    return String(meaning || "")
        .split(/[,，;；/、]/)
        .map(item => normalizeText(item))
        .filter(Boolean);
}

// ========================================
// 4. XÁO TRỘN
// ========================================

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function chooseMode() {
    const selected = practiceMode.value;

    if (selected !== "random") {
        return selected;
    }

    const modes = ["hanzi", "meaning", "pinyin"];
    return modes[Math.floor(Math.random() * modes.length)];
}

// ========================================
// 5. HIỂN THỊ THÔNG BÁO
// ========================================

function setFeedback(message, type = "") {
    feedbackText.textContent = message;
    feedbackText.className = "feedback" + (type ? " " + type : "");
}

function setHint(message, type = "") {
    hintText.textContent = message;
    hintText.className = "hint" + (type ? " " + type : "");
}

function setControlsDisabled(disabled) {
    userInput.disabled = disabled;
    checkBtn.disabled = disabled;
    skipBtn.disabled = disabled;
}

// ========================================
// 6. CẬP NHẬT TIẾN ĐỘ
// ========================================

function updateProgress() {
    const total = vocabulary.length;
    const completed = Math.min(currentIndex, total);
    const percent = total ? completed / total * 100 : 0;

    progressFill.style.width = `${percent}%`;
    progressText.textContent = `${completed} / ${total} từ`;
    totalText.textContent = `Trả lời đúng: ${correctCount} / ${total} từ`;
}

// ========================================
// 7. CHỌN BÀI HỌC
// ========================================

function selectLesson() {
    if (nextTimer !== null) {
        clearTimeout(nextTimer);
        nextTimer = null;
    }

    const selectedLesson = lessonSelect.value;

    vocabulary = fullVocabulary.filter(word => {
        if (!word.hanzi || !word.pinyin || !word.meaning) {
            return false;
        }

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
// 8. HIỂN THỊ CÂU HỎI
// ========================================

function loadNextWord() {
    if (nextTimer !== null) {
        clearTimeout(nextTimer);
        nextTimer = null;
    }

    isAnswered = false;

    userInput.value = "";
    setFeedback("");
    setHint("");
    setControlsDisabled(false);

    checkBtn.textContent = "Kiểm tra";

    if (vocabulary.length === 0) {
        hanziText.textContent = "暂无词汇";
        questionType.textContent = "Chưa có từ vựng";

        setFeedback(
            "Bài này chưa có dữ liệu. Hãy thêm từ vào fullVocabulary.",
            "wrong"
        );

        setControlsDisabled(true);
        updateProgress();
        return;
    }

    if (currentIndex >= vocabulary.length) {
        hanziText.textContent = "🎉";
        questionType.textContent = "HOÀN THÀNH";

        setFeedback(
            `Bạn trả lời đúng ${correctCount}/${vocabulary.length} câu.`,
            "correct"
        );

        setHint("Chọn bài học hoặc chế độ khác để luyện tiếp.");
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
// 9. ĐÁP ÁN ĐÚNG
// ========================================

function getCorrectAnswer(word) {
    if (currentMode === "hanzi") return word.pinyin;
    if (currentMode === "meaning") return word.hanzi;
    return word.meaning;
}

// ========================================
// 10. KIỂM TRA ĐÁP ÁN
// ========================================

function checkAnswer(event) {
    event.preventDefault();

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
        correct = normalizePinyin(answer) === normalizePinyin(word.pinyin);
    } else if (currentMode === "meaning") {
        correct = normalizeText(answer) === normalizeText(word.hanzi);
    } else {
        correct = getMeaningOptions(word.meaning).includes(normalizeText(answer));
    }

    if (correct) {
        isAnswered = true;
        correctCount++;
        currentIndex++;

        setFeedback("✔ Chính xác! Giỏi lắm!", "correct");
        setHint(
            `${word.hanzi} | ${word.pinyin} | ${word.meaning}`,
            "correct"
        );

        setControlsDisabled(true);
        updateProgress();

        nextTimer = setTimeout(loadNextWord, 1000);
    } else {
        setFeedback("✘ Chưa đúng, thử lại nhé!", "wrong");
        setHint("Bạn có thể nhập lại đáp án.", "wrong");
        userInput.select();
    }
}

// ========================================
// 11. BỎ QUA
// ========================================

function skipWord() {
    if (isAnswered || currentIndex >= vocabulary.length) {
        return;
    }

    const word = vocabulary[currentIndex];

    isAnswered = true;
    currentIndex++;

    setFeedback("Đã bỏ qua từ này.", "wrong");
    setHint(`${word.hanzi} | ${word.pinyin} | ${word.meaning}`);

    setControlsDisabled(true);
    updateProgress();

    nextTimer = setTimeout(loadNextWord, 1000);
}

// ========================================
// 12. KHỞI ĐỘNG
// ========================================

function initChineseMaster() {
    const requiredElements = [
        lessonSelect,
        practiceMode,
        progressFill,
        progressText,
        hanziText,
        questionType,
        userInput,
        checkBtn,
        skipBtn,
        feedbackText,
        hintText,
        answerForm,
        totalText
    ];

    if (requiredElements.some(element => !element)) {
        console.error(
            "Chinese Master: Thiếu ID trong index.html. Hãy kiểm tra lại HTML."
        );
        return;
    }

    lessonSelect.addEventListener("change", selectLesson);
    practiceMode.addEventListener("change", selectLesson);
    answerForm.addEventListener("submit", checkAnswer);
    skipBtn.addEventListener("click", skipWord);

    selectLesson();
}

initChineseMaster();
