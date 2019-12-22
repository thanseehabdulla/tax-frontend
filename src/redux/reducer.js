import globalState from './reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers(globalState)

export default rootReducer;