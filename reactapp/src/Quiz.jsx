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
                    <li><Link to="/Tests">Тест рівень А2</Link></li>
                    <li><Link to="/quiz2"></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Quiz;