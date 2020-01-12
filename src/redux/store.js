import rootReducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./middleware/sagas";
import compose from 'lodash/fp/compose';
import { loadingBarMiddleware } from 'react-redux-loading-bar'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(loadingBarMiddleware())
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

// then run the saga
sagaMiddleware.run(mySaga);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: 'INCREMENT' })

export default store;
