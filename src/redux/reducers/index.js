
import DATA_ACTIONS from './../actions'

const initialState = {
  temp: { used: false },
  users: [],
  detail: {},
  lgShow: false,
  lgEditShow: false
};

function globalState(state = initialState, action) {
  console.log("Action",action)
  switch (action.type) {
    case DATA_ACTIONS.USER_STORE:
      return { ...state, users: action.result };
    case DATA_ACTIONS.UPDATE_LG:
      return { ...state, ...action.payload };
    case DATA_ACTIONS.DETAIL_STORE:
      return { ...state, detail: action.result };
    default:
      return state;
  }
}

export default globalState;
