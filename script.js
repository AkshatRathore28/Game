let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    // rock paper Sicssore
    const options = ["rock", "paper", "sicssor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
 
const drawGame = () =>{
    msg.innerText = "Game was Draw , Play Again.!";
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame= (userChoice) => {
    console.log("User choice is :- ",userChoice);
    // Generate Computer Choice
    const compChoice = getCompChoice();
    console.log("Computer Choice is :- ",compChoice);

    if (userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // compChoice -> paper,sicssore
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // compChoice -> RemotePlayback,sicssore
            userWin = compChoice === "sicssor" ? false : true;
        }
        else{ // userChoice -> sicssore
            // compChoice -> rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}
const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
