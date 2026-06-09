# Building Release Hub Desktop App

## One-time setup

### 1. Install Node.js
Go to https://nodejs.org → download **LTS version** → install it.
Verify: open Terminal and run `node --version` (should show v20 or higher)

### 2. Install dependencies
Open Terminal, navigate to this folder:
```
cd /Users/yogi_may/Claude/release-dashboard
npm install
```
This installs Electron (~200MB, one time only).

### 3. Add an icon (optional but recommended)
Put your app icon in the `assets/` folder:
- `assets/icon.icns` — Mac icon (512x512 minimum)
- `assets/icon.ico` — Windows icon
If you skip this, Electron uses a default icon.

---

## Build the app

### Mac (.dmg installer)
```
npm run build:mac
```
Output: `dist/Release Hub-1.0.0.dmg`
→ Share this file. Team double-clicks to install like any Mac app.

### Windows (.exe installer)
```
npm run build:win
```
Output: `dist/Release Hub Setup 1.0.0.exe`
→ Share this file. Team double-clicks to install.

### Both platforms at once
```
npm run build:all
```
Note: building for Windows on a Mac requires Wine or a Windows machine.

---

## What the built app does

- Opens Release Hub as a native desktop app
- Connects to Firebase automatically (no setup needed)
- DevTools disabled — users cannot inspect or edit the source code
- Menu bar removed — no browser shortcuts like Ctrl+U (view source)
- All Firebase sync works exactly the same as before

---

## Testing before building

To run in development mode (not packaged):
```
npm start
```
This opens the app in a window. Close it to stop.

---

## Updating the app

1. Edit `index.html` as usual
2. Bump the version in `package.json` (e.g. "1.0.0" → "1.0.1")
3. Run `npm run build:mac` or `npm run build:win`
4. Share the new installer with your team
5. Team installs the new version (replaces the old one)

Data in Firebase is never affected by app updates.

---

## Baseline

The file `index-baseline-v1.html` is a saved copy of the app at the time this build was set up.
