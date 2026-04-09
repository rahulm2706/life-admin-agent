---
description: Start both backend and frontend servers together (full stack)
---

# Run Full Stack (Backend + Frontend)

Starts the FastAPI backend and Vite frontend concurrently for local development.

## Steps

1. Open **Terminal 1** — Start the backend:
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent/backend" && source venv/bin/activate && uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

2. Open **Terminal 2** — Start the frontend:
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent/frontend" && npm run dev
```

## URLs

| Service  | URL                        |
|----------|----------------------------|
| Frontend | http://localhost:5173       |
| Backend  | http://localhost:8000       |
| API Docs | http://localhost:8000/docs  |
