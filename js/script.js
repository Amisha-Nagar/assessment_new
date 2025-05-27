//Function to show the popup
function showPopup () {
    document.getElementById("popup").classList.add("show");
    document.getElementById("popupOverlay").classList.add("show");
}

//Function to hide the popup
function hidePopup () {
    document.getElementById("popup").classList.remove("show");
    document.getElementById("popupOverlay").classList.remove("show");
}

//Event listeners
document.getElementById("openPopupBtn").addEventListener("click", showPopup);
document.getElementById("closePopupBtn").addEventListener("click", hidePopup);
document.getElementById("popupOverlay").addEventListener("click", hidePopup);