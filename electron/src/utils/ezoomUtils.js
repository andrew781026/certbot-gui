const checkEmail = email => {
    const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

    if (!email) throw new Error('信箱不能為空值')
    else if (mailReg.test(email)) return true
    else throw new Error('請輸入正確的信箱格式')
}

module.exports = {
    checkEmail,
}
