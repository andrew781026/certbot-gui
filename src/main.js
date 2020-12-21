// Modules to control application life and create native browser window
const {app, ipcMain, dialog, BrowserWindow} = require('electron');
const path = require('path');
require('./log4js').initLog4js({log4js});

require('electron-reload')(__dirname);

let win;

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        frame: false,
        transparent: true,
        autoHideMenuBar: true,
        width: 800,
        height: 610,
        webPreferences: {
            preload: path.join(__dirname, './preload.js')
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile('./index.html');

    win = mainWindow;

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();
}

app.on('ready', () => createWindow()) // Main Process 準備 OK 後 , 建立一個 瀏覽器視窗 顯示給使用者
app.on('window-all-closed', () => app.quit()) // 所有 BrowserWindow 關閉後 , 結束 Main Process

// log the uncaught error
process.on('uncaughtExceptionMonitor', (err, origin) => console.error(origin, err));
