import rootReducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './middleware/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// then run the saga
sagaMiddleware.run(mySaga)

store.subscribe(() => console.log(store.getState()))

// store.dispatch({ type: 'INCREMENT' })

export default store;