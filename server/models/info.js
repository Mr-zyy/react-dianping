var mongoose = require ('mongoose')
var db = require ('./db.js')

//创建了一个schema结构。
var infosSchema = new mongoose.Schema({
	id: {
		type: Number
	},
	city: {
		type: String
	},
	img: {
		type: String
	},
	title: {
		type: String
	},
	star: {
		type: Number
	},
	price: {
		type: Number
	},
	subTitle: {
		type: String
	},
	desc: {
		type: String
	}
})
// 搜索查询
infosSchema.statics.getInfos = function(city, id, callback) {
	if (id > 4) {
		id = id % 4 - 1
	}
	city= "北京"
	this.model('info').find({"city":city,"id":id}, callback);
};
var infosModel = db.model('info', infosSchema);
//向外暴露
module.exports = infosModel;