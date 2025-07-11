from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

# Defining the request body format
class TextInput(BaseModel):
    text: str

# Defining the endpoint
@app.post("/analyze")
def analyze_emotion(data: TextInput):
    emotion_map = {
        "happy😁": ["joy", "excitement", "contentment", "pride"],
        "sad😔": ["disappointment", "loneliness", "guilt", "regret"],
        "angry😡": ["frustration", "rage", "irritation", "resentment"],
        "surprised🤯": ["shock", "amazement", "awe", "confusion"],
        "neutral😑": ["calm", "indifference", "boredom", "acceptance"]
    }

    primary_emotion = random.choice(list(emotion_map.keys()))
    sub_emotion = random.choice(emotion_map[primary_emotion])
    intensity = f"{random.randint(40, 95)}%"

    return {
        "emotion": primary_emotion,
        sub_emotion: intensity
    }
