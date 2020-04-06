import {applyMiddleware, createStore} from 'redux'
import rootReducer from './root-reducer'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))
const persist = persistStore(store)

export default { store, persist }
