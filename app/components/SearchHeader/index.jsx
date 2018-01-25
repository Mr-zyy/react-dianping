import React from 'react'
import { hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchInput from './../SearchInput'
import './css/style.less'

export default class SearchHeader extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		return (
			<div className="search-header">
			  <span className="back" onClick={this.back.bind(this)}>
					<i className="icon-chevron-left"></i>
				</span>
				<div className="search-header-container">
					<div className="search-container">
						<i className="icon-search"></i>
						<SearchInput value={this.props.keyword} enterHandle={this.enterHandle.bind(this)}/>
					</div>
				</div>
			</div>
		)
	}
	back() {
		hashHistory.push('/')
	}

	enterHandle(value) {
		hashHistory.push('/search/all/'+encodeURIComponent(value))
	}
}