function navigateTo(page) {
    window.location.href = page;
}

// Add your existing JavaScript logic (login, register, etc.) here
// Existing functions (navigateTo, login, register, etc.)

// Add a scroll event listener
window.addEventListener('scroll', function () {
    // Get the "About Us" section
    const aboutUsSection = document.getElementById('about-us');

    // Check if the user has scrolled to the "About Us" section
    if (isElementInViewport(aboutUsSection)) {
        // Update the navigation link or perform any other actions
        console.log("Scrolled to About Us Section");
    }
});

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Add this script at the end of your 'script.js' file
// document.addEventListener('DOMContentLoaded', function () {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     menuToggle.addEventListener('click', function () {
//         navLinks.classList.toggle('show');
//     });
// });

// // JavaScript function to toggle the menu links
// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('show');
// }




document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});


const fullscreenButton = document.getElementById('fullscreen-button');


const modelViewer = document.getElementById('model-viewer');


fullscreenButton.addEventListener('click', () => {
    
    if (modelViewer.canEnterFullscreen) {
        
        if (!modelViewer.isFullscreen) {
            modelViewer.enterFullscreen();
        } else {
            modelViewer.exitFullscreen();
        }
    } else {
        
        console.log("Full screen mode is not supported on this device.");
    }
});
