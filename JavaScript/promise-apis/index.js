const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1 resolved");
  }, 3000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("p2 rejected");
  }, 2000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p3 resolved");
  }, 1000);
});

async function promiseApis() {
  try {
    const res = await Promise.all([p1, p2, p3]);
    // const res = await Promise.allSettled([p1, p2, p3]);
    // const res = await Promise.race([p1, p2, p3]);
    // const res = await Promise.any([p1, p2, p3]);
    console.log(res);
  } catch (err) {
    console.log("Error::", err);
  }
}
promiseApis();
