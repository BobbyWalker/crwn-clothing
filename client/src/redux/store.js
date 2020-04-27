import {applyMiddleware, createStore} from 'redux'
import rootReducer from './root-reducer'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.sagas'


const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if(process.env.NODE_ENV !== 'production')
    middlewares.push(logger)

const store = createStore(rootReducer, applyMiddleware(...middlewares))


const persist = persistStore(store)

export default { store, persist }

sagaMiddleware.run(rootSaga)
