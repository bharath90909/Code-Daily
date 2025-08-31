const obj = {
  a: 1,
  b: 2,
  c: 3,
};
//print as [[a,1],[b,2],[c,3]]
const result = Object.keys(obj).map((key) => [key, obj[key]]);
console.log(result);
const objResult = Object.fromEntries(result);
console.log(objResult);

const backToObject = result.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

console.log(backToObject);

//  Write a function which converts string input into an object
const str = "name=Bharath,age=25,city=Tanuku";

function stringToObject(str) {
  const res = {};
  const words = str.split(",");
  words.forEach((word) => {
    const [key, value] = word.split("=");
    res[key] = value;
  });
  return res;
}

console.log(stringToObject(str));
