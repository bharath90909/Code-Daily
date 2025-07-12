Array.prototype.my_fun = function () {
  console.log("My own Array function");
};

Array.prototype.my_length=100
const a = [];
a.my_fun();
console.log(a.my_length);
