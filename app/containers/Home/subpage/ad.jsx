import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeAd from '../../../components/HomeAd/index'
import {getAdData} from './../../../fetch/home/home.js'

export default class User extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	data: []
	  };
	}
	render() {
		return (
			<div>
				{this.state.data.length > 0 ? <HomeAd data={this.state.data} /> : '加载中...'}
			</div>
		)
	}
	componentDidMount() {
		let result = getAdData()
		result.then(res => {
			return res.json()
		}).then(json => {
			let data = json.data
			if (data.length > 0){
				this.setState({
					data
				})
			}
		})
	}
}