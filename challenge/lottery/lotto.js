export function getTickets(num) {
    let ticketArr = [];
    for(let i = 0; i < num; i++) {
        ticketArr.push(drawingNumbers());
    }
    return ticketArr;
}

// console.log(getTickets(2));
// console.log(getTickets(4));
// console.log(getTickets(6));

function getRandomNumber(min, max) {
    let range = max - min + 1;
  
    return Math.floor(Math.random() * range) + min;
  }
  
  export function drawingNumbers() {
    let lottoNumbers = [];
  
    while (lottoNumbers.length < 6) {
      let randomNum = getRandomNumber(1, 50);
      if (validateNumber(randomNum, lottoNumbers) === false) {
        lottoNumbers.push(randomNum);
      }
    }
    return lottoNumbers;
  }
  
  function validateNumber(randomNumberToCheck, currentLottoPicks) {
    return currentLottoPicks.includes(randomNumberToCheck);
  }
  export function addTicketsToList(arr) {
    arr.forEach((item) => {
        let listItem = document.createElement('li');
        listItem.textContent = item.join(", ");
        listItem.className = "ticket-list-item";
        let orderedList = document.getElementById('ticket-list');
        let lineBreak = document.createElement('br');
        orderedList.appendChild(listItem);
        orderedList.appendChild(lineBreak);
    })
  }
  
  export function clearEntireList() {
    let ticketList = document.getElementById("ticket-list");
    while(ticketList.hasChildNodes()) {
        ticketList.removeChild(ticketList.firstChild);
    }

}

let player1Tickets = [
    [10, 39, 24, 15, 12, 23],
    [11, 19, 34, 45, 16, 27],
  ];
  let jackpotLotto = [1, 24, 16, 25, 44, 27];
  
  let results = getTicketsResults(player1Tickets, jackpotLotto);
  console.log(results);
  
  export function getTicketsResults(playerTickets, jackpotLotto) {
    let ticketObjectArray =  playerTickets.map((ticket) => {
        let matchedNumbers = ticket.filter((num) => jackpotLotto.includes(num));
        let ticketObject = {
            message: `Ticket has ${matchedNumbers.length} matches`,
            ticket: ticket,
        };
    })
    return ticketObjectArray;
  }