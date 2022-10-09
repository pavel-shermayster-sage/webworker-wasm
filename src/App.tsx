import { useEffect, useState } from "react";
import { feb } from "../build/release";

const worker = new Worker(new URL("./worker.ts", import.meta.url));

function App() {
  const [count, setCount] = useState(0);
  const [workerCount, setWorkerCount] = useState(0);
  const [wasmCount, setWasmCount] = useState(0);
  useEffect(() => {
    worker.onmessage = (e) => {
      setWorkerCount(e.data);
    };
  }, []);

  return (
    <div className="App">
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <button
          onClick={async () => {
            worker.postMessage(45);
            // const start = performance.now();
            // const result = feb(45);
            // const end = performance.now();
            // console.log("wasm", end - start);
            // setWasmCount(result);
          }}
        >
          worker
        </button>
        <div> worker count is {workerCount}</div>
        <div> wasmCount count is {wasmCount}</div>
      </div>
    </div>
  );
}

export default App;
