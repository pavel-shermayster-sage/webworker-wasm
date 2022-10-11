import { feb } from "../build/release";

addEventListener("message", (e) => {
  console.log("WASM:Message received from main script", e);
  const start = performance.now();
  const workerResult = feb(e.data);
  const end = performance.now();
  console.log(`WASM: Call to doSomething took ${end - start} milliseconds.`);
  console.log("WASM: Posting message back to main script");
  postMessage(workerResult);
});
