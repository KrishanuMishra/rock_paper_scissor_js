let userScore=0;
let compScore=0;

const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div =  document.querySelector(".scoreboard");
const result_div =  document.querySelector(".result>p");
const rock =  document.getElementById("rock");
const paper =  document.getElementById("paper");
const scissor =  document.getElementById("scissor");

function getCompChoice(){
    const choices=['r','p','s'];
    const randNumber = Math.floor(Math.random()*3);
    return choices[randNumber];
}

function convertToWords(letter){
    if(letter === "r") return "Rock"
    if(letter === "p") return "Paper"
    return "Scissor"
}

function win(userChoice,compChoice){
    userScore++;
    userScore_span.innerHTML=userScore
    console.log(userScore);
    console.log(user);
    console.log(comp);
    result_div.innerHTML = `${convertToWords(userChoice)}  beats  ${convertToWords(compChoice)}  . You win.`;
    

}

function lose(userChoice,compChoice){
    compScore++;
    compScore_span.innerHTML=compScore
    console.log(userScore);
    console.log(user);
    console.log(comp);
    result_div.innerHTML = `${convertToWords(compChoice)}  beats  ${convertToWords(userChoice)}  . You Lose.`;
}

function draw(userChoice,compChoice){
    console.log(userScore);
    console.log(user);
    console.log(comp);
    result_div.innerHTML = `${convertToWords(userChoice)}  equals  ${convertToWords(compChoice)}. Its a draw.`;
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break;
    }
}
function main(){
    rock.addEventListener('click',function(){
        game("r");
    })
    paper.addEventListener('click',function(){
        game("p");
    })
    scissor.addEventListener('click',function(){
        game("s");
    })
}

main();