#  Emotion Reflection Tool

A simple mobile-first web app that allows users to enter a short reflection (e.g., “I feel nervous about my first job interview”) and receive a mock emotional analysis.

##  Tech Stack

- **Frontend:** Next.js (TypeScript), Tailwind CSS
- **Backend:** FastAPI (Python)
- **API Output:** `{emotion: 'neutral😑', boredom: '63%'}`

---

##  Getting Started

###  Project Structure
emotion-reflection-tool/
- ├── backend/
- │ └── main.py
- ├── emotion-tool/ (frontend)
- │ └── pages/
- │ └── index.tsx
- └── README.md


---

## 🧩 Setup Instructions

### ✅ Backend (FastAPI)

1. Navigate to the backend folder:
   ```bash
   cd server
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate        # Linux/Mac
   venv\Scripts\activate           # Windows
   ```

3. Install dependencies:
   ```bash
   pip install fastapi uvicorn
   or
   pip install -r requirements.txt
   ```

4. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```


### Frontend (Next.js + TypeScript)

1. Navigate to the frontend folder:
   ```bash
   cd client/my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```


API Integration
The frontend sends a POST request to: http://localhost:8000/analyze

Example JSON response from the backend:
```bash
{emotion: 'neutral😑', boredom: '63%'}
```


### Features
- Mobile-first responsive UI
- User input via a clean textarea
- Loading state during API call
- Display emotion result in a styled card
- Graceful error handling
   
   
      
   
