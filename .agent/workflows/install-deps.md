---
description: Install all backend and frontend dependencies
---

# Install Project Dependencies

Set up all dependencies for both backend (Python) and frontend (Node.js).

## Backend Setup

1. Create and activate a Python virtual environment:
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent/backend"
python3 -m venv venv
source venv/bin/activate
```

// turbo
2. Install Python dependencies:
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent/backend" && source venv/bin/activate && pip install -r requirements.txt
```

## Frontend Setup

// turbo
3. Install Node.js dependencies:
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent/frontend" && npm install
```

## Verify Setup

4. Check backend installs correctly:
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent/backend" && source venv/bin/activate && python -c "import fastapi, groq, anthropic; print('Backend deps OK')"
```
