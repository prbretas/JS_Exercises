let iframeGame = document.getElementById("iframe1")
let srcLinks = [];

/******************ADIONAR EVENTO NO MENU HIDE *******/
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}



srcLinks[0] = "https://coolrom.com.au"; //cool room
srcLinks[1] = "https://www.myabandonware.com"; //My Abandonware
srcLinks[2] = "https://www.retrogames.cc/"; //retrogames
srcLinks[3] = "https://gam.onl/"; //retrogames


function altGameLink(){
  iframeGame.setAttribute("src", srcLinks[0]);
}

//ALTERANDO O ATRIBUTO SRC DO ELEMENTO HTML VIDEO

function alterarLinkGame(idLinkGame) {
 this.idLinkGame = idLinkGame
console.log(idLinkGame)
iframeGame.setAttribute("src", srcLinks[idLinkGame]);
}
