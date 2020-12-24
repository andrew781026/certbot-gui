import {ipcMain, BrowserWindow} from 'electron';
import {checkCertbotExistence} from './utils/certbotUtils';

const showErrMsg = (event, err) => {
    console.error(err);
    event.reply('andrew:show-err-msg', err instanceof Error ? err.message : err);
};

ipcMain.handle('andrew:isCertbotInstalled', event => {

    return checkCertbotExistence().catch(err => showErrMsg(event, err));
})

const registerTitleBarFn = () => {

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
}

registerTitleBarFn();
