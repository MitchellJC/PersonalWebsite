const heroButtons = document.querySelectorAll(".hero-button") 
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin);

for (var i = 0; i < heroButtons.length; i++){
	let heroButton = heroButtons[i]

	heroButton.addEventListener("click", () => {
		gsap.to(window, {duration: 1, scrollTo:"#projects-title", ease: "elastic"});
	})
}

var tl = gsap.timeline()

tl.from("#hero-container", {
	y: "-30%",
	opacity: 0,
	duration: 1
})

tl.from(".stagger1", {
	y: "-30%",
	opacity: 0,
	stagger: 0.3,
	duration: 0.5
}, "-=0.5")
