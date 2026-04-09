---
description: Start the FastAPI backend server
---

# Run Backend Server

Start the Life Admin Agent FastAPI backend using uvicorn.

## Steps

1. Navigate to the backend directory:
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent/backend"
```

2. Activate the virtual environment:
```
source venv/bin/activate
```

3. Ensure environment variables are loaded (check `.env` is present):
```
cat .env
```

// turbo
4. Start the FastAPI server:
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent/backend" && source venv/bin/activate && uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will be available at: http://localhost:8000
API docs will be available at: http://localhost:8000/docs
