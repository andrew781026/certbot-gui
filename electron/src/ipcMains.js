import {ipcMain, BrowserWindow, shell} from 'electron';
import CertbotUtils from './utils/certbotUtils';
import NgrokUtils from './utils/ngrokUtil';

const listenerFn = fn => {

    return async function (event, args) {

        try {

            return await fn(args);
        } catch (e) {
            throw e.message
        }
    }
}

const showErrMsg = (event, err) => {
    console.error(err);
    event.reply('andrew:show-err-msg', err instanceof Error ? err.message : err);
};

const registerCertbotFn = () => {

    ipcMain.handle('certbot:addSSL', listenerFn(CertbotUtils.addSSL))

    ipcMain.handle('certbot:deleteSSL', listenerFn(CertbotUtils.deleteSSL))

    ipcMain.handle('certbot:viewSSLs', listenerFn(CertbotUtils.viewSSLs))

    ipcMain.handle('certbot:settingEmail', listenerFn(CertbotUtils.settingEmail))

    ipcMain.handle('certbot:checkCertbotExistence', listenerFn(CertbotUtils.checkCertbotExistence))

    ipcMain.handle('certbot:checkCertbotPermit', listenerFn(CertbotUtils.checkCertbotPermit))

};

const registerNgrokFn = () => {

    ipcMain.handle('ngrok:checkNgrokExistence', listenerFn(NgrokUtils.checkNgrokExistence))

    ipcMain.handle('ngrok:downloadNgrok', async function (event, args) {

        try {

            const duplexStream = NgrokUtils.downloadNgrok(args);

            // params = {data, downloadedLength, totalLength}
            const getDataCallback = params => event.sender.send('ngrok:got-data', params);
            duplexStream.on('got-data', getDataCallback);

            return await duplexStream
        } catch (e) {
            throw e.message
        }
    })

    ipcMain.handle('ngrok:connect', listenerFn(NgrokUtils.serverStart))

    ipcMain.handle('ngrok:disconnect', listenerFn(NgrokUtils.serverStop))

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

        // destroy = force close the app window
        BrowserWindow.fromWebContents(event.sender).destroy();
    })
}

ipcMain.on('andrew:open-url', (event, url) => shell.openExternal(url));

registerTitleBarFn();
registerCertbotFn();
registerNgrokFn();