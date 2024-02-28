export default createAboutPage;

function createAboutPage() {
	const content = document.querySelector("#content");
	const pageContent = document.createElement("div");
	pageContent.classList.add("page-content");

	const aboutH2 = document.createElement("h2");
	aboutH2.classList.add("about-title");
	aboutH2.innerText = "About Us";

	const aboutP = document.createElement("p");
	aboutP.classList.add("about-paragraph");
	aboutP.innerText = "Best restaurant in the block, fresh caught fish served daily in delicious plates combined with local veggies, in order to create a light and healthy meal.";

	const header = document.createElement("header");
	header.appendChild(aboutH2);
	header.appendChild(aboutP);

	pageContent.appendChild(header);

	content.appendChild(pageContent);
}
