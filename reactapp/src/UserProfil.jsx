import React, {useEffect, useState} from 'react';
import NavMenu from "@/NavMenu.jsx";
import { fetchData } from "./services/fetchData.jsx";
import axios from "axios";

function UserProfile() {
    const [profileInfo, setProfileInfo] = useState(null);
    const headers = {
        "Content-Type": "application/json",
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/Profile", { headers, withCredentials: true });
                setProfileInfo(response.data); 
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <NavMenu/>
            {profileInfo && (
                <div>
                    <h2>Профиль пользователя</h2>
                    <p>Имя: {profileInfo.name}</p>
                    <p>Email: {profileInfo.email}</p>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
