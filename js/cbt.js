    // === Load subjects from localStorage ===
    const subjects = JSON.parse(localStorage.getItem("selectedSubjects")) || ["Use of English", "Mathematics", "Physics", "Chemistry", "Biology"];
    const subjectGrid = document.getElementById("subjectGrid");
    const questionText = document.getElementById("questionText");
    const optionsBox = document.getElementById("options");
    const numberGrid = document.getElementById("numberGrid");
    const resultBox = document.getElementById("resultBox");

    // === Timer ===
    let timeLeft = 2 * 60 * 60; // 2 hours
    const timerEl = document.getElementById("timer");
    const timer = setInterval(() => {
      const hrs = Math.floor(timeLeft / 3600);
      const mins = Math.floor((timeLeft % 3600) / 60);
      const secs = timeLeft % 60;
      timerEl.textContent = `Time Left: ${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        submitExam();
      }
    }, 1000);

    // === Real Questions (5 per subject for demo) ===
    const questionsData = {
      "Use of English": [
    {
        question: "1. Choose the word that is nearest in meaning to the underlined word:The teacher was elated by the students’ excellent performance.",
        options: ["Angry","Confused","Overjoyed","Worried"],
        answer: "Overjoyed",
        explanation: "“Elated” means very happy or joyful."
    },
    {
        question: "2. Choose the word that is opposite in meaning to the underlined word:His speech was concise.",
        options: ["Short","Detailed","Meaningful","Sharp"],
        answer: "Detailed",
        explanation: "Concise” means brief and to the point; its opposite is “detailed."
    },
    {
        question: "3. Fill in the blank:Neither John nor his friends ___ attending the meeting.",
        options: ["Is","Are","Was","Has"],
        answer: "Are",
        explanation: "With “neither...nor,” the verb agrees with the noun closest to it — “friends” → plural → “are.”"
    },
    {
        question: "4. Choose the correct word:The police ___ the thief last night.",
        options: ["Has arrested","Have arrested","Was arrested","Is arrested"],
        answer: "Have arrested",
        explanation: "“Police” is plural; hence “have arrested” is correct."
    },
    {
        question: "5. Choose the correct preposition:She is interested ___ music.",
        options: ["At","On","In","For"],
        answer: "In",
        explanation: "The correct phrase is “interested in.”"
    },
    {
        question: "6. Choose the correct option:He drives very fast, ___?",
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
        question: "8. Choose the correct expression:I look forward to ___ you again.",
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
        question: "10. Choose the correct option:If I ___ you, I would apologize.",
        options: ["Was","Am","Were","Be"],
        answer: "Were",
        explanation: "Subjunctive mood uses “were” after “if I.”"
    },
    {
      question: "11. Choose the option that best completes the sentence:He prefers tea ___ coffee.",
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
      question: "15. Choose the correct option:One of the boys ___ done his homework.",
      options: ["Have","Has","Are","Were"],
      answer: "Has",
      explanation: "The subject “one” is singular, so “has” is correct."
    },
    {
      question: "16. Choose the correct interpretation:To “let the cat out of the bag” means to:",
      options: ["Free a cat","Reveal a secret","Be careless","Tell a lie"],
      answer: "Reveal a secret",
      explanation: "It’s an idiom meaning to disclose something secret."
    },
    {
      question: "17. Choose the correct option:The synonym of “courageous” is:",
      options: ["Fearless","Careless","Reckless","Cowardly"],
      answer: "Fearless",
      explanation: "“Courageous” means brave or fearless."
    },
    {
      question: "18. Choose the correct option:The antonym of “expand” is:",
      options: ["Enlarge","Extend","Contract","Increse"],
      answer: "Contract",
      explanation: "“Contract” means to become smaller — opposite of “expand.”"
    },
    {
      question: "19. Choose the correct option:A group of lions is called a ___.",
      options: ["Herd","Pack","Pride","Troop"],
      answer: "Pride",
      explanation: "“Pride” is the collective noun for lions."
    },
    {
      question: "20. Choose the word that fits the sentence:The man was punished for his ___ in class.",
      options: ["Dilligence","Mischief","Handwork","Kindness"],
      answer: "Mischief",
      explanation: "“Mischief” means bad or playful behavior — suits the sentence."
    },
      ],
      "Mathematics": [
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
      ],
      "Chemistry": [
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
      ],
      "Biology": [
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
      ],
      "Physics": [
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
      ]
    };

    // === Initialize state ===
    let currentSubject = subjects[0];
    let currentQuestion = 0;

    // === Render Subject Buttons ===
    function renderSubjects() {
      subjectGrid.innerHTML = "";
      subjects.forEach(sub => {
        const btn = document.createElement("button");
        btn.textContent = sub;
        btn.className = "subject-btn";
        if (sub === currentSubject) btn.classList.add("active");
        btn.addEventListener("click", () => {
          currentSubject = sub;
          currentQuestion = 0;
          renderSubjects();
          renderQuestions();
        });
        subjectGrid.appendChild(btn);
      });
    }

    // === Render Questions ===
    function renderQuestions() {
      const qData = questionsData[currentSubject];
      const q = qData[currentQuestion];
      questionText.textContent = q.question;
      optionsBox.innerHTML = "";
      q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "option";
        if (q.answer === i) div.classList.add("selected");
        div.textContent = opt;
        div.addEventListener("click", () => {
          q.answer = i;
          renderQuestions();
          document.querySelector(`.num-btn[data-index='${currentQuestion}']`).classList.add("answered");
        });
        optionsBox.appendChild(div);
      });

      numberGrid.innerHTML = "";
      qData.forEach((_, i) => {
        const n = document.createElement("div");
        n.className = "num-btn";
        n.textContent = i + 1;
        n.dataset.index = i;
        if (i === currentQuestion) n.classList.add("active");
        if (qData[i].answer !== undefined && qData[i].answer !== null) n.classList.add("answered");
        n.addEventListener("click", () => {
          currentQuestion = i;
          renderQuestions();
        });
        numberGrid.appendChild(n);
      });
    }

    document.getElementById("nextBtn").onclick = () => {
      const total = questionsData[currentSubject].length;
      if (currentQuestion < total - 1) {
        currentQuestion++;
        renderQuestions();
      }
    };

    document.getElementById("prevBtn").onclick = () => {
      if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestions();
      }
    };

    document.getElementById("submitBtn").onclick = () => submitExam();

    // === Submit Exam and Show Result ===
    function submitExam() {
      clearInterval(timer);
      let total = 0, correct = 0;
      let reviewHTML = "";

      for (let sub in questionsData) {
        reviewHTML += `<h3 style="color:#003366;">${sub}</h3>`;
        questionsData[sub].forEach((q, i) => {
          total++;
          const isCorrect = q.answer === q.correct;
          if (isCorrect) correct++;

          reviewHTML += `
            <div style="border:1px solid #ccc;border-radius:8px;padding:10px;margin:10px 0;background:${isCorrect ? '#e6ffe6' : '#ffe6e6'};">
              <p><b>Q${i+1}:</b> ${q.question}</p>
              <p><b>Your Answer:</b> ${q.answer != null ? q.options[q.answer] : "No answer selected"}</p>
              <p><b>Correct Answer:</b> ${q.options[q.correct]}</p>
              <p style="font-style:italic;"><b>Explanation:</b> ${q.explanation}</p>
            </div>
          `;
        });
      }

      const score = Math.round((correct / total) * 100);
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <h2>Exam Submitted!</h2>
        <p><strong>Total Questions:</strong> ${total}</p>
        <p><strong>Correct:</strong> ${correct}</p>
        <h3>Score: ${score}%</h3>
        <h3>Review:</h3>${reviewHTML}
      `;
      alert("Exam submitted! Scroll down for explanations.");
    }

    // === Initialize Page ===
    renderSubjects();
    renderQuestions();
