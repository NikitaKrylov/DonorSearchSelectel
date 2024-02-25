import { MyPets } from '../Pet/utils.js';
import Pet from '../Pet/Pet.jsx';
import './PetsProfile.scss';
import Cookies from 'js-cookie';
import {useState} from 'react'
import baseUrl from '../../../config';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import ProfilePet from '../../pages/ProfilePet/ProfilePet.jsx';


const PetsProfile = ({userId}) => {
    let [availiablePets,setAvailiablePets] = useState([]);

    axios.get(baseUrl + '/pets', {
        params: {
            owner_id: userId
        }
    }).then(response => {
        setAvailiablePets(response.data)
    }).catch(err => {
        console.log(err)

    })
    return (
        <div className="pets-profile">
            <div className='pets-profile__header'>
                <h2 className='pets-profile__title'>Ваши питомцы</h2>
                <Link to="/petpage"><div><button className='pets-profile__button'></button></div></Link>
            </div>
            <div className="pets-profile__list">
                {
                    availiablePets.map((data, index) => {
                    return (
                        <Link to="/petpage">
                            <Pet key={index} data={data} />
                        </Link>
                    )
                })
                }
            </div>
        </div>
    );
};

export default PetsProfile;
