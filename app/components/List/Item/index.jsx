import React from 'react'
import { Link } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './css/style.less'

export default class Item extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		return (
			<div>
				{
					this.props.data.map((item, index) => {
						return (
							<div className="listContainer" key={index}>
								<div className="pic">
									<Link to={'/detail/' + this.props.city + '/' + item.id}>
										<img src={item.img}/>
									</Link>
								</div>
								<div className="text">
								  <div className="message">
										<span className="title">{item.title}--{this.props.city}</span>
										<span className="distance">{item.distance}</span>
									</div>
									<div className="subTitle">{item.subTitle}</div>
									<div className="container">
										<span className="price">￥{item.price}</span>
										<span className="number">已售{item.mumber}</span>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}