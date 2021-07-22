const heroButtons = document.querySelectorAll(".hero-button") 
	projectsTitle = document.getElementById("projects-title")

for (var i = 0; i < heroButtons.length; i++){
	let heroButton = heroButtons[i]

	heroButton.addEventListener("click", () => {
	projectsTitle.scrollIntoView()
	})
}
