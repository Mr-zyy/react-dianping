import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './css/style.less'

export default class CurrentCity extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		return (
			<div className="current-city">
				<h2>{this.props.cityName}</h2>
			</div>
		)
	}
}