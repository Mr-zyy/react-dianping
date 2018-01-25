import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import * as userInfoActionsFromOtherFile from './../actions/userInfo.js'
import CITYNAME from '../config/localStoreKey.js'
import localStore from '../util/localStore.js'

class App extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	initDone: false
	  };
	}
	render() {
		return (
			<div>
				{ this.state.initDone
					? this.props.children
					: <p>加载中...</p>
				}
			</div>
		)
	}
	componentDidMount() {
		let cityName = localStore.getItem('cityName')
		if (cityName == null) {
			cityName = '北京'
		}
		// 第四步
		this.props.useInfoAction.update({
			cityName: cityName
		})
		this.setState({
			initDone: true
		})
	}
}
// 第三步
function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	}
}
// 第四步 根据action改变数据
function mapDispatchToProps(dispatch) {
   return {
   	 useInfoAction: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
   }
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)