import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import DATA_ACTIONS from "./../../actions";
import calls from "./../../../configuration/call";
import callWithAuth from "./../../../configuration/callWithAuth";
import API from "./../../../configuration/apis";
import { showLoading, hideLoading } from "react-redux-loading-bar";

function* login(action) {
  const { usr_email, usr_password, history } = action.payload;
  const result = yield calls.post(API.auth.login, { usr_email, usr_password });
  const { msg } = result;
  if (msg === "ok") {
    const { token } = result;
    alert("success");
    sessionStorage.setItem("token", token);
    history.push("/dashboard");
  } else {
    alert(msg);
  }
}

function* userFetch(action) {
  const result = yield callWithAuth.get(API.user.getall);
  if (result) {
    yield put({ type: DATA_ACTIONS.USER_STORE, result });
  } else {
    alert("error");
  }
}

function* detailFetch(action) {
  const result = yield callWithAuth.get(API.user.get + "/" + action.payload);
  if (result) {
    yield put({ type: DATA_ACTIONS.DETAIL_STORE, result });
    yield put( {type: DATA_ACTIONS.UPDATE_LG ,payload:{lgEditShow: true} });
  } else {
    alert("error");
  } 
}

function* userDelete(action) {
  const results = yield callWithAuth.post(API.user.delete, {
    usr_id: action.payload
  });
  if (results) {
    const result = yield callWithAuth.get(API.user.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.USER_STORE, result });
    } else {
      alert("error");
    }
  } else {
    alert("error");
  }
}

function* userAdd(action) {
 
  const results = yield calls.post(API.auth.register, { ...action.payload });
  if (results.hasOwnProperty("user")) {
    const { msg } = results;
    const result = yield callWithAuth.get(API.user.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.USER_STORE, result });
    } else {
      alert("error");
    }
    alert(msg);
  } else {
    const { errors } = results;
    alert(errors[0].message);
  }
}

function* mySaga() {
  yield takeEvery(DATA_ACTIONS.LOGIN_REQUEST, login);
  yield takeEvery(DATA_ACTIONS.USER_FETCH, userFetch);
  yield takeEvery(DATA_ACTIONS.DETAIL_FETCH, detailFetch);
  yield takeEvery(DATA_ACTIONS.USER_DELETE, userDelete);
  yield takeEvery(DATA_ACTIONS.USER_ADD, userAdd);
}

export default mySaga;
