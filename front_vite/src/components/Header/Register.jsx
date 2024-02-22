import React from 'react';
import { TextField, Button } from '@mui/material';

const Register = ({ changeMode }) => {

    return (
        <div className="modal">
            <div className="modal__wrap">
                <h2 className="modal__title">РЕГИСТРАЦИЯ</h2>
                <div className="modal__inputs">
                    <TextField label="Username" variant="filled" fullWidth />
                    <TextField label="Password" variant="filled" fullWidth />
                </div>
                <div className="modal__link-wrap">
                    Уже зарегестрированы?{' '}
                    <span onClick={changeMode} className="modal__link">
                        Войти
                    </span>
                </div>

                <Button className="modal__button" onClick={handleRegistration} variant="contained" fullWidth>
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Register;
