function windowSize() {
  console.log("Window Resizing");
}

function throttle(cb, limit) {
  let isResizing = false;
  return () => {
    if (!isResizing) {
      isResizing = true;
      setTimeout(() => {
        cb();
        isResizing = false;
      }, limit);
    }
  };
}
const resize = throttle(windowSize, 2000);

window.addEventListener("resize", () => {
  resize();
});
