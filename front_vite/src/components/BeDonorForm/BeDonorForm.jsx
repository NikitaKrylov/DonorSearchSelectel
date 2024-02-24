import React from 'react'
import './BeDonorForm.scss';
import Pet from './Pet';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import Cookies from 'js-cookie';
import baseUrl from '../../../config';
import { useNavigate, Navigate} from 'react-router-dom';


const BeDonorForm = () => {
    let [availiablePets,setAvailiablePets] = useState([]);
    let [selectedPet,setSelectedPet] = useState();
    let [currentUser,setCurrentUser] = useState();
    const navigate = useNavigate();

    
    axios.get(baseUrl + '/users/me', {
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('jwt_authorization')
        }
    }).then(
        response => {
            console.log(response.data)
            setCurrentUser(response.data.id)

        }
    ).catch(err => {
        console.log(err)
    })
    

    axios.get(baseUrl + '/pets', {
        params: {
            owner_id: currentUser
        }
    }).then(response => {
        setAvailiablePets(response.data)
    }).catch(err => {
        console.log(err)

    })

    const SaveDonorSuggestionData = () =>{
        axios.post(baseUrl + '/donations/request', {
            subject_id: selectedPet.id,
            volume: amount,
            reason: reason,
            status: 'Активна'
        }).then(response => { 
            navigate("/account");
        }).catch(err => {
            alert(err)
        })
    }

    

  return (
    <div className='bdonorform'>
        <h4>Спаси жизнь пушистому другу в <span>2 шага </span></h4>
        <h3>Если вы с питомцем собираетесь сдать кровь в первый раз, то советуем вам ознакомиться с тем, как работает на сервис
        </h3>
        <div className='bdonorform__oz'>
            <button>Ознакомиться</button>
        </div>
        <div className='bdonorform__st1'>
            <h3>Шаг 1</h3>
            <span>Выберите питомца который будет донором</span>
            <div className='bdonorform__st1__pets'>
                <h3>Ваши питомцы</h3>
                {
                    availiablePets.map((data, index) => {
                        const ev = () => {
                            setSelectedPet(data)
                        }
                        return (
                            <Pet key={index} data={data} onClickEvent={ ev } />
                        )
                    })
                }
            </div>
        </div >
        <div className='bdonorform__st2'>
            <h2>Шаг 2</h2>
            <h3>
            Укажите в каком городе было бы удобно сдать кровь
            </h3>
            <div className='bdonorform__st2__inp1'><input placeholder="Укажите город"/></div>
        </div>
        
        <div className='bdonorform__bot'>
           <span>Отлично, а теперь давай найдем подходящую для твоего питомца заявку </span>
            <div className='bdonorform__bot__btn'>
                <Link to="/offers"><button onClick={SaveDonorSuggestionData}>Смотреть заявки</button></Link>
            </div>
        </div>
    </div>
  )
};
export default BeDonorForm;
