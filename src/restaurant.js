const createRestaurantHomePage = () => {
	//Content div
	const content = document.querySelector("#content");
	const pageContent = document.createElement("div");
	pageContent.classList.add("page-content");

	//Image
	// const image = document.createElement("img");
	// image.src = "https://vistapointe.net/images/restaurant-3.jpg";

	// pageContent.appendChild(image);

	//Headline Element
	const headline = document.createElement("h1");
	headline.textContent = "Sea Breeze";

	//Paragraph Element
	const subText = document.createElement("p");
	subText.textContent = "Traditional Portuguese seafood restaurant, in an upscale venue";

	//Header element
	const header = document.createElement("header");

	header.appendChild(headline);
	header.appendChild(subText);
	pageContent.appendChild(header);

	content.appendChild(pageContent);
	content.classList.add("content");
};

export default createRestaurantHomePage;
