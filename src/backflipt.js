import imageHome from "./images/gczbF6nbRPVZ1YigE3.gif";
const page = (function(){
    const home = function(){
        const webpage = document.querySelector("#content");
        webpage.innerHTML= "";
        body(webpage);
        footer(webpage);
    }
    
    const body = function(webpage){
        const bodyContent = document.createElement("div")
        bodyContent.classList.add('body-content-flip');
        const trashImg = document.createElement("img");
        trashImg.src = imageHome;
        trashImg.alt = "Gif of fliiiiiiip"
        bodyContent.appendChild(trashImg);
        webpage.appendChild(bodyContent);
        
    }

    const footer = function(webpage){
        const footerContent = document.createElement("div")
        footerContent.classList.add('footer-flip');
        const pGraph = document.createElement("p");
        pGraph.innerHTML = `Gif by fliiiiiiiiiiiiiip`;  
        footerContent.appendChild(pGraph);
        webpage.appendChild(footerContent);
    }
    return{home,body,footer};
})();

export default page;