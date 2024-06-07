import axios from 'axios';


export const login = async () => {
    try {
        const response = await axios.post(
            'https://localhost:7135/auth',
        );
        console.log(response);

        // ��������� ����� � ��������� ���������
        localStorage.setItem('authToken', response.data.token);

        // ���������� ������ ������
        return response.request.responseURL;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};