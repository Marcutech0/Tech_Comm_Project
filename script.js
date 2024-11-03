// Select elements
const playVideoButton = document.getElementById("playVideoButton");
const videoModal = document.getElementById("videoModal");
const closeModalButton = document.querySelector(".close");
const videoElement = videoModal.querySelector("video");

// Open video modal
playVideoButton.onclick = function() {
    videoModal.style.display = "flex";
    videoModal.classList.add("fade-in");
    videoElement.play(); // Play video
};

// Close video modal
closeModalButton.onclick = function() {
    videoModal.classList.remove("fade-in");
    videoModal.classList.add("fade-out");
    
    setTimeout(() => {
        videoModal.style.display = "none";
        videoModal.classList.remove("fade-out");
        videoElement.pause();
        videoElement.currentTime = 0; // Reset video
    }, 300); // Duration matches CSS animation
};

// Close modal on outside click
window.onclick = function(event) {
    if (event.target == videoModal) {
        closeModalButton.onclick();
    }
};
