
let dec = confirm("Shall we play a game?");
if (dec) {
    while (true) {
        let playerChoice = prompt("Enter rock, paper or scissor");
        if (playerChoice) {

            player = playerChoice.trim().toLowerCase();
            if (
                player === "rock" || player === "scissors" || player === "paper"
            ) {
                let computerChoice = Math.floor(Math.random() * 3 + 1);
                let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
                let res = computer === player ? "Match tie" : ((computer === "rock" && player === "scissors") || (computer === "scissors" && player === "paper") || (computer === "paper" && player === "rock")) ? "Computer wins" : "Player wins";
                alert(`COMPUTER:${computer}\nPLAYER:${player}\n${res}`);
                let playmore = confirm("PLAY AGAIN?");
                if (!playmore) {
                    alert("OK BYE");
                    break;
                }
            }
            else {
                alert("You have entered wrong input");
            }
        }
        else {
            if (playerChoice === "") {
                alert("You did not enter anything");
            }
            else {
                alert("so you changed your mind");
                break;
            }
        }
    }
}
else {
    alert("Ok maybe next time");
}