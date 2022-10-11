import {useEffect, useState} from "react";

const worker = new Worker(new URL("./worker.ts", import.meta.url));
const wasmWorker = new Worker(new URL("./worker-wasm.ts", import.meta.url), {
    type: "module",
});

const rustWorker = new Worker(new URL("./worker-rust.ts", import.meta.url), {
    type: "module",
});


function App() {
    const [count, setCount] = useState(0);
    const [workerCount, setWorkerCount] = useState(0);
    const [wasmCount, setWasmWorkerCount] = useState(0);
    const [rustCount, setRustWorkerCount] = useState(0);

    useEffect(() => {
        worker.onmessage = (e) => {
            setWorkerCount(e.data);
        };
    }, []);

    useEffect(() => {
        wasmWorker.onmessage = (e) => {
            setWasmWorkerCount(e.data);
        };
    });
    useEffect(() => {
        rustWorker.onmessage = (e) => {
            setRustWorkerCount(e.data);
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
                    }}
                >
                    worker
                </button>
                <button
                    onClick={() => {
                        wasmWorker.postMessage(45);
                    }}
                >
                    wasm
                </button>
                <button onClick={() => {
                    rustWorker.postMessage(45)
                }}>
                    rust
                </button>
                <div> worker count is {workerCount}</div>
                <div> wasmCount count is {wasmCount}</div>
                <div> rust worker count is {wasmCount}</div>
            </div>
        </div>
    );
}

export default App;
