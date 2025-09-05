from fastapi import FastAPI, WebSocket
from app.monitor import Monitor
from app.divine import divine_score
import asyncio

app = FastAPI()
monitor = Monitor()

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    while True:
        data = monitor.get_status()
        data["divine"] = divine_score(data)
        await ws.send_json(data)
        await asyncio.sleep(1)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
