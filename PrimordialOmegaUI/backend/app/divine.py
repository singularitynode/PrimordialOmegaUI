def divine_score(data):
    score = sum(p['cpu_percent'] for p in data["processes"]) / max(len(data["processes"]),1)
    return round(score, 2)
