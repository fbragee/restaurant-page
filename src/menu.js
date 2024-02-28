export default createMenuPage;

function createMenuPage() {
	const content = document.querySelector("#content");
	const pageContent = document.createElement("div");
	pageContent.classList.add("page-content");

	const heading = document.createElement("h1");
	const menuList = document.createElement("ul");

	const menuItem1 = createLi();
	const menuItem2 = createLi();
	const menuItem3 = createLi();

	heading.innerText = "Menu";
	menuItem1.innerText = "Bacalhau a bras";
	menuItem2.innerText = "King crab salad";
	menuItem3.innerText = "Bitoque de atum";

	menuList.appendChild(menuItem1);
	menuList.appendChild(menuItem2);
	menuList.appendChild(menuItem3);

	const header = document.createElement("header");
	header.appendChild(heading);
	header.appendChild(menuList);

	pageContent.appendChild(header);

	content.appendChild(pageContent);
}

function createLi() {
	return document.createElement("li");
}
