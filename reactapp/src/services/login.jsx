import axios from 'axios';

const headers = {
    "Content-Type": "application/json"
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(
            'http://localhost:5208/auth',
        );
        console.log(response);

        // Ñîõðàíÿåì òîêåí â ëîêàëüíîå õðàíèëèùå
        localStorage.setItem('authToken', response.data.token);

        // Âîçâðàùàåì äàííûå îòâåòà
        return response.request.responseURL;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};