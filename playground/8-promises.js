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

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

add(1, 1)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((error) => {
    console.log(error);
  });
