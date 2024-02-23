import React, {useState, useCallback, useEffect}from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
const BaseUrl = 'http://31.129.49.245:8000/users'
const Register = ({ changeMode }) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = useCallback(() => {
        if (email === '' || password === '') {
            console.log(email, password);
            setError(true)
            console.log('error')
        };

        const credentials = {
            email,
            password
        }

        axios.post(BaseUrl, {
            
                email: "string123",
                password: "qweqweqe"
            }
        ).then((response) => {
            setData(response.data?.email);
        }).catch(() => {
            setAuthError(true)
            console.log('authError')
        })
    }, [email, password])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className="modal">
            <div className="modal__wrap">
                <h2 className="modal__title">РЕГИСТРАЦИЯ</h2>
                <div className="modal__inputs">
                    <input placeholder="EMAIL" name='email' onChange={(e) => setEmail(e.target.value)}></input>
                    <input placeholder="PASSWORD" name='password' onChange={(e) => setPassword(e.target.value)}></input>
                    {error || authError && <p className="modal__error">Неправильный логин или пароль</p>}
                </div>
                <div className="modal__link-wrap">
                    Уже зарегестрированы?{' '}
                    <span onClick={changeMode} className="modal__link">
                        Войти
                    </span>
                </div>

                <button className="modal__button" variant="contained" fullWidth onClick={handleLoginClick}>Continue </button>
            </div>
        </div>
    );
};

export default Register;
