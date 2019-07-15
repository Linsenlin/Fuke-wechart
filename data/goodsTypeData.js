const serverConfig = require('../config/serverConfig');
var Mock = require('mockjs');//模拟假数据
var data = Mock.mock({
    "data|15": [
        {
            'name': "@cword(2)",
            'son|9': [
                {
                    'img_url': "@image('70x70','#146BD7')",
                    'name': "@cword(4)",
                }
            ]
        }
    ],
})
// 输出结果
console.log(JSON.stringify(data));
module.exports = {
    data
}