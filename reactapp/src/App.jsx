import React, { Component } from 'react';
import './App.css';
import NavMenu from "./NavMenu.jsx";



class NewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'ua',
        };
    }

    changeLanguage = (event) => {
        this.setState({ selectedLanguage: event.target.value });
    };
    render() {
        const { selectedLanguage } = this.state;
        const newsItems = [
            { language: 'ua', title: 'Новина на українській мові', description: 'Опис новини.' },
            { language: 'en', title: 'News in English', description: 'Description of the news.' },
            { language: 'es', title: 'Noticia en Español', description: 'Descripción de la noticia.' },
            { language: 'fr', title: 'Nouvelle en Français', description: 'Description de la nouvelle.' },
        ];

        return (
            <div className="news-container">
                <div className="news-header">
                    <h2>Оберіть мову:</h2>
                    <select className="language-select" value={selectedLanguage} onChange={this.changeLanguage}>
                        <option value="ua">Український</option>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                    </select>
                </div>

                <div className="news-items">
                    {newsItems
                        .filter(item => item.language === selectedLanguage)
                        .map((item, index) => (
                            <div className="news-item" key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}



export class Home extends Component {
    static displayName = Home.name;
    navigateToQuiz = () => {
        
        window.location.href = "/Quiz"; 
    };
    render() {
        return (
            <div>
                <NavMenu />
                <div className="home-container">
                    <h1 className="title">Вивчення мови за допомогою тестів</h1>
                    <button className="dark-button" onClick={this.navigateToQuiz}>Перейти до тестів</button>
                </div>
                <NewsComponent/>
            </div>
        );
    }
}

export default Home;