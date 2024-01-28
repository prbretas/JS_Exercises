let linkGame1 = document.getElementById("linkGame1");

let sourceGames = [];
sourceGames[0] = "https://www.retrogames.cc/embed/42834-pokemon-fire-red-extended-v2-0-4.html"; //POKEMON RED
sourceGames[1] = "https://www.retrogames.cc/embed/40787-007-tomorrow-never-dies.html"// 007 - TND
sourceGames[2] = "https://www.retrogames.cc/embed/44529-final-fantasy-tactics-the-lion-war-2-031.html"// FINAL FANTASY TACTICS


//ALTERANDO O ATRIBUTO SRC DO ELEMENTO HTML VIDEO
let iframeGames = document.getElementById("iframeGames");

function alterarLinkFilme0() {
  iframeGames.setAttribute("src", "https://www.retrogames.cc/embed/42834-pokemon-fire-red-extended-v2-0-4.html");
}

function alterarLinkFilme1() {
  iframeGames.setAttribute("src", "https://www.retrogames.cc/embed/40787-007-tomorrow-never-dies.html");
}

function alterarLinkFilme2() {
  iframeGames.setAttribute("src", "https://www.retrogames.cc/embed/44529-final-fantasy-tactics-the-lion-war-2-031.html");
}


