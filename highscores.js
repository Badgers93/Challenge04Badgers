// check if local storage is clear and if not clear it
// if (localStorage.length !== 0){
//     localStorage.clear();
// }

// grab content from local storage
let playerAndScore = localStorage.getItem("player");
console.log(playerAndScore);
// generate it onto page
let playerAndScoreElement = document.createElement("li");
playerAndScoreElement.setAttribute("value", playerAndScore);
let scoreListElement = document.querySelector("#score-list");
scoreListElement.appendChild(playerAndScoreElement);
playerAndScoreElement.textContent = playerAndScore;