document.addEventListener("DOMContentLoaded", () => {

//Variables de stockage des éléments pour le carousel
const images = document.querySelectorAll("#carousel-images li");
const textElements = document.querySelectorAll("#carousel-images li p");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
  
let currentIndex = 0;
  

// Fonction d'affichage de l'image et de la phrase correspondante à l'image
function showImage(index) {
   images.forEach((img, i) => {
    if (i === index) {
        img.classList.remove("opacity-0");
        img.classList.add("opacity-100");
        textElements[i].classList.remove("opacity-0");
        textElements[i].classList.add("opacity-100");
        } 
    else {
        img.classList.remove("opacity-100");
        img.classList.add("opacity-0");
        textElements[i].classList.remove("opacity-100");
        textElements[i].classList.add("opacity-0");
        }
    });
}
  

// Affichage de l'image suivante
function nextImage() {
currentIndex = (currentIndex + 1) % images.length;
showImage(currentIndex);
}
  
// Affichage de l'image précédente
function prevImage() {
currentIndex = (currentIndex - 1 + images.length) % images.length;
showImage(currentIndex);
}
  

showImage(currentIndex);
  
nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);
});  