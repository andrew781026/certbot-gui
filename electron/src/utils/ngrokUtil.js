const ngrok = require('ngrok');

// 參考資料 : https://www.npmjs.com/package/ngrok
const ngrokUtil = {

    async getRootUrl({port}) {
        // const url = await ngrok.connect(9090); 產生 proxy : https://757c1652.ngrok.io -> http://localhost:9090
        try{
            const rootUrl = await ngrok.connect(port);
            const apiUrl = ngrok.getUrl();
            console.log(`----OUT----- : ${rootUrl}`);
            console.log(`---TUNNEL--- : ${apiUrl}`);
            return rootUrl;
        } catch(e) {
            console.error("WWWWWWW");
            console.error(e);
        }

    },
}

const rootUrl= ngrokUtil.getRootUrl({port:80});
console.log(rootUrl);

module.exports = ngrokUtil;
