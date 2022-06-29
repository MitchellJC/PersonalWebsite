

var tl = gsap.timeline();

function init() {
	tl.from(".about-stagger", {
		y: "30%",
		autoAlpha: 0,
		duration: 1,
		stagger: 0.3
	});

	(function(){
		const courses = document.getElementsByClassName("course");
		console.log(courses);

		// Connect each course to its description                     
		for (const course of courses) {
			const title = course.getElementsByClassName("course-title")[0];
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
