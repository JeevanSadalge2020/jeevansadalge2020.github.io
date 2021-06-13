




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