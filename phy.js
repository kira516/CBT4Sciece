const quizData =[
    {
        question: "1. The S.I. unit of power is:",
        options: ["Joules","Watt","Newton","Ampere"],
        answer: "Watt",
        explanation: "Power = work done per unit time. Its unit is Joule/second = Watt."
    },
    {
        question: "2. The instrument used to measure electric current is the:",
        options: ["Voltmeter","Ammeter","Galvanometer","Rheostat"],
        answer: "Ammeter",
        explanation: "An ammeter is connected in series to measure current in amperes."
    },
    {
        question: "3. Which of the following is a vector quantity?",
        options: ["Speed","Distance","Velocity","Energy"],
        answer: "Velocity",
        explanation: "Velocity has both magnitude and direction, making it a vector."
    },
    {
        question: "4. When a body is thrown vertically upwards, its velocity at the highest point is:",
        options: ["Zero","Constant","Maximum","Infinite"],
        answer: "Zero",
        explanation: "At the topmost point, motion momentarily stops before descending — velocity = 0."
    },
    {
        question: "5. The energy possessed by a moving body is known as:",
        options: ["Potential energy","Kinetic energy","Mechanical energy","Chemical energy"],
        answer: "Kinetic energy",
        explanation: "Kinetic energy = ½mv², energy due to motion."
    },
    {
        question: "6. The rate of doing work is called:",
        options: ["Energy","Force","Power","Pressure"],
        answer: "Power",
        explanation: "Power = Work / Time, measuring how quickly work is done."
    },
    {
        question: "7. Which of the following materials is a good conductor of electricity?",
        options: ["Plastic","Rubber","Copper","Glass"],
        answer: "Copper",
        explanation: "Metals like copper have free electrons that conduct electricity."
    },
    {
        question: "8. The instrument used to measure temperature is the:",
        options: ["Thermometer","Barometer","Hygrometer","Voltmeter"],
        answer: "Thermometer",
        explanation: "A thermometer measures temperature in °C or K."
    },
    {
        question: "9. Which of these is not a renewable energy source?",
        options: ["Solar energy","Wind energy","Coal","Hydro power"],
        answer: "Coal",
        explanation: "Coal is a non-renewable fossil fuel."
    },
    {
        question: "10. The property of a body that resists a change in its state of motion is called:",
        options: ["Force","Friction","Inertia","Momentum"],
        answer: "Inertia",
        explanation: "Inertia is the tendency of a body to resist acceleration."
    },
    {
      question: "11. What happens to the frequency of a sound when its pitch increases?",
      options: ["It decreases","It increases","It remains constant","It becomes zero"],
      answer: "It increases",
      explanation: "Higher pitch corresponds to higher frequency of vibration."
    },
    {
      question: "12. The S.I. unit of charge is:",
      options: ["Coulomb","Volt","Ampere","Ohm"],
      answer: "Coulomb",
      explanation: "Charge (Q) = Current × Time, measured in coulombs (C)."
    },
    {
      question: "13. Which of the following devices converts electrical energy to mechanical energy?",
      options: ["Generator","Electric motor","Transformer","Battery"],
      answer: "Electric motor",
      explanation: "An electric motor uses current to produce motion."
    },
    {
      question: "14. Ohm’s law states that:",
      options: ["V=IR","P=IV","E = mc²","F=ma"],
      answer: "V=IR",
      explanation: "According to Ohm’s law, voltage (V) is directly proportional to current (I) at constant resistance (R)."
    },
    {
      question: "15. The force that opposes motion between two surfaces in contact is called:",
      options: ["Tension","Friction","Inertia","Centipetal force"],
      answer: "Friction",
      explanation: "Friction resists relative motion of two contacting surfaces."
    },
    {
      question: "16. The acceleration due to gravity on the Earth’s surface is approximately:",
      options: ["1.0 m/s²","4.9 m/s²","9.8 m/s²","15.0 m/s²"],
      answer: "9.8 m/s²",
      explanation: "Standard gravitational acceleration, g ≈ 9.8 m/s²."
    },
    {
      question: "17. The process of charging a body without direct contact is known as:",
      options: ["Conduction","Induction","Friction","Polarization"],
      answer: "Induction",
      explanation: "Explanation: Induction involves charge separation without touching."
    },
    {
      question: "18. The image formed by a plane mirror is:",
      options: ["Real and inverted","Real and upright","Virtual and inverted","Virtual and upright"],
      answer: "Virtual and upright",
      explanation: "Plane mirrors always produce virtual, upright, same-size images."
    },
    {
      question: "19. Which color of light has the highest frequency?",
      options: ["Red","Yellow","Blue","Violet"],
      answer: "Violet",
      explanation: "Violet light has the shortest wavelength and highest frequency."
    },
    {
      question: "20. The device used to convert AC to DC current is called a:",
      options: ["Transformer","Rectifier","Inductor","Rheostat"],
      answer: "Rectifier",
      explanation: "A rectifier converts alternating current (AC) into direct current (DC)."
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