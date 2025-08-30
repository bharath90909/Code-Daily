// You have an array of strings. Use reduce to count how many characters are in total.

const words = ["manga", "ninja", "samurai"];
// Expected: 16
const res = words.reduce((count, ele) => {
  count += ele.length;
  return count;
}, 0);

console.log("COUNT: ", res);

// You have an array of objects (students with scores). Use reduce to get the average score.

const students = [
  { name: "Naruto", score: 80 },
  { name: "Sasuke", score: 95 },
  { name: "Sakura", score: 70 },
];

const res1 =
  students.reduce((sum, ele) => {
    sum += ele.score;
    return sum;
  }, 0) / students.length;
console.log("AVG: ", res1.toFixed(2));

// You have an array of words. Use reduce to create an object frequency counter.

const items = ["katana", "kunai", "katana", "shuriken", "katana"];

const res2 = items.reduce((acc, key) => {
  acc[key] = (acc[key] || 0) + 1;
  //   if (key in acc) {
  //     acc[key] += 1;
  //   } else {
  //     acc[key] = 1;
  //   }
  return acc;
}, {});

console.log("FREQ: ", res2);

// You are given an array of characters. Each character has a list of powers.
// Use reduce to create a unique list of all powers (no duplicates).

const characters = [
  { name: "Goku", powers: ["Kamehameha", "Flight"] },
  { name: "Vegeta", powers: ["Final Flash", "Flight"] },
  { name: "Gohan", powers: ["Masenko", "Flight"] },
];

/* Expected:
["Kamehameha", "Flight", "Final Flash", "Masenko"]
*/
const res3 = characters.reduce((acc, ele) => {
  ele.powers.forEach((power) => {
    if (!acc.includes(power)) acc.push(power);
  });
  return acc;
}, []);

console.log("Res3: ", res3);

// Level 1 – Count people per city
const people1 = [
  { name: "Naruto", city: "Konoha" },
  { name: "Sasuke", city: "Konoha" },
  { name: "Gaara", city: "Suna" },
  { name: "Killer Bee", city: "Kumo" },
];

/* Expected:
{
  Konoha: 2,
  Suna: 1,
  Kumo: 1
}
*/

const res4 = people1.reduce((acc, ele) => {
  acc[ele.city] = (acc[ele.city] || 0) + 1;
  return acc;
}, {});

console.log("RES4: ", res4);

// Level 2 – Group names by city
const people2 = [
  { name: "Naruto", city: "Konoha" },
  { name: "Sasuke", city: "Konoha" },
  { name: "Gaara", city: "Suna" },
  { name: "Temari", city: "Suna" },
];

/* Expected:
{
    Konoha: ["Naruto", "Sasuke"],
    Suna: ["Gaara", "Temari"]
    }
    */

const res5 = people2.reduce((acc, ele, i) => {
  const { name, city } = ele;
  if (city in acc) {
    acc[city].push(name);
  } else {
    acc[city] = [name];
  }
  return acc;
}, {});

console.log("RES5: ", res5);

// Level 4 – Unique cities list
const people3 = [
  { name: "Naruto", city: "Konoha" },
  { name: "Sasuke", city: "Konoha" },
  { name: "Gaara", city: "Suna" },
  { name: "Temari", city: "Suna" },
  { name: "Killer Bee", city: "Kumo" },
];

/* Expected:
["Konoha", "Suna", "Kumo"]
*/

const res6 = people3.reduce((acc, ele) => {
  if (!acc.includes(ele.city)) acc.push(ele.city);

  return acc;
}, []);

console.log("RES6: ", res6);

// Final Boss – Nested city object

// Build a structure that shows each city → people names count + people names list.

const people4 = [
  { name: "Naruto", city: "Konoha" },
  { name: "Sasuke", city: "Konoha" },
  { name: "Gaara", city: "Suna" },
  { name: "Temari", city: "Suna" },
  { name: "Killer Bee", city: "Kumo" },
];

/* Expected:
{
  Konoha: { count: 2, names: ["Naruto", "Sasuke"] },
  Suna: { count: 2, names: ["Gaara", "Temari"] },
  Kumo: { count: 1, names: ["Killer Bee"] }
}
*/

const res7 = people4.reduce((acc, ele) => {
  const { name, city } = ele;
  if (city in acc) {
    const { names } = acc[city];
    acc[city] = {
      count: names.length + 1,
      names: [...names, name],
    };
  } else {
    acc[city] = {
      count: 1,
      names: [name],
    };
  }
  return acc;
}, {});

console.log("RES7: ",res7);

