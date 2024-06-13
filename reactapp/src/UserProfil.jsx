import React, {useEffect, useState} from 'react';
import NavMenu from "@/NavMenu.jsx";
import { fetchData } from "./services/fetchData.jsx";
import axios from "axios";

function UserProfile() {
    const [profileInfo, setProfileInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProfileData = async () => {
            const data = await fetchData();
            setProfileInfo(data);
            setIsLoading(false);
        };

        getProfileData();
    }, []);

    if (isLoading) {
        return <p>Загрузка...</p>;
    }
    const handleRemoveItem = () => {
        localStorage.removeItem('isAuthorized');
    };
    if (!profileInfo || (Array.isArray(profileInfo) && profileInfo.length === 0)) {
        return (
            <div>
                <NavMenu/>
                <p className="text">Немає даних користувача.</p>
                
            </div>
        );
    }
   
    return (
        <div>
            <NavMenu/>
            {profileInfo && (
                <div>
                    <h2 className="text">Ваш профіль</h2>
                   
                    <p></p>
                    
                </div>
            )}
        </div>
    );
}

export default UserProfile;
