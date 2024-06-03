import {useEffect, useState} from 'react';
import { fetchTest} from "./services/fetchTest"

const Test = () => {
    const [testData, setTestData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTest();
                console.log('Fetched data:', data);
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
                    {testData.map((test) => (
                        <li key={test.id}>
                            <h2>{test.question}</h2>
                            <ul>
                                <li>{test.option1}</li>
                                <li>{test.option2}</li>
                                <li>{test.option3}</li>
                            </ul>
                            <p>Correct Answer: {test.CorrectAnswer}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Test;
