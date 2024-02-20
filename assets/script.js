const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
]

var PremiereSlideIndex = 0 // la premiere diapositive est la numero 0

const leftArrow = document.querySelector(".arrow_left") /* va selectionner l element fleche gauche dans le css */
const rightArrow = document.querySelector(".arrow_right")/* va selectionner l element fleche droite dans le css */

leftArrow.addEventListener("click", function () {
	//diopo actuelle (currentslideindex) sera egale à diapo  -1  car on click sur la fleche de gauche donc en arriere
	PremiereSlideIndex = (PremiereSlideIndex - 1 + slides.length) % slides.length
	mettreAJourContenuDiapo(PremiereSlideIndex) // fonction appelee
})

rightArrow.addEventListener("click", function () {
	//diopo actuelle (PremiereSlideIndex) sera egale à diapo  +1  car on click sur la fleche de droite donc on avance
	PremiereSlideIndex = (PremiereSlideIndex + 1) % slides.length
	mettreAJourContenuDiapo(PremiereSlideIndex)
})

// Récupérez l'élément contenant les points
const dotsContainer = document.querySelector(".dots") //  on cree une variable qui va selectionner l element css

// Ajoutez un point pour chaque diapositive

slides.forEach((slide, index) => {
	const dot = document.createElement("div")
	dot.classList.add("dot")
	dotsContainer.appendChild(dot)

	// Ajoutez un écouteur d'événements pour la navigation au clic sur le point
	dot.addEventListener("click", () => {
		mettreAJourContenuDiapo(index)
		mettreAjourDots(index)
	})
})

// Fonction pour mettre à jour les points lors de la navigation
function mettreAjourDots(currentIndex) {
	const ToutesLesDots = document.querySelectorAll(".dot")

	ToutesLesDots.forEach((dot, index) => {
		if (index === currentIndex) {/* si l index et strictement egal a l index des dots*/
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected") /* annule la class dot select*/
		}
	})
}

/* diapositive*/
function mettreAJourContenuDiapo(index) {
	const bannerImage = document.querySelector(".banner-img")
	const tagLine = document.querySelector("#banner p")

	// Mettre à jour l'image et la tagline en fonction de la diapositive courante
	bannerImage.src = `assets/images/slideshow/${slides[index].image}`
	tagLine.innerHTML = slides[index].tagLine

	// Mettre à jour le point actif
	mettreAjourDots(index)
}


mettreAJourContenuDiapo(PremiereSlideIndex)/* a la fin pour rtre sure que Tous les éléments HTML sont chargés et disponibles pour la manipulation par JavaScript.
Toutes les fonctions nécessaires ont été définies avant leur appel.*/
