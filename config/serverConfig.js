const os = require('os');
console.log(os.networkInterfaces());
const host = os.networkInterfaces().WLAN[1].address;
const port = 1999;
const imgAddress = `http://${host}:${port}/imgs`;

module.exports = {
    host,
    port,
    imgAddress
}