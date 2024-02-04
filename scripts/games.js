let divGames = document.getElementById('divGames');
let linkGame = document.querySelector(".aGame");
let alinkGameId = []

console.log(divGames.children[0].id)
console.log(divGames.children[1].id)
console.log(divGames.children[2].id)

console.log(divGames)

let sourceGames = [];
sourceGames[0] = "https://www.retrogames.cc/embed/42834-pokemon-fire-red-extended-v2-0-4.html"; //POKEMON RED
sourceGames[1] = "https://www.retrogames.cc/embed/40787-007-tomorrow-never-dies.html"// 007 - TND
sourceGames[2] = "https://www.retrogames.cc/embed/41787-final-fantasy-tactics.html"// FINAL FANTASY TACTICS
sourceGames[3] = "https://www.retrogames.cc/embed/41828-grand-theft-auto-2.html"// FINAL FANTASY TACTICS



//ALTERANDO O ATRIBUTO SRC DO ELEMENTO HTML VIDEO
let iframeGames = document.getElementById("iframeGames");

function alterarLinkGame0() {
  iframeGames.setAttribute("src", sourceGames[0]);
}

function alterarLinkGame1() {
  iframeGames.setAttribute("src", sourceGames[1]);
}

function alterarLinkGame2() {
  iframeGames.setAttribute("src", sourceGames[2]);
}





/******************ADIONAR EVENTO NO MENU HIDE *******/
const myOffcanvas = document.getElementById('offcanvasWithBothOptions')
offcanvasWithBothOptions.addEventListener('hidePrevented.bs.offcanvas', event => {
  alert("OLA")
  // do something...
})


