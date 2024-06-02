import axios from "axios";

const headers = {
    "Content-Type": "application/json",
};
export const fetchTest = async () => {


    try {
        var response = await axios.get("https://localhost:7135/test", { headers });
        console.log(response);
    } catch (e) {
        console.error(e);
    }

    

    
}