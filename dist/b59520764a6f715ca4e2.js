import homePage from "./home.js"
import stupidPage from "./stupid.js"



addEventListener("DOMContentLoaded", (event) => { 
    homePage.home();
    const home = document.querySelector('.Home');
    const stupid = document.querySelector('.Stupid');
    const backFlipt = document.querySelector('.Back-flipt');
    const meth = document.querySelector('.Meth');

    home.addEventListener("click", () => {
        homePage.home();
    });

    stupid.addEventListener("click", () => {
        stupidPage.home();
    });

    backFlipt.addEventListener("click", () => {
        page.backFlipt();
    });

    meth.addEventListener("click", () => {
        page.meth();
    });

});

//Split pages into seperate scripts.