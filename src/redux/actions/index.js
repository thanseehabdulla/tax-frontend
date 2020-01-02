const DATA_ACTIONS = {
  LOGIN_REQUEST: "login_request",
  USER_FETCH: "user_fetch",
  DETAIL_FETCH: "detail_fetch",
  USER_STORE: "user_store",
  DETAIL_STORE: "detail_store",
  USER_DELETE: "user_delete",
  USER_ADD:"user_add",
  USER_EDIT:"user_edit",
  UPDATE_LG:"update_lg",
  userEditActionCreator:payload => {
    return { type: DATA_ACTIONS.USER_EDIT, payload };
  },
  updateLg:payload => {
    return { type: DATA_ACTIONS.UPDATE_LG, payload };
  },
  loginRequest: payload => {
    return { type: DATA_ACTIONS.LOGIN_REQUEST, payload };
  },
  userFetchActionCreator: () => {
    return { type: DATA_ACTIONS.USER_FETCH };
  },
  detailFetchActionCreator: payload => {
    return { type: DATA_ACTIONS.DETAIL_FETCH, payload };
  },
  userDeleteActionCreator: payload => {
    return { type: DATA_ACTIONS.USER_DELETE, payload };
  },
  userAddActionCreator:payload => {
    return { type: DATA_ACTIONS.USER_ADD, payload };
  },
};

export default DATA_ACTIONS;
