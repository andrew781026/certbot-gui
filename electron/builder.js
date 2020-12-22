
// 參考資料 : https://www.edwardbeazer.com/run-electron-applications-with-admin-privileges-in-windows/
const config = {
    "build": {
        "productName": "Product Name",
        "appId": "org.develar.ProductName",
        "files": [
            "app/dist/",
            "app/app.html",
            "app/main.prod.js",
            "app/main.prod.js.map",
            "package.json"
        ],
        "win": {
            "target": "nsis",
            "requestedExecutionLevel": "requireAdministrator"  // 以管理人員的身分安裝 APP
        },
        "nsis": {
            "guid": "eb1a0fbb-fc70-428e-97f1-fa7080894806",
            "oneClick": true,
            "perMachine": true
        },
    }
}
