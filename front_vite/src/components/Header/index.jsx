import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import './Header.scss';
import Register from './Register';
import Auth from './Auth.jsx';
import logo from '../../components/Header/logo.svg';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isReg, setIsReg] = useState(true);

    const onOpen = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    const changeMode = () => {
        setIsReg(!isReg);
    }

    return (
        <header className="header">
            <div className="header__content">
                <img src={logo} className="header__logo" alt="logo"/>
                <div className="header__navigation">
                    <a className="header__link" href="">
                        главная
                    </a>
                    <a className="header__link" href="">
                        найти донора
                    </a>
                    <a className="header__link" href="">
                        стать донором
                    </a>
                    <a className="header__link" href="">
                        еще
                    </a>
                </div>
                <div className="header__left">
                    <button className='header__login' onClick={onOpen}>Войти</button>
                    <Dialog className="modal" open={open} onClose={onClose}>
                        {isReg ? <Auth changeMode={changeMode} /> : <Register changeMode={changeMode} />}
                    </Dialog>
                </div>
            </div>
        </header>
    );
};

export default Header;
