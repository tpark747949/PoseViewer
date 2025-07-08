from fastapi import HTTPException
from pydantic import BaseModel
from typing import List
import json
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
import aiofiles
from fastapi import Body

USERS_FILE = "users.json"
UPLOAD_DIR = "uploaded_videos"
os.makedirs(UPLOAD_DIR, exist_ok=True)

app = FastAPI()

class User(BaseModel):
    name: str
    department: str
    role: str
    email: str
    password: str = ""  # Optional for now

def load_users():
    if not os.path.exists(USERS_FILE):
        return []
    with open(USERS_FILE, "r") as f:
        return json.load(f)

def save_users(users):
    with open(USERS_FILE, "w") as f:
        json.dump(users, f)

# ✅ CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["*"] for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register user endpoint
@app.post("/register")
async def register_user(user: User):
    users = load_users()
    # Check for duplicate email
    if any(u["email"] == user.email for u in users):
        raise HTTPException(status_code=400, detail="Email already registered.")
    users.append(user.dict())
    save_users(users)
    return {"message": "User registered successfully!"}

# Get all users endpoint (for login)
@app.get("/users")
async def get_users():
    users = load_users()
    return users

@app.put("/users/update")
async def update_user_info(
    email: str = Body(...),
    name: str = Body(...),
    department: str = Body(...),
    role: str = Body(...),
):
    users = load_users()
    for user in users:
        if user["email"] == email:
            user["name"] = name
            user["department"] = department
            user["role"] = role
            save_users(users)
            return {"message": "User info updated successfully", "user": user}
    raise HTTPException(status_code=404, detail="User not found")




@app.post("/upload")
async def upload_video(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    async with aiofiles.open(file_path, 'wb') as out_file:
        content = await file.read()
        await out_file.write(content)

    return {"message": f"'{file.filename}' uploaded successfully!"}
