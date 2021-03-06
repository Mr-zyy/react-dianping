let homeAd = require('./../models/homeAd.js')
let list = require('./../models/list.js')
let serach = require('./../models/list.js')
let info = require('./../models/info.js')
let comment = require('./../models/comment.js')
exports.showHomeAd = function(req, res, next) {
	// let homeAdData = [];
	homeAd.getHomeAds(function(err, data){
		res.json({
			data
		})
	})
}
exports.showList = function(req, res, next) {
	let city = req.params.city
	let page = parseInt(req.params.page)
	list.getLists(city, page, function(err, data){
		console.log(data)
		res.json({
			data
		})
	})
}
exports.searchLists = function(req, res, next) {
	let city = req.params.city
	let page = parseInt(req.params.page)
	let type = req.params.type || ''
	let keyword = req.params.keyword || ''
	console.log(page, city)
	let loadMore = true
	if (keyword != 'no') {
		loadMore = false
	}
	list.searchLists(page, city, type, keyword, function(err, data){
		res.json({
			data,
			loadMore
		})
	})
}
exports.getInfos = function(req, res, next) {
	let city = req.params.city
	let id = parseInt(req.params.id)
	info.getInfos(city, id, function(err, data){
		res.json({
			data
		})
	})
}
exports.getComments = function(req, res, next) {
	let page = req.params.page
	let id = parseInt(req.params.id)
	comment.getComments(page, id, function(err, data){
		res.json({
			data
		})
	})
}