// Splitting off from the entire URL to only grab the ? and what follows
let queryString = window.location.search;
console.log(queryString);

// Creating a new instance of URLSearchParams so we can get the value if we supply the key
let urlParams = new URLSearchParams(queryString);

// Supplying the keyname to get the value
console.log(urlParams.get("firstName"));

let orderElement = document.getElementById("order");
let qty = urlParams.get("quantity");
let product = urlParams.get("product")
orderElement.textContent = `Your order you placed was ${qty} ${product}.`;