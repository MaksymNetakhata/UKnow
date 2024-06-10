import axios from "axios";

const headers = {
    "Content-Type": "application/json",
};
export const fetchTest = async () => {
    try {
        const response = await axios.get("http://localhost:5208/test", {
            headers: headers,
            withCredentials: true
        });
        console.log(response);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};