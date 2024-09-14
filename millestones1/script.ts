document.addEventListener("DOMContentLoaded", () => {

    const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    
    const skillsSection = document.getElementById("skills") as HTMLDivElement;

    // Initially hide the Skills section

    skillsSection.style.display = "none";

    toggleSkillsButton.addEventListener("click", () => {

        if (skillsSection.style.display === "none") {

            skillsSection.style.display = "block";

            toggleSkillsButton.textContent = "Hide Skills";

        } else {
            skillsSection.style.display = "none";

            toggleSkillsButton.textContent = "Show Skills";

        }
    });
});
