import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ListComponent from './../../../components/List/index.jsx'
import LoadMore from './../../../components/loadMore'
import {getLists} from './../../../fetch/home/home.js'
import './style.less'

export default class List extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	data: [],
	  	hasMore: false,
	  	isLoadingMore: false,
	  	page: 1
	  };
	}
	render() {
		return (
			<div>
				<h1 className="home-list-title">猜你喜欢</h1>
				{
					this.state.data.length > 0
				  ? <ListComponent data={this.state.data}/>
				  : '加载中...'
				}
				{
					this.state.hasMore
					? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMorePageData={this.loadMorePageData.bind(this)}/>
					: <div></div>
				}
			</div>
		)
	}
	componentDidMount() {
		this.loadFirstPageData()
	}
	// 加载首屏数据
	loadFirstPageData() {
		let cityName = this.props.cityName
		let result = getLists(cityName, 0);
		this.resultHandle(result)
	}
	// 加载更多数据
	 loadMorePageData() {
	 	// 记录状态 加载中
	 	this.setState({
	 		isLoadingMore: true
	 	})
	 	let cityName = this.props.cityName
	 	let page = this.state.page
	 	let result = getLists(cityName, page);
	 	this.resultHandle(result)

	 	// 增加页数
	 	this.setState({
	 		page: page + 1
	 	})
	 	// 恢复状态
 		this.setState({
 			isLoadingMore: false
 		})
 		// 通知父组件更行iScroll
 		this.props.refreshScroll()
	 }
	// 处理数据
	resultHandle(result) {
		result.then(res => {
			return res.json()
		}).then(json => {
			let data = json.data
			let hasMore = data[0].hasMore
			this.setState({
				data: [...this.state.data, ...data],
				hasMore
			})
		})
	}
}