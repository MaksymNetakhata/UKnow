import React, { useEffect, useRef, useState } from 'react';
import './Profile.css';
import axios from "axios";

export default function Profile() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');

    const signupButtonRef = useRef(null);
    const loginButtonRef = useRef(null);
    const userFormsRef = useRef(null);
    
    const getIn = {
        "name":fullName,
        "login":email,
        "password":password,
    };
    useEffect(() => {
        const signupButton = signupButtonRef.current;
        const loginButton = loginButtonRef.current;
        const userForms = userFormsRef.current;

        const handleSignupClick = () => {
            userForms.classList.remove('bounceRight');
            userForms.classList.add('bounceLeft');
        };

        const handleLoginClick = () => {
            userForms.classList.remove('bounceLeft');
            userForms.classList.add('bounceRight');
        };

        signupButton.addEventListener('click', handleSignupClick);
        loginButton.addEventListener('click', handleLoginClick);

        return () => {
            signupButton.removeEventListener('click', handleSignupClick);
            loginButton.removeEventListener('click', handleLoginClick);
        };
    }, []);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5208/auth', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            setMessage(data.message);
        } else {
            setMessage('Unauthorized');
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5208/auth/register', getIn, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log('Registration successful');
            setMessage('Registration successful');
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }

    };

    return (
        <section className="user">
            <div className="user_options-container">
                <div className="user_options-text">
                    <div className="user_options-unregistered">
                        <h2 className="user_unregistered-title">Немає облікового запису?</h2>
                        <p className="user_unregistered-text">Зареєструйтесь щоб дізнатись свій рівень іноземної мови</p>
                        <button className="user_unregistered-signup" id="signup-button" ref={signupButtonRef} >
                            Зареєструватись
                        </button>
                    </div>

                    <div className="user_options-registered">
                        <h2 className="user_registered-title">Є обліковий запис?</h2>
                        <p className="user_registered-text">Увійдіть щоб переглянути свій рівень іноземної мови</p>
                        <button className="user_registered-login" id="login-button" ref={loginButtonRef}>
                            Увійти
                        </button>
                    </div>
                </div>

                <div className="user_options-forms" id="user_options-forms" ref={userFormsRef}>
                    <div className="user_forms-login">
                        <h2 className="forms_title">Увійти</h2>
                        <form className="forms_form" onSubmit={handleLoginSubmit}>
                            <fieldset className="forms_fieldset">
                                <div className="forms_field">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="forms_field-input"
                                        required
                                        autoFocus
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="forms_field">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="forms_field-input"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </fieldset>
                            <div className="forms_buttons">
                                <button type="button" className="forms_buttons-forgot">Забули пароль?</button>
                                <input type="submit" value="Log In" className="forms_buttons-action" />
                            </div>
                        </form>
                    </div>
                    <div className="user_forms-signup">
                        <h2 className="forms_title">Зареєструватись</h2>
                        <form className="forms_form" onSubmit={handleSignupSubmit}>
                            <fieldset className="forms_fieldset">
                                <div className="forms_field">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="forms_field-input"
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>
                                <div className="forms_field">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="forms_field-input"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="forms_field">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="forms_field-input"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </fieldset>
                            <div className="forms_buttons">
                                <input type="submit" value="Sign up" className="forms_buttons-action" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {message && <p>{message}</p>}
        </section>
    );
}
