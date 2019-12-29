let ipdev = "localhost:3000"
let ipprod = "localhost:3000"
let ipused = ipdev

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