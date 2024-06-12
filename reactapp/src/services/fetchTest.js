import axios from "axios";

const headers = {
    "Content-Type": "application/json",
};
export const fetchTest = async () => {
    try {
        const response = await axios.get("https://localhost:7135/test", {
            headers: headers,
            withCredentials: true
        });
        console.log(response);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};