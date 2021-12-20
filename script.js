//Los nombres de los jugadores
let playerOne = "Player 1";
let playerTwo = "Player 2";

//Función para editar los nombres
const editNames = () => {
  playerOne = prompt("Change Player 1 name");
  playerTwo = prompt("Change Player 2 name");
  document.querySelector(".player1").innerHTML = playerOne;
  document.querySelector(".player2").innerHTML = playerTwo;
};

const rollTheDice = () => {
  document
    .querySelector(".img1")
    .setAttribute("src", "./assets/diceAnimation.gif");
  document
    .querySelector(".img2")
    .setAttribute("src", "./assets/diceAnimation.gif");
  setTimeout(() => {
    let randomNumberOne = Math.floor(Math.random() * 6) + 1;
    let randomNumberTwo = Math.floor(Math.random() * 6) + 1;

    document
      .querySelector(".img1")
      .setAttribute("src", "./assets/dice" + randomNumberOne + ".png");
    document
      .querySelector(".img2")
      .setAttribute("src", "./assets/dice" + randomNumberTwo + ".png");

    if (randomNumberOne === randomNumberTwo) {
      document.querySelector(".result").innerHTML = "Draw!";
    } else if (randomNumberOne > randomNumberTwo) {
      document.querySelector(".result").innerHTML = playerOne + " wins!";
    } else {
      document.querySelector(".result").innerHTML = playerTwo + " wins!";
    }
  }, 2500);
};
