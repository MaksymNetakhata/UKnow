import axios from 'axios';

const API_URL = 'http://localhost:5208/';

export const fetchUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/user`);
        return response.data;
    } catch (error) {
        throw new Error('Помилка виводу даних');
    }
};