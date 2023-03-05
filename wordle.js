// generate a random word
var word = generateWord();
// function to generate a random word
function generateWord() {
  var words = ["apple", "banana", "cherry", "grape", "kiwi", "lemon", "melon", "speak", "peach", "pear","iphone","football"];
  var randomIndex = Math.floor(Math.random() * words.length);
  result.innerHTML = "It is a "+words[randomIndex].length+" letter word";
  return words[randomIndex];
}

// function to check if the entered word is correct
function checkWord() {
  var input = document.getElementById("wordInput").value;
  var result = document.getElementById("result");
  if (input.length != word.length) {    //////////////////////
    result.innerHTML = "Please enter a "+word.length+" letter word.";
  }
  else if (input == word) {
    result.innerHTML = "Congratulations! You guessed the word!";
  } else {
    var correctLetters = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i] == word[i]) {
        correctLetters++;
      }
    }
    result.innerHTML = "You got " + correctLetters + " correct letter(s).";
  }
}

function resetGame() {
  document.getElementById("wordInput").value = "";
  document.getElementById("result").innerHTML = "";
  word = generateWord();
}
