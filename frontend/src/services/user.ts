import axios from 'axios';

const baseUrl: string = 'http://localhost:6969/api/users';

const getAll = (): Promise<object> => {
    const request = axios.get(`${baseUrl}`);
    return request.then(response => response.data);
}

const create = (newUser: object): Promise<object> => {
    const request = axios.post(`${baseUrl}`, newUser);
    return request.then(response => response.data);
}

const getUserData = () => {
    const request = axios.get(`${baseUrl}/getUserData`);
    return request.then(response => response.data);
}

const validateToken = (token:string) => {
    console.log(999)
    const request = axios.post(`${baseUrl}/validate`, {token:token});
    return request.then(response => response.data.isValid)
}

const checkInUse = async (userData: any, values: { email?: string, username?: string }): Promise<boolean> => {
    if (values.hasOwnProperty('email')) {
        if (userData['userData'][0].includes(values.email)) {
            return Promise.resolve(true)
        } else {
            return Promise.resolve(false)
        }
    } else {
        if (userData['userData'][1].includes(values.username)) {
            return Promise.resolve(true)
        } else {
            return Promise.resolve(false)
        }
    }
    return Promise.resolve(false)
}
export default {
    getAll, create, checkInUse, getUserData,validateToken
};