const mobileMenuButton = document.getElementById("mobile-menu")
	nav = document.querySelector("nav")
	mobileExitMenuButton = document.getElementById("mobile-menu-exit")
	externalNavMobile = document.getElementById("external-nav-mobile")

mobileMenuButton.addEventListener("click", () => {
	nav.classList.add("mobile-menu-open")
})

mobileExitMenuButton.addEventListener("click", () => {
	nav.classList.remove("mobile-menu-open")
})
