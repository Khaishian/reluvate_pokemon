const axios = require('axios');

export async function getAllPokemons() {

    try{
        const response = await axios.get('/pokemon/allpokemon');
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function getMyPokemons(jwt) {
    const instance = axios.create({
        headers: {'Authorization': 'Bearer '+ jwt}
      });
    // const config = {
    //     headers: {'Authorization': 'Bearer '+ jwt}
    //   };
    try{
        const response = await instance.get('/pokemon/mypokemon');
        // const response = await fetch('/pokemon/mypokemon', config);
        // return await response.json();
        return await response.data;
    }catch(error) {
        return [];
    }
    
}

export async function getUnownedPokemons(jwt) {
    const instance = axios.create({
        headers: {'Authorization': 'Bearer '+ jwt}
      });
    try{
        const response = await instance.get('/pokemon/unownedpokemon');
        return await response.data;
    }catch(error) {
        return [];
    }
    
}

export async function deletePokemon(jwt, id) {
    const instance = axios.create({
        headers: {'Authorization': 'Bearer '+ jwt}
      });
    try{
        const response = await instance.delete('/pokemon/releasepokemon/' + id +'/');
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function addPokemon(jwt, data) {
    const instance = axios.create({
        headers: {'Authorization': 'Bearer '+ jwt}
      });
    try{
        const response = await instance.post('/pokemon/addpokemon/', data);
        return response.data;
    }catch(error) {
        return [];
    }
    
}

// export async function createUser(data) {
//     const response = await axios.post(`/api/user`, {user: data});
//     return response.data;
// }