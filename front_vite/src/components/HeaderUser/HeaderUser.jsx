import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import baseUrl from '../../../config';
import { useEffect, useState, useCallback, } from 'react';
import logo from './logo.svg';
import photo from './ava.png';
import './HeaderUser.scss'
const HeaderUser = ({userId}) => {
    // let [user, setUser] = useState({});
    const logout = () => {
        window.location.href = '/';
        Cookies.remove('jwt_authorization');
    };
    // axios.get(baseUrl + '/users/me', {
    //     headers: {
    //         'Authorization': 'Bearer ' + Cookies.get('jwt_authorization')
    //     }
    // }).then(
    //     response => {setUser(response.data)}
    // ).catch(err => {
    //     console.log(err)

    // })

    return (
        <header className="header">
            <div className="header__content">
            <meta http-equiv="cache-control" content="no-cache"/>
                <img src={logo} className="header__logo" alt="logo" />
                <div className="header__navigation">
                    <Link to="/">
                        <span className="header__link" href="/">главная</span>
                    </Link>
                    <Link to="/finddonor">
                        <span className="header__link" href="/finddonor">найти донора</span>
                    </Link>
                    <Link to="/bedonor">
                        <span className="header__link" href="/bedonor">стать донором</span>
                    </Link>
                    <span className="header__link" href="">еще</span>
                </div>
                <Link to="/account">
                    <div className="user-header">
                        <div className="user-header__content">
                            <span className="user-header__content__name">Иван Иванов</span>
                            <span className="user-header__content__pets">2 питомца</span>
                        </div>
                        <img className="user-header__photo" src={photo} alt="user" />
                    </div>
                </Link>
                <div className='logout'onClick={logout}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.78246 15.2175L8.49997 8.5M8.49997 8.5L15.2175 1.78249M8.49997 8.5L1.78246 1.78249M8.49997 8.5L15.2175 15.2175" stroke="#252525" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                </div>
            </div>
        </header>
    );
};

export default HeaderUser;