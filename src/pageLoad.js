import createRestaurantHomePage from './restaurant';
import createTabs from './tabs';
import createMenuPage from './menu';
import createContactPage from './contact';

function loadHomePage() {
    createTabs();
    createRestaurantHomePage();
}

function loadMenuPage() {
    createTabs();
    createMenuPage();
}

function loadContactPage() {
    createTabs();
    createContactPage();
}

export { loadHomePage, loadMenuPage, loadContactPage };
