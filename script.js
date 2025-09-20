const wordElement = document.getElementById('word');
const answerInput = document.getElementById('answer-input');
const checkButton = document.getElementById('check-button');
const resultElement = document.getElementById('result');

const wordList = ['apple', 'banana', 'orange', 'grape']; // Replace with appropriate word list

function generateWord() {
  const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  const wordLength = randomWord.length;
  let missingLetters = Math.floor(Math.random() * 2) + 1; // Randomly choose 1 or 2 missing letters
  let missingIndices = [];

  while (missingLetters > 0) {
    const index = Math.floor(Math.random() * wordLength);
    if (!missingIndices.includes(index)) {
      missingIndices.push(index);
      missingLetters--;
    }
  }

  let displayedWord = '';
  for (let i = 0; i < wordLength; i++) {
    if (missingIndices.includes(i)) {
      displayedWord += '_';
    } else {
      displayedWord += randomWord[i];
    }
  }

  wordElement.textContent = displayedWord;
  return randomWord;
}

let targetWord = generateWord();

checkButton.addEventListener('click', () => {
  const userWord = answerInput.value.toLowerCase();

  if (userWord === targetWord) {
    resultElement.textContent = 'Correct!';
    // Add audio for correct answer
    targetWord = generateWord();
  } else {
    resultElement.textContent = 'Incorrect. Try again.';
    // Add audio for incorrect answer
  }

  answerInput.value = '';
});
