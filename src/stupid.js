import imageHome from "./images/guy-pointing-at-himself.jpg";
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
        headline.classList.add('headline-stupid');
        const h1 = document.createElement("h1");
        h1.textContent = "Mirror of an idiot."
        const trashImg = document.createElement("img");
        trashImg.src = imageHome;
        trashImg.alt = "Picture of garbage"
        headline.appendChild(h1);
        headline.appendChild(trashImg);
        webpage.appendChild(headline);
    }

    const body = function(webpage){
        const bodyContent = document.createElement("div")
        bodyContent.classList.add('body-content-stupid');
        const pGraph = document.createElement("p");
        pGraph.textContent = "This is sad."
        bodyContent.appendChild(pGraph);
        webpage.appendChild(bodyContent);
    }

    const footer = function(webpage){
        const footerContent = document.createElement("div")
        footerContent.classList.add('footer-stupid');
        const pGraph = document.createElement("p");
        pGraph.innerHTML = `Image by IDK`;
        footerContent.appendChild(pGraph);
        webpage.appendChild(footerContent);
    }
    return{home,headline,body,footer};
})();

export default page;