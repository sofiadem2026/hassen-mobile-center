
// ==================================
// 1. MOBILE NAVIGATION MENU
// ==================================

const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");

if (menuToggle && primaryNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = primaryNav.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen
            ? "Close ✕"
            : "☰ Menu";

    });

}


// ==================================
// 2. WELCOME MESSAGE BUTTON
// ==================================

const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeButton && welcomeMessage) {

    welcomeButton.addEventListener("click", function () {

        welcomeMessage.textContent =
            "Welcome to Hassen Mobile Center! We are happy to serve you.";

    });

}
