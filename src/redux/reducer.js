import globalState from "./reducers";
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

const rootReducer = combineReducers({
  data: globalState,
  loadingBar: loadingBarReducer
});

export default rootReducer;
