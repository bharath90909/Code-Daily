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
    city: "Banglore",
    region:{
        state:"Karnataka",
    }
  },
};

objectFreeze(obj);

delete obj.name;
obj.name = "Kumar";
obj.address.ciy = "HYD";
delete obj.address.region.state

console.log(Object.isFrozen(obj)); 
console.log(Object.isFrozen(obj.address)); 
console.log(Object.isFrozen(obj.address.region)); 
console.log(obj);