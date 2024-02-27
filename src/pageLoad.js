import createRestaurantHomePage from "./restaurant";
import createTabs from "./tabs";
import createMenuPage from "./menu";

function initalLoad() {
	createTabs();
	createRestaurantHomePage();
	createMenuPage();
}

export default initalLoad;
