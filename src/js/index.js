// Hammerburger Toggle
const nav = document.querySelector("nav");
const headerBtns = document.querySelector(".header__buttons");
document.querySelector(".hammerburger-toggle").addEventListener("click", () => {
    nav.classList.toggle("navbar-links");
    headerBtns.classList.toggle("header-btns");
})

// CAROUSEL 
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


//HOW IT WORKS
howItWorksDom();
function howItWorksDom() {
    function removeClasses(listName, className) {
        listName.forEach((item) => {
            item.classList.remove(className)
        })
    }
    function addClasses(listName, className) {
        listName.forEach((item) => {
            item.classList.add(className)
        })
    }
    const links = document.querySelectorAll(".how-it-works__protocols-list__item__container");
    const articles = document.querySelectorAll(".how-it-works__protocols-list__item__article");

    links.forEach((link) => {
        link.addEventListener("click", () => {
            removeClasses(links, "active");
            addClasses(articles, "hidden");
            link.classList.toggle("active");
            articles.forEach((article) => {
                if (article.id === link.dataset.id) {
                    article.classList.toggle("hidden");
                }
            })
        })
    })
}