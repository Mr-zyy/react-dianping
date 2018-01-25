import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './css/style.less'

export default class SearchInput extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	value: ''
	  };
	}
	render() {
		return (
			<div className="input-container">
				<input type="text"
				placeholder="请输入关键字"
				value={this.state.value}
				onChange={this.changeHandle.bind(this)}
				onKeyUp={this.keyUpHandle.bind(this)}
				/>
			</div>
		)
	}
	componentDidMount(){
		if (this.props.value != 'no'){
			this.setState({
				value: this.props.value || ''
			})
		}
	}
	changeHandle(e) {
		this.setState({
			value: e.target.value
		})
	}
	keyUpHandle(e) {
		if (e.keyCode !== 13) {
			return
		}
		this.props.enterHandle(this.state.value)
	}
}