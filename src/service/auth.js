import api from './_api';

function login(data){
    return api.post('/auth/login', data);
}

export  {login};