const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = [...document.querySelectorAll(".nav-links a")];
const sections = navItems
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

window.addEventListener("scroll", () => {
    const currentSection = sections.findLast((section) => {
        return window.scrollY >= section.offsetTop - 140;
    });

    navItems.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentSection?.id}`);
    });
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    alert("Thanks for reaching out. I will get back to you soon.");
});
