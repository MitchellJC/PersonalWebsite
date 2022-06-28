

var tl = gsap.timeline();

function init() {
	tl.from(".about-stagger", {
		y: "30%",
		autoAlpha: 0,
		duration: 1,
		stagger: 0.3
	});

	(function(){
		console.log("HELOO")
		const courses = document.getElementsByTagName("course");
		console.log(courses)
		// Connect each course to its description                     
		for (const course of courses) {
			const title = course.getElementsByTagName("course-title")[0];
			const description = course.getElementsByClassName("course-description-box")[0];
	
			title.addEventListener("click", () => {
				console.log("Clicked");
				if (description.classList.contains("course-box-open")) {
					description.classList.remove("course-box-open");
				} else {
					description.classList.add("course-box-open");
				}
			});
		}
	})();
}

window.addEventListener("load", function(event){
	init();
});
