const DATA_ACTIONS = {
  LOGIN_REQUEST: "login_request",
  loginRequest:(payload)=>{
        return ({type:DATA_ACTIONS.LOGIN_REQUEST,
       payload})
    },
};

export default DATA_ACTIONS;
