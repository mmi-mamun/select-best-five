// common function 
function players(i) {
    var playerSelector = "player-"+i;
    let player = document.getElementById(`${playerSelector}`).innerText;
    let list = document.querySelector(".selected-player");
    list.innerHTML += `<p class="player_name">${counter++}. ${player}</p>`;
    btns[i].innerText = "Selected";
    btns[i].classList.add("disabled");
}