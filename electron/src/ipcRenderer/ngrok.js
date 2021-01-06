const ipcRenderer = window.ipcRenderer

export const checkNgrokExistence = () => ipcRenderer.invoke('ngrok:checkNgrokExistence');
export const downloadNgrok = () => ipcRenderer.invoke('ngrok:downloadNgrok');
export const ngrokConnect = args => ipcRenderer.invoke('ngrok:connect', args);
export const ngrokDisconnect = url => ipcRenderer.invoke('ngrok:disconnect', url);

// the listener wrapper
export const gotDataListener = cb => ipcRenderer.on('ngrok:got-data', (event, params) => {

    const {data, downloadedLength, totalLength} = params;
    cb({data, downloadedLength, totalLength});
});

export const errMsgListener = cb => ipcRenderer.on('ngrok:download-error', (event, errMsg) => cb(errMsg));
