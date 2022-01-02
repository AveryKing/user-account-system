import axios from 'axios';

const baseUrl: string = 'http://localhost:6969/api/posts';

const getMultiple = (posts: string[]): Promise<object> => {
    const request = axios.get(`${baseUrl}`);
    return request.then(response => response.data);
}

export default {
    getMultiple
}