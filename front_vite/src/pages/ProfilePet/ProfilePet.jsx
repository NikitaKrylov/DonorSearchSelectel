import React, { useEffect } from 'react';
import './ProfilePet.scss';
import Header from '../../components/Header/index.jsx';
import axios from 'axios';
import Cookies from 'js-cookie';
import '../../styles/index.scss';
import  PetPageInfo  from '../../components/PetPageInfo/PetPageInfo.jsx';

const $base_url = 'http://31.129.49.245:8000';

const ProfilePet = () => {
    useEffect(() => {
        axios.get(`${$base_url}/users/me`, {
            headers: {
                "Authorization": "Bearer " + Cookies.get('jwt_authorization')
            }
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error("Error fetching user data:", error);
        });
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className='petpage'>
            <Header />
            <PetPageInfo />
        </div>
    );
}

export default ProfilePet;