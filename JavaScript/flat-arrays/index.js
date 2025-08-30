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