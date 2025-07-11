console.log(window);
console.log(this === window);

k = 100;
console.log(window.k);
var s= 50;
console.log(window.s);

let z = 200;
console.log("let",window.z);

(() => {
  console.log(this);
})();

function x() {
  console.log(this);
}
x();

const y = function () {
  console.log(this);
};
y();

const a = {
  b: "value",
  fun1: function () {
    console.log(this);
  },
  fun2: () => {
    console.log(this.a?.b);
    console.log(this.a.b);
  },
};

a.fun1();
a.fun2();

const button=document.getElementById("button")
button.addEventListener("click",function(){
    this.style.backgroundColor="red"
})
button.addEventListener("click",()=>{
    this.style.backgroundColor="blue"
})

