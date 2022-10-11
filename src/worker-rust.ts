import init, {feb} from "../feb-rust/pkg";

addEventListener("message", async (e) => {
    console.log("RUST:Message received from main script", e);
    const start = performance.now();
    await init();
    const workerResult = feb(e.data);
    const end = performance.now();
    console.log(`RUST: Call to doSomething took ${end - start} milliseconds.`);
    console.log("RUST: Posting message back to main script");
    postMessage(workerResult);
});
