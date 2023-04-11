## Challenge 1.

You generated the powerball jackpot numbers. It's time to display those on the webpage.

Use your DOM tools that you have learned to get each number to be displayed in each of the balls.

You may alter the HTML code to add ID's or Classes to help you out.


## Challenge 2

Create a function in the lotto.js that will take a single parameter (number) and have it return an array of random numbers 6 per ticket.

example: if I want 2 tickets I should get an array of arrays back: [[10,39,24,15,12,23], [11,19,34,45,16,27]];


## Challenge 3

Add a event listener to the submit button to look for a clicking action. This action should console.log your new tickets that you have purchased. This happens on the index.js file.


## Challenge 4

On the HTML page create a ordered list just below the closing form div. Give it an ID do the `ol`

On your index.js file create a function that will loop through all the tickets you bought and display them in `li`

Make sure you have a clearing function that will clear out the ordered list before printing them to the screen.


## Challenge 5

In the lotto.js file create a function that will accept all of your tickets as an parameter and the second parameter 2 will be the jackpotLotto.

You are going to want to loop through player's Tickets and see if that number is found in jackpot array.

There are several ways to approach this... .forEach, .map filter ...etc

The return statement from the getTicketResults should be an array of objects with the ticket that the player had along with a message.

Example: [{message: "Ticket had 2 matches", ticket: [11, 19, 34, 45, 16, 27]}, {message: "Ticket had 1 match, ticket:[10, 39, 24, 15, 12, 23] }]

Example:

```js
let player1Tickets = [
  [10, 39, 24, 15, 12, 23],
  [11, 19, 34, 45, 16, 27],
];
let jackpotLotto = [1, 24, 16, 25, 44, 27];

let results = getTicketsResults(player1Tickets, jackpotLotto);

function getTicketsResults(arr1, arr2) {
//  variable for the []
    // Looping through the player's ticket

}
```
