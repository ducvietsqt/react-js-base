import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers';

const logger = createLogger()
const initialState = {};
const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
  )
)
export default store
