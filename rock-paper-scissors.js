
var choice = []
var buttons = document.getElementsByClassName("choice");

// var button1 = document.getElementByIdClassName

var whoWins = ''



for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickButton, false);
}

function clickButton() {
  var id = this.id
  // alert('You clicked ' + id)
  // order()

  var thisComputerChoice = computerChooses();
  console.log("thisComputerChoice: ", thisComputerChoice);
  console.log("user's choice: ", id);

  winner()
  // pseudocode
  // 1) set a variable for the computer's choice to random value from 0 to 1
  // 2) set a variable for the user's choice
  // 3) do your logic on the comparison

};

// function order(){
//   computerChoice()
//   winner()
// }


function computerChooses (){
  var computerChoice = Math.random()
  console.log(computerChoice);

  if (computerChoice < 0.34){
    computerChoice = "rock"
  } else if(computerChoice <= 0.67) {
    computerChoice = "scissors"
  } else {
    computerChoice = "paper"
  }
  return computerChoice;
}


function winner(){
  if (computerChoice == "rock" && choice == "rock" )
    { whoWins = "TIE!!"}
  else if (computerChoice == "scissors" && choice == "scissors" )
    { whoWins = "TIE!!"}
  else if (computerChoice == "paper" && choice == "paper" )
    { whoWins = "TIE!!"}
  else if (computerChoice == "rock" && choice == "paper" )
    { whoWins = "YOU WIN!!"}
  else if (computerChoice == "rock" && choice == "scissors" )
    { whoWins = "YOU LOSE"}
  else if (computerChoice == "paper" && choice == "rock" )
    { whoWins = "YOU LOSE"}
  else if (computerChoice == "paper" && choice == "scissors" )
    { whoWins = "YOU WIN!"}
  else if (computerChoice == "scissors" && choice == "rock" )
    { whoWins = "YOU WIN!"}
  else if (computerChoice == "scissors" && choice == "paper" )
    { whoWins = "YOU LOSE"}
   return  whoWins
console.log(whoWins)
}
