import React from 'react'
import { connect } from 'react-redux'
import IScroll from 'iscroll'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchHeader from './../../components/SearchHeader'
import SearchList from './subpage/list.jsx'
class Search extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	scroll: ''
	  };
	}
	render() {
		let opt ={
			overflow:"hidden",
			position:"fixed",
			top:"48px",
			bottom:"0px",
			width: "100%",
			height: "100%"
		}
		return (
			<div>
			  <SearchHeader keyword={this.props.params.keyword} />
			  <div ref="searchListWrapper" style={opt}>
			  	<div>
						<SearchList 
						cityName={this.props.userInfo.cityName}
						types={this.props.params.type} 
						keyword={this.props.params.keyword} 
						ref="searchList"
						refreshScroll = {this.refreshScroll.bind(this)}/>
						<div style={{"height": "45px","backgroundColor": "#fff"}}></div>
					</div>
				</div>
			</div>
		)
	}
	componentDidMount() {
		// 子组件结合redux后 从父组件调用子组件的方法会报错
		// this.refs.searchList.test()
		setTimeout(()=>{
			if (!this.state.scroll){
				this.setState({
					scroll: new IScroll(this.refs.searchListWrapper, {
							click: true
					})
				})
			} else{
				this.state.scroll.refresh()
			}
		
			this.state.scroll.on('scrollEnd', () => {
				// console.log(window.screen.height)
				let loadMore = document.getElementById('loadMore')
				if (loadMore) {
					let loadMoreTop = loadMore.getBoundingClientRect().top
			  	let screenHeight = window.screen.height
				  if (loadMoreTop && loadMoreTop < screenHeight) {
				  	this.refs.searchList.loadMorePageData()
				  	this.refreshScroll()
				  }
				}
			})
		
		}, 500)
	}
	refreshScroll() {
		setTimeout(()=>{
			this.state.scroll.refresh()
		}, 1000)
	}
}


function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)