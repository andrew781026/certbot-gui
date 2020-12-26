# Certbot GUI

::: not an official project :::

this is a ElectronJS App using exec to execute certbot scripts

## Introduce

Certbot is *Free* SSL certificate generator , it is great but CLI only

So , I will make a GUI for it , Good Luck to myself 🙆‍♂️, Making this thing **DONE**

### preinstall

You must have installed the certbot on your win os 

install steps please see : [certbot-installer.md](https://github.com/andrew781026/certbot-gui/blob/master/certbot-installer.md)

### scripts 

How to Use node.js exec to control certbot ? please ref : [certbotUtils.js](https://github.com/andrew781026/certbot-gui/blob/master/electron/src/utils/certbotUtils.js)

### build

You can use below to build your win .exe installer at /electron/electron_output/XXX.exe

```shell
# cd electron && npm run electron:build
```

### Aim ( haven't complete )

below is the app will look like 

![](https://i.imgur.com/bgmFjv1.png)

### others

if you using docker & node.js , you can use [NoDock](https://github.com/Osedea/nodock#Certbot)
