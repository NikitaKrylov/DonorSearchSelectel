import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../../components/Header/logo.svg';
import photo from '../../components/HeaderUser/ava.png';
import './HeaderUser.scss';

const HeaderUser = () => {
    const logout = () => {
        window.location.href = '/';
        Cookies.remove('jwt_authorization');
    };

    return (
        <header className="header">
            <div className="header__content">
                <img src={logo} className="header__logo" alt="logo" />
                <div className="header__navigation">
                    <Link to="/">
                        <a className="header__link" href="/">главная</a>
                    </Link>
                    <Link to="/finddonor">
                        <a className="header__link" href="/finddonor">найти донора</a>
                    </Link>
                    <Link to="/bedonor">
                        <a className="header__link" href="/bedonor">стать донором</a>
                    </Link>
                    <a className="header__link" href="">еще</a>
                </div>
                <Link to="/account">
                    <button>
                        <div className="user-header">
                            <div className="user-header__content">
                                <span className="user-header__content__name">Иван Иванов</span>
                                <span className="user-header__content__pets">2 питомца</span>
                            </div>
                            <img className="user-header__photo" src={photo} alt="user" />
                        </div>
                    </button>
                </Link>
                <div className='logout'>
                    <div onClick={logout}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.78246 15.2175L8.49997 8.5M8.49997 8.5L15.2175 1.78249M8.49997 8.5L1.78246 1.78249M8.49997 8.5L15.2175 15.2175" stroke="#252525" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderUser;