import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { TextField, Button } from "@mui/material";

const BaseUrl = 'http://31.129.49.245:8000/users'

// async function Login(e) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget)
//     let credentials = { 'username': formData.get('username'), 'password': formData.get('password') };
//     fetch(BaseUrl + "/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: new URLSearchParams(credentials)

//     }).then((result) => {

//     });
//     let prom = (await promise).json()

// }

const Auth = ({ changeMode }) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = useCallback(() => {
        if (username === '' || password === '') {
            console.log(username, password);
            setError(true)
            console.log('error')
        };

        const credentials = {
            username,
            password
        }

        axios.post(BaseUrl + "/login", new URLSearchParams(credentials), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            setData(response.data?.access_token);
        }).catch(() => {
            setAuthError(true)
            console.log('authError')
        })
    }, [username, password])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className="modal">
            <div className="modal__wrap">
                <h2 className="modal__title">ВХОД</h2>
                <div className="modal__inputs">
                    <input placeholder="USERNAME" name='username' onChange={(e) => setUsername(e.target.value)}></input>
                    <input placeholder="PASSWORD" name='password' onChange={(e) => setPassword(e.target.value)}></input>
                    {error || authError && <p className="modal__error">Неправильный логин или пароль</p>}
                </div>
                <div className="modal__link-wrap">
                    Новенький? <span onClick={changeMode} className="modal__link">Зарегистрироваться</span>
                </div>

                <button className="modal__button" variant="contained" fullWidth onClick={handleLoginClick}>Log In</button>
            </div>
        </div>
    );
}

export default Auth;