const init = () => {
    const decision = confirm('Shall we play a game');
    decision ? playgame() : alert('OK! Maybe next time!');
}
const playgame = () => {
    const playerChoice = prompt('Enter rock, paper or scissors');
    if (playerChoice) {
        const player = playerChoice.trim().toLowerCase();
        if (
            player === "rock" || player === "paper" || player === "scissors"
        ) {
            computerChoice(player);
        }
        else {
            alert('You entered the wrong value! Try again');
            playgame();
        }
    }
    else {
        if (playerChoice === "") {
            alert('You did not enter anything! Try again');
            playgame();
        }
        else {
            alert('I guess you changed your mind! Maybe next time!');
        }
    }
}
const computerChoice = (player) => {
    const computerChoice = Math.floor(Math.random() * 3 + 1);
    const computer =
        computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
    const result =
        computer === player ? "Match tie!" : ((computer === "rock" && player === "paper") || (computer === "paper" && player === "scissors") || (computer === "scissors" && player === "rock")) ? "Player wins!" : "Computer wins!";
    alert(`Player's choice : ${player.toUpperCase()}\nComputer's choice : ${computer.toUpperCase()}\n${result.toUpperCase()}`);
    playagain();
}
const playagain=()=>{
    const playagain=confirm("Do you want to play again?");
    if(playagain){
        playgame();
    }
    else{
        alert('OK! GOOD BYE!!');
    }
}
init();