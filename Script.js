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
    const pageUrl = encodeURIComponent(window.location.href);  // Get the current page URL
    const shareMessage = encodeURIComponent("Check out this hilarious page! 😄");

    const whatsappUrl = `https://wa.me/?text=${shareMessage}%20${pageUrl}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    const instagramUrl = `https://www.instagram.com`;  // Instagram doesn't allow direct sharing like this

    const shareOptions = window.open(
        `https://www.addthis.com/bookmark.php?v=250&winname=addthis&pub=ra-56cfa10e2e4f83c3&source=addthis&tt=0&ct=14&tools=1&url=${pageUrl}&title=${shareMessage}&back=1`,
        'Share',
        'height=600,width=600,scrollbars=yes'
    );

    if (shareOptions) {
        shareOptions.focus();
    }
}