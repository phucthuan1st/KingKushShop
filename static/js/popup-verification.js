document.addEventListener("DOMContentLoaded", function() {
    // Check if the user has confirmed their age
    const hasConfirmedAge = sessionStorage.getItem("confirmedAge");

    // If not, show the age verification popup
    if (!hasConfirmedAge) {
        const ageVerificationPopup = document.getElementsByClassName("age-popup")[0];
        ageVerificationPopup.style.display = "block";
    } 
    else {
        ageVerificationPopup.style.display = "none";
    }
});

// Handle user action when they press "Yes"
document.getElementById("yesBtn").addEventListener("click", function() {
    // Set a flag in sessionStorage to indicate age confirmation
    sessionStorage.setItem("confirmedAge", "true");

    // Hide the age verification popup
    const ageVerificationPopup = document.getElementsByClassName("age-popup")[0];
    ageVerificationPopup.style.display = "none";
});
