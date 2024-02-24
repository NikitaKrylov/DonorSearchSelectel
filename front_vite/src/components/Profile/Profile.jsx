import photo from '../../components/Profile/bigava.png';
import './Profile.scss';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

const Profile = () => {
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(true);

    const handleChange1 = () => {
        setChecked1((prev) => !prev);
    };

    const handleChange2 = () => {
        setChecked2((prev) => !prev);
    };
    return (
        <div className="profile">
            <div className="profile__content">
                <img className="profile__photo" src={photo} />
                <h2 className="profile__name">Иван Иванов</h2>
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
                        <span className="profile__answer">+7 (952) 812 00 00</span>
                        <span className="profile__answer">ivanivanov@gmail.com</span>
                        <span className="profile__answer">@ivaniv2000</span>
                        <span className="profile__answer">Иван Иванов</span>
                        <span className="profile__answer">Москва</span>
                        
                        <Switch className="profile__answer" checked={checked1} onChange={handleChange1} color="warning" />
                        <Switch className="profile__answer" checked={checked2} onChange={handleChange2} color="warning" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
