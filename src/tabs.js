import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createTabs = () => {
    const content = document.querySelector("#content");

    const existingTabs = document.querySelector(".tabs-container");
    if (existingTabs) {
        existingTabs.remove();
    }

    const tabsContainer = document.createElement("div");
    tabsContainer.classList.add("tabs-container");

    const homeBtn = document.createElement("div");
    const menuBtn = document.createElement("div");
    const contactBtn = document.createElement("div");

    homeBtn.setAttribute("id", "home-btn");
    menuBtn.setAttribute("id", "menu-btn");
    contactBtn.setAttribute("id", "contact-btn");

    homeBtn.classList.add("tab");
    menuBtn.classList.add("tab");
    contactBtn.classList.add("tab");

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";

    tabsContainer.appendChild(homeBtn);
    tabsContainer.appendChild(menuBtn);
    tabsContainer.appendChild(contactBtn);

    content.appendChild(tabsContainer);

    homeBtn.addEventListener("click", () => {
        clearContent();
        createRestaurantHomePage();
    });

    menuBtn.addEventListener("click", () => {
        clearContent();
        createMenuPage();
    });

    contactBtn.addEventListener("click", () => {
        clearContent();
        createContactPage();
    });
};

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");

    if (pageContent) {
        pageContent.remove();
    }
}

export default createTabs;
