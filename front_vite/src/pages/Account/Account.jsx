import './Account.scss';
import HeaderUser from '../../components/HeaderUser/HeaderUser.jsx';
import Profile from '../../components/Profile/Profile.jsx';
import PetsProfile from '../../components/PetsProfile/PetsProfile.jsx';
import Cookies from 'js-cookie';
import Postcard from '../../components/Postcard/Postcard.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import {useState} from 'react'
import baseUrl from '../../../config';
import axios from 'axios';



const Account = () => {
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
        <div className="account">
            <HeaderUser userId={user.id}/>
            <div className="account__profile">
                <Profile userId={user.id}/>
                <div className="account__left">
                    <PetsProfile userId={user.id} />
                    <div className="account__sum">
                        <h3 className="account__red">1 литр крови сдали ваши питомцы</h3>
                    </div>
                    <div className='cards'>
                        <span>Коллекция открыток</span>
                        
                    </div>
                </div>
            
            </div>
            


        </div>
    );
};

export default Account;
