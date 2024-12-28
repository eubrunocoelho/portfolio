import axios from 'axios';

const http = axios.create({ baseURL: 'https://nodemailer-nestjs-api.vercel.app' });

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
        .post('email/send', data)
        .then((response) => {
            return {
                response: response,
                statusCode: 200,
            };
        })
        .catch((error) => {
            return {
                response: error,
                statusCode: 400,
            };
        });
};
