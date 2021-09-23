const stock = {
  macbook: 2,
  iphone: 4
}

const processPayment = (itemName) => {
  stock[itemName]--;
  console.log(`Payment is being processed for item ${itemName}`);
}

const processError = (itemName) => {
  console.log(`No more ${itemName} in stock`);
  console.log("Payment is not being processed");
}

const processOrder = (itemName, callbackPayment, callbackError) => {
  console.log(`Verifying the stock of ${itemName}`);

  if (stock[itemName] > 0) {
    callbackPayment(itemName);
  }
  else {
    callbackError(itemName);
  }

}

function main() {
  let item = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
  processPayment.bind(stock);
  processOrder.bind(this);
  processOrder(item, processPayment, processError);
}

main()