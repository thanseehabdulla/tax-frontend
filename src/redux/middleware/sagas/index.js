import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import DATA_ACTIONS from "./../../actions";
import calls from './../../../configuration/call'
import callWithAuth from './../../../configuration/callWithAuth'
import API from './../../../configuration/apis'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

function* login(action) {
   const {username, password, history} = action.payload;
   const result = yield(calls.post(API.auth.login,{username,password}))
   const {msg} = result
   if(msg === 'ok'){
     const {token} = result
     alert("success")
     sessionStorage.setItem("token",token)
     history.push("/dashboard")
   }else{
     alert(msg)
   }

}

function* mySaga() {
  yield takeEvery(DATA_ACTIONS.LOGIN_REQUEST, login);
}

export default mySaga;
