import {ipcMain, BrowserWindow} from 'electron'

ipcMain.handle('andrew:isCertbotInstalled', async (event, args) => {

    // 使用 exec 確認 certbot 是否可以使用

    return true;
})

ipcMain.on('titlebar:minimize', event => {

    BrowserWindow.fromWebContents(event.sender).minimize();
})

ipcMain.on('titlebar:maximize', event => {

    BrowserWindow.fromWebContents(event.sender).maximize();
})

ipcMain.on('titlebar:unmaximize', event => {

    BrowserWindow.fromWebContents(event.sender).unmaximize();
})

ipcMain.on('titlebar:exit', event => {

    BrowserWindow.fromWebContents(event.sender).close();
})
