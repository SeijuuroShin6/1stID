document.addEventListener("DOMContentLoaded", function() {
    
//Variables de stockage des éléments pour le burger menu
const menuButton = document.getElementById("menu-burger-button");
const closeMenuButton = document.getElementById("close-menu-burger-button");
const mobileMenu = document.getElementById("burger-menu");
const menuIcon = document.getElementById("menu-burger-icon");
const closeIcon = closeMenuButton.querySelector("ion-icon");


// Ouverture du menu burger
menuButton.addEventListener("click", function() {
    mobileMenu.classList.remove("-translate-y-full");
    mobileMenu.classList.add("translate-y-0");
    menuIcon.style.display = "none";  // Camouflage de l'icône burger du burger menu
    closeIcon.style.display = "block";  // Affichage de l'icône de fermeture du burger menu
});


// Fermeture du menu burger
closeMenuButton.addEventListener("click", function() {
    mobileMenu.classList.remove("translate-y-0");
    mobileMenu.classList.add("-translate-y-full");
    menuIcon.style.display = "block";  // Affichage de l'icône du burger menu
    closeIcon.style.display = "none";  // Camouflage de l'icone du burger menu
});
});