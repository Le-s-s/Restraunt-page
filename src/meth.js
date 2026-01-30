import imageHome from "./images/why-does-everyone-love-spamton-so-much-v0-wxnm8p5uox8c1.png";
const page = (function(){
    const home = function(){
        const webpage = document.querySelector("#content");
        webpage.innerHTML= "";
        body(webpage);
        footer(webpage);
    }
    
    const body = function(webpage){
        const trashImg = document.createElement("img");
        trashImg.src = imageHome;
        trashImg.alt = "Picture of based spamton"
        const bodyContent = document.createElement("div")
        bodyContent.classList.add('body-content-meth');
        bodyContent.appendChild(trashImg);
        webpage.appendChild(bodyContent);
        
    }

    const footer = function(webpage){
        const footerContent = document.createElement("div")
        footerContent.classList.add('footer-meth');
        const pGraph = document.createElement("p");
        pGraph.innerHTML = `Image by Toby Fox`;
        footerContent.appendChild(pGraph);
        webpage.appendChild(footerContent);
    }
    return{home,body,footer};
})();

export default page;