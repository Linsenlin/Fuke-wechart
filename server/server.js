const Koa = require('koa');
const path = require('path');
const router = require('koa-router')();
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const serverConfig = require('../config/serverConfig');
const cors=require('koa2-cors')

const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(router.routes());
app.use(static(path.join(__dirname, '../static')));

app.listen(serverConfig.port, serverConfig.host, () => {
    console.log('服务 启动：', serverConfig)
    console.log('服务 port', serverConfig.port)
    console.log('服务 host：', serverConfig.host)
});

module.exports = {
    router,
    bodyParser
}