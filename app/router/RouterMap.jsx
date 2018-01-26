import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

class RouterMap extends React.Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}></IndexRoute>
					<Route path="city" component={City}></Route>
					<Route path="user" component={User}></Route> 
					<Route path="search/:type(/:keyword)(/:city)(/:page)" component={Search}></Route> 
					<Route path="detail/:city/:id" component={Detail}></Route>  
					<Route path="*" component={NotFound}></Route>  
				</Route>
			</Router>
		)
	}
}
export default RouterMap