# TODO: Upload to Git and Host Vision Academy

## Completed Steps
- [x] Initialize Git repository in v5/
- [x] Add remote origin pointing to https://github.com/shibani-creat/Vision_academy.git
- [x] Add all project files to Git
- [x] Commit with message "Initial commit for Vision Academy"
- [x] Pull from remote and merge
- [x] Push to GitHub master branch

## Next Steps
- [x] Choose hosting platform: Railway (full-stack with free tier)
- [x] Create railway.json for deployment config
- [ ] Deploy to Railway:
  - Go to https://railway.app and sign up/login
  - Click "New Project" > "Deploy from GitHub repo"
  - Connect your GitHub account and select "shibani-creat/Vision_academy"
  - Railway will auto-detect the config and deploy
- [ ] Add MongoDB service on Railway:
  - In Railway dashboard, add a new service > Database > MongoDB
  - Copy the MONGODB_URI from the MongoDB service variables
- [ ] Configure environment variables:
  - In Railway project settings, add env vars: MONGODB_URI (from MongoDB service), PORT=5000
- [ ] Test live application
