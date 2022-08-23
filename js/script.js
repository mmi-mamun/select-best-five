//For calling player selection button
const btns = document.querySelectorAll(".btn-player");
let counter = 1;

//For access all player selection button
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


//Total cost calculate function using event listener
const buttonTotal = document.getElementById("btn_total");
buttonTotal.addEventListener("click", function(){
    let coachFee = parseInt(document.getElementById("coach_fee").value);
    let managerFee = parseInt(document.getElementById("manager_fee").value);
    let playerExpenses = parseInt(document.getElementById("player_expenses").textContent);

    let total = document.getElementById("total");
    total.innerText = playerExpenses + coachFee + managerFee;
})
