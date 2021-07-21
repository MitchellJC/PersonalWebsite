const heroButtons = document.querySelectorAll(".hero-button") 
	heroProject = document.getElementById("calculator-project")

for (var i = 0; i < heroButtons.length; i++){
	let heroButton = heroButtons[i]

	heroButton.addEventListener("click", () => {
	heroProject.scrollIntoView()
	})
}
