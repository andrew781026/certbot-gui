export const openUrl = url => window.ipcRenderer.send('andrew:open-url', url)
