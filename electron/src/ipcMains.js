import {ipcMain} from 'electron'

ipcMain.handle('andrew:isCertbotInstalled', async (event, args) => {

    // 使用 exec 確認 certbot 是否可以使用

    return true;
})


