import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import './Header.scss';
import Register from './Register';
import Auth from './Auth';
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
                        Главная
                    </a>
                    <a className="header__link" href="">
                        Найти донора
                    </a>
                    <a className="header__link" href="">
                        Стать донором
                    </a>
                    <a className="header__link" href="">
                        О нас
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
