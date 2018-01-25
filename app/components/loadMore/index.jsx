import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './css/style.less'
export default class LoadMore extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		return (
			<div className="load-more" id="loadMore">
				{
					this.props.isLoadMore ?
					<span>加载中...</span> :
					<span onClick={this.loadMore.bind(this)}>加载更多</span>
				}
			</div>
		)
	}
	loadMore(){
		this.props.loadMorePageData()
	}
}