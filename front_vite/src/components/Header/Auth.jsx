import React, { useEffect, useState, useCallback, } from 'react';
import axios from 'axios';
import { TextField, Button } from "@mui/material";
import { jwtDecode as jwt } from "jwt-decode";
import Cookies from 'js-cookie';
const BaseUrl = 'http://31.129.49.245:8000/users'
import { Navigate, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate()
    const [data, setData] = useState(null); // null | string
    const [error, setError] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthorized, setisAuthorized] = useState(localStorage.getItem('authorized') ? JSON.parse(localStorage.getItem('authorized')).authorized : false)
    const handleLoginClick = useCallback(async () => {
        if (username === '' || password === '') {
            console.log(username, password);
            setError(true)
            console.log('error')
        };

        const credentials = {
            username,
            password
        }

        try {
            const res = await axios.post(BaseUrl + "/login", new URLSearchParams(credentials), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });

            // setData(res?.access_token);
            localStorage.setItem("authorized",JSON.stringify(true));
            
            
            navigate("/account");
            console.log("damn")
            
        } catch {
            setAuthError(true)
            console.log('authError')
        }
    }, [username, password])
    useEffect(() => {
        if (data) {
            console.log(data)
            login(data)
        }
    }, [data])
    const login = (jwt_token) =>{
        const decoded = jwt(jwt_token);
        setUser(decoded);
        Cookies.set("jwt_authorization",jwt_token, { expires: new Date(decoded.exp * 60 * 60 * 24),});
    }


    return (
        <div className="modal">
            <div className="modal__wrap">
                <h2 className="modal__title">Войди в аккаунт<br/>или <span onClick={changeMode} className="modal__link">зарегистрируйся</span></h2>
                <div className="modal__inputs">
                    <div className='modal__inputs_i'>
                        <input placeholder="Почта" name='username' onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className='modal__inputs_i'>
                        <input placeholder="Пароль" type="password" name='password' onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    {error || authError && <p className="modal__error">Неправильный логин или пароль</p>}
                </div>
                <button className="modal__button" variant="contained" onClick={handleLoginClick}>Войти</button>
                
                
            </div>
        </div>
    );
}

export default Auth;