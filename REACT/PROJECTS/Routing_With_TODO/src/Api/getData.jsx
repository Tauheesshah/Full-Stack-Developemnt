import axios from 'axios'

const Base_API = axios.create({
    baseURL:'https://reqres.in/api',
});

export const getData = async (path) => {
    try {
        const res = await Base_API.get(`${path}`,{
            headers:{"x-api-key":'reqres_d6053bc7a07245cab783ae8ef30f7666 '}
        });
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

