const axios = require('axios');

export async function getAllPokemons() {

    try{
        const response = await axios.get('/pokemon/allpokemon');
        return response.data;
    }catch(error) {
        return [];
    }
    
}

// export async function createUser(data) {
//     const response = await axios.post(`/api/user`, {user: data});
//     return response.data;
// }