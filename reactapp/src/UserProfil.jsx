import React, {useEffect, useState} from 'react';
import NavMenu from "@/NavMenu.jsx";
import './UserProfil.css';
import { fetchData } from "./services/fetchData.jsx";
import axios from "axios";
import { getUserIdFromToken } from './services/SaveResults';

function UserProfile() {
    const [profileInfo, setProfileInfo] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const id = getUserIdFromToken(token);
                const response = await axios.get(`https://localhost:7135/api/Profille/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    withCredentials: true
                });
                setProfileInfo(response.data); 
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, []);

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
                        <th>Тест 1</th>
                        <th>Тест 2</th>
                        <th>Тест 3</th>
                        <th>Тест 4</th>
                        <th>Тест 5</th>
                        <th>Тест 6</th>
                        <th>Тест 7</th>
                        <th>Тест 8</th>
                        <th>Тест 9</th>
                        <th>Тест 10</th>
                        <th>Середнє значення</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr key={profileInfo.user}>
                            <td>{profileInfo.scoreIn1}</td>
                            <td>{profileInfo.scoreIn2}</td>
                            <td>{profileInfo.scoreIn3}</td>
                            <td>{profileInfo.scoreIn4}</td>
                            <td>{profileInfo.scoreIn5}</td>
                            <td>{profileInfo.scoreIn6}</td>
                            <td>{profileInfo.scoreIn7}</td>
                            <td>{profileInfo.scoreIn8}</td>
                            <td>{profileInfo.scoreIn9}</td>
                            <td>{profileInfo.scoreIn10}</td>
                            <td>{profileInfo.average}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserProfile;
