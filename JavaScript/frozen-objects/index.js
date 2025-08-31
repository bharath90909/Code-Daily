function objectFreeze(obj) {
  Object.freeze(obj);
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "object" && !Object.isFrozen(obj[key])) {
      objectFreeze(obj[key]);
    }
  }
}

const obj = {
  name: "Bharath",
  address: {
    city: "Tanuku",
    pinCode: 534216,
    region:{
        state:"AP",
        district:"WG"
    }
  },
};

objectFreeze(obj);

delete obj.name;
obj.name = "Kumar";
obj.address.ciy = "BGLR";
delete obj.address.region.state

console.log(Object.isFrozen(obj)); // true
console.log(Object.isFrozen(obj.address)); // true
console.log(Object.isFrozen(obj.address.region)); // true
console.log(obj);
