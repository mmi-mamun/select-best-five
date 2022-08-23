const btns = document.querySelectorAll(".btn-pl");
let counter = 1;

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click", function(){
        var playerCount = document.querySelectorAll(".disabled");
        if(playerCount.length<=4){
            players(i); // calling the function in common.js for every player selection
        }
        else{
            alert("Maximum players are selected.");
        }
    } )
}


// event handler for player cost 
function playerCost(){
    const perPlayerCost = parseInt(document.getElementById("per_player_cost").value);
    var playerCount = document.querySelectorAll(".player_name");
    let playerExpenses = document.getElementById("player_expenses");
    const playerNumber = playerCount.length;
    playerExpenses.innerHTML = playerNumber*perPlayerCost;
}

