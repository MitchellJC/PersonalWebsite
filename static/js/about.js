var tl = gsap.timeline();

function init() {
	tl.from(".about-stagger", {
		y: "30%",
		autoAlpha: 0,
		duration: 1,
		stagger: 0.3
	});
}

window.addEventListener("load", function(event){
	init();
});
