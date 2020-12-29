export const back = () => window.history.back();
export const min = () => window.ipcRenderer.send('titlebar:minimize');
export const max = () => window.ipcRenderer.send('titlebar:maximize');
export const restore = () => window.ipcRenderer.send('titlebar:unmaximize');
export const exit = () => {

    console.log('exit');
    window.ipcRenderer.send('titlebar:exit');
};
