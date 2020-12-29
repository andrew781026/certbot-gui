const ipcRenderer = window.ipcRenderer

export const ngrokConnect = port => ipcRenderer.invoke('ngrok:connect', port);
export const ngrokDisconnect = url => ipcRenderer.invoke('ngrok:disconnect', url);
