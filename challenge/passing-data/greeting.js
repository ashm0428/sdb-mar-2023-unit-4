let nameForm = document.getElementById('name-form');
let userInputField = document.getElementById('user-input');
let submitBtn = document.getElementById('submit-input');

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputName = userInputField.value;
    window.location.href = `./index.html?name=${inputName}`;
});
