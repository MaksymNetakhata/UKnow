import React, { useEffect, useState } from 'react';

const Test = () => {
    const [tests, setTests] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const response = await fetch('https://localhost:5173/test', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                if (response.ok) {
                    throw new Error(`HTTP good! status: ${response.status}`);
                }
            } catch (error) {
                setError(error);
                console.error('Error:', error);
            }
        };

        fetchTests();
    }, []);

    return (
        <div>
            <h1>Test List</h1>
            <ul>
                {tests.map((test) => (
                    <li key={test.id}>
                        <h2>{test.Question}</h2>
                        <ul>
                            <li>{test.Option1}</li>
                            <li>{test.Option2}</li>
                            <li>{test.Option3}</li>
                        </ul>
                        <p>Correct Answer: {test.CorrectAnswer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Test;