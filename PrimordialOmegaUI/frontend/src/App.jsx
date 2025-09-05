import React, { useEffect, useState } from "react";
import emitter from "./WebSocket";

export default function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    const handleUpdate = (data) => {
      setState(data);
    };
    emitter.on("update", handleUpdate);

    return () => {
      emitter.off("update", handleUpdate);
    };
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h1>Primordial Omega AV – Live Monitoring</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
