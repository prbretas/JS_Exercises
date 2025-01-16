let iframeGame = document.getElementById("iframe1")
let srcLinks = [];

srcLinks[0] = "https://www.musicca.com/pt/afinador"; //My Abandonware
srcLinks[1] = "https://www.fender.com/online-guitar-tuner/electric-guitar-tuning"; //retrogames
srcLinks[2] = "https://www.cifraclub.com.br/"; //retrogames


function altGameLink(){
  iframeGame.setAttribute("src", srcLinks[0]);
}

//ALTERANDO O ATRIBUTO SRC DO ELEMENTO HTML VIDEO

function alterarLink(idLink) {
 this.idLink = idLink
console.log(idLink)
iframeGame.setAttribute("src", srcLinks[idLink]);
}
