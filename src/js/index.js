// Hammerburger Toggle
const nav = document.querySelector("nav");
const headerBtns = document.querySelector(".header__buttons");
document.querySelector(".hammerburger-toggle").addEventListener("click", () => {
    nav.classList.toggle("navbar-links");
    headerBtns.classList.toggle("header-btns");
})


const leftBtn = document.querySelector(".carousel__left");
const defaultBtn = document.querySelector(".carousel__default");
const rightBtn = document.querySelector(".carousel__right");

window.addEventListener("load", () => {

})

leftBtn.addEventListener("click", () => {
    console.log("left");
})
rightBtn.addEventListener("click", () => {
    console.log("right");
})
defaultBtn.addEventListener("click", () => {
    console.log("default");
})
