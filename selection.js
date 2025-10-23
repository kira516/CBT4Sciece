const subjectsList = [
      "Use of English",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
    ];

    const subjectsContainer = document.getElementById("subjects");

    // Automatically include Use of English
    let selected = ["Use of English"];

    subjectsList.forEach(subj => {
      const div = document.createElement("div");
      div.textContent = subj;
      div.classList.add("subject");
      div.dataset.name = subj;

      if (subj === "Use of English") {
        div.classList.add("active", "fixed");
      }

      div.addEventListener("click", () => {
        if (div.classList.contains("fixed")) return;

        if (selected.includes(subj)) {
          selected = selected.filter(s => s !== subj);
          div.classList.remove("active");
        } else if (selected.length < 4) {
          selected.push(subj);
          div.classList.add("active");
        } else {
          alert("You can only choose 4 subjects (including Use of English).");
        }
      });

      subjectsContainer.appendChild(div);
    });

    document.getElementById("continue").addEventListener("click", () => {
      if (selected.length < 4) {
        alert("Please select 3 more subjects before proceeding.");
        return;
      }
      localStorage.setItem("selectedSubjects", JSON.stringify(selected));
      alert("Subjects saved successfully!");
      window.location.href = "cbt.html";
    });
    