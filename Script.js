// Function to show the overlay
function showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
}

// Function to close the overlay
function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

// Function to move the "No" button
function shiftButton() {
    const noBtn = document.getElementById("noBtn");
    const h2Element = document.querySelector("h2");

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const h2Bottom = h2Element.getBoundingClientRect().bottom;  // Get the bottom position of the h2
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // Ensure the button starts below the h2
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * (maxY - h2Bottom) + h2Bottom;  // Positioning it beneath h2

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("secondOverlay").style.display = "flex";  // Show second overlay
}

function closeSecondOverlay() {
    document.getElementById("secondOverlay").style.display = "none";  // Hide second overlay
}

function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        }).then(() => {
            console.log('Page shared successfully');
        }).catch((error) => {
            console.error('Error sharing the page:', error);
        });
    } else {
        alert('Web Share API is not supported in your browser.');
    }
}