var mongoose = require ('mongoose')
var db = require ('./db.js')

//创建了一个schema结构。
var homeAdsSchema = new mongoose.Schema({
	title: {
		type: String
	},
	img: {
		type: String
	},
	link: {
		type: String
	}
})

homeAdsSchema.statics.getHomeAds = function(callback) {
    this.model('homead').find({}, callback);
};
//类是基于schema创建的。
// 高能预警: 有坑  
// 1.model名中不能有大写字母 
// 2. 如果没有第三个参数的话,
// mongoose在编译模式生成模型的时候会自动改模型的名字加上's'作为数据库中对应的表名，
// 第三个参数是指数据库中的表名
var homeAdsModel = db.model('homead', homeAdsSchema);
//向外暴露
module.exports = homeAdsModel;