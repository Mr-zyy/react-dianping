import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './css/style.less'
export default class HomeAd extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		return (
			<div className="home-ad">
				<h2>超值特惠</h2>
				<div className="adContainer">
					{
						this.props.data.map((item, index) => {
							return(
								<div className="adItem" key={index}>
									<a href={item.link}>
										<img src={item.img} />
									</a>
								</div>
							)
						})
				  }
				</div>	
			</div>
		)
	}
}