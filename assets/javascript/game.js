
var team = ["chelsea", "manchester united", "liverpool", "tottenham", 
"real madrid", "barcelona", "arsenal", "juventus", "bayern munich", "psg", "porto"];

var randomWord = team[Math.floor(Math.random()*team.length)];
console.log(randomWord);

var underScore =[];
function createUnderScore() {
    for (var i=0; i < randomWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}
console.log(createUnderScore());

var correctGuess = [];
var wrongGuess = [];
var count;
document.addEventListener('keypress', (event) => {
    var keycode = event.keyCode;
    var guessWord = String.fromCharCode(keycode);
    if (randomWord.indexOf(guessWord)> -1) {
        correctGuess.push(guessWord);
        console.log(correctGuess);
    }
    else {
        wrongGuess.push(guessWord);
        console.log(wrongGuess);
    }
    
})
/*check if guess is right.
    - If right push into right array
    - If wrong push into wrong array */