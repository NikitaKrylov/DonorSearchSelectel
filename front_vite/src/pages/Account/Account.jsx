import './Account.scss';
import HeaderUser from '../../components/HeaderUser/HeaderUser.jsx';
import Profile from '../../components/Profile/Profile.jsx';
import PetsProfile from '../../components/PetsProfile/PetsProfile.jsx';
import axios from 'axios';
import Cookies from 'js-cookie';
import baseUrl from '../../../config.js';
import Postcard from '../../components/Postcard/Postcard.jsx';
import Footer from '../../components/Footer/Footer.jsx';
const Account = () => {

    axios.get(baseUrl + '/users/me', {
        headers: {
            "Authorization": "Bearer " + Cookies.get('jwt_authorization')
        }
    }).then(response => {console.log(response.data)}).catch(
        
    )
    

    return (
        <div className='acc'>
            <HeaderUser />

            <div className='acc_profile'>
                <Profile />
                <div className='acc_profile__peinf'>
                    <PetsProfile />
                    <div className='acc_profile__penif__varblood'>
                    <span><h3>1 литр крови</h3> сдали ваши питомцы</span>
                   
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
