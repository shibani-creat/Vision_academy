@echo off
echo Starting Vision Academy Website...

start "Vision Academy Backend" cmd /k "cd backend && npm start"
timeout /t 5
start "Vision Academy Frontend" cmd /k "cd frontend && npm run dev"

echo Servers starting...
echo Backend: http://localhost:5000
echo Frontend: Check the second terminal for the URL (usually http://localhost:5173 or 5176)
