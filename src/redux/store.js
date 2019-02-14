import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
// Logger with default options
import logger from 'redux-logger'

export default createStore(rootReducer, applyMiddleware(logger))
