const ngrok = require('ngrok');
const fs = require('fs');
const path = require('path');
const download = require('download');
const _ = require('lodash');

// 參考資料 : https://www.npmjs.com/package/ngrok
const ngrokUtil = {

    async downloadNgrok(
        url = 'https://github.com/andrew781026/certbot-gui/releases/download/v0.0.1-alpha/ngrok.exe',
        dest = "./bin/ngrok.exe",
        delay = 500,
    ) {

        // 限制每 0.5 秒至多執行 1 次
        const throttleFunc = _.throttle(func => func(), delay);

        let downloadedLength = 0;
        const writeStream = fs.createWriteStream(dest);
        // writeStream.on("finish", () => resolve('you success download the video'));
        // writeStream.on("error", err => reject(err));

        const duplexStream = download(url);

        duplexStream.on('response', res => {
            const totalLength = res.headers['content-length'];

            res.on('data', data => {
                downloadedLength += data.length;

                // 因為 duplexStream 是 EventEmitter 所以 emit channel : "got-data"
                const params = {data, downloadedLength, totalLength};
                throttleFunc(() => duplexStream.emit('got-data', params));
            });
        });

        duplexStream.on("error", err => console.error(err));

        duplexStream.pipe(writeStream);

        // duplexStream.pause();  // 下載暫停
        // duplexStream.resume(); // 下載繼續
        return duplexStream;
    },

    async checkNgrokExistence(exePath = "./bin/ngrok.exe") {

        // check "./bin/ngrok" existence
        try {

            return fs.statSync(exePath);

        } catch (e) {

            // Error: ENOENT: no such file or directory, stat './bin/ngrok.exe'
            throw e;
        }
    },

    async serverStart({exePath = 'D:\\test\\certbot-gui\\electron\\bin\\ngrok.exe', port}) {

        const binPath = path.dirname(exePath);

        // const url = await ngrok.connect(9090); 產生 proxy : https://757c1652.ngrok.io -> http://localhost:9090
        try {
            const rootUrl = await ngrok.connect({
                binPath: path => binPath, // custom binary path, eg for prod in electron
                addr: port
            });
            const apiUrl = ngrok.getUrl();
            console.log(`----OUT----- : ${rootUrl}`);
            console.log(`---TUNNEL--- : ${apiUrl}`);
            return rootUrl;
        } catch (e) {
            console.error("WWWWWWW");
            console.error(e);
        }

    },

    async serverStop(url) {

        ngrok.disconnect(url);
    },
}

// const rootUrl= ngrokUtil.getRootUrl({port:80});
// console.log(rootUrl);

module.exports = ngrokUtil;
