import axios from 'axios';

const http = axios.create({ baseURL: 'http://localhost:3000/email/', timeout: 5000 });

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export const sendMessage = async (data) => {
    return await http
        .post('send', data)
        .then((response) => {
            return {
                message: response,
                statusCode: 200,
            };
        })
        .catch((error) => {
            return {
                message: error,
                statusCode: 400,
            };
        });
};
