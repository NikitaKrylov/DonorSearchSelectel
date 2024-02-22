import React from 'react';
import { TextField, Button } from "@mui/material"; 
async function Login(e) {
    const BaseUrl = 'http://31.129.49.245:8000'
    const formData = new FormData(e.currentTarget)
    let credentials = { 'username': formData.get('username'), 'password':formData.get('password') };
    fetch(BaseUrl + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(credentials)
    });

}
const Auth = ( {changeMode} ) => { 
    return (  
        <div className="modal"> 
            <div className="modal__wrap">
                <form onSubmit={Login}>
                    <h2 className="modal__title">ВХОД</h2> 
                        <div className="modal__inputs"> 
                        <input placeholder="USERNAME" name='username'></input>
                        <input placeholder="PASSWORD" name='password'></input>
                        </div> 
                        <div className="modal__link-wrap"> 
                            Новенький? <span onClick={changeMode} className="modal__link">Зарегистрироваться</span> 
                        </div>   
                
                    <button type='submit' className="modal__button" variant="contained" fullWidth >Log In</button> 
                </form>
            </div>
        </div> 
    ); 
} 
  
export default Auth;
