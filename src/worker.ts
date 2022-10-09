addEventListener("message", (e) => {
  console.log("Message received from main script", e);
  const start = performance.now();
  const workerResult = feb(e.data);
  const end = performance.now();
  console.log(`Call to doSomething took ${end - start} milliseconds.`);
  console.log("Posting message back to main script");
  postMessage(workerResult);
});

function feb(n = 10): number {
  if (n < 2) return n;
  return feb(n - 1) + feb(n - 2);
}
