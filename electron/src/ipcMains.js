import {ipcMain, BrowserWindow} from 'electron';
import CertbotUtils from './utils/certbotUtils';

const showErrMsg = (event, err) => {
    console.error(err);
    event.reply('andrew:show-err-msg', err instanceof Error ? err.message : err);
};

const registerCertbotFn = () => {

    ipcMain.handle('certbot:addSSL', async (event, domain) => {

        try {
            return await CertbotUtils.addSSL(domain);
        } catch (e) {
            throw e.message
        }
    })

    ipcMain.handle('certbot:deleteSSL', async (event, domain) => {

        try {
            return await CertbotUtils.deleteSSL(domain);
        } catch (e) {
            throw e.message
        }
    })

    ipcMain.handle('certbot:viewSSLs', async () => {

        try {
            return await CertbotUtils.viewSSLs();
        } catch (e) {
            throw e.message
        }
    })

    ipcMain.handle('certbot:settingEmail', async (event, email) => {

        try {
            return await CertbotUtils.settingEmail(email);
        } catch (e) {
            throw e.message
        }
    })

    ipcMain.handle('certbot:checkCertbotExistence', async () => {

        try {
            return await CertbotUtils.checkCertbotExistence();
        } catch (e) {
            throw e.message
        }
    })

};

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
registerCertbotFn();