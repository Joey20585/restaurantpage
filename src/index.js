import InitialLoad from "./pageLoad"
import "./styles.css"; 

import { loadHomePage } from './pageLoad'; 


loadHomePage();

import { loadMenuPage } from './pageLoad'; 

loadMenuPage();


import { loadContactPage } from './pageLoad'; 

loadContactPage();




document.getElementById("homeButton").addEventListener("click", loadHomePage);
document.getElementById("menuButton").addEventListener("click", loadMenuPage);
document.getElementById("contactButton").addEventListener("click", loadContactPage);









