var app = require('koa')();
var router = require('koa-router')();

// 搜索结果列表，2个参数
const search = require('./search/list.js')
router.get('/api/search/:page/:city/:category', function*(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    this.body = search;
});
// 搜索结果列表，3个参数
router.get('/api/search/:page/:city/:category/:keyword', function*(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)
    this.body = search;
});

// 详情页 商户信息
const detailinfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function*(next) {
    const params = this.params
    const id = params.id

    console.log('商户id: ' + id)
    this.body = detailinfo;
});
// 详情页 评论信息
const detail = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function*(next) {
    const params = this.params
    const page = params.page
    const id = params.id

    console.log('商户id: ' + id)
    console.log('当前页数: ' + page)
    this.body = detail
});

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function*(next) {
    this.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function*(next) {
    // 参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    this.body = homeListData
});



// 订单列表
const orderList = require('./orderlist/orderList.js')
router.get('/api/orderlist/:username', function*(next) {
    console.log('订单列表')

    const params = this.params
    const username = params.username
    console.log('用户名：' + username)

    this.body = orderList
})
// 提交评论
router.post('/api/submitComment', function *(next) {
    console.log('提交评论')

    // 获取参数

    this.body = {
        errno: 0,
        msg: 'ok'
    }
})
// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3100);
