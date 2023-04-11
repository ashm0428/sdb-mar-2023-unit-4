// Variables
let computerResponse = document.getElementById('computer-response');
let nameForm = document.getElementById('name-form');
let userInputField = document.getElementById('user-input');
let submitBtn = document.getElementById('submit-input');

let enemyList = ['darth vader', 'voldemort', 'palpatine', 'lex luthor'];

nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputValue = userInputField.value;
  if (enemyList.includes(inputValue.toLowerCase())) {
    switch (inputValue.toLowerCase()) {
      case 'darth vader':
        computerResponse.textContent = 'NOOOO! That`s impossible!';
        break;
      case 'voldemort':
      case 'lex luthor':
        computerResponse.textContent = 'Hey baldie! Get out of here!';
        break;
      default:
        computerResponse.textContent = 'Go away!';
    }
  } else {
    computerResponse.textContent = `Hello, ${inputValue}`;
  }
});

