const createRestaurantHomePage = () => {
	//Content div
	const content = document.querySelector("#content");
	const pageContent = document.createElement("div");
	pageContent.classList.add("page-content");

	//Image
	const image = document.createElement("img");
	image.src = "https://vistapointe.net/images/restaurant-3.jpg";
	image.width = "300";
	pageContent.appendChild(image);

	//Headline Element
	const headline = document.createElement("h1");
	headline.textContent = "Sea Breeze";
	pageContent.appendChild(headline);

	//Paragraph Element
	const subText = document.createElement("p");
	subText.textContent = "Traditional Portuguese seafood restaurant, in an upscale venue";
	pageContent.appendChild(subText);
	content.appendChild(pageContent);
};

export default createRestaurantHomePage;
