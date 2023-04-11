import { addTicketsToList, drawingNumbers, getTickets, clearEntireList, getTicketsResults } from "./lotto.js";


let powerBallNumbers = drawingNumbers();
let drawLottoBtn = document.querySelector(".draw-lotto-btn");
let lottoNumberBalls = document.querySelectorAll(".lotto-number-balls");
let tickets = document.getElementById('tickets');
let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clearEntireList();
    let ticketInput = tickets.value;
    let ticketArr = [];
    console.log(ticketInput);
    if(ticketInput === "") {
        console.log([])
    } else {
        ticketArr = getTickets(ticketInput)
    }
    addTicketsToList(ticketArr);
});

drawLottoBtn.addEventListener('click', () => {
    powerBallNumbers = drawingNumbers();
    lottoNumberBalls.forEach((ball, index) => {
        ball.textContent = powerBallNumbers[index];
    })
})

// getTicketsResults(tickets, drawLottoBtn)
// console.log(getTicketsResults)