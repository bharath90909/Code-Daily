async function createOrder(cart) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("cart is empty");
      //   cart.length > 0 ? res(9876) : rej("Cart is Empty");
    }, 2000);
  });
}

async function proceedToPayment(orderId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      orderId ? res("payment sucessfull") : rej("Payment Rejected");
    }, 2000);
  });
}

function updateBalance(cartValue) {
  return new Promise((res, rej) => {
    !cartValue ? res("Balance Updated") : rej("Failed updating balance");
  });
}

createOrder(["bat"])
  .then((orderId) => proceedToPayment(orderId))
  .catch((err) => {
    throw new Error(err);
  })
  .then((msg) => updateBalance(msg))
  .catch((err) => {
    throw new Error(err);
  })
  .then((msg) => console.log(msg))
  .catch((err) => console.log("error: ", err));

// async function promise() {
//   try {
//     const orderId = await createOrder(["bat", "ball"]);
//     const paymentMsg = await proceedToPayment(orderId);
//     console.log(paymentMsg);
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// }

// promise();

Promise.resolve("p1 resolved")
  .then((p1Msg) => {
    console.log(p1Msg);
    return Promise.reject("P2 rejected");
  })
  .catch((p1Err) => console.log(p1Err)) // this onelog executs
  .then(() => {
    console.log("Im here");

  })
  .catch((err) => console.log(err));

  
