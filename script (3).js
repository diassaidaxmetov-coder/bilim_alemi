
const questions = [
  {
    question: "Таңертең төрт аяқты, түсте екі аяқты, кешке үш аяқты. Бұл не?",
    answers: ["Адам", "Ит", "Құс"],
    correct: "Адам"
  },
  {
    question: "Отан – ...",
    answers: ["отбасынан басталады", "жақсы нәрсе", "қымбат"],
    correct: "отбасынан басталады"
  },
  {
    question: "7 + 5 = ?",
    answers: ["12", "10", "15"],
    correct: "12"
  },
  {
    question: "Қазақстан тәуелсіздігін қай жылы алды?",
    answers: ["1991", "1986", "1995"],
    correct: "1991"
  },
  {
    question: "«Қобыланды батыр» қандай жанрға жатады?",
    answers: ["Эпос", "Лирика", "Роман"],
    correct: "Эпос"
  },
  {
    question: "Қазақстандағы ең биік тау?",
    answers: ["Хан Тәңірі", "Алатау", "Эверест"],
    correct: "Хан Тәңірі"
  },
  {
    question: "Қанатсыз құс ұшады, аяғы жоқ жүреді. Ол не?",
    answers: ["Уақыт", "Жел", "Арман"],
    correct: "Уақыт"
  },
  {
    question: "Ең жылдам жануар?",
    answers: ["Гепард", "Арыстан", "Қоян"],
    correct: "Гепард"
  },
  {
    question: "Қазақтың ұлттық аспабы?",
    answers: ["Домбыра", "Скрипка", "Гитара"],
    correct: "Домбыра"
  },
  {
    question: "Аспанның түсі қандай?",
    answers: ["Көк", "Қызыл", "Жасыл"],
    correct: "Көк"
  }
];

let current = 0;
let score = 0;

function startGame() {
  current = 0;
  score = 0;
  document.getElementById("score").textContent = "";
  showQuestion();
}

function showQuestion() {
  if (current < questions.length) {
    const q = questions[current];
    document.getElementById("question").textContent = q.question;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    q.answers.forEach(ans => {
      const btn = document.createElement("button");
      btn.textContent = ans;
      btn.onclick = () => checkAnswer(ans);
      answersDiv.appendChild(btn);
    });
  } else {
    document.getElementById("question").textContent = "🎉 Ойын аяқталды!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("result").textContent =
      `Сенің нәтижең: ${score}/${questions.length}`;
  }
}

function checkAnswer(selected) {
  const correct = questions[current].correct;
  const result = document.getElementById("result");
  if (selected === correct) {
    score++;
    result.textContent = "✅ Дұрыс!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Қате!";
    result.style.color = "red";
  }
  current++;
  setTimeout(showQuestion, 1000);
}
