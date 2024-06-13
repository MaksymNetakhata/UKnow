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
            <div>
                <h2 className="text">Ваш профіль</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Ім'я користувача</th>
                        <th>ScoreIn1</th>
                        <th>ScoreIn2</th>
                        <th>ScoreIn3</th>
                        <th>ScoreIn4</th>
                        <th>ScoreIn5</th>
                        <th>ScoreIn6</th>
                        <th>ScoreIn7</th>
                        <th>ScoreIn8</th>
                        <th>ScoreIn9</th>
                        <th>ScoreIn10</th>
                        <th>Average</th>
                    </tr>
                    </thead>
                    <tbody>
                    {profileInfo.map(profile => (
                        <tr key={profile.id}>
                            <td>{profile.user ? profile.user.name : 'N/A'}</td>
                            <td>{profile.scoreIn1}</td>
                            <td>{profile.scoreIn2}</td>
                            <td>{profile.scoreIn3}</td>
                            <td>{profile.scoreIn4}</td>
                            <td>{profile.scoreIn5}</td>
                            <td>{profile.scoreIn6}</td>
                            <td>{profile.scoreIn7}</td>
                            <td>{profile.scoreIn8}</td>
                            <td>{profile.scoreIn9}</td>
                            <td>{profile.scoreIn10}</td>
                            <td>{profile.average}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserProfile;