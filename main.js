const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

// Disable auto-download — ask user first
autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;

// Required for private GitHub repo
autoUpdater.requestHeaders = { 'Authorization': 'token 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' };

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
      devTools: false
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

function checkForUpdates() {
  autoUpdater.checkForUpdates().catch(() => {
    // Silent fail if no internet or no releases yet
  });
}

// Update available — ask user if they want to download
autoUpdater.on('update-available', (info) => {
  dialog.showMessageBox(mainWindow, {
    type: 'info',
    title: 'Update Available',
    message: `Release Hub v${info.version} is available`,
    detail: 'A new version is ready. Download and install now?\n\nYour data will not be affected.',
    buttons: ['Download & Install', 'Later'],
    defaultId: 0
  }).then(({ response }) => {
    if (response === 0) {
      autoUpdater.downloadUpdate();
      // Show downloading message
      dialog.showMessageBox(mainWindow, {
        type: 'info',
        title: 'Downloading Update',
        message: 'Downloading update in the background…',
        detail: 'Release Hub will restart automatically when ready.',
        buttons: ['OK']
      });
    }
  });
});

// Download complete — restart to apply
autoUpdater.on('update-downloaded', () => {
  dialog.showMessageBox(mainWindow, {
    type: 'info',
    title: 'Update Ready',
    message: 'Update downloaded',
    detail: 'Release Hub will now restart to apply the update.',
    buttons: ['Restart Now']
  }).then(() => {
    autoUpdater.quitAndInstall();
  });
});

// Already on latest version — silent, no popup
autoUpdater.on('update-not-available', () => {
  // Silent — don't bother the user
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
