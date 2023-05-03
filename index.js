let cards = [];
let sum = 0;
let hasBlackJack = false
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
// let cardEl = document.getElementById("card-el");

let player = {
    name: "Ahmed",
    chips: 200
}

let playerEl = document.querySelector("#player-el");


function startGame(){
    if(isAlive === false){
        isAlive = true;
        hasBlackJack = false;
        let firstNum = getRandomCard();
        let secondNum = getRandomCard();
        cards = [firstNum, secondNum]
        sum = firstNum + secondNum;
        player.chips = 200;
        renderGame();
    }
}

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13)+1
    if(randomNum === 1){
        return 11
    }
    else if((randomNum === 11) || (randomNum === 13)){
        return 10
    }
    else{
        return randomNum;
    }
}

function renderGame(){
    cardEl.textContent = "Cards: ";
    for(let i = 0; i <cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20){
        message = "Do you want to draw a new card?"
        playerEl.textContent = "" ;
    }
    else if(sum === 21){
        message = "You've got BlackJack!"
        playerEl.textContent = player.name + ": $" + player.chips ;
        hasBlackJack = true;
        isAlive = false;
    }
    else {
        message = "You're out of the game!"
        player.chips = 0.0
        playerEl.textContent = player.name + ": $" + player.chips ;
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    // messageEl.textContent = "Drawing new cards!"
}
