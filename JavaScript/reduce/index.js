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

console.log("RES7: ", res7);

// Challenge 1 – Group by first letter

// Group names by their first letter.

const names = ["Naruto", "Neji", "Sasuke", "Sakura", "Shikamaru", "Gaara"];

/* Expected:
{
    N: ["Naruto", "Neji"],
    S: ["Sasuke", "Sakura", "Shikamaru"],
    G: ["Gaara"]
    }
    */

const res8 = names.reduce((acc, name) => {
  const char = name.charAt(0);
  if (char in acc) {
    acc[char].push(name);
  } else {
    acc[char] = [name];
  }
  return acc;
}, {});
console.log("RES8: ", res8);

// Challenge 2 – Count vowels across all names

// Count how many vowels (a, e, i, o, u) appear in total.

const data = ["Naruto", "Sasuke", "Sakura"];

/* Expected:
{
    a: 4,
    u: 2,
    o: 1,
    e: 1
    }
    */

const vowels = new Set(["a", "e", "i", "o", "u"]);

const res9 = data.reduce((acc, ele) => {
  for (const char of ele) {
    if (vowels.has(char)) {
      acc[char] = (acc[char] || 0) + 1;
    }
  }
  return acc;
}, {});

console.log("RES9: ", res9);

// Challenge 3 – Find the longest name per city
const people = [
  { name: "Naruto", city: "Konoha" },
  { name: "Sasuke", city: "Konoha" },
  { name: "Gaara", city: "Suna" },
  { name: "Temari", city: "Suna" },
  { name: "Killer Bee", city: "Kumo" },
];

/* Expected:
{
  Konoha: "Sasuke",
  Suna: "Temari",
  Kumo: "Killer Bee"
}
*/

const res10 = people.reduce((acc, ele) => {
  const { name, city } = ele;
  if (city in acc) {
    acc[city] = name.length >= acc[city].length ? name : acc[city];
  } else {
    acc[city] = name;
  }
  return acc;
}, {});

console.log("RES10: ", res10);

// Final Ultra Boss – Flatten + Group

// Each city has squads (arrays inside arrays). Flatten them and count total people per city.

const villages = [
  {
    city: "Konoha",
    squads: [
      ["Naruto", "Sasuke"],
      ["Sakura", "Kakashi"],
    ],
  },
  { city: "Suna", squads: [["Gaara"], ["Temari", "Kankuro"]] },
  { city: "Kumo", squads: [["Killer Bee"]] },
];

/* Expected:
{
    Konoha: { count: 4, names: ["Naruto", "Sasuke", "Sakura", "Kakashi"] },
    Suna: { count: 3, names: ["Gaara", "Temari", "Kankuro"] },
    Kumo: { count: 1, names: ["Killer Bee"] }
    }
    */

const res11 = villages.reduce((acc, ele) => {
  const { city, squads } = ele;
  const flattenSquads = squads.flat(1);
  acc[city] = {
    count: flattenSquads.length,
    name: [...flattenSquads],
  };
  return acc;
}, {});
console.log("RES11: ", res11);

function flattenArray(arr) {
  const res = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      res.push(...flattenArray(ele));
    } else {
      res.push(ele);
    }
  }
  return res;
}

console.log(
  flattenArray([
    [1, 2, [3, 4, 5]],
    [6, [7, [8]]],
  ])
);

// or

console.log(
  [
    [1, 2, [3, 4, 5]],
    [6, [7, [8]]],
  ].flat(Infinity)
);
