import axios from "axios";

const headers = {
    "Content-Type": "application/json",
};
export const fetchData = async () => {
    try {
        var response = await axios.get("https://localhost:7135/api/Profille", { headers, withCredentials: true });
        console.log(response);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}