const toggleItems = document.querySelectorAll(".toggle-list__item")
toggleItems.forEach((item) => {
    const btn = item.querySelector(".toggle-list__item__container__button");
    btn.addEventListener("click", (() => {
        item.children[1].classList.toggle("show");
    }))
})