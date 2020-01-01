const DATA_ACTIONS = {
  LOGIN_REQUEST: "login_request",
  USER_FETCH: "user_fetch",
  USER_DETAIL_FETCH: "user_detail_fetch",
  USER_STORE: "user_store",
  USER_DETAIL_STORE: "user_detail_store",
  USER_DELETE: "user_delete",
  USER_ADD:"user_add",
  loginRequest: payload => {
    return { type: DATA_ACTIONS.LOGIN_REQUEST, payload };
  },
  userFetchActionCreator: () => {
    return { type: DATA_ACTIONS.USER_FETCH };
  },
  userDetailFetchActionCreator: payload => {
    return { type: DATA_ACTIONS.USER_DETAIL_FETCH, payload };
  },
  userDeleteActionCreator: payload => {
    return { type: DATA_ACTIONS.USER_DELETE, payload };
  },
  userAddActionCreator:payload => {
    return { type: DATA_ACTIONS.USER_ADD, payload };
  },
};

export default DATA_ACTIONS;
