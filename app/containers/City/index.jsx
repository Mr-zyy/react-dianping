import React from 'react'
import {hashHistory} from 'react-router'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import * as userInfoActionsFromOtherFile from './../../actions/userInfo.js'
import Header from './../../components/Header'
import CurrentCity from './../../components/currentCity'
import CityList from './../../components/CityList'
import localStore from './../../util/localStore.js'

class City extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}
	render() {
		return (
			<div>
				<Header title="选择城市"/>
				<CurrentCity cityName={this.props.userInfo.cityName} />
				<CityList changeFn={this.changeCity.bind(this)}/>
			</div>
		)
	}
	changeCity(newCity) {
		// 修改redux (触发更新)
		this.props.userInfoAction.update({
			'cityName': newCity
		})
		// 修改本地缓存 (不会触发更新)
		localStore.setItem('cityName', newCity)
		
		// 跳转到首页
		hashHistory.push('/')
	}
}
function mapStateToProps(state){
	return {
		userInfo: state.userInfo
	}
}
function mapDispatchToProps(dispatch) {
	return {
 	  userInfoAction: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}
export default connect(
		mapStateToProps,
		mapDispatchToProps
)(City)