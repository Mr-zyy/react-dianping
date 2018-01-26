import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'
import './css/style.less'
export default class List extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		return (
			<div className="listWrapper">
				{
					this.props.data.map((item, index) => {
						return(
							<Item key={index} data={item.data} city={item.city}/>
						)
					})
				}
			</div>
		)
	}
}