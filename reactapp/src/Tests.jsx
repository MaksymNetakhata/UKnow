import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Tests.css';
import { useLocation, useParams } from 'react-router-dom';

const Test = () => {
    const location = useLocation();
    const { tests } = location.state;
    const { id } = useParams();

    const [error, setError] = useState(null);
    const [testData, setTestData] = useState(null);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const initialTests = tests.slice((id - 1) * 10, id * 10);
        const shuffledTests = initialTests.map(test => ({
            ...test,
            options: shuffleArray([test.option1, test.option2, test.option3, test.correctAnswer])
        }));
        setTestData(shuffledTests);
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
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


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
                                    {test.options.map((option, index) => (
                                        <li key={index}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={question - ${test.id}}
                                                value={option}
                                                onChange={() => handleAnswerChange(test.id, option)}
                                                />
                                                {option}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <button type="submit" className="check-button">Перевірити</button>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Test Results"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <button onClick={closeModal} className="close-button">X</button>
                <h2 className="test-h2">Tестування</h2>
                {score !== null && (
                    <p>Ваш результат: {score} з {testData.length}</p>
                )}
            </Modal>
        </form>
    );
};

export default Test;