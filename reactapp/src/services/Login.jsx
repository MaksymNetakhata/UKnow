import axios from 'axios';

const headers = {
    "Content-Type": "application/json"
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(
            'https://localhost:7135/login',
            { username, password },
            { headers }
        );
        console.log(response.data);

        // Сохраняем токен в локальное хранилище
        localStorage.setItem('authToken', response.data.token);

        // Возвращаем данные ответа
        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};