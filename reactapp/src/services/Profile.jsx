import axios from 'axios';


export const fetchUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/user`);
        return response.data;
    } catch (error) {
        throw new Error('Помилка виводу даних');
    }
};