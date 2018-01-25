import React from 'react'
import ReactDom from 'react-dom'
import {hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import RouterMap from './router/RouterMap.jsx'
import configStore from './store/configStore.js'
import './static/css/reset.css'
import './static/css/font.css'

let store = configStore()
ReactDom.render(<Provider store={store}>
			            <RouterMap history={hashHistory} />
								</Provider>, 
								document.getElementById('root')
)
