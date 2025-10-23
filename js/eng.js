const quizData =[
    {
        question: "1. Choose the word that is nearest in meaning to the underlined word:<br>The teacher was elated by the students’ excellent performance.",
        options: ["Angry","Confused","Overjoyed","Worried"],
        answer: "Overjoyed",
        explanation: "“Elated” means very happy or joyful."
    },
    {
        question: "2. Choose the word that is opposite in meaning to the underlined word:<br>His speech was concise.",
        options: ["Short","Detailed","Meaningful","Sharp"],
        answer: "Detailed",
        explanation: "Concise” means brief and to the point; its opposite is “detailed."
    },
    {
        question: "3. Fill in the blank:<br>Neither John nor his friends ___ attending the meeting.",
        options: ["Is","Are","Was","Has"],
        answer: "Are",
        explanation: "With “neither...nor,” the verb agrees with the noun closest to it — “friends” → plural → “are.”"
    },
    {
        question: "4. Choose the correct word:<br>The police ___ the thief last night.",
        options: ["Has arrested","Have arrested","Was arrested","Is arrested"],
        answer: "Have arrested",
        explanation: "“Police” is plural; hence “have arrested” is correct."
    },
    {
        question: "5. Choose the correct preposition:<br>She is interested ___ music.",
        options: ["At","On","In","For"],
        answer: "In",
        explanation: "The correct phrase is “interested in.”"
    },
    {
        question: "6. Choose the correct option:<br>He drives very fast, ___?",
        options: ["Doesn’t he","Isn't he","Didn't he","Won't he"],
        answer: "Doesn’t he",
        explanation: "Question tag for “drives” (simple present) → “doesn’t he.”"
    },
    {
        question: "7. Choose the correctly punctuated sentence:",
        options: ["“Please,” he said “come in.”","“Please,” he said, “come in.”","“Please” he said “come in.”","“Please he said come in.”"],
        answer: "“Please,” he said, “come in.”",
        explanation: "The correct punctuation uses commas after “said” and after “Please.”"
    },
    {
        question: "8. Choose the correct expression:<br>I look forward to ___ you again.",
        options: ["See","Seeing","To see","Be seeing"],
        answer: "Seeing",
        explanation: "“Look forward to” is followed by a gerund (verb + ing)."
    },
    {
        question: "9. Choose the correctly spelt word:",
        options: ["Commitee","Committee","Commitee","Commite"],
        answer: "Committee",
        explanation: "The correct spelling has double m and double t — “Committee.”"
    },
    {
        question: "10. Choose the correct option:<br>If I ___ you, I would apologize.",
        options: ["Was","Am","Were","Be"],
        answer: "Were",
        explanation: "Subjunctive mood uses “were” after “if I.”"
    },
    {
      question: "11. Choose the option that best completes the sentence:<br>He prefers tea ___ coffee.",
      options: ["Than","To","Over","From"],
      answer: "To",
      explanation: "The correct expression is “prefer A to B.”"
    },
    {
      question: "12. The doctor advised that he ___ more rest.",
      options: ["Takes","Take","Took","Taken"],
      answer: "Take",
      explanation: "After “advised that,” the subjunctive form is used — “take.”"
    },
    {
      question: "13. By the time we arrived, the film ___.",
      options: ["Has started","Started","Had started","Was starting"],
      answer: "Had started",
      explanation: "Past perfect “had started” shows an earlier past action."
    },
    {
      question: "14. Choose the correct option:",
      options: ["Immoral","Amoral","Moral","Immortal"],
      answer: "Moral",
      explanation: "“Moral conduct” means good behavior."
    },
    {
      question: "15. Choose the correct option:<br>One of the boys ___ done his homework.",
      options: ["Have","Has","Are","Were"],
      answer: "Has",
      explanation: "The subject “one” is singular, so “has” is correct."
    },
    {
      question: "16. Choose the correct interpretation:<br>To “let the cat out of the bag” means to:",
      options: ["Free a cat","Reveal a secret","Be careless","Tell a lie"],
      answer: "Reveal a secret",
      explanation: "It’s an idiom meaning to disclose something secret."
    },
    {
      question: "17. Choose the correct option:<br>The synonym of “courageous” is:",
      options: ["Fearless","Careless","Reckless","Cowardly"],
      answer: "Fearless",
      explanation: "“Courageous” means brave or fearless."
    },
    {
      question: "18. Choose the correct option:<br>The antonym of “expand” is:",
      options: ["Enlarge","Extend","Contract","Increse"],
      answer: "Contract",
      explanation: "“Contract” means to become smaller — opposite of “expand.”"
    },
    {
      question: "19. Choose the correct option:<br>A group of lions is called a ___.",
      options: ["Herd","Pack","Pride","Troop"],
      answer: "Pride",
      explanation: "“Pride” is the collective noun for lions."
    },
    {
      question: "20. Choose the word that fits the sentence:<br>The man was punished for his ___ in class.",
      options: ["Dilligence","Mischief","Handwork","Kindness"],
      answer: "Mischief",
      explanation: "“Mischief” means bad or playful behavior — suits the sentence."
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
