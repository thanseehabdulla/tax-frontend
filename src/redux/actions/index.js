const DATA_ACTIONS = {
  LOGIN_REQUEST: "login_request",
  // user
  USER_STORE: "user_store",
  DETAIL_STORE: "detail_store",
  USER_FETCH: "user_fetch",
  DETAIL_FETCH: "detail_fetch",
  USER_DELETE: "user_delete",
  USER_ADD:"user_add",
  USER_EDIT:"user_edit",
  UPDATE_LG:"update_lg",
  // customer
  CUSTOMER_STORE: "customer_store",
  CUSTOMER_DETAIL_STORE: "customer_detail_store",
  CUSTOMER_FETCH: "customer_fetch",
  CUSTOMER_DETAIL_FETCH: "customer_detail_fetch",
  CUSTOMER_DELETE: "customer_delete",
  CUSTOMER_ADD:"customer_add",
  CUSTOMER_EDIT:"customer_edit",
  UPDATE_CLG:"update_clg",
  // tax
  TAX_STORE: "tax_store",
  TAX_DETAIL_STORE: "tax_detail_store",
  TAX_FETCH: "tax_fetch",
  TAX_DETAIL_FETCH: "tax_detail_fetch",
  TAX_DELETE: "tax_delete",
  TAX_ADD:"tax_add",
  TAX_EDIT:"tax_edit",
  UPDATE_TLG:"update_tlg",
  // currency
  CURRENCY_STORE: "currency_store",
  CURRENCY_DETAIL_STORE: "currency_detail_store",
  CURRENCY_FETCH: "currency_fetch",
  CURRENCY_DETAIL_FETCH: "currency_detail_fetch",
  CURRENCY_DELETE: "currency_delete",
  CURRENCY_ADD:"currency_add",
  CURRENCY_EDIT:"currency_edit",
  UPDATE_CRLG:"update_crlg",
  // trx
  TRX_STORE: "trx_store",
  TRX_DETAIL_STORE: "trx_detail_store",
  TRX_FETCH: "trx_fetch",
  TRX_DETAIL_FETCH: "trx_detail_fetch",
  TRX_DELETE: "trx_delete",
  TRX_ADD:"trx_add",
  TRX_EDIT:"trx_edit",
  UPDATE_TRXLG:"update_trxlg",
  // invoice
  INVOICE_STORE: "invoice_store",
  INVOICE_DETAIL_STORE: "invoice_detail_store",
  INVOICE_FETCH: "invoice_fetch",
  INVOICE_DETAIL_FETCH: "invoice_detail_fetch",
  INVOICE_DELETE: "invoice_delete",
  INVOICE_ADD:"invoice_add",
  INVOICE_EDIT:"invoice_edit",
  UPDATE_INVOICELG:"update_invoicelg",
  // user
   updateLg:payload => {
    return { type: DATA_ACTIONS.UPDATE_LG, payload };
  },
  loginRequest: payload => {
    return { type: DATA_ACTIONS.LOGIN_REQUEST, payload };
  },
  userEditActionCreator:payload => {
    return { type: DATA_ACTIONS.USER_EDIT, payload };
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
  // customer
  customerEditActionCreator:payload => {
    return { type: DATA_ACTIONS.CUSTOMER_EDIT, payload };
  },
  customerFetchActionCreator: () => {
    return { type: DATA_ACTIONS.CUSTOMER_FETCH };
  },
  customerDetailFetchActionCreator: payload => {
    return { type: DATA_ACTIONS.CUSTOMER_DETAIL_FETCH, payload };
  },
  customerDeleteActionCreator: payload => {
    return { type: DATA_ACTIONS.CUSTOMER_DELETE, payload };
  },
  customerAddActionCreator:payload => {
    return { type: DATA_ACTIONS.CUSTOMER_ADD, payload };
  },
  updatecLg:payload => {
    return { type: DATA_ACTIONS.UPDATE_CLG, payload };
  },
  // tax
  taxEditActionCreator:payload => {
    return { type: DATA_ACTIONS.TAX_EDIT, payload };
  },
  taxFetchActionCreator: () => {
    return { type: DATA_ACTIONS.TAX_FETCH };
  },
  taxDetailFetchActionCreator: payload => {
    return { type: DATA_ACTIONS.TAX_DETAIL_FETCH, payload };
  },
  taxDeleteActionCreator: payload => {
    return { type: DATA_ACTIONS.TAX_DELETE, payload };
  },
  taxAddActionCreator:payload => {
    return { type: DATA_ACTIONS.TAX_ADD, payload };
  },
  updatetLg:payload => {
    return { type: DATA_ACTIONS.UPDATE_TLG, payload };
  },
  // currency
  currencyEditActionCreator:payload => {
    return { type: DATA_ACTIONS.CURRENCY_EDIT, payload };
  },
  currencyFetchActionCreator: () => {
    return { type: DATA_ACTIONS.CURRENCY_FETCH };
  },
  currencyDetailFetchActionCreator: payload => {
    return { type: DATA_ACTIONS.CURRENCY_DETAIL_FETCH, payload };
  },
  currencyDeleteActionCreator: payload => {
    return { type: DATA_ACTIONS.CURRENCY_DELETE, payload };
  },
  currencyAddActionCreator:payload => {
    return { type: DATA_ACTIONS.CURRENCY_ADD, payload };
  },
  updatecrLg:payload => {
    return { type: DATA_ACTIONS.UPDATE_CRLG, payload };
  },
  // trx
  trxEditActionCreator:payload => {
    return { type: DATA_ACTIONS.TRX_EDIT, payload };
  },
  trxFetchActionCreator: () => {
    return { type: DATA_ACTIONS.TRX_FETCH };
  },
  trxDetailFetchActionCreator: payload => {
    return { type: DATA_ACTIONS.TRX_DETAIL_FETCH, payload };
  },
  trxDeleteActionCreator: payload => {
    return { type: DATA_ACTIONS.TRX_DELETE, payload };
  },
  trxAddActionCreator:payload => {
    return { type: DATA_ACTIONS.TRX_ADD, payload };
  },
  updatetrxLg:payload => {
    return { type: DATA_ACTIONS.UPDATE_TRXLG, payload };
  },
  // invoice
  invoiceEditActionCreator:payload => {
    return { type: DATA_ACTIONS.INVOICE_EDIT, payload };
  },
  invoiceFetchActionCreator: () => {
    return { type: DATA_ACTIONS.INVOICE_FETCH };
  },
  invoiceDetailFetchActionCreator: payload => {
    return { type: DATA_ACTIONS.INVOICE_DETAIL_FETCH, payload };
  },
  invoiceDeleteActionCreator: payload => {
    return { type: DATA_ACTIONS.INVOICE_DELETE, payload };
  },
  invoiceAddActionCreator:payload => {
    return { type: DATA_ACTIONS.INVOICE_ADD, payload };
  },
  updateinvoiceLg:payload => {
    return { type: DATA_ACTIONS.UPDATE_INVOICELG, payload };
  },
};

export default DATA_ACTIONS;
