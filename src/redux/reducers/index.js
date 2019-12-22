const initialState = {
    temp : {used:false}
}


export default function globalState(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state
    default:
      return state
  }
}
