// Capture the form and resume elements from the DOM
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const displayName = document.getElementById("displayName") as HTMLParagraphElement;
const displayEmail = document.getElementById("displayEmail") as HTMLParagraphElement;
const displayEducation = document.getElementById("displayEducation") as HTMLParagraphElement;
const displayWorkExperience = document.getElementById("displayWorkExperience") as HTMLParagraphElement;
const displaySkills = document.getElementById("displaySkills") as HTMLParagraphElement;

// Add an event listener to handle form submission
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    
    // Get the values from the form inputs
    const nameInput = (document.getElementById("name") as HTMLInputElement).value;
    const emailInput = (document.getElementById("email") as HTMLInputElement).value;
    const educationInput = (document.getElementById("education") as HTMLTextAreaElement).value;
    const workExperienceInput = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
    const skillsInput = (document.getElementById("skills") as HTMLInputElement).value;
    
    // Update the resume section with the user's input
    displayName.textContent = "Name: " + nameInput;
    displayEmail.textContent = "Email: " + emailInput;
    displayEducation.textContent = educationInput;
    displayWorkExperience.textContent = workExperienceInput;
    displaySkills.textContent = skillsInput;
});
