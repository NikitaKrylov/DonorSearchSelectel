import React from 'react';
import { TextField, Button } from "@mui/material"; 
const Auth = ( {changeMode} ) => { 
    return (  
        <div className="modal"> 
        <div className="modal__wrap">
            <h2 className="modal__title">ВХОД</h2> 
                <div className="modal__inputs"> 
                <TextField label="Username" variant="filled" fullWidth/> 
                <TextField label="Password" variant="filled" fullWidth/> 
                </div> 
                <div className="modal__link-wrap"> 
                    Новенький? <span onClick={changeMode} className="modal__link">Зарегистрироваться</span> 
                </div>   
        
            <Button className="modal__button" variant="contained" fullWidth>Log In</Button> 
        </div>
        </div> 
    ); 
} 
  
export default Auth;
