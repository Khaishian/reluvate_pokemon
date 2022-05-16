const axios = require('axios');

export async function loginUser(data) {
    try{
        const response = await axios.post(`/auth/jwt/create`, data);
        return response.data;
    }catch(error){
        return error;
    }
}

export async function registerUser(data) {
    try{
        const response = await axios.post(`/auth/register`, data);
        return response.data;
    }catch(error){
        return error;
    }
}

export async function getCurrentUser(jwt) {
    const instance = axios.create({
        headers: {'Authorization': 'Bearer '+ jwt}
      });
    try{
        const response = await instance.get('/auth/users/me');
        return response.data;
    }catch(error) {
        return [];
    }
    
}