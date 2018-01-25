import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ListComponent from './../../../components/List'
import LoadMore from './../../../components/loadMore'
import {getSearchData} from './../../../fetch/search/search.js'

const initState ={
		data: [],
		hasMore: false,
		isLoadingMore: false,
		page: 0
		};
export default class SearchList extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = initState;
	}
	render() {
		let opt ={
			fontSize: "16px",
			color: "#666",
			textAlign:"center",
			padding:"10px 0px",
			borderBottom: "1px solid #f1f1f1"
		}
		return (
			<div>
			  { this.state.data.length > 0
				? <div className="listWrapper">
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
				: <div style={opt}>暂无更多数据</div>
				}
			</div>
		)
	}
	componentDidMount() {
		this.loadFirstPageData()
		// console.log(this.props.type, this.props.keyword)
	}
	componentDidUpdate(prevProps, prevState) {
		// 注意！！！注意！！！ 一定要设置判断条件
		// 只有先前的keyword 和 新的 keyword不一样的时候 才允许重新请求数据
		// 否则 当触发页面更新的时候 加载新的数据 触发state更新 再次触发页面页面更新 从而再次请求数据 造成死循环
		if (prevProps.keyword != this.props.keyword){
			// 重置state 清空data数据
			this.setState(initState)
			// 加载新的数据
			this.loadFirstPageData()
		}
	}
	// 加载首屏数据
	loadFirstPageData() {
		let cityName = this.props.cityName
		let type = this.props.types
		let keyword = this.props.keyword 
		let result = getSearchData(0, cityName, type, keyword);
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
	 	let type = this.props.types
		let keyword = this.props.keyword
	 	let result = getSearchData(page, cityName, type, keyword);
	 	this.resultHandle(result)

	 	// 恢复状态
 		this.setState({
 			isLoadingMore: false
 		})
 		// 通知父组件更行iScroll
 		this.props.refreshScroll()

	 }
	// 处理数据
	resultHandle(result) {
	 	// 增加页数
		this.setState({
			page: this.state.page + 1
		})

		result.then(res => {
			return res.json()
		}).then(json => {
			let hasMore
			let data = json.data
			if (data.length > 0) {
				if (!Array.isArray(data[0].data)){
					data[0].data = [data[0].data]
				}
				hasMore = data[0].hasMore
				if (this.props.keyword != 'no') {
					hasMore = json.loadMore
				}
				this.setState({
					data: [...this.state.data, ...data],
					hasMore
				})
			}
		})
	}
}