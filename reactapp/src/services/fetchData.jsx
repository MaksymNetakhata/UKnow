import axios from "axios";

const headers = {
    "Content-Type": "application/json",
};
export const fetchData = async () => {
    try {
        var response = await axios.get("/api/Profile", { headers, withCredentials: true });
        console.log(response);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}