import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import DetailInfo from '../../../components/DetailInfo'
import { getInfos } from '../../../fetch/detail/detail.js'
export default class Info extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	info: false
	  };
	}
	render() {
		return (
			<div>
			  {
			  	this.state.info
			    ? <DetailInfo info = {this.state.info}/> 
				  : ''
				}
			</div>
		)
	}
	componentDidMount(){
		this.getInfo()
	}
	getInfo() {
		let city = this.props.city
		let id = this.props.id
		let result = getInfos(city, id)
		result.then(res => {
			return res.json()
		}).then(json => {
			let data = json.data
			this.setState({
				info: data[0]
			})
		})
	}
}