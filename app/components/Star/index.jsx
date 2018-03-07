import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './css/style.less'
export default class Star extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		let star = this.props.star
		if (star > 5) {
			star = star % 5
		}
		return (
			<div className="starWrapper">
				{
					[1, 2, 3, 4, 5].map((item, index) => {
						let lightClass = '';
						if (star >= item) {
							lightClass = ' light'
						}
						return(
							<i className={"icon-star" +lightClass} key={index}></i>
						)
					})
				}
			</div>
		)
	}
}