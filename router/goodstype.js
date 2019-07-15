const {
    router
} = require("../server/server");

const goodsTypeData = require('../data/goodsTypeData')

router.post("/index/goods/goodstype", async ctx => {
    ctx.body = goodsTypeData;
});