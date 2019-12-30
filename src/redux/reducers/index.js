const initialState = {
  temp: { used: false }
};

function globalState(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return state;
    default:
      return state;
  }
}

export default globalState;
