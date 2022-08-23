
const btns = document.querySelectorAll(".btn-pl");
let counter = 1;

// common function 

function players(i) {
    var playerSelector = "player-"+i;
    let player = document.getElementById(`${playerSelector}`).innerText;
    let list = document.querySelector(".selected-player");
    list.innerHTML += `<p class="player_name">${counter++}. ${player}</p>`;
    btns[i].innerText = "Selected";
    btns[i].classList.add("disabled");
}

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click", function(){
        var playerCount = document.querySelectorAll(".disabled");
        if(playerCount.length<=4){
            players(i);
        }
        else{
            alert("Maximum five players are allowed to select.");
        }
    } )
}
