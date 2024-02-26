export default display;

function display() {
	const headLine = document.createElement('h2');
	const contentDiv = document.querySelector('#content');
	const container = document.createElement('div');
	const contentImg = document.createElement('img');
	const subText = document.createElement('p');

	headLine.textContent = 'Sea Breeze';
	container.appendChild(headLine);

	contentImg.src = 'https://vistapointe.net/images/restaurant-3.jpg';

	subText.textContent =
		'Traditional Portuguese seafood restaurant, in an upscale venue';
	container.appendChild(subText);
	container.append(contentImg);
	contentDiv.appendChild(container);
}
