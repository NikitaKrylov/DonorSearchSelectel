import photo from '../../components/Profile/bigava.png';
import './Profile.scss';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import baseUrl from '../../../config';


const Profile = ({userId}) => {
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(true);
    let [user, setUser] = useState({});

    const handleChange1 = () => {
        setChecked1((prev) => !prev);
    };

    const handleChange2 = () => {
        setChecked2((prev) => !prev);
    };

    axios.get(baseUrl + '/users/me', {
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('jwt_authorization')
        }
    }).then(
        response => {
            setUser(response.data)
        }
    ).catch(err => {
        console.log(err)

    })
    let image = photo

    if (user.photo){
        let image = baseUrl + '/' + user.photo
    }
    console.log(image)
    return (
        <div className="profile">
            <div className="profile__content">
                <img className="profile__photo" src={image} />
                <h2 className="profile__name">{user.name}</h2>
                <div className="profile__info">
                    <div className="profile__questions">
                        <span className="profile__question">Телефон</span>
                        <span className="profile__question">Email</span>
                        <span className="profile__question">Телеграм</span>
                        <span className="profile__question">Вконтакте</span>
                        <span className="profile__question">Адрес</span>

                        <span className="profile__question">Показывать ваши личные данные</span>
                        <span className="profile__question">Уведомления</span>
                    </div>
                    <div className="profile__data">
                        <span className="profile__answer">{user.phone}</span>
                        <span className="profile__answer">{user.email}</span>
                        <span className="profile__answer">{user.telegram}</span>
                        <span className="profile__answer">{user.name}</span>
                        <span className="profile__answer">{user.address}</span>
                        
                        <Switch className="profile__answer" checked={checked1} onChange={handleChange1} color="warning" />
                        <Switch className="profile__answer" checked={checked2} onChange={handleChange2} color="warning" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
