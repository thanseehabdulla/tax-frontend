const AdminConfig = {
  sidebar: [
    {
      name: "user",
      component: "user",
      element: "Userlist"
    },
    {
      name: "customer",
      component: "customer",
      element: "Customer"
    },
    {
      name: "tax",
      component: "tax",
      element: "Tax"
    },
    {
      name: "currency",
      component: "currency",
      element: "Currency"
    },
    {
      name: "invoice",
      component: "invoice",
      element: "Invoice"
    },
    {
      name: "invoice",
      component: "invoicelines",
      element: "InvoiceLines"
    },
    {
      name: "trx log",
      component: "trxlog",
      element: "TrxLog"
    }
  ]
};

export default AdminConfig;
