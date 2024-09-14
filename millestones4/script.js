// Capture the form and resume elements from the DOM
var resumeForm = document.getElementById("resumeForm");
var displayName = document.getElementById("displayName");
var displayEmail = document.getElementById("displayEmail");
var displayEducation = document.getElementById("displayEducation");
var displayWorkExperience = document.getElementById("displayWorkExperience");
var displaySkills = document.getElementById("displaySkills");
// Add an event listener to handle form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    // Get the values from the form inputs
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var educationInput = document.getElementById("education").value;
    var workExperienceInput = document.getElementById("workExperience").value;
    var skillsInput = document.getElementById("skills").value;
    // Update the resume section with the user's input
    displayName.textContent = "Name: " + nameInput;
    displayEmail.textContent = "Email: " + emailInput;
    displayEducation.textContent = educationInput;
    displayWorkExperience.textContent = workExperienceInput;
    displaySkills.textContent = skillsInput;
});
