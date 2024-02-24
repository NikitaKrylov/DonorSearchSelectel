import React, { useEffect, useState } from 'react'
import petphoto from "../PetPageInfo/pet_photo.png";
import './PetPageInfo.scss';
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import awards from '../PetPageInfo/your_awards.png';
import postcard from '../PetPageInfo/postcard.png';
const PetPageInfo = ()=> {
    const [retn,setRetn] = useState(false);
    const navigate = useNavigate();
    return (
        <div>
            <div className='upper_block'>
                <div className='upper_block__retn'>
                    <Link to="/account"><button>&lt;Назад</button></Link>
                </div>
                <div className='upper_block__redact'>
                    <button>Редактировать</button>
                </div>
            </div>
            <div>
                <div className='information'>
                    <div className='information__photoName'>
                        <div className='information__photoName__photo'>
                            <img src={petphoto} width="308px" height="308px"/>
                        </div>
                        <div className='information__photoName__name'>
                            <h1>Люцифер</h1>
                            <span>донаций <b>7 | 0.8 л</b></span>
                            <br/>
                            <div className='award'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="13.5218" cy="14.0974" r="13.5218" fill="#895B4D"/>
                                    <path d="M15.0213 6.70451C14.8849 6.42629 14.6719 6.19166 14.4068 6.02749C14.1416 5.86332 13.835 5.77625 13.522 5.77625C13.2091 5.77625 12.9024 5.86332 12.6373 6.02749C12.3721 6.19166 12.1591 6.42629 12.0227 6.70451L10.5234 10.1601L6.69175 10.407C6.36892 10.4407 6.06308 10.5668 5.81184 10.7699C5.5606 10.9729 5.3749 11.2441 5.27757 11.55C5.18024 11.8559 5.17551 12.1832 5.26397 12.4918C5.35243 12.8003 5.53022 13.0766 5.7755 13.2866L8.69085 15.7549L7.85789 19.3751C7.44142 20.7738 9.02404 21.8434 10.2735 21.1029L13.522 19.2106L16.7706 21.1029C18.02 21.9257 19.6026 20.7738 19.2694 19.3751L18.4365 15.7549L21.2685 13.2866C21.5138 13.0766 21.6916 12.8003 21.7801 12.4918C21.8685 12.1832 21.8638 11.8559 21.7665 11.55C21.6691 11.2441 21.4834 10.9729 21.2322 10.7699C20.981 10.5668 20.6751 10.4407 20.3523 10.407L16.5207 10.1601L15.0213 6.70451Z" fill="white"/>
                                </svg>
                                <a>Бронзовый донор</a>
                            </div>
                        </div>
                    </div>
                    <div className='information__form'>
                        <div className='information__form__header'>
                        Информация о животном
                        </div>
                        <div className='information__form__params'>
                            <div className='information__form__params__inp'><input placeholder="Животное"/></div>
                            <div className='information__form__params__inp'><input placeholder="Порода"/></div>
                        </div>
                        <div className='information__form__params'>
                            <div className='information__form__params__inp'><input placeholder="Пол"/></div>
                            <div className='information__form__params__inp'><input placeholder="Возраст"/></div>
                        </div>
                        <div className='information__form__params'>
                            <div className='information__form__params__inp'><input placeholder="Вес(кг)"/></div>
                            <div className='information__form__params__inp'><input placeholder="Группа крова"/></div>
                        </div>
                        
                            
                    </div>
                    
                
                </div>
            </div>
            <div className='bottom_block'>
                <div className='bottom_block__post'>
                    <span>Открытка</span>
                    <img src={postcard} width="271px" height="301px"/>
                </div>
                <div className='bottom_block__ur_awards'>
                    <img src={awards}/>
                </div>
            </div>
        </div>
    )
}

export default PetPageInfo;
