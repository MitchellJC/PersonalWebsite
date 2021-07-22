var tl = gsap.timeline()

tl.from(".about-stagger", {
	y: "30%",
	opacity: 0,
	duration: 1,
	stagger: 0.3
})