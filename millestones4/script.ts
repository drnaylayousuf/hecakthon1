// Capture the form and resume display elements from the DOM
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const displayName = document.getElementById("displayName") as HTMLParagraphElement;
const displayEmail = document.getElementById("displayEmail") as HTMLParagraphElement;
const displayEducation = document.getElementById("displayEducation") as HTMLParagraphElement;
const displayWorkExperience = document.getElementById("displayWorkExperience") as HTMLParagraphElement;
const displaySkills = document.getElementById("displaySkills") as HTMLParagraphElement;

// Function to make each section of the resume editable
function makeEditable(element: HTMLElement) {
    element.addEventListener("click", () => {
        // Store the original text in case the user wants to edit
        const originalText = element.textContent || "";
        
        // Create an input field to replace the text for editing
        const input = document.createElement("input");
        input.type = "text";
        input.value = originalText;

        // Replace the current text with the input field
        element.textContent = '';
        element.appendChild(input);
        input.focus(); // Automatically focus on the input

        // When user clicks away (or presses Enter), save the changes
        input.addEventListener("blur", () => {
            element.textContent = input.value; // Update with new value
        });
    });
}

// Add an event listener to handle form submission
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page from reloading

    // Get values from the form inputs
    const nameInput = (document.getElementById("name") as HTMLInputElement).value;
    const emailInput = (document.getElementById("email") as HTMLInputElement).value;
    const educationInput = (document.getElementById("education") as HTMLTextAreaElement).value;
    const workExperienceInput = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
    const skillsInput = (document.getElementById("skills") as HTMLInputElement).value;

    // Update the resume display section with the user input
    displayName.textContent = "Name: " + nameInput;
    displayEmail.textContent = "Email: " + emailInput;
    displayEducation.textContent = educationInput;
    displayWorkExperience.textContent = workExperienceInput;
    displaySkills.textContent = skillsInput;

    // Make the resume sections editable
    makeEditable(displayName);
    makeEditable(displayEmail);
    makeEditable(displayEducation);
    makeEditable(displayWorkExperience);
    makeEditable(displaySkills);
});
