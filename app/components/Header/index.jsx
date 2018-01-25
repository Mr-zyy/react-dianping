import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './css/style.less'

export default class Header extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		return (
			<div className="header">
				<span className="back" onClick={this.back.bind(this)}>
					<i className="icon-chevron-left"></i>
				</span>
				<h1 className="title">{this.props.title}</h1>
			</div>
		)
	}
	back() {
		window.history.back()
	}
}