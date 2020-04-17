// object property shorthand

const name = "Jason";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Singapore",
};
console.log(user);

// object destructuring

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 200,
  salePrice: undefined,
  ratings: 4.2,
};
const { label, price, stock, salePrice } = product;
console.log(label);

const transaction = (type, { label, price, stock, ratings }) => {
  console.log(type, label, price, stock, ratings);
};

transaction("order", product);
