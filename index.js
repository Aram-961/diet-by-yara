const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// Toggle the nav on click
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach((link, index) => {
        link.classList.toggle("fade");
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            links.forEach((link) => {
                link.classList.remove("fade");
            });
            hamburger.classList.remove("toggle");
        });
    });
    hamburger.classList.toggle("toggle");
});
