const quizData =[
    {
        question: "1. Which of the following gases turns moist red litmus paper blue?",
        options: ["Carbon dioxide","Ammonia","Sulphur dioxide","Hydrogen chloride"],
        answer: "Ammonia",
        explanation: "Ammonia is a basic gas that dissolves in water to form ammonium hydroxide, turning red litmus paper blue."
    },
    {
        question: "2. Which of these elements is a noble gas?",
        options: ["Nitrogen","Oxygen","Neon","Hydrogen"],
        answer: "Neon",
        explanation: "Noble gases like Neon have complete outer electron shells, making them chemically inert."
    },
    {
        question: "3. The process used to separate a mixture of salt and sand is:",
        options: ["Filtration and evaporation","Distillation","Crystallization","Sublimation"],
        answer: "Filtration and evaporation",
        explanation: "Sand is insoluble and removed by filtration; salt is recovered by evaporating the water."
    },
    {
        question: "4. The number of protons in an atom is equal to its:",
        options: ["Atomic mass","Atomic number","Mass number","Isotopic mass"],
        answer: "Atomic number",
        explanation: "The atomic number defines the number of protons in the nucleus of an atom."
    },
    {
        question: "5. Which of the following is an endothermic reaction?",
        options: ["Neutralization","Respiration","Photosynthesis","Combustion"],
        answer: "Photosynthesis",
        explanation: "Photosynthesis absorbs energy (light) from the sun, making it endothermic."
    },
    {
        question: "6. Which of these is not a mixture?",
        options: ["Air","Milk","Sugar","Brass"],
        answer: "Sugar",
        explanation: "Sugar (sucrose) is a pure compound, not a mixture."
    },
    {
        question: "7. The pH of a neutral solution is:",
        options: ["1","7","9","14"],
        answer: "7",
        explanation: "Neutral solutions like pure water"
    },
    {
        question: "8. Which of the following oxides is acidic?",
        options: ["CO₂","Na₂O","MgO","CaO"],
        answer: "CO₂",
        explanation: "Non-metal oxides like CO₂ dissolve in water to form acids (e.g., H₂CO₃)."
    },
    {
        question: "9. Which of these substances sublimes on heating?",
        options: ["Sodium chloride","Iodine","Water","Ethanol"],
        answer: "Iodine",
        explanation: "Iodine changes directly from solid to vapor without becoming liquid — sublimation."
    },
    {
        question: "10. The instrument used to measure atmospheric pressure is:",
        options: ["Thermometer","Barometer","Hygrometer","Manometer"],
        answer: "Barometer",
        explanation: "A barometer measures atmospheric pressure."
    },
    {
      question: "11. The main constituent of natural gas is:",
      options: ["Ethane","Methane","Propane","Butane"],
      answer: "Methane",
      explanation: "Methane (CH₄) makes up about 85–90% of natural gas."
    },
    {
      question: "12. What is the oxidation state of sulfur in H₂SO₄?",
      options: ["+2","+4","+6","0"],
      answer: "+6",
      explanation: "Let x be the oxidation state of S. 2(+1)+𝑥+4(−2)=0→x=+6."
    },
    {
      question: "13. The atomic number of an element represents the number of:",
      options: ["Neutrons","Electrons","Protons","Neucleons"],
      answer: "Electron and Protons",
      explanation: "In a neutral atom, atomic number equals both the number of protons and electrons."
    },
    {
      question: "14. Which of the following substances conducts electricity in aqueous solution?",
      options: ["Sugar","Alcohol","Sodium chloride","Urea"],
      answer: "Sodium chloride",
      explanation: "NaCl ionizes in water to form ions that conduct electricity."
    },
    {
      question: "15. The element that forms a greenish-yellow gas and is used for water purification is:",
      options: ["Fluorine","Chlorine","Bromine","Iodine"],
      answer: "Chlorine",
      explanation: "Chlorine gas (Cl₂) is used to disinfect and purify water."
    },
    {
      question: "16. Which of the following is not an alkali?",
      options: ["NaOH","KOH","NH₄OH","CaCO₃"],
      answer: "CaCO₃",
      explanation: "Explanation: Calcium carbonate is a salt, not a soluble base (alkali)."
    },
    {
      question: "17. The process by which an atom loses or gains electrons is called:",
      options: ["Ionization","Oxidation","Reduction","Neutralization"],
      answer: "Ionization",
      explanation: "Ionization leads to the formation of positive or negative ions."
    },
    {
      question: "18. The gas produced when zinc reacts with dilute hydrochloric acid is:",
      options: ["Oxygen","Carbon dioxide","Hydrogen","Chlorine"],
      answer: "Hydrogen",
      explanation: "Zn + 2HCl → ZnCl₂ + H₂↑"
    },
    {
      question: "19. The most abundant gas in the atmosphere is:",
      options: ["Oxygen","Nitrogen","Carbon dioxide","Argon"],
      answer: "Nitrogen",
      explanation: "Nitrogen makes up about 78% of the Earth’s atmosphere."
    },
    {
      question: "20. Which of the following is used as an indicator in acid-base titration?",
      options: ["Sodium chloride","Phenolphthalein","Ethanol","Ammonium hydroxide"],
      answer: "Phenolphthalein",
      explanation: "Phenolphthalein changes color at the endpoint of acid-base titrations."
    },
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