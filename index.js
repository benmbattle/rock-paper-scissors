let userScore=0;
let compScore=0;
const userScore_span= document.getElementById("user-score");
const compScore_span= document.getElementById("comp-score");
const scoreBoard= document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices=['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function win(user,computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = user + " beats " + computer;
}
function lose(user, computer){
  compScore++;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = computer + " beats " + paper;
}
function draw(user, computer){
  result_div.innerHTML = computer + " draws with " + paper;
}
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  })
 paper_div.addEventListener('click', function(){
    game("p");
  })
 scissors_div.addEventListener('click', function(){
    game("s");
  })
}
main();
