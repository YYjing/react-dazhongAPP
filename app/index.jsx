import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {hashHistory} from 'react-router'
import configureStore from './store/configureStore.js'

import  './static/css/common.less'
import  './static/css/font.css'

// 创建sotre
const store = configureStore()

import RouteMap from './router/routeMap.jsx'

render(
  <Provider store={store}>
    <RouteMap history={hashHistory}/>
  </Provider>,
  document.getElementById('root')
  )
