import createAboutPage from "./about";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

export default createTabs;

function createTabs() {
	const content = document.querySelector("#content");
	const tabDiv = document.createElement("div");
	const div1 = document.createElement("div");
	const div2 = document.createElement("div");
	const div3 = document.createElement("div");

	div1.setAttribute("id", "home-btn");
	div2.setAttribute("id", "menu-btn");
	div3.setAttribute("id", "about-btn");

	div1.classList.add("tab");
	div2.classList.add("tab");
	div3.classList.add("tab");
	tabDiv.classList.add("tabDiv");

	div1.textContent = "Home";
	div2.textContent = "Menu";
	div3.textContent = "About";

	tabDiv.appendChild(div1);
	tabDiv.appendChild(div2);
	tabDiv.appendChild(div3);

	content.appendChild(tabDiv);

	div1.addEventListener("click", () => {
		clearContent();
		createRestaurantHomePage();
	});

	div2.addEventListener("click", () => {
		clearContent();
		createMenuPage();
	});

	div3.addEventListener("click", () => {
		clearContent();
		createAboutPage();
	});
}

function clearContent() {
	const content = document.querySelector("#content");
	const pageContent = document.querySelector(".page-content");
	if (pageContent) {
		content.removeChild(pageContent);
	}
}
