const ipcRenderer = window.ipcRenderer

export const ngrokConnect = args => ipcRenderer.invoke('ngrok:connect', args);
export const ngrokDisconnect = url => ipcRenderer.invoke('ngrok:disconnect', url);
