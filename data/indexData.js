const serverConfig = require('../config/serverConfig');
var Mock = require('mockjs');//模拟假数据
// import Random from 'mockjs';
var data = Mock.mock({
    "imgUrls|4": [//首页轮播
        {
            'pic': "@image('750x380','#b7ef7c','#fff')",
        }
    ],
    'menus|8': [//首页菜单
        {
            'pic': "@image('90x90','#E53535')",
            'id|+1': 0,// 属性 id 是一个自增数，起始值为 1，每次增 1
            'name': '@csentence(4)',//占位符语法，生成一个4个中文名称
        }
    ],
    'bastBanner|2': [//精品菜单轮播
        {
            'img': "@image('390x260','#E53535')",
            'id|+1': 0,
        }
    ],
    'bastList|5': [//精品菜单
        {
            'image': "@image('180x180','#950FE6')",
            'id|+1': 0,
            'store_name': "@csentence()",
            'price': "@float(60, 100, 2,2)",
            'vip_price': "@float(60, 100, 2,2)",
            'sales': "@integer(500,5000)",
            'unit_name': ""
        }
    ],
    'firstList|5': [//精品菜单
        {
            'image': "@image('180x180','#0E90EE')",
            'id|+1': 0,
            'store_name': "@csentence()",
            'price': "@float(60, 100, 2,2)",
        }
    ],
    'benefit|5': [//促销单品
        {
            'image': "@image('180x180','#E5830E')",
            'id|+1': 0,
            'store_name': "@csentence()",
            'price': "@float(60, 100, 2,2)",
            'ot_price': "@float(60, 100, 2,2)",
            'stock': "@integer(1,1000)",
            'unit_name': ""
        }
    ],
})
// 输出结果
// console.log(JSON.stringify(data));
module.exports = {
    index: data
}