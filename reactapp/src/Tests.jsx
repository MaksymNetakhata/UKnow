import {useEffect, useState} from 'react';
import { fetchTest} from "./services/fetchTest"

const Test = () => {
    const [testData, setTestData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTest();
                setTestData(data);
            } catch (err) {
                setError('Failed to fetch test data.');
            }
        };
        fetchData();
    }, []);
    
    return (
        <div>
            <h1>Test List</h1>
            {error && <p>{error}</p>}
            {testData ? (
                <ul>
                    <li key={testData[0].id}>
                        <h2>{testData[0].Question}</h2>
                        <ul>
                            <li>{testData[0].Option1}</li>
                            <li>{testData[0].Option2}</li>
                            <li>{testData[0].Option3}</li>
                        </ul>
                        <p>Correct Answer: {testData[0].CorrectAnswer}</p>
                    </li>
                    <li key={testData[1].id}>
                        <h2>{testData[1].Question}</h2>
                        <ul>
                            <li>{testData[1].Option1}</li>
                            <li>{testData[1].Option2}</li>
                            <li>{testData[1].Option3}</li>
                        </ul>
                        <p>Correct Answer: {testData[1].CorrectAnswer}</p>
                    </li>
                    <li key={testData[2].id}>
                        <h2>{testData[2].Question}</h2>
                        <ul>
                            <li>{testData[2].Option1}</li>
                            <li>{testData[2].Option2}</li>
                            <li>{testData[2].Option3}</li>
                        </ul>
                        <p>Correct Answer: {testData[2].CorrectAnswer}</p>
                    </li>
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Test;
