import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';


import { userReducer } from './reducers/userReducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  userModule: userReducer

})

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
