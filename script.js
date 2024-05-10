let you = document.querySelectorAll("p")[0];
let pc = document.querySelectorAll("p")[2];
let youScore = 0;
let pcScore = 0;

let mesg = document.getElementById("mesg");
let btns = document.querySelectorAll(".btn");

const generateChoice = () => {
  const options = ["stone", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * 3);
  return options[randNum];
};

const showWinner = (youWin, yourChoice, pcChoice) => {
  if (youWin) {
    mesg.innerHTML = `Congratulations! You won. You beat the ${pcChoice} `;
    mesg.style.backgroundColor = "green";
    mesg.style.color = "white";
    ++youScore;
    you.innerText = youScore;
  } else {
    mesg.innerHTML = `Sorry! You lose. The ${pcChoice} beat you`;
    mesg.style.backgroundColor = "#ff6666";
    mesg.style.color = "black";
    ++pcScore;
    pc.innerText = pcScore;
  }
};

const playGame = (yourChoice) => {
  console.log("Your choice", yourChoice);
  const pcChoice = generateChoice();
  console.log("Computer's choice", pcChoice);
  if (yourChoice === pcChoice) {
    mesg.innerHTML = "Try again! Match draw";
    mesg.style.backgroundColor = "grey";
    mesg.style.color = "black";
  } else {
    let youWin = true;
    if (yourChoice === "stone") {
      youWin = pcChoice === "paper" ? false : true;
    } else if (yourChoice === "paper") {
      youWin = pcChoice == "scissors" ? false : true;
    } else {
      youWin = pcChoice === "stone" ? false : true;
    }
    showWinner(youWin, yourChoice, pcChoice);
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let urChoice = btn.getAttribute("id");
    playGame(urChoice);
  });
});
