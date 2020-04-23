const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([7, 4, 1]);
    reject("Failure");
  }, 2000);
});

// Promise stop when either resolve or reject is called

doWorkPromise
  .then((result) => {
    console.log("Success ", result);
  })
  .catch((error) => {
    console.log("Error ", error);
  });

//                         fufilled
//                         /
//   Promise -- pending -->
//                         \
//                         rejected
