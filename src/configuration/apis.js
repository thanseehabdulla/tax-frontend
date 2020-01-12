let ipdev = "http://localhost:3000"
let ipprod = "http://54.173.7.226:3000"
let ipused = ipprod

const API = {
    'auth':{
        'login':ipused+ '/login',
        'register':ipused+ '/register',
        'changepassword':ipused+ '/changepassword',
    },
    'user':{
        'create':ipused+ '/register',
        'update':ipused+ '/api/v1/users/update',
        'get':ipused+ '/api/v1/users/get',
        'getall':ipused+ '/api/v1/users/getall',
        'delete':ipused+ '/api/v1/users/delete',

    },
    'customer':{
        'create':ipused+ '/api/v1/customers/create',
        'update':ipused+ '/api/v1/customers/update',
        'get':ipused+ '/api/v1/customers/get',
        'getall':ipused+ '/api/v1/customers/getall',
        'delete':ipused+ '/api/v1/customers/delete',

    },
    'tax':{
        'create':ipused+ '/api/v1/taxs/create',
        'update':ipused+ '/api/v1/taxs/update',
        'get':ipused+ '/api/v1/taxs/get',
        'getall':ipused+ '/api/v1/taxs/getall',
        'delete':ipused+ '/api/v1/taxs/delete',

    },
    'currency':{
        'create':ipused+ '/api/v1/currency/create',
        'update':ipused+ '/api/v1/currency/update',
        'get':ipused+ '/api/v1/currency/get',
        'getall':ipused+ '/api/v1/currency/getall',
        'delete':ipused+ '/api/v1/currency/delete',

    },
    'trx':{
        'create':ipused+ '/api/v1/trx/create',
        'update':ipused+ '/api/v1/trx/update',
        'get':ipused+ '/api/v1/trx/get',
        'getall':ipused+ '/api/v1/trx/getall',
        'delete':ipused+ '/api/v1/trx/delete',

    },
    'invoice':{
        'create':ipused+ '/api/v1/invoices/create',
        'update':ipused+ '/api/v1/invoices/update',
        'get':ipused+ '/api/v1/invoices/get',
        'getall':ipused+ '/api/v1/invoices/getall',
        'delete':ipused+ '/api/v1/invoices/delete',
        'statuschange':ipused+ '/api/v1/invoices/statuschange',
    }
}

export default API;