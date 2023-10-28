const diceImage1 = document.querySelector(".dice1");
const diceImage2 = document.querySelector(".dice2");
const winner = document.querySelector("h1");

function randomImage(){
    let x = Math.floor(6 * Math.random()) + 1;
    let y = Math.floor(6 * Math.random()) + 1;
    let image1Path = "./images/dice" + x + ".png";
    let image2Path = "./images/dice" + y + ".png";

    diceImage1.innerHTML = "Hello";

    diceImage1.setAttribute("src", image1Path);
    diceImage2.setAttribute("src", image2Path); 

    if(x > y){
        winner.innerHTML = "Player 1 Wins!";
    }
    else if(x < y){
        winner.innerHTML = "Player 2 Wins!";
    }
    else{
        winner.innerHTML = "Draw";
    }

}

const btn = document.querySelector(".btn");
btn.addEventListener("click", randomImage);