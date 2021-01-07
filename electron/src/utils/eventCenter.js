const ipcRenderer = window.ipcRenderer

export const addSSL = domain => ipcRenderer.invoke('certbot:addSSL', domain)

export const deleteSSL = domain => ipcRenderer.invoke('certbot:deleteSSL', domain)

export const viewSSLs = () => ipcRenderer.invoke('certbot:viewSSLs')

export const settingEmail = email => ipcRenderer.invoke('certbot:settingEmail', email)

export const checkCertbotExistence = () => ipcRenderer.invoke('certbot:checkCertbotExistence')

export const checkCertbotPermit = () => ipcRenderer.invoke('certbot:checkCertbotPermit')
