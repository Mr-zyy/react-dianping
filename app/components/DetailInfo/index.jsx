import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './css/style.less'
import Star from '../../components/Star'
export default class Header extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		let info = this.props.info
		return (
			<div className="detailInfo">
				<div className="info">
				 <div className="top">
					 <div className="images">
					  <img src={info.img}/>
					 </div>
					 <div className="message">
					  <h1 className="title">{info.title}</h1>
					  <span className="star"><Star star={info.star}/></span>
					  <span className="price">￥{info.price} </span>
					  <h2 className="subTitle">{info.subTitle}</h2>
					 </div>
				 </div>
				 {/* 设置 innerHTML */}
	       <p dangerouslySetInnerHTML={{__html: info.desc}} className="info-desc"></p>
				</div>
		  </div>
		)
	}
	componentDidMount() {
		console.log(this.props.info)
	}
}