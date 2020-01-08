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
    // alert("success");
    sessionStorage.setItem("token", token);
    // history.push("/dashboard");
    window.location = "/dashboard";
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

function* userEdit(action) {
 
  const results = yield callWithAuth.post(API.user.update, { ...action.payload });
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


//customer
function* customerFetch(action) {
  const result = yield callWithAuth.get(API.customer.getall);
  if (result) {
    yield put({ type: DATA_ACTIONS.CUSTOMER_STORE, result });
  } else {
    alert("error");
  }
}

function* customerDetailFetch(action) {
  const result = yield callWithAuth.get(API.customer.get + "/" + action.payload);
  if (result) {
    yield put({ type: DATA_ACTIONS.CUSTOMER_DETAIL_STORE, result });
    yield put( {type: DATA_ACTIONS.UPDATE_CLG ,payload:{clgEditShow: true} });
  } else {
    alert("error");
  } 
}

function* customerDelete(action) {
  const results = yield callWithAuth.post(API.customer.delete, {
    cus_id: action.payload
  });
  if (results) {
    const result = yield callWithAuth.get(API.customer.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.CUSTOMER_STORE, result });
    } else {
      alert("error");
    }
  } else {
    alert("error");
  }
}

function* customerAdd(action) {
 
  const results = yield callWithAuth.post(API.customer.create, { ...action.payload });
  if (results.hasOwnProperty("user")) {
    const { msg } = results;
    const result = yield callWithAuth.get(API.customer.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.CUSTOMER_STORE, result });
    } else {
      alert("error");
    }
    alert(msg);
  } else {
    const { errors } = results;
    alert(errors[0].message);
  }
}

function* customerEdit(action) {
 
  const results = yield callWithAuth.post(API.customer.update, { ...action.payload });
  if (results.hasOwnProperty("user")) {
    const { msg } = results;
    const result = yield callWithAuth.get(API.customer.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.CUSTOMER_STORE, result });
    } else {
      alert("error");
    }
    alert(msg);
  } else {
    const { errors } = results;
    alert(errors[0].message);
  }
}

//tax
function* taxFetch(action) {
  const result = yield callWithAuth.get(API.tax.getall);
  if (result) {
    yield put({ type: DATA_ACTIONS.TAX_STORE, result });
  } else {
    alert("error");
  }
}

function* taxDetailFetch(action) {
  const result = yield callWithAuth.get(API.tax.get + "/" + action.payload);
  if (result) {
    yield put({ type: DATA_ACTIONS.TAX_DETAIL_STORE, result });
    yield put( {type: DATA_ACTIONS.UPDATE_TLG ,payload:{tlgEditShow: true} });
  } else {
    alert("error");
  } 
}

function* taxDelete(action) {
  const results = yield callWithAuth.post(API.tax.delete, {
    tax_id: action.payload
  });
  if (results) {
    const result = yield callWithAuth.get(API.tax.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.TAX_STORE, result });
    } else {
      alert("error");
    }
  } else {
    alert("error");
  }
}

function* taxAdd(action) {
 
  const results = yield callWithAuth.post(API.tax.create, { ...action.payload });
  if (results) {
    const { msg } = results;
    const result = yield callWithAuth.get(API.tax.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.TAX_STORE, result });
    } else {
      alert("error");
    }
    alert(msg);
  } else {
    const { errors } = results;
    alert(errors[0].message);
  }
}

function* taxEdit(action) {
 
  const results = yield callWithAuth.post(API.tax.update, { ...action.payload });
  if (results) {
    const { msg } = results;
    const result = yield callWithAuth.get(API.tax.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.TAX_STORE, result });
    } else {
      alert("error");
    }
    alert(msg);
  } else {
    const { errors } = results;
    alert(errors[0].message);
  }
}

//currency
function* currencyFetch(action) {
  const result = yield callWithAuth.get(API.currency.getall);
  if (result) {
    yield put({ type: DATA_ACTIONS.CURRENCY_STORE, result });
  } else {
    alert("error");
  }
}

function* currencyDetailFetch(action) {
  const result = yield callWithAuth.get(API.currency.get + "/" + action.payload);
  if (result) {
    yield put({ type: DATA_ACTIONS.CURRENCY_DETAIL_STORE, result });
    yield put( {type: DATA_ACTIONS.UPDATE_CRLG ,payload:{crlgEditShow: true} });
  } else {
    alert("error");
  } 
}

function* currencyDelete(action) {
  const results = yield callWithAuth.post(API.currency.delete, {
    crc_id: action.payload
  });
  if (results) {
    const result = yield callWithAuth.get(API.currency.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.CURRENCY_STORE, result });
    } else {
      alert("error");
    }
  } else {
    alert("error");
  }
}

function* currencyAdd(action) {
 
  const results = yield callWithAuth.post(API.currency.create, { ...action.payload });
  if (results) {
    const { msg } = results;
    const result = yield callWithAuth.get(API.currency.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.CURRENCY_STORE, result });
    } else {
      alert("error");
    }
    alert(msg);
  } else {
    const { errors } = results;
    alert(errors[0].message);
  }
}

function* currencyEdit(action) {
 
  const results = yield callWithAuth.post(API.currency.update, { ...action.payload });
  if (results) {
    const { msg } = results;
    const result = yield callWithAuth.get(API.currency.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.CURRENCY_STORE, result });
    } else {
      alert("error");
    }
    alert(msg);
  } else {
    const { errors } = results;
    alert(errors[0].message);
  }
}

//trx
function* trxFetch(action) {
  const result = yield callWithAuth.get(API.trx.getall);
  if (result) {
    yield put({ type: DATA_ACTIONS.TRX_STORE, result });
  } else {
    alert("error");
  }
}

function* trxDetailFetch(action) {
  const result = yield callWithAuth.get(API.trx.get + "/" + action.payload);
  if (result) {
    yield put({ type: DATA_ACTIONS.TRX_DETAIL_STORE, result });
    yield put( {type: DATA_ACTIONS.UPDATE_TRXLG ,payload:{trxlgEditShow: true} });
  } else {
    alert("error");
  } 
}

function* trxDelete(action) {
  const results = yield callWithAuth.post(API.trx.delete, {
    trx_id: action.payload
  });
  if (results) {
    const result = yield callWithAuth.get(API.trx.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.TRX_STORE, result });
    } else {
      alert("error");
    }
  } else {
    alert("error");
  }
}

function* trxAdd(action) {
 
  const results = yield callWithAuth.post(API.trx.create, { ...action.payload });
  if (results) {
    const { msg } = results;
    const result = yield callWithAuth.get(API.trx.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.TRX_STORE, result });
    } else {
      alert("error");
    }
    alert(msg);
  } else {
    const { errors } = results;
    alert(errors[0].message);
  }
}

function* trxEdit(action) {
 
  const results = yield callWithAuth.post(API.trx.update, { ...action.payload });
  if (results) {
    const { msg } = results;
    const result = yield callWithAuth.get(API.trx.getall);
    if (result) {
      yield put({ type: DATA_ACTIONS.TRX_STORE, result });
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
  yield takeEvery(DATA_ACTIONS.USER_EDIT, userEdit);
  // customer
  yield takeEvery(DATA_ACTIONS.CUSTOMER_FETCH, customerFetch);
  yield takeEvery(DATA_ACTIONS.CUSTOMER_DETAIL_FETCH, customerDetailFetch);
  yield takeEvery(DATA_ACTIONS.CUSTOMER_DELETE, customerDelete);
  yield takeEvery(DATA_ACTIONS.CUSTOMER_ADD, customerAdd);
  yield takeEvery(DATA_ACTIONS.CUSTOMER_EDIT, customerEdit);
  // tax
  yield takeEvery(DATA_ACTIONS.TAX_FETCH, taxFetch);
  yield takeEvery(DATA_ACTIONS.TAX_DETAIL_FETCH, taxDetailFetch);
  yield takeEvery(DATA_ACTIONS.TAX_DELETE, taxDelete);
  yield takeEvery(DATA_ACTIONS.TAX_ADD, taxAdd);
  yield takeEvery(DATA_ACTIONS.TAX_EDIT, taxEdit);
  // currency
  yield takeEvery(DATA_ACTIONS.CURRENCY_FETCH, currencyFetch);
  yield takeEvery(DATA_ACTIONS.CURRENCY_DETAIL_FETCH, currencyDetailFetch);
  yield takeEvery(DATA_ACTIONS.CURRENCY_DELETE, currencyDelete);
  yield takeEvery(DATA_ACTIONS.CURRENCY_ADD, currencyAdd);
  yield takeEvery(DATA_ACTIONS.CURRENCY_EDIT, currencyEdit);
  // trx
  yield takeEvery(DATA_ACTIONS.TRX_FETCH, trxFetch);
  yield takeEvery(DATA_ACTIONS.TRX_DETAIL_FETCH, trxDetailFetch);
  yield takeEvery(DATA_ACTIONS.TRX_DELETE, trxDelete);
  yield takeEvery(DATA_ACTIONS.TRX_ADD, trxAdd);
  yield takeEvery(DATA_ACTIONS.TRX_EDIT, trxEdit);
}

export default mySaga;
