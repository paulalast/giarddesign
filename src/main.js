const searchInput = document.getElementById("searchInput")
const searchIcon = document.getElementById("searchIcon")

searchIcon.addEventListener("click", () => {
	if (searchInput.classList.contains("w-0", "scale-x-0")) {
		searchInput.classList.remove("scale-x-0", "opacity-0", "w-0")
		searchInput.classList.add("w-40", "scale-x-100", "opacity-100")
	} else {
		searchInput.classList.remove("w-40", "scale-x-100", "opacity-100")
		searchInput.classList.add("scale-x-0", "opacity-0", "w-0")
	}
})

const footerYear = document.querySelector(".footer-year")
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
