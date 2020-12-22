# Certbot on Windows

###### tags: `w3HexSchool` . `ssl` . `certbot`


最近需要為個人使用的 Http 網站加上 SSL 憑證 ,
在 Windows 平台中常看到的是用 openSSL 去產生一個 SSL 憑證 ,
目前看到 openSSL 可以產生 自簽憑證 (Self-Signed Certificate),
但是此方法產生的 SSL 憑證會被瀏覽器認定為 "不可信任的來源"

![](https://i.imgur.com/ZjDNokq.png)

這方法走不通 , 讓我們換另一個方法來走 , 在 Linux 中使用 certbot 產生可信任的 SSL 憑證 , 常常可以看到文章在分享這個做法 ,

Q. 那在 windows 中 , 我們可以使用 certbot 來產生 SSL 憑證嗎 ?

A. 可以 😇

以下讓我們詳細說明一下 certbot 在 windows 上的一些可用的指令

## 前置作業

1.找到 `一台對外有 Public IP 的 Windows 電腦 or 虛擬機`
(可以使用 AWS . Azure ...等雲端平台輔助建立)
2.下載 certbot 提供的 [Windows 安裝檔]
3.準備 DNS 將其指向到你準備的 Public IP

:::info
當你要練習時 , 你可以使用 AWS . Azure ...等雲端平台 ,
建立對外有 Public IP 服務的 Windows 電腦 ,
在下不太建議 , 你真的拿一台實體的 Windows 電腦直接對外連線 ,
這樣做你很容易中毒 , 然後引發 ==[中毒大當機](https://www.ithome.com.tw/news/125118)==
:::


## 常用操作

- 建立 SSL 憑證 , 有各種類型的建立方式

```
certbot certonly --webroot -w C:\Users\andrew\Desktop\http-server -d azure.test.andrewdeveloper.com -n
```

- 刪除 SSL 憑證

```
certbot delete --cert-name azure.test.andrewdeveloper.com   
```

- 註銷 SSL 憑證

```
certbot revoke --cert-path /etc/letsencrypt/live/CERTNAME/cert.pem  
certbot revoke --cert-name azure.test.andrewdeveloper.com   
```

- 更新 SSL 憑證

??? 自動更新 ??? 目前在 windows 上 ,  certbot 還沒辦法自動更新 SSL 憑證


## 指令解析

當你在 cmd 中輸入 `certbot -h` , certbot 會顯示內部可用的指令資訊

```shell
certbot [SUBCOMMAND] [options] [-d DOMAIN] [-d DOMAIN] ...
```

### 建立憑證

#### SUBCOMMAND

- `certonly`：更新或建立新的 SSL 憑證
- `renew`：更新快過期的的 SSL 憑證
- `enhance`：在目前的 SSL 憑證上追加安全性的增強功能

#### options

- `-d DOMAINS`：設定 SSL 憑證的域名 , 利用逗號區隔 ( 範例 : -d www.example.com,www.example.tw )
- `--standalone`：certbot 在 80 port 啟動 web server 自行驗證 SSL 憑證
- `--webroot`：將特定檔案放在網頁服務器的根文件夾中以進行身份驗證
- `--manual`： 以交互方式或使用Shell腳本獲取證書
- `-n`：非互動模式執行 certbot
- `--test-cert`：建立測試用的 SSL 憑證
- `--dry-run`：測試 "renew" 或 "certonly" 功能 (不儲存 SSL 憑證)

### 憑證管理

#### SUBCOMMAND

- `certificates`：顯示目前 certbot 管理的憑證
- `revoke`：使憑證失效 ( 支援 --cert-name . --cert-path 兩種參數 )
- `delete`：刪除憑證 ( 只支援 --cert-name 參數 )

#### options

- `--cert-name`：憑證的對應域名
- `--cert-path`：憑證的檔案位置

### 帳戶管理

- `register`： 建立 ACME 帳號
- `unregister`：註銷 ACME 帳號
- `update_account`：更新 ACME 帳號
- `--agree-tos`：訂閱 ACME 電子報
- `-m EMAIL`： 信件通知 ( ex:憑證到期 )

### 其他

- `-h, --help [TOPIC]`：`print this message, or detailed help on a topic;
  the available TOPICS are:
  all, automation, commands, paths, security, testing, or any of the
  subcommands or plugins (certonly, renew, install, register, nginx,
  apache, standalone, webroot, etc.)`
- `-h all`：顯示所有使用說明
- `--version`：顯示 certbot 版本


### 向 GUI 進發

certbot 參數中有一個 -n ( Run non-interactively ) 非互動模式 , 專門用來給其他程式呼叫使用 ,

也許之後可以用 ElectronJS 設計一個 GUI , 來操作 certbot ?

## 參考資料

- [certbot on windows](https://certbot.eff.org/lets-encrypt/windows-nginx)

---

各種不同的訊息 & 其相關回應

## 新增 SSL 

#### 建立次數過多 , letsencrypt 拒絕此次建立
```shell
C:\Users\andrew>certbot certonly --standalone -d azure.test.andrewdeveloper.com -n
Saving debug log to C:\Certbot\log\letsencrypt.log
Plugins selected: Authenticator standalone, Installer None
Requesting a certificate for azure.test.andrewdeveloper.com
[31mAn unexpected error occurred:[0m
[31mThere were too many requests of a given type :: Error creating new order :: too many certificates already issued for exact set of domains: azure.test.andrewdeveloper.com: see https://letsencrypt.org/docs/rate-limits/[0m
Please see the logfiles in C:\Certbot\log for more details.
```

#### 已有憑證 
```shell
C:\Users\andrew>certbot certonly --standalone -d azure2.test.andrewdeveloper.com -n
Saving debug log to C:\Certbot\log\letsencrypt.log
Plugins selected: Authenticator standalone, Installer None
Cert not yet due for renewal
Keeping the existing certificate

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Certificate not yet due for renewal; no action taken.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

#### 成功建立
```shell
C:\Users\andrew>certbot certonly --standalone -d azure2.test.andrewdeveloper.com -n
Saving debug log to C:\Certbot\log\letsencrypt.log
Plugins selected: Authenticator standalone, Installer None
Requesting a certificate for azure2.test.andrewdeveloper.com
[1m
IMPORTANT NOTES:
[0m - Congratulations! Your certificate and chain have been saved at:
   C:\Certbot\live\azure2.test.andrewdeveloper.com\fullchain.pem
   Your key file has been saved at:
   C:\Certbot\live\azure2.test.andrewdeveloper.com\privkey.pem
   Your cert will expire on 2021-03-22. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

## 刪除 SSL

#### 成功刪除
```shell
C:\Users\andrew>certbot delete --cert-name=azure2.test.andrewdeveloper.com -n
Saving debug log to C:\Certbot\log\letsencrypt.log
Deleted all files relating to certificate azure2.test.andrewdeveloper.com.
```

#### 刪除失敗
```shell
C:\Users\andrew>certbot delete --cert-name=azure2.test.andrewdeveloper.com -n
Saving debug log to C:\Certbot\log\letsencrypt.log
No certificate found with name azure2.test.andrewdeveloper.com (expected C:\Certbot\renewal\azure2.test.andrewdeveloper.com.conf)
```

