import photo from '../../components/HeaderUser/ava.png';
import './HeaderUser.scss'
import logo from '../../components/Header/logo.svg';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import baseUrl from '../../../config';
import React, { useEffect, useState, useCallback, } from 'react';

const HeaderUser = () => {
    let [user, setUser] = useState({});
    axios.get(baseUrl + '/users/me', {
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('jwt_authorization')
        }
    }).then(
        response => {setUser(response.data)}
    ).catch(err => {
        console.log(err)

    })

    return (
        <header className="header">
            <div className="header__content">
                <img src={logo} className="header__logo" alt="logo" />
                <div className="header__navigation">
                    <Link to="/">
                    <a className="header__link" href="">
                        главная
                    </a>
                    </Link>
                    <Link to="/finddonor">
                    <a className="header__link" href="">
                        найти донора
                    </a>
                    </Link>
                    <Link to="/bedonor">
                    <a className="header__link" href="">
                        стать донором
                    </a>
                    </Link>
                    <a className="header__link" href="">
                        еще
                    </a>
                </div>
                <Link to="/account">
                    <button>
                        <div className="user-header">
                            <div className="user-header__content">
                                <span className="user-header__content__name">{user.email}</span>
                                <span className="user-header__content__pets">2 питомца</span>
                            </div>
                        <img className="user-header__photo" src={photo}/>
                        </div>
                    </button>
                </Link>
            </div>
        </header>
        
    );
}
 
export default HeaderUser;
