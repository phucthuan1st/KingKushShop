document.addEventListener("DOMContentLoaded", function() {
    // Check if the user has confirmed their age
    const hasConfirmedAge = localStorage.getItem("confirmedAge");

    // If not, show the age verification popup
    if (!hasConfirmedAge) {
        const ageVerificationPopup = document.getElementsByClassName("age-popup")[0];
        ageVerificationPopup.style.display = "block";
    }
});

// Handle user action when they press "Yes"
document.getElementById("yesBtn").addEventListener("click", function() {
    // Set a flag in local storage to indicate age confirmation
    localStorage.setItem("confirmedAge", "true");

    // Hide the age verification popup
    const ageVerificationPopup = document.getElementsByClassName("age-popup")[0];
    ageVerificationPopup.style.display = "none";
});
