const quizData = [
    { 
         question: "1. The movement of molecules from a region of higher concentration to a lower concentration is called",
        options: ["Osmosis", "Diffusion", "Active transport", "Endocytosis"], 
        answer: "Diffusion",
        explanation: "Diffusion is the passive movement of particles down their concentration gradient, without energy input."
    },
    {
        question: "2. The structural and functional unit of the kidney is the:",
        options: ["Neuron", "Nephron", "Alveolus","Glomerulus"],
        answer: "Nephron",
        explanation: "The nephron is responsible for filtering blood and forming urine in the kidney."
    },
    {
        question: "3. Which of the following organisms has the simplest level of organization?",
        options: ["Hydra","Amoeba","Earthworm","Man"],
        answer: "Amoeba",
        explanation: "Amoeba is a unicellular organism; its single cell performs all life functions."
    },
    {
        question: "4. Which of these parts of a plant is mainly responsible for photosynthesis?",
        options: ["Root","Stem","Leaf","Flower"],
        answer: "Leaf",
        explanation: "Leaves contain chlorophyll in chloroplasts, which capture light energy for photosynthesis."
    },
    {
        question: "5. Which blood vessel carries blood away from the heart?",
        options: ["Vein","Artery","Capillary","Venule"],
        answer: "Artery",
        explanation: "Arteries transport blood from the heart to body tissues." 
    },
    {
        question: "6. Which of the following is a vector of malaria?",
        options: ["Tsetse fly","Anopheles mosquito","Housefly","Cockroach"],
        answer: "Anopheles mosquito",
        explanation: "Female Anopheles mosquitoes transmit Plasmodium parasites that cause malaria."
    },
    {
        question: "7. The organ of balance in humans is located in the:",
        options: ["Ear","Eye","Nose","Brain"],
        answer: "Ear",
        explanation: "The semicircular canals in the inner ear maintain balance and posture."
    },
    {
        question: "8. The following are plant hormones except:",
        options: ["Auxin","Gibberellin","Adrenaline","Cytokinin"],
        answer: "Adrenaline",
        explanation: "Adrenaline is an animal hormone; the others are plant growth hormones."
    },
    {
        question: "9. The mode of nutrition in fungi is:",
        options: ["Autotrophic","Heterotrophic","Parasitic","Saprophytic"],
        answer: "Saprophytic",
        explanation: "Most fungi feed on dead organic matter by secreting enzymes — a saprophytic mode of nutrition."
    },
    {
        question: "10. Which of the following organisms is not an arthropod?",
        options: ["Spider","Crab","Snail","Millipede"],
        answer: "Snail",
        explanation: "Snails belong to the phylum Mollusca, not Arthropoda."
    },
    {
      question: "11. The cell wall of a plant cell is made up of:",
      options: ["Starch","Glucose","Cellulose","Protein"],
      answer: "Cellulose",
      explanation: "The plant cell wall consists mainly of cellulose, which provides strength and rigidity."
    },
    {
      question: "12. Which organ in humans produces insulin?",
      options: ["Liver","Kidney","Pancreas","Spleen"],
      answer: "Pancreas",
      explanation: "The pancreas secretes insulin, which regulates blood sugar levels."
    },
    {
      question: "13. The process by which living organisms take in oxygen and release carbon dioxide is:",
      options: ["Photosynthesis","Combustion","Respiration","Transpiration"],
      answer: "Respiration",
      explanation: "Respiration breaks down food to release energy, producing carbon dioxide and water."
    },
    {
      question: "14. The transfer of pollen grains from the anther to the stigma is called:",
      options: ["Fertelization","Pollination","Germinization","Meiosis"],
      answer: "Pollination",
      explanation: "Pollination is the process by which pollen grains are transferred to the stigma for fertilization."
    },
    {
      question: "15. Which of the following is a characteristic of all living things?",
      options: ["Crystallization","Movement","Decay","Photosynthesis"],
      answer: "Movement",
      explanation: "All living things can move — either the whole organism or parts of it — in response to stimuli."
    },
    {
      question: "16. The respiratory organ in fish is the:",
      options: ["Lungs","Grills","Trachea","Skin"],
      answer: "Grills",
      explanation: "Fish use gills to extract oxygen dissolved in water."
    },
    {
      question: "17. In which part of the human digestive system does most digestion occur?",
      options: ["Stomach","Mouth","Small intestine","Large intestine"],
      answer: "Small intestine",
      explanation: "Most digestion and nutrient absorption occur in the small intestine."
    },
    {
      question: "18. The part of the brain that controls voluntary movement is the:",
      options: ["Cerebellum","Cerebrum","Medulla oblongata","Pituitary gland"],
      answer: "Cerebrum",
      explanation: "The cerebrum controls voluntary actions, memory, and reasoning."
    },
    {
      question: "19. Which of these is a sexually transmitted infection (STI)?",
      options: ["Tuberculosis","Measles","Syphilis","Cholera"],
      answer: "Syphilis",
      explanation: "Syphilis is an STI caused by the bacterium Treponema pallidum."
    },
    {
      question: "20. Which of the following processes removes waste products from the body?",
      options: ["Ingestion","Assimilation","Excretion","Absorption"],
      answer: "Excretion",
      explanation: "Excretion eliminates metabolic waste products, such as urea, from the body."
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
