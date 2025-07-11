function fetchAPI() {
  console.log("fetching API....!!!");
}

function debounce(cb, limit) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, limit);
  };
}

const betterFun = debounce(fetchAPI, 500);

document.getElementById("input").addEventListener("input", () => {
  betterFun();
});
