import DATA_ACTIONS from "./../actions";

const initialState = {
  temp: { used: false },
  users: [],
  detail: {},
  customers: [],
  taxs: [],
  currencys:[],
  trxs:[],
  customer_detail: {},
  lgShow: false,
  lgEditShow: false,
  clgShow: false,
  clgEditShow: false,
  crlgShow: false,
  crlgEditShow: false,
  trxlgShow: false,
  trxlgEditShow: false,
  tlgShow: false,
  tlgEditShow: false
};

function globalState(state = initialState, action) {
  console.log("Action", action);
  switch (action.type) {
       case DATA_ACTIONS.UPDATE_LG:
      return { ...state, ...action.payload };
       case DATA_ACTIONS.USER_STORE:
      return { ...state, users: action.result };
     case DATA_ACTIONS.DETAIL_STORE:
      return { ...state, detail: action.result };
      //customer
      case DATA_ACTIONS.UPDATE_CLG:
      return { ...state, ...action.payload };
      case DATA_ACTIONS.CUSTOMER_STORE:
      return { ...state, customers: action.result };
     case DATA_ACTIONS.CUSTOMER_DETAIL_STORE:
      return { ...state, detail: action.result };
      //tax
      case DATA_ACTIONS.UPDATE_TLG:
      return { ...state, ...action.payload };
      case DATA_ACTIONS.TAX_STORE:
      return { ...state, taxs: action.result };
     case DATA_ACTIONS.TAX_DETAIL_STORE:
      return { ...state, detail: action.result };
      //currency
      case DATA_ACTIONS.UPDATE_CRLG:
      return { ...state, ...action.payload };
      case DATA_ACTIONS.CURRENCY_STORE:
      return { ...state, currencys: action.result };
     case DATA_ACTIONS.CURRENCY_DETAIL_STORE:
      return { ...state, detail: action.result };
      //trx
      case DATA_ACTIONS.UPDATE_TRXLG:
      return { ...state, ...action.payload };
      case DATA_ACTIONS.TRX_STORE:
      return { ...state, trxs: action.result };
     case DATA_ACTIONS.TRX_DETAIL_STORE:
      return { ...state, detail: action.result };
    default:
      return state;
  }
}

export default globalState;
