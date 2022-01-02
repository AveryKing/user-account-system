import axios from 'axios';

const baseUrl: string = 'http://localhost:6969/api/posts';

const getMultiple = (posts: string[]): Promise<object> => {
    const request = axios.post(`${baseUrl}/multiple`,{posts:posts});
    return request.then(response => response.data);
}

export default {
    getMultiple
}