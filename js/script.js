// Function to show the popup
function showPopup() {
  document.getElementById("popup").classList.add("show");
  document.getElementById("popupOverlay").classList.add("show");
}

// Function to hide the popup
function hidePopup() {
  document.getElementById("popup").classList.remove("show");
  document.getElementById("popupOverlay").classList.remove("show");
}

// Function to close popup if user clicks outside the popup content
function outsideClick(event) {
  const overlay = document.getElementById("popupOverlay");
  if (event.target === overlay) {
    hidePopup();
  }
}

// Event listeners
document.getElementById("openPopupBtn").addEventListener("click", showPopup);
document.getElementById("closePopupBtn").addEventListener("click", hidePopup);
window.addEventListener("click", outsideClick);
