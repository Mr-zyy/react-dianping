import * as actionTypes from './../constants/userInfo.js'

const initState = {};
export default function userInfo(state = initState, action) {
	switch (action.type) {
		case actionTypes.USERINFO_UPDATE:
		  return action.data
		default:
		  return state
	}
}
