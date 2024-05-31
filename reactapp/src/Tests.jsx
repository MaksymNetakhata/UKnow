import React, { useEffect, useState } from 'react';

const Test = () => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const response = await fetch('http://localhost:5173/test/');
                const data = await response.json();
                setTests(data);
            } catch (error) {
                console.error('Error', error);
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