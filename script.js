const message = document.querySelector(".message");
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highscore = 0; // Initialize the highscore variable
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore; // Update the initial highscore display

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if (!guess) {
        message.textContent = "You Should Type Any Number";
    } else if (guess === secretNumber) {
        message.textContent = "Congrats! Correct Number";
        document.querySelector("body").style.backgroundColor = 'green';

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            message.textContent = "Too High";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            message.textContent = "You Lost Game";
            document.querySelector(".score").textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = "Too Low";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            message.textContent = "You Lost Game!";
            document.querySelector(".score").textContent = 0;
        }
    }
});

let again = document.querySelector('.again');
again.addEventListener("click", function() {
    message.textContent = "Start guessing";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector(".number").textContent = '?';
    document.querySelector('.guess').value = "";
    score = 20; // Update the score without redeclaring it
    document.querySelector('.score').textContent = score;
});
