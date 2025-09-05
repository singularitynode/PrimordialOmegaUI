import psutil
import os

class Monitor:
    def __init__(self):
        self.paths = [
            r"C:\Users\Darwin\Documents\MonitorThisFolder",
            r"C:\Users\Darwin\Desktop\Important"
        ]
    
    def get_status(self):
        process_data = []
        for proc in psutil.process_iter(['pid','name','cpu_percent']):
            process_data.append(proc.info)
        return {"processes": process_data, "folders": self.paths}
