import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import IScroll from 'iscroll'

import Header from '../../components/Header'
import Info from './subPage/info.jsx'
import Comment from './subPage/comment.jsx'

export default class Detail extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	scroll: ''
	  };
	}
	render() {
		let city = this.props.params.city
		let id = this.props.params.id
		let opt = {
			overflow:"hidden",
			position:"fixed",
			top:"44px",
			bottom:"0px",
			width: "100%",
			height: "100%"
		}
		return (
			<div style={{"background": "rgb(241, 241, 241)"}}>
			  <Header title="商品详情"/>
			  <div style={opt} ref="scrollWrapper">
			  	<div ref="scroll">
			  		<Info city = {city} id = {id}/>
						<Comment id ={id} ref="comment"/> 
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
				console.log(window.screen.height)
				let loadMore = document.getElementById('loadMore')
				if (loadMore) {
					let loadMoreTop = loadMore.getBoundingClientRect().top
			  	let screenHeight = window.screen.height
				  if (loadMoreTop && loadMoreTop < screenHeight) {
				  	this.refs.comment.loadMorePageData()
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
}