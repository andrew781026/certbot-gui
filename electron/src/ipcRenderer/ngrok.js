const ipcRenderer = window.ipcRenderer

export const checkNgrokExistence = () => ipcRenderer.invoke('ngrok:checkNgrokExistence');
export const downloadNgrok = () => ipcRenderer.invoke('ngrok:downloadNgrok');
export const ngrokConnect = args => ipcRenderer.invoke('ngrok:connect', args);
export const ngrokDisconnect = url => ipcRenderer.invoke('ngrok:disconnect', url);
