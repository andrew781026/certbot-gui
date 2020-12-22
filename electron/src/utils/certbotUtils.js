const {exec} = require('child_process');
const events = require('events');

const addSSL = domain => {

    const cmd = `certbot certonly --standalone -d ${domain} -n`

    const proc = exec(cmd);

    const emitter = new events.EventEmitter();

    proc.stdout.on("data", (data) => {

        console.log(data);

        const tooManyMsg = `too many certificates already issued for exact set of domains: `;
        const existedMsg = `Keeping the existing certificate`;
        const createMsg = `Congratulations! Your certificate and chain have been saved at`;
        const domainNotExistMsg = `check that a DNS record exists for`;

        // 如果收到下方資訊 , 代表近期建立太多次 , letsencrypt 拒絕請求
        if (data.indexOf(tooManyMsg) > -1) {

            emitter.emit('error', new Error(tooManyMsg))

        }

        // SSL 憑證已存在
        else if (data.indexOf(existedMsg) > -1) {

            emitter.emit('success', existedMsg)

        }

        // 域名不存在
        else if (data.indexOf(domainNotExistMsg) > -1) {

            emitter.emit('error', new Error(domainNotExistMsg))

        }

        // SSL 憑證建立成功
        else if (data.indexOf(createMsg) > -1) {

            emitter.emit('success', createMsg)

        } else emitter.emit('info', data)
    });

    return emitter;
}

const deleteSSL = domain => {

    const cmd = `certbot delete --cert-name=${domain} -n`

    const proc = exec(cmd);

    const emitter = new events.EventEmitter();

    proc.stdout.on("data", (data) => {

        console.log(data);

        const notExistMsg = `No certificate found with name`;
        const deleteMsg = `Deleted all files relating to certificate`;

        // SSL 憑證不存在
        if (data.indexOf(notExistMsg) > -1) {

            emitter.emit('success', notExistMsg)
        }

        // SSL 憑證刪除成功
        else if (data.indexOf(deleteMsg) > -1) {

            emitter.emit('success', deleteMsg)

        } else emitter.emit('info', data)
    });

    return emitter;
}

const renewSSL = () => {

    const cmd = `certbot renew -n`

    const proc = exec(cmd);

    const emitter = new events.EventEmitter();

    proc.stdout.on("data", (data) => {

        console.log(data);

        const notYetMsg = `Cert not yet due for renewal`;
        const renewMsg = `Congratulations, all renewals succeeded. The following certs have been renewed`;

        // SSL 憑證還沒到期 , 不用更新
        if (data.indexOf(notYetMsg) > -1) {

            emitter.emit('success', notYetMsg)
        }

        // SSL 憑證刪除成功
        else if (data.indexOf(renewMsg) > -1) {

            emitter.emit('success', renewMsg)

        } else emitter.emit('info', data)
    });

    return emitter;
}


const settingEmail = email => {

    const cmd = `certbot update_account --email ${email} -n`

    const proc = exec(cmd);

    const emitter = new events.EventEmitter();

    proc.stdout.on("data", (data) => {

        console.log(data);

        const updatedMsg = `Your e-mail address was updated to`;

        // 信箱更新成功 , 快過期時 , certbot 會寄信通知
        if (data.indexOf(updatedMsg) > -1) {

            emitter.emit('success', updatedMsg)

        } else emitter.emit('info', data)
    });

    return emitter;
}

module.exports = {
    addSSL,
    deleteSSL,
    renewSSL,
    settingEmail,
}