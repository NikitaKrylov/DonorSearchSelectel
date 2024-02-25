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
    let [city,setCity] = useState();
    const navigate = useNavigate();

    
    axios.get(baseUrl + '/users/me', {
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('jwt_authorization')
        }
    }).then(
        response => {
            setCurrentUser(response.data.id)
            console.log(currentUser)

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

        console.log(city)
        console.log(selectedPet.id)
        axios.post(baseUrl + '/donations/suggestion', {
            subject_id: selectedPet.id,
            status: 'Активна',
            location: city
        }).then(response => { 
            navigate("/account");
        }).catch(err => {
            console.log(err)
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
            <div className='bdonorform__st2__inp1'><input placeholder="Укажите город" onChange={(e)=> setCity(e.target.value)}/></div>
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
