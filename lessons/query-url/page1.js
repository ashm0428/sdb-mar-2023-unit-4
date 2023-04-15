console.log("it works from page 1")

// TODO: create a function for the button click
// TODO: grab the values from the input fiels
// TODO: creat a URL that will be used to move to page2


let orderButton = document.getElementById("order-btn");
orderButton.addEventListener("click", goToNextPage);

function goToNextPage() {
    let product = document.getElementById('product');
    let quantity = document.getElementById('quantity');

window.location.href = `./page2.html?product=${product.value}&quantity=${quantity.value}`;
}

