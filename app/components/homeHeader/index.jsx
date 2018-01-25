import React from 'react'
import { hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

import SearchInput from './../SearchInput'
import './css/style.less'

export default class HomeHeader extends React.Component {
	constructor(props) {
	  super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		return (
			<div className="home-header">
				<Link to="/city">
					<div className="home-header-left">
						<span>{this.props.cityName}</span><i className="icon-angle-down"></i>
					</div>
				</Link>
				<div className="home-header-middle">
					<div className="search-container">
						<i className="icon-search"></i>
						<SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
					</div>
				</div>
				<div className="home-header-right">
					<i className="icon-user"></i>
				</div>
			</div>
		)
	}
	enterHandle(value) {
		hashHistory.push('/search/all/'+encodeURIComponent(value))
	}
}