# How to Install and Run Vision Academy Website

All files are located in: `c:\Users\radha\OneDrive\Desktop\v5`

## 1. Install Prerequisites
Before you begin, make sure you have the following installed on your computer:
1.  **Node.js**: [Download from nodejs.org](https://nodejs.org/) (LTS version recommended).
2.  **MongoDB Community Server**: [Download from mongodb.com](https://www.mongodb.com/try/download/community).
    *   *Important*: During installation, make sure "Install MongoDB as a Service" is checked.
    *   After installation, it should run automatically in the background.

## 2. Install Project Dependencies
You need to install the libraries for both the backend and frontend.

**Open a Terminal (Command Prompt / PowerShell)** and run these commands one by one:

```bash
cd c:\Users\radha\OneDrive\Desktop\v5

# Install Backend Dependencies
cd backend
npm install

# Go back to root
cd ..

# Install Frontend Dependencies
cd frontend
npm install
```

## 3. Run the Project
You have two ways to run the project.

### Option A: The "One-Click" Way (Recommended)
1.  Open the folder `c:\Users\radha\OneDrive\Desktop\v5`.
2.  Double-click the file named **`start_app.bat`**.
3.  This will automatically open two windows and start both the website and the server.

### Option B: The Manual Way
Open two separate Terminal windows.

**Terminal 1 (Backend):**
```bash
cd c:\Users\radha\OneDrive\Desktop\v5\backend
npm start
```
*You should see: "Server running on port 5000" and "MongoDB Connected"*

**Terminal 2 (Frontend):**
```bash
cd c:\Users\radha\OneDrive\Desktop\v5\frontend
npm run dev
```
*You should see a link like `http://localhost:5173` or `http://localhost:5176`.*
*Open that link in your browser.*

## 4. Troubleshooting
- **Database Error?** If you see connection errors in the backend terminal, make sure MongoDB is running. You can start it from "Services" in Windows or run `mongod` in a new terminal.
- **Port Busy?** If a port is taken, the command will usually tell you or pick the next available one (like 5174). Look at the terminal output to see the correct link.
