import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class Detail extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		return (
			<div>
				I am Detail
			</div>
		)
	}
}