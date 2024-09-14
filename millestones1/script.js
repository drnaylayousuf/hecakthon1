document.addEventListener("DOMContentLoaded", function () {
    var toggleSkillsButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills");
    // Initially hide the Skills section
    skillsSection.style.display = "none";
    toggleSkillsButton.addEventListener("click", function () {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
            toggleSkillsButton.textContent = "Hide Skills";
        }
        else {
            skillsSection.style.display = "none";
            toggleSkillsButton.textContent = "Show Skills";
        }
    });
});
