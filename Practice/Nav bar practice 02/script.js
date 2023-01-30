const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const toggleButton2 = document.getElementsByClassName("navbar-toggle2")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

toggleButton2.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});
