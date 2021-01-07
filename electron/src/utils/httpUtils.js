const http = require('http')
const destroyer = require('server-destroy')

let server

const httpUtil = {
    createServer: port => {
        const html = `<meta charset="UTF-8"><h1>Ngrok Tool Server Start 🛸</h1>`

        // Server has a 5 seconds keep-alive timeout by default
        server = http
            .createServer((req, res) => {
                res.writeHead(200, { 'Content-Type': 'text/html', charset: 'utf8' })
                res.write(html)
                res.end()
            })
            .listen(port)

        // 註冊 destroyer
        destroyer(server)

        return server
    },

    stopServer: () => {
        server.destroy()
    },
}

module.exports = httpUtil
