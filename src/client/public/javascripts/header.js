// Hammerburger Toggle
const nav = document.querySelector("nav");
const headerBtns = document.querySelector(".header__buttons");
document.querySelector(".hammerburger-toggle").addEventListener("click", () => {
    nav.classList.toggle("navbar-links");
    headerBtns.classList.toggle("header-btns");
})