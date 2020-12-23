module.exports = {
    pluginOptions: {
        electronBuilder: {
            preload: 'src/preload.js',
            outputDir: 'electron_output', // 輸出資料夾
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
                // ref : https://www.electron.build/configuration/configuration
                productName: "certbot-gui-tool",
                appId: "com.andrewdeveloper.tool.certbot",
                win: {
                    target: "nsis",
                    requestedExecutionLevel: "requireAdministrator",  // 以管理人員的身分安裝 APP
                    icon: 'public/electron-certbot-icon.ico', // 安裝檔圖示
                },
            }
        }
    }
}