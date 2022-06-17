const hamburgerMenu = document.getElementById("menu");
const menuList = document.getElementById("menuList");
hamburgerMenu.addEventListener("click", (e) => {
  menuList.classList.toggle("hidden");
});
