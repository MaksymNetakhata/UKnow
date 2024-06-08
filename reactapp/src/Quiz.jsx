import NavMenu from "./NavMenu.jsx";
import {Link} from "react-router-dom";
import './Quiz.css';

const Quiz = () => {
    return (
        <div>
            <NavMenu/>
            <div className="text">
                <h1 className="quiz-title">Оберіть тест:</h1>
                <ul className="test-cont">
                    <li><Link to="/Tests">Тест 1</Link></li>
                    <li><Link to="/quiz2">Тест 2</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Quiz;