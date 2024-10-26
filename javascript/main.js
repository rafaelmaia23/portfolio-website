//menu mobile

const menuMobile = document.querySelector(".menu-mobile");
const menuList = document.querySelector(".nav-list");
const menuItems = document.querySelectorAll(".list-item a");

menuMobile.addEventListener("click", () => {
    menuList.classList.toggle("nav-list-open");
});

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        menuList.classList.remove("nav-list-open");
    });
});

//carrossel
