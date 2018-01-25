import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './css/style.less'

export default class CityList extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		return (
			<div className="city-list-container">
				<h1 className="title">热门城市</h1>
				<ul className="listWrapper">
					<li className="list" onClick={this.changeCity.bind(this, '北京')}>北京</li>
					<li className="list" onClick={this.changeCity.bind(this, '上海')}>上海</li>
					<li className="list" onClick={this.changeCity.bind(this, '杭州')}>杭州</li>
					<li className="list" onClick={this.changeCity.bind(this, '南京')}>南京</li>
					<li className="list" onClick={this.changeCity.bind(this, '广州')}>广州</li>
					<li className="list" onClick={this.changeCity.bind(this, '深圳')}>深圳</li>
					<li className="list" onClick={this.changeCity.bind(this, '苏州')}>苏州</li>
					<li className="list" onClick={this.changeCity.bind(this, '天津')}>天津</li>
					<li className="list" onClick={this.changeCity.bind(this, '重庆')}>重庆</li>
					<li className="list" onClick={this.changeCity.bind(this, '厦门')}>厦门</li>
					<li className="list" onClick={this.changeCity.bind(this, '武汉')}>武汉</li>
					<li className="list" onClick={this.changeCity.bind(this, '西安')}>西安</li>
				</ul>
			</div>
		)
	}
	changeCity(newCity){
		this.props.changeFn(newCity)
	}
}