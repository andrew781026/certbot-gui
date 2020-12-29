const {exec} = require('child_process');

const addSSL = domain => {

    const cmd = `certbot certonly --standalone -d ${domain} -n`

    const proc = exec(cmd);

    return new Promise((resolve, reject) => {

        const timerId = setTimeout(() => reject(new Error('error in add ssl')), 2000);

        proc.stdout.on("data", (data) => {

            const tooManyMsg = `too many certificates already issued for exact set of domains: `;
            const existedMsg = `Keeping the existing certificate`;
            const createMsg = `Congratulations! Your certificate and chain have been saved at`;
            const domainNotExistMsg = `check that a DNS record exists for`;

            // 如果收到下方資訊 , 代表近期建立太多次 , letsencrypt 拒絕請求
            if (data.indexOf(tooManyMsg) > -1) {

                // too many request
                clearTimeout(timerId);
                reject(new Error(tooManyMsg));
            }

            // SSL 憑證已存在
            else if (data.indexOf(existedMsg) > -1) {

                // certificate already exist
                clearTimeout(timerId);
                resolve(existedMsg);
            }

            // 域名不存在
            else if (data.indexOf(domainNotExistMsg) > -1) {

                // domain not found
                clearTimeout(timerId);
                reject(new Error(domainNotExistMsg));
            }

            // SSL 憑證建立成功
            else if (data.indexOf(createMsg) > -1) {

                // successfully created
                clearTimeout(timerId);
                resolve(createMsg);
            }
        });
    })
}

const deleteSSL = domain => {

    const cmd = `certbot delete --cert-name=${domain} -n`

    const proc = exec(cmd);

    return new Promise((resolve, reject) => {

        const timerId = setTimeout(() => reject(new Error('error in delete ssl')), 2000);

        proc.stdout.on("data", (data) => {

            const notExistMsg = `No certificate found with name`;
            const deleteMsg = `Deleted all files relating to certificate`;

            // SSL 憑證不存在
            if (data.indexOf(notExistMsg) > -1) {

                clearTimeout(timerId);
                reject(new Error(notExistMsg));
            }

            // SSL 憑證刪除成功
            else if (data.indexOf(deleteMsg) > -1) {

                clearTimeout(timerId);
                resolve(deleteMsg);
            }
        });
    })
}

const renewSSL = () => {

    const cmd = `certbot renew -n`

    const proc = exec(cmd);

    return new Promise((resolve, reject) => {

        const timerId = setTimeout(() => reject(new Error('error in renew ssl')), 2000);

        proc.stdout.on("data", (data) => {

            const notYetMsg = `Cert not yet due for renewal`;
            const renewMsg = `Congratulations, all renewals succeeded. The following certs have been renewed`;

            // SSL 憑證還沒到期 , 不用更新
            if (data.indexOf(notYetMsg) > -1) {

                clearTimeout(timerId);
                resolve(notYetMsg);
            }

            // SSL 更新成功
            else if (data.indexOf(renewMsg) > -1) {

                clearTimeout(timerId);
                resolve(renewMsg);
            }
        });
    })
}

/**
 * @return {Array}
 *   the array will look like BELOW :
 *       [
             {
                'Serial Number': '3f3b3ea60560c578de50ba7c2aa583d1f46',
                'Key Type': 'RSA',
                Domains: 'azure.stg.andrewdeveloper.com',
                'Expiry Date': '2021-03-24 07:35:35+00:00 (VALID: 89 days)',
                'Certificate Path': 'C:\\Certbot\\live\\azure.stg.andrewdeveloper.com\\fullchain.pem',
                'Private Key Path': 'C:\\Certbot\\live\\azure.stg.andrewdeveloper.com\\privkey.pem'
              },
             {
                'Serial Number': '35ea37b57e5e8d37f7f43603f49ab480f51',
                'Key Type': 'RSA',
                Domains: 'azure2.test.andrewdeveloper.com',
                'Expiry Date': '2021-03-22 04:57:48+00:00 (VALID: 87 days)',
                'Certificate Path': 'C:\\Certbot\\live\\azure2.test.andrewdeveloper.com\\fullchain.pem',
                'Private Key Path': 'C:\\Certbot\\live\\azure2.test.andrewdeveloper.com\\privkey.pem'
              }
         ]
 * */
const viewSSLs = async () => {

    const getInfos = () => {

        const cmd = `certbot certificates -n`

        return new Promise((resolve, reject) => {

            exec(cmd, (err, stdout) => err ? reject(err) : resolve(stdout));
        })
    }

    const formatter = info => {

        const msgArr = info.split('Certificate Name: ');

        const newArr = msgArr.map(str => {

            const temp = str.split('\n')

            if (temp[1].indexOf('Serial Number:') < 0) return null;
            else return {
                'Serial Number': temp[1].split('Serial Number: ').pop(),
                'Key Type': temp[2].split('Key Type: ').pop(),
                'Domains': temp[3].split('Domains: ').pop(),
                'Expiry Date': temp[4].split('Expiry Date: ').pop(),
                'Certificate Path': temp[5].split('Certificate Path: ').pop(),
                'Private Key Path': temp[6].split('Private Key Path: ').pop().replace('\r', ''),
            }
        })

        /*
        * ---- Output ------
        * [
          {
            'Serial Number': '3f3b3ea60560c578de50ba7c2aa583d1f46',
            'Key Type': 'RSA',
            Domains: 'azure.stg.andrewdeveloper.com',
            'Expiry Date': '2021-03-24 07:35:35+00:00 (VALID: 89 days)',
            'Certificate Path': 'C:\\Certbot\\live\\azure.stg.andrewdeveloper.com\\fullchain.pem',
            'Private Key Path': 'C:\\Certbot\\live\\azure.stg.andrewdeveloper.com\\privkey.pem'
          },
          {
            'Serial Number': '35ea37b57e5e8d37f7f43603f49ab480f51',
            'Key Type': 'RSA',
            Domains: 'azure2.test.andrewdeveloper.com',
            'Expiry Date': '2021-03-22 04:57:48+00:00 (VALID: 87 days)',
            'Certificate Path': 'C:\\Certbot\\live\\azure2.test.andrewdeveloper.com\\fullchain.pem',
            'Private Key Path': 'C:\\Certbot\\live\\azure2.test.andrewdeveloper.com\\privkey.pem'
          }
        ]
        * */

        return newArr.filter(Boolean)
    };

    const info = await getInfos();

    return formatter(info)
}

const settingEmail = email => {

    const cmd = `certbot update_account --email ${email} -n`

    const proc = exec(cmd);

    return new Promise((resolve, reject) => {

        const timerId = setTimeout(() => reject(new Error('error in setting email')), 2000);

        proc.stdout.on("data", (data) => {

            const updatedMsg = `Your e-mail address was updated to`;

            // 信箱更新成功 , 快過期時 , certbot 會寄信通知
            if (data.indexOf(updatedMsg) > -1) {

                clearTimeout(timerId);
                resolve(updatedMsg);
            }
        });
    })
}

const checkCertbotExistence = () => {

    return new Promise((resolve, reject) => {

        const errMsg = 'you must install certbot to your machine , the installer at : https://dl.eff.org/certbot-beta-installer-win32.exe';

        exec('certbot --version', (error, stdout) => {

            if (error) {

                const err = new Error();
                err.message = errMsg
                err.stack = error;
                reject(err)

            } else resolve(stdout)
        });
    })
}

module.exports = {
    viewSSLs,
    addSSL,
    deleteSSL,
    renewSSL,
    settingEmail,
    checkCertbotExistence,
}
