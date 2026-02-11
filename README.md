# Vision Academy Website

This project is a full-stack website for Vision Academy, built with:
- **Frontend**: React (Vite) + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB

## Prerequisite
Ensure **MongoDB** is installed and running locally on your system.

## Project Structure
- `frontend/`: Contains the React application code.
- `backend/`: Contains the server API and database models.

## How to Run

### Method 1: One-Click Script
Double-click the `start_app.bat` file in this folder. It will open two terminal windows: one for the backend and one for the frontend.

### Method 2: Manual Start
You need to open two terminals.

**Terminal 1 (Backend):**
```bash
cd backend
npm start
``` 
Server will run on: http://localhost:5000

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```
Website will run on: http://localhost:5176 (or similar port shown in terminal)

## Features
- **Home**: Hero section with stats.
- **About**: Vision, Mission, and details.
- **Programs**: Summer, Offline, and Online courses.
- **Faculty/Team**: Staff profiles.
- **Enquiry Form**: Submits data to the MongoDB database.
