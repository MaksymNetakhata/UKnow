import {useEffect, useState} from 'react';
import { fetchTest} from "./services/fetchTest"
import './Tests.css';

const Test = () => {
    const [testData, setTestData] = useState(null);
    const [error, setError] = useState(null);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
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
    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let correctAnswersCount = 0;
        testData.forEach(test => {
            const userAnswer = answers[test.id];
            const correctAnswer = test.correctAnswer;
            if (userAnswer === correctAnswer) {
                correctAnswersCount++;
            }
        });
        setScore(correctAnswersCount);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Test List</h1>
                {error && <p>{error}</p>}
                {testData ? (
                    <ul>
                        {testData.map((test) => (
                            <li key={test.id} className="test-item">
                                <h2>{test.question}</h2>
                                <ul className="options">
                                    <li>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${test.id}`}
                                                value={test.option1}
                                                onChange={() => handleAnswerChange(test.id, test.option1)}
                                            />
                                            {test.option1}
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${test.id}`}
                                                value={test.option2}
                                                onChange={() => handleAnswerChange(test.id, test.option2)}
                                            />
                                            {test.option2}
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${test.id}`}
                                                value={test.option3}
                                                onChange={() => handleAnswerChange(test.id, test.option3)}
                                            />
                                            {test.option3}
                                        </label>
                                    </li>
                                </ul>
                              
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <button type="submit">Check
                {score !== null && <p>Your score: {score} out of {testData.length}</p>}
            </button>
           
        </form>
    );
};

export default Test;
