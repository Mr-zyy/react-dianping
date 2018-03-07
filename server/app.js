var express = require("express")
var app = express()
var router = require("./routers/router.js")
//cors 解决跨域问题
// app.all('/api/seller',function(req,res,next){
// 	console.log(1)
// 	res.header("Access-Control-Allow-Origin",'*')
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// 	next();
// })
app.use('/api/static', express.static('./../app/static'))
app.get('/api/homeAd',router.showHomeAd);
app.get('/api/list/:city/:page',router.showList);
app.get('/api/search/:page/:city/:type/:keyword',router.searchLists);
app.get('/api/search/:type/:city/:page', router.searchLists)
app.get('/api/info/:city/:id', router.getInfos)
app.get('/api/comment/:page/:id', router.getComments)

app.listen(8001)
