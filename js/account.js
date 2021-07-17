const accountIcon = document.querySelector(".account i");
const accountMenu = document.querySelector(".account__menu");

function openMenu() {
  accountMenu.classList.toggle("hidden");
}

accountIcon.addEventListener("click", openMenu);
