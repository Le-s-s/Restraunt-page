import "./style.css";
import imageHome from "./images/ai-generated-9107430_1280.jpg";

const page = (function(){
    const home = function(){
        const webpage = document.querySelector("#content");
        webpage.innerHTML= "";
        headline(webpage);
        body(webpage);
        footer(webpage);
    }
    
    const headline = function(webpage){
        const headline = document.createElement("div")
        headline.classList.add('headline');
        const h1 = document.createElement("h1");
        h1.textContent = "Our new special is to die for, try it special, or else!.."
        const trashImg = document.createElement("img");
        trashImg.src = imageHome;
        trashImg.alt = "Picture of garbage"
        headline.appendChild(h1);
        headline.appendChild(trashImg);
        webpage.appendChild(headline);
    }

    const body = function(webpage){
        const bodyContent = document.createElement("div")
        bodyContent.classList.add('body-content');
        const pGraph = document.createElement("p");
        pGraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam cumque quos asperiores est deleniti aut, corporis praesentium aspernatur at provident doloribus temporibus et mollitia maiores dolorum tempora eum fuga."
        bodyContent.appendChild(pGraph);
        webpage.appendChild(bodyContent);
    }

    const footer = function(webpage){
        const footerContent = document.createElement("div")
        footerContent.classList.add('footer');
        const pGraph = document.createElement("p");
        pGraph.innerHTML = `Image by <a href="https://pixabay.com/users/mrwashingt0n-15745216/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=9107430">Temel</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=9107430">Pixabay</a>`;
        footerContent.appendChild(pGraph);
        webpage.appendChild(footerContent);
    }
    return{home,headline,body,footer};
})();

addEventListener("DOMContentLoaded", (event) => { 
    const home = document.querySelector('.Home');
    const stupid = document.querySelector('.Stupid');
    const backFlipt = document.querySelector('.Back-flipt');
    const meth = document.querySelector('.Meth');

    home.addEventListener("click", () => {
        page.home();
    });

    stupid.addEventListener("click", () => {
        page.stupid();
    });

    backFlipt.addEventListener("click", () => {
        page.backFlipt();
    });

    meth.addEventListener("click", () => {
        page.meth();
    });

});

//Split pages into seperate scripts.