const REM_SIZE = 16;
const heroButtons = document.querySelectorAll(".hero-button"); 
const navbarHeight = document.getElementsByClassName("navbar-section")[0].offsetHeight;
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
var tl = gsap.timeline();

for (var i = 0; i < heroButtons.length; i++){
	let heroButton = heroButtons[i];

	heroButton.addEventListener("click", () => {
		gsap.to(window, {duration: 0.000001, scrollTo: {y: "#projects-title", 
		offsetY: navbarHeight + REM_SIZE}});
	});
};

function init() {
	tl.from("#hero-container", {
	y: "-30%",
	autoAlpha:0,
	duration: 1
});

tl.from(".stagger1", {
	y: "-30%",
	autoAlpha:0,
	stagger: 0.3,
	duration: 0.5
}, "-=0.5");

gsap.from("#projects-title", {
	scrollTrigger: {
		trigger: "#projects-title",
		start: "top bottom"
	},

	y: "-30%",
	autoAlpha: 0,
	duration: 1,
	stagger: 0.3
});

gsap.from(".project", {
	scrollTrigger: {
		trigger: ".project",
		start: "top bottom"
	},

	y: "30%",
	autoAlpha:0,
	stagger: 0.3
});
}

window.addEventListener("load", function(event){
	init();
});
