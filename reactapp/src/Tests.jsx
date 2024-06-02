import React, { useEffect, useState } from 'react';

const Test = () => {
    const [tests, setTests] = useState([]);
    const [error, setError] = useState(null);
        const fetchTests = async () => {
            const response = {
                method: 'GET',
                mode: 'no-cors'
            };

            const result = await fetch('test', response);

            if (result.ok ) {
                const data = await result.json();
                setTests(data);
                return data;
            } 
            return [];
        }
                
                
useEffect(()=>{ 
    fetchTests();
},[]);
       
  

    return (
        <div>
            <h1>Test List</h1>
            {error && <p>{error}</p>}
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
