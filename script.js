const mobileMenu = document.getElementById("mobile-menu");
const navbarMenu = document.querySelector(".navbar-menu");
const targetElementServiceMenu = document.querySelector(".service-dropdown");
const dropdownLink = document.querySelector(".link-for-dropdown");
const darkModeButton = document.querySelector(".dark-mode-btn"); //Dark Mode Code
const backgroundToBeDarkened = document.querySelector(".bg-darkened");
const textToBeDarkened = document.querySelector(".text-darkened");
const darkModeIcon = document.querySelector(".dark-mode-icon");

const className = "serviceMenuAvailable";

mobileMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

dropdownLink.addEventListener("click", function () {
  targetElementServiceMenu.classList.toggle(className);
});

// darkModeButton.addEventListener("click", function () {

//   backgroundToBeDarkened.classList.toggle("dark");

//   textToBeDarkened.classList.toggle("dark-mode-text");
//   if (backgroundToBeDarkened.classList.contains("dark")) {
//     darkModeButton.innerHTML = `<i class="fa-regular fa-sun fa-spin"></i>`;
//   } else {
//     darkModeButton.innerHTML = `<i class="fa-regular fa-moon fa-bounce"></i>`;
//   }
// });
