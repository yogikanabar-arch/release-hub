const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

// Disable auto-download — ask user first
autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    title: 'Release Hub',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      devTools: true
    },
    backgroundColor: '#0f1117',
    show: false
  });

  Menu.setApplicationMenu(null);
  mainWindow.loadFile('index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    // Check for updates 3 seconds after app opens
    setTimeout(() => checkForUpdates(), 3000);
  });

  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
}

const { net } = require('electron');

function checkForUpdates() {
  const currentVersion = app.getVersion();
  const req = net.request('https://api.github.com/repos/yogikanabar-arch/release-hub/releases/latest');
  req.setHeader('User-Agent', 'Release-Hub-App');
  req.on('response', (res) => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
      try {
        const release = JSON.parse(data);
        const latest = (release.tag_name || '').replace(/^v/, '');
        const isNewer = (a, b) => {
          const pa = a.split('.').map(Number);
          const pb = b.split('.').map(Number);
          for (let i = 0; i < 3; i++) {
            if ((pa[i]||0) > (pb[i]||0)) return true;
            if ((pa[i]||0) < (pb[i]||0)) return false;
          }
          return false;
        };
        if (latest && isNewer(latest, currentVersion)) {
          const dmgAsset = (release.assets || []).find(a => a.name.endsWith('-arm64.dmg') || a.name.endsWith('.dmg'));
          const downloadUrl = dmgAsset ? dmgAsset.browser_download_url : release.html_url;
          dialog.showMessageBox(mainWindow, {
            type: 'info',
            title: 'Update Available',
            message: `Release Hub v${latest} is available`,
            detail: `You are on v${currentVersion}.\n\nContact your TPM (Yogi) for the latest installer.\n\nYour data will not be affected.`,
            buttons: ['OK']
          });
        }
      } catch (e) { /* silent */ }
    });
  });
  req.on('error', () => { /* silent */ });
  req.end();
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
