import EventEmitter from "eventemitter3";

const emitter = new EventEmitter();

const ws = new WebSocket("ws://127.0.0.1:8000/ws");

ws.onopen = () => console.log("WebSocket connected.");
ws.onclose = () => console.log("WebSocket disconnected.");
ws.onerror = (err) => console.error("WebSocket error:", err);
ws.onmessage = (event) => {
  try {
    const data = JSON.parse(event.data);
    emitter.emit("update", data);
  } catch (err) {
    console.error("Failed to parse WebSocket message:", err);
  }
};

export default emitter;
