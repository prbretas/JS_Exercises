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
sourceGames[2] = "https://www.retrogames.cc/embed/44529-final-fantasy-tactics-the-lion-war-2-031.html"// FINAL FANTASY TACTICS


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


