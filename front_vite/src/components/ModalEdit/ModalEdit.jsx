
import { useState, useEffect } from "react";
import './ModalEdit.scss';
import axios from 'axios';
import baseUrl from '../../../config';

const ModalEdit = ({ userId }) => {
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        phone: '',
        tg: '',
        vk: '',
        address: '',
        photo: ''
    });

    useEffect(() => {
        axios.get(baseUrl + '/users/me', {
            params: {
                owner_id: userId
            }
        })
        .then(response => {
            setUserData(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, [userId]); // Выполнить запрос при изменении userId

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="modal1">
            <div className="modal1__wrap">
                <h2 className="modal1__title">Измените данные</h2>
                <div className="modal1__inputs">
                    <div className='modal1__inputs_i'>
                        <input type="image" name='photo' value={userData.photo} onChange={handleInputChange}></input>
                    </div>
                    <div className='modal1__inputs_i'>
                        <input placeholder="Имя и фамилия" name='name' value={userData.name} onChange={handleInputChange}></input>
                    </div>
                    <div className='modal1__inputs_i'>
                        <input placeholder="Телефон" type="phone" name='phone' value={userData.phone} onChange={handleInputChange}></input>
                    </div>
                    <div className='modal1__inputs_i'>
                        <input placeholder="Почта" name='email' value={userData.email} onChange={handleInputChange}></input>
                    </div>
                    <div className='modal1__inputs_i'>
                        <input placeholder="Телеграм" type="string" name='tg' value={userData.tg} onChange={handleInputChange}></input>
                    </div>
                    <div className='modal1__inputs_i'>
                        <input placeholder="Вконтакте" type="string" name='vk' value={userData.vk} onChange={handleInputChange}></input>
                    </div>
                    <div className='modal1__inputs_i'>
                        <input placeholder="Адрес" type="string" name='address' value={userData.address} onChange={handleInputChange}></input>
                    </div>
                </div>

                <button className="modal1__button" variant="contained">Сохранить</button>
            </div>
        </div>
    );
}

export default ModalEdit;
