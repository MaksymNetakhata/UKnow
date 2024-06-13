import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

//// Функция для получения значения куки по имени
//export const getCookie = (name) => {
//    const value = `; ${document.cookie}`;
//    const parts = value.split(`; ${name}=`);
//    if (parts.length === 2) return parts.pop().split(';').shift();
//};

// Функция для декодирования токена и получения userId
export const getUserIdFromToken = (token) => {
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.userId; // Или другой ключ, содержащий userId
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};

// Функция для сохранения результатов в базу данных
export const saveResultsToDatabase = async (score, testId) => {
    const token = localStorage.getItem('token');

    const userId = getUserIdFromToken(token);

    if (!userId) {
        console.error('User ID not found in token');
        return;
    }

    try {
        const response = await fetch('https://localhost:7135/test', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',

            },

            body: JSON.stringify({ userId, testId, score }),
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Failed to save results');
        }

        const data = await response.json();
        console.log('Results saved:', data);
    } catch (error) {
        console.error('Error saving results:', error);
    }
};