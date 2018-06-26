
var team = ["chelsea", "manchester united", "liverpool", "tottenham", 
"real madrid", "barcelona", "arsenal", "juventus", "bayern munich", "psg", "porto"];

var randomWord = team[Math.floor(Math.random()*team.length)];
console.log(randomWord);

var underScore = [];
function createUnderScore() {
    for (var i=0; i < randomWord.length; i++){
        var push = underScore.push("_");
        underScore.join(' ');
    }
    return underScore;
    
}
createUnderScore();
console.log(underScore);
document.getElementById("guess").innerHTML = underScore;

var correctGuess = [];
var wrongGuess = [];
var count = 0;
var guess = document.getElementById('guess');
var letterguess = document.getElementById('letterguess');
var letterguess = document.getElementById('letterguess');

document.addEventListener('keypress', (event) => {
    var keycode = event.keyCode;
    var guessWord = String.fromCharCode(keycode);
    if (randomWord.indexOf(guessWord)> -1) {
        correctGuess.push(guessWord);
        underScore[randomWord.indexOf(guessWord)] = guessWord;
        //guess[i].innerHTML = underScore.join("");
        //letterguess[i].innerHTML = correctGuess;
        console.log(correctGuess); 
    }
    else {
        wrongGuess.push(guessWord);
        console.log(wrongGuess);
    }

})
//.innerHTML = createUnderScore();

/*check if guess is right.
    - If right push into right array
    - If wrong push into wrong array */