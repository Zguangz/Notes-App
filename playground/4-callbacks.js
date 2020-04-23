// setTimeout(() => {
//   console.log("2 Second Timer");
// }, 2000);

// const names = ["Andrew", "Jen", "Jess"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });
// console.log(shortNames);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// const data = geocode("Philadelphia", (data) => {
//   console.log(data);
// });

// const add = (x, y, callback) => {
//   setTimeout(() => {
//     callback(x + y);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum); // should print 5
// });

const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is my error", undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
