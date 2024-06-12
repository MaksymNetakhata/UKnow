import NavMenu from "./NavMenu.jsx";
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import { fetchTest } from "./services/fetchTest";
import { useEffect, useState } from "react";

const Quiz = () => {
    const [tests, setTests] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTest();
                console.log('Fetched data:', data);
                setTests(data);
            } catch (err) {
                console.error('Failed to fetch test data.');
            }
        };
        fetchData();
    }, []);

    const handleTestClick = (id) => {
        navigate(`/test/${id}`, { state: { tests } });
    };


    return (
        <div>
            <NavMenu/>
            <div className="text">
                <h1 className="quiz-title">Оберіть тест:</h1>
                <ul className="test-list">
                    {[...Array(10).keys()].map(index => (
                        <li key={index} onClick={() => handleTestClick(index+1)}>
                            Тест #{index + 1}
                        </li>
                    ))}
                </ul>



                {/*<ul className="test-cont">*/}
                {/*    <li><Link to="/Tests">Тест 1</Link></li>*/}
                {/*    <li><Link to="/quiz2">Тест 2</Link></li>*/}
                {/*</ul>*/}
            </div>
        </div>
    );
};

export default Quiz;