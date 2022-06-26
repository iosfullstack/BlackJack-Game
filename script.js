let cards = [];
let isAlive = false;
let hasBlackjack = false;
let sum = 0;
let message = "";
let message_info = document.getElementById("message-info");
let start_game = document.getElementById("start");
let draw_card = document.getElementById("new-card");
let card = document.getElementById("cardnum");
let sum_num = document.getElementById("sum-num");


function generateRandomnumber() {
    const randomNumber = Math.floor(Math.random() * (13)) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    }
    else {
        return randomNumber;
    }
    
}

start_game.onclick = function () {
    isAlive = true;
    let firstCard = generateRandomnumber();
    let secondCard = generateRandomnumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    render_game();
}

 function render_game () {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } 
    else if (sum === 21) {
        message = "You have blackjack!";
        hasBlackjack = true;
        sum_num.style.color = "darkgreen";
    }
    else {
        message = "You have lost!";
        isAlive = false;
        sum_num.style.color = "red";
    }
    message_info.textContent = message;
    card.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        const element = cards[i] + " ";
        card.textContent += element;
    }

    sum_num.textContent = "Sum: " + sum;
}

draw_card.onclick = function () {

    if (isAlive === true && hasBlackjack === false) {
        let newCard = generateRandomnumber();
        sum += newCard;
        cards.push(newCard);
        render_game(); 
    }
    else if (isAlive === true && hasBlackjack === true) {
        message = "You have blackjack!";
        sum_num.style.color = "darkgreen";
        refresh();
        alert("You are the winner!");
        alert("You can play again!");
    }
    else {
        refresh();
        alert("You have lost! Refresh the page to play again!");
    }

}

function refresh() {
    location.reload();
}


