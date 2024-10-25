const menuMobile = document.querySelector(".menu-mobile");
const menuList = document.querySelector(".nav-list");

menuMobile.addEventListener("click", () => {
    menuList.classList.toggle("nav-list-open");
});
