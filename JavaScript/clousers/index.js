function x() {
  let counter = 0;
  return function y() {
    counter++;
    return counter;
    // console.log(counter);
    // return y;
  };
}

const counter = x();
console.log(counter());
console.log(counter());
console.log(counter());
// console.log(counter()()());

//Data hidding with clousers

//this is not data hiding

function Counter(){
    this.count=0;
}

const c1=new Counter()
const c2=new Counter()
c1.count=100
c2.count=2000
delete c2.count
console.log(c1.count);
console.log(c2.count);

//this is data hiding
function Counter1() {
  let count = 0; // 🔒 private

  this.increment = function () {
    count++;
    console.log(count);
  };

  this.getCount = function () {
    return count;
  };
}

const c11 = new Counter1();
const c22 = new Counter1();
c11.cou="COU";
console.log(c11.cou);


c11.increment(); // 1
c11.increment(); // 2
console.log(c11.getCount()); // 2
console.log(c11.count); //undefined

//dataa hiding with classes
class Hello{
    #count=0;
    inc(){
        this.#count++
        console.log(this.#count);
    }
}

const h=new Hello()
const h1=new Hello()
h.inc()
h.inc()
h1.inc()
