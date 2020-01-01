const initialState = {
  temp: { used: false },
  users:[],
  userDetail:{}
};

function globalState(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return state;
    case "USER_STORE":
      return {...state,users:action.result}
    case "USER_DETAIL_STORE":
      return {...state,  userDetail:action.result}  
    default:
      return state;
  }
}

export default globalState;
