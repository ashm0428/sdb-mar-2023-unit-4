// Variables
let computerResponse = document.getElementById('computer-response');
let enemyList = ['darth vader', 'voldemort', 'palpatine', 'lex luthor'];

let inputValue = window.location.search;
let urlParams = new URLSearchParams(inputValue);
let userName = urlParams.get("name");

  function response(inputName) {
  if (enemyList.includes(inputName.toLowerCase())) {
    switch (inputName.toLowerCase()) {
      case 'darth vader':
        computerResponse.textContent = 'NOOOO! That`s impossible!';
        break;
      case 'voldemort':
      case 'lex luthor':
        computerResponse.textContent = 'Hey baldie! Get out of here!';
        break;
      default:
        computerResponse.textContent = `Go away, ${inputName}!`;
    }
  } else {
    computerResponse.textContent = `Hello, ${inputName}. It's lovely to see you!`;
  }
};

response(userName);