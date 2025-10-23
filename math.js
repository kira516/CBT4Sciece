const quizData = [
  { question: "1. Simplify: 8^(2/3)",
    options: ["2", "4", "8", "16"],
    answer: "4",
    explanation: "8^(2/3) = (8^(1/3))^2 = 2^2 = 4"
  },
  { question: "2. Solve: 3x + 7 = 16",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation: "3x = 9 ⇒ x = 3"
  },
  { question: "3. Simplify: (2x³y²)(3x²y⁴)",
    options: ["5x⁵y⁶", "6x⁵y⁶", "6x⁶y⁶", "5x⁶y⁶"],
    answer: "6x⁵y⁶",
    explanation: "Multiply coefficients: 2×3=6, add powers: x^(3+2), y^(2+4)"
  },
  { question: "4. Find x if 2x - 3 = 7",
    options: ["2", "3", "5", "10"],
    answer: "5",
    explanation: "2x = 10 ⇒ x = 5"
  },
  { question: "5. Simple interest on ₦10,000 at 5% for 2 years?",
    options: ["₦500", "₦1000", "₦1500", "₦2000"],
    answer: "₦1000",
    explanation: "SI = (P×R×T)/100 = (10000×5×2)/100 = ₦1000"
  },
  { question: "6. Mean of 5,7,8,10,15?",
    options: ["8", "9", "10", "11"],
    answer: "9",
    explanation: "Mean = (5+7+8+10+15)/5 = 45/5 = 9"
  },
  { question: "7. Factorize: x² - 9",
    options: ["(x - 9)(x + 9)", "(x - 3)(x + 3)", "(x - 9)²", "(x + 9)²"],
    answer: "(x - 3)(x + 3)",
    explanation: "Difference of squares: x² - 9 = (x - 3)(x + 3)"
  },
  { question: "8. Evaluate: 3/4 + 5/8",
    options: ["7/8", "9/8", "11/8", "13/8"],
    answer: "11/8",
    explanation: "Convert 3/4 = 6/8 → 6/8 + 5/8 = 11/8"
  },
  { question: "9. Solve for x: 4x = 20",
    options: ["2", "4", "5", "6"],
    answer: "5",
    explanation: "x = 20 ÷ 4 = 5"
  },
  { question: "10. Next number: 2, 4, 8, 16, ?",
    options: ["18", "20", "24", "32"],
    answer: "32",
    explanation: "Each term ×2 → next is 16×2 = 32"
  },
  { question: "11. Simplify: (2x²y)/(4xy²)",
    options: ["1/2y", "x/2y", "x/2y²", "y/2x"],
    answer: "x/2y",
    explanation: "2/4=1/2, x^(2-1)=x, y^(1-2)=1/y ⇒ x/(2y)"
  },
  { question: "12. Find x if 5x - 2 = 13",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation: "5x = 15 ⇒ x = 3"
  },
  { question: "13. Rectangle perimeter=24cm, length=7cm, find breadth.",
    options: ["4cm", "5cm", "6cm", "7cm"],
    answer: "5cm",
    explanation: "2(L+B)=24 ⇒ L+B=12 ⇒ B=12−7=5cm"
  },
  { question: "14. If y=3x+2, find y when x=4.",
    options: ["10", "12", "14", "20"],
    answer: "14",
    explanation: "y=3(4)+2=12+2=14"
  },
  { question: "15. Find 2³ + 3².",
    options: ["13", "14", "15", "17"],
    answer: "17",
    explanation: "2³=8, 3²=9 ⇒ 8+9=17"
  },
  { question: "16. Triangle sides 3cm,4cm,5cm ⇒ area?",
    options: ["6cm²", "7cm²", "8cm²", "10cm²"],
    answer: "6cm²",
    explanation: "Right-angled: ½×3×4=6cm²"
  },
  { question: "17. Convert 0.375 to fraction.",
    options: ["3/8", "1/3", "2/5", "2/3"],
    answer: "3/8",
    explanation: "0.375 = 375/1000 = 3/8 after simplification"
  },
  { question: "18. Simplify: √49 + √16",
    options: ["9", "10", "11", "12"],
    answer: "11",
    explanation: "√49=7, √16=4 ⇒ 7+4=11"
  },
  { question: "19. Car travels 120km in 3h. Speed?",
    options: ["30km/h", "40km/h", "50km/h", "60km/h"],
    answer: "40km/h",
    explanation: "Speed = distance/time = 120/3 = 40km/h"
  },
  { question: "20. Area of circle, r=7cm (π=22/7)",
    options: ["22cm²", "44cm²", "77cm²", "154cm²"],
    answer: "154cm²",
    explanation: "Area=πr²=22/7×7×7=154cm²"
  }
];

// Display questions
const form = document.getElementById("quizForm");
quizData.forEach((q, index) => {
  const div = document.createElement("div");
  div.classList.add("question");
  div.innerHTML = `
    <h3>${q.question}</h3>
    <div class="options">
      ${q.options.map(opt => `
        <label>
          <input type="radio" name="q${index}" value="${opt}"> ${opt}
        </label>
      `).join('')}
    </div>
  `;
  form.appendChild(div);
});

// Submit function
function submitQuiz() {
  let score = 0;
  quizData.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const questionDiv = document.getElementsByClassName("question")[i];
    let feedback = "";
    if (selected) {
      if (selected.value === q.answer) {
        score++;
        feedback = `<p class="correct">✅ Correct!</p>`;
      } else {
        feedback = `<p class="wrong">❌ Wrong! Correct Answer: ${q.answer}</p>`;
      }
    } else {
      feedback = `<p class="wrong">❌ Not answered. Correct Answer: ${q.answer}</p>`;
    }
    const explanationDiv = document.createElement("div");
    explanationDiv.classList.add("explanation");
    explanationDiv.innerHTML = `${feedback}<p><b>Explanation:</b> ${q.explanation}</p>`;
    questionDiv.appendChild(explanationDiv);
  });

  document.getElementById("result").innerHTML =
    `You scored ${score} out of ${quizData.length} (${(score/quizData.length*100).toFixed(0)}%)`;
}

// Timer
let time = 20 * 60;
const timerDisplay = document.getElementById("timer");
const countdown = setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  time--;
  if (time < 0) {
    clearInterval(countdown);
    submitQuiz();
    alert("Time is up! Test submitted automatically.");
  }
}, 1000);
