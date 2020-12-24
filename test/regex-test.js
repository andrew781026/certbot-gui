const msg = `
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Found the following certs:
  Certificate Name: azure.stg.andrewdeveloper.com
    Serial Number: 3f3b3ea60560c578de50ba7c2aa583d1f46
    Key Type: RSA
    Domains: azure.stg.andrewdeveloper.com
    Expiry Date: 2021-03-24 07:35:35+00:00 (VALID: 89 days)
    Certificate Path: C:\\Certbot\\live\\azure.stg.andrewdeveloper.com\\fullchain.pem
    Private Key Path: C:\\Certbot\\live\\azure.stg.andrewdeveloper.com\\privkey.pem
  Certificate Name: azure2.test.andrewdeveloper.com
    Serial Number: 35ea37b57e5e8d37f7f43603f49ab480f51
    Key Type: RSA
    Domains: azure2.test.andrewdeveloper.com
    Expiry Date: 2021-03-22 04:57:48+00:00 (VALID: 87 days)
    Certificate Path: C:\\Certbot\\live\\azure2.test.andrewdeveloper.com\\fullchain.pem
    Private Key Path: C:\\Certbot\\live\\azure2.test.andrewdeveloper.com\\privkey.pem
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
     `

const msgArr = msg.split('Certificate Name: ');

const newArr = msgArr.map(str => {

    const temp = str.split('\n')

    if (temp[1].indexOf('Serial Number:') < 0) return null;
    else return {
        'Serial Number': temp[1].split('Serial Number: ').pop(),
        'Key Type': temp[2].split('Key Type: ').pop(),
        'Domains': temp[3].split('Domains: ').pop(),
        'Expiry Date': temp[4].split('Expiry Date: ').pop(),
        'Certificate Path': temp[5].split('Certificate Path: ').pop(),
        'Private Key Path': temp[6].split('Private Key Path: ').pop(),
    }
})