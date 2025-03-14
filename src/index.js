import "./styles.css";
import homeLoad from "./home.js";
import menuLoad from "./menu.js";
import aboutLoad from "./about.js";

const content = document.querySelector('#content');
const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const aboutButton = document.querySelector('.about-button');

homeButton.addEventListener('click', (event) => {
    event.preventDefault();

    content.replaceChildren();
    homeLoad();
});

menuButton.addEventListener('click', (event) => {
    event.preventDefault();

    content.replaceChildren();
    menuLoad();
});

aboutButton.addEventListener('click', (event) => {
    event.preventDefault();

    content.replaceChildren();
    aboutLoad();
})

homeLoad();