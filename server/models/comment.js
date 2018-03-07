var mongoose = require ('mongoose')
var db = require ('./db.js')

//创建了一个schema结构。
var commentsSchema = new mongoose.Schema({
	hasmore: {
		type: Boolean
	},
	page: {
		type: Number
	},
	data: {
		type: Array
	}
})
// 搜索查询
commentsSchema.statics.getComments = function(page, id, callback) {
	
	this.model('comment').find({"page":page}, callback);
};
var commentsModel = db.model('comment', commentsSchema);
//向外暴露
module.exports = commentsModel;