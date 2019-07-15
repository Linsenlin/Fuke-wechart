const {
    router
} = require("../server/server");

const indexData = require('../data/indexData')

router.post("/index/index/index", async ctx => {
    ctx.body = indexData;
    // console.log(ctx);
});