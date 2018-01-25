import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import IScroll from 'iscroll'

import HomeHeader from './../../components/homeHeader'
import Category from './../../components/Category/'
import Ad from './subpage/ad.jsx'
import List from './subpage/list.jsx'

class Home extends React.Component {
	constructor(props) {
	  super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	scroll: ''
	  };
	}
	render() {
		let opt = {
			overflow:"hidden",
			position:"fixed",
			top:"44px",
			bottom:"0px",
			width: "100%",
			height: "100%"
		}
		return (
			<div>
			  <HomeHeader cityName={this.props.userInfo.cityName}/>
			  <div className="scrollWrapper" ref="scrollWrapper"  style={opt}>
			    <div ref="scroll">
					  <Category cityName={this.props.userInfo.cityName}/>
					  <div style={{"height": '15px',"backgroundColor": "#f1f1f1"}}></div>
					  <Ad />
					  <List cityName={this.props.userInfo.cityName} 
					  ref="list"
					  refreshScroll={this.refreshScroll.bind(this)}/>
						<div style={{"height": "45px"}}></div>
		      </div>
	      </div>
			</div>
		)
	}
	componentDidMount(){
		setTimeout(()=>{
			if (!this.state.scroll){
				this.setState({
					scroll: new IScroll(this.refs.scrollWrapper, {
							click: true
					})
				}) 
			} else{
				this.state.scroll.refresh()
			}
			this.state.scroll.on('scrollEnd', () => {
				// console.log(this.y, window.screen.height)
				let loadMore = document.getElementById('loadMore')
				if (loadMore) {
					let loadMoreTop = loadMore.getBoundingClientRect().top
			  	let screenHeight = window.screen.height
				  if (loadMoreTop && loadMoreTop < screenHeight) {
				  	this.refs.list.loadMorePageData()
				  	this.refreshScroll()
				  }
				}
			})
		}, 500)
	}
	refreshScroll() {
		setTimeout(()=>{
			this.state.scroll.refresh()
		}, 500)
	}
	// getLoadMoreHeight(height) {
	// 	console.log(height)
	// }
}
function mapStateToProps(state){
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
)(Home)