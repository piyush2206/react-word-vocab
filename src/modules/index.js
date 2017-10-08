import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import words from './words'

export default combineReducers({
  router: routerReducer,
  counter,
  words
})
