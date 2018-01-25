var mongoose = require ('mongoose')
var db = require ('./db.js')

//创建了一个schema结构。
var listsSchema = new mongoose.Schema({
	hasMore: {
		type: Boolean
	},
	city: {
		type: String
	},
	page: {
		type: Number
	},
	data:{
		type: Array
	}
})
// 搜索查询
listsSchema.statics.searchLists = function(page, city, type, keyword, callback) {
		
		if (keyword != 'no') { //四个参数
   		// this.model('list').find({"city":city,"page":page, "title": keyword}, callback);
   		this.model('list').aggregate().match({"city": city,"page": page}).unwind('data').match({'data.title': keyword}).exec(callback)
		} else{ // 三个参数
   		this.model('list').find({"city":city,"page":page}, callback);
		}
};

listsSchema.statics.getLists = function(city, page, callback) {
    this.model('list').find({"city":city,"page":page}, callback);
};
// 嵌套查询
listsSchema.statics.deep = function() {
		var data = this.model('list').aggregate().match({"city":"北京","page":0}).unwind('data').match({'data.title': '汉堡大大--北京'}).exec(function(err,res){
			// console.log(res)
		})
}
//类是基于schema创建的。
// 高能预警: 有坑  
// 1.model名中不能有大写字母 
// 2. 如果没有第三个参数的话,
// mongoose在编译模式生成模型的时候会自动改模型的名字加上's'作为数据库中对应的表名，
// 第三个参数是指数据库中的表名
var listsModel = db.model('list', listsSchema);
setTimeout(()=>{
	listsModel.deep()
}, 1000)

//向外暴露
module.exports = listsModel;