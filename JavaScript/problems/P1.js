// Program to find longest word in a given sentence

function longestWord(sen) {
  let longestWord = "";
  for (let word of sen.split(" ")) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
const sentence = "Hi Good Morning";

console.log(longestWord(sentence));

//  . How to check whether a string is palindrome or not ?
function palindrome(word) {
  return word === word.split("").reverse().join("");
}

console.log(palindrome("malayalam"));

// Find the max count of consecutive 1’s in an array ?
//Method 1
function maxOnes(arr) {
  let start = -1,
    end = -1;
  let maxOnesCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (arr[i] === 1) {
      if (start === -1) {
        start = i;
      }
      end = i + 1;
    } else {
      maxOnesCount = Math.max(maxOnesCount, end - start);
      start = -1;
      end = -1;
    }
  }
  if (start !== -1) {
    maxOnesCount = Math.max(maxOnesCount, end - start);
  }
  return maxOnesCount;
}

//Method 2
function maxOnes(arr) {
  let maxCount = 0,
    count = 0;

  for (let num of arr) {
    if (num === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }

  return maxCount;
}

console.log(maxOnes([1, 1, 2, 3, 1, 1, 1])); // 3

const nums = [1, 1, 2, 3, 1, 1, 1];

console.log(maxOnes(nums));

// Given 2 arrays  [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

function merge(arr1, arr2) {
  const res = arr1.concat(arr2);
  return res.sort((a, b) => a - b);
}
console.log(merge([0, 3, 4, 31], [4, 6, 30]));

// 10. Write logic to get unique objects from below array ?
const data = [
  { name: "sai" },
  { name: "Mehul" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}

const uniqueValues = data.reduce((acc, ele) => {
  const { name } = ele;
  if (!(acc[name] in acc)) {
    acc[name] = ele;
  }
  return acc;
}, {});

const res = Object.keys(uniqueValues).map((key) => {
  return { name: uniqueValues[key].name };
});

console.log(res);

// Write a JavaScript program to find the largest element in a nested array.

function flattenArray(arr) {
  const result = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      result.push(...flattenArray(ele));
    } else {
      result.push(ele);
    }
  }
  return result;
}
const arr = [
  [3, 4, 58],
  [709, 8, 9, [10, 11]],
  [111, 2],
];

const flatArray = flattenArray(arr);
console.log(flatArray);
console.log(Math.max(...flatArray));

function fib(n) {
  let seqLimit = n + 1;
  if (seqLimit === 1) return 0;
  const seq = [0, 1];
  for (let i = 2; i < seqLimit; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  console.log(seq);

  return seq[n];
}

console.time("fib");
console.log(fib(10));
console.timeEnd("fib");

// 16. Given a string, write a javascript function to count the occurrences of each character in the string

function countOcc(str) {
  const res = {};
  for (let char of str) {
    res[char] = (res[char] || 0) + 1;
  }
  return res;
}

console.log(countOcc("Bharath"));

// 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

function reverseSentence(sentence) {
  //"Hi Bharath" ==> Bharath Hi
  const words = sentence.split(" ");
  let right = 0,
    left = words.length - 1;
  while (right < left) {
    [words[left], words[right]] = [words[right], words[left]];
    right++;
    left--;
  }
  const res = words.join(" ");
  return res;
}

console.log(reverseSentence("Hi Bharath Kumar"));

function reverseString(str) {
  let right = 0,
    left = str.length - 1;
  let chars = str.split("");

  while (right < left) {
    [chars[left], chars[right]] = [chars[right], chars[left]];
    right++;
    left--;
  }
  return chars.join("");
}

function reverseEachWord(sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words.splice(i, 1, reverseString(words[i]));
  }

  return words.join(" ");
}

console.log(reverseEachWord("Hi Bharath"));

function xyz(obj) {
  return obj;
}
const ABC = { 1: "one" };

const abc = xyz(ABC);

abc[2]="two"
console.log(ABC);
console.log(abc);

