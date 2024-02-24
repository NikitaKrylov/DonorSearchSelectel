import './Account.scss';
import HeaderUser from '../../components/HeaderUser/HeaderUser.jsx';
import Profile from '../../components/Profile/Profile.jsx';
import PetsProfile from '../../components/PetsProfile/PetsProfile.jsx';
import axios from 'axios';
import Cookies from 'js-cookie';
import baseUrl from '../../../config.js';


const Account = () => {

    axios.get(baseUrl + '/users/me', {
        headers: {
            "Authorization": "Bearer " + Cookies.get('jwt_authorization')
        }
    }).then(response => {console.log(response.data)}).catch(
        
    )
    

    return (
        <div className='account'>
            <HeaderUser />
            <div className='account__profile'>
                <Profile />
                <PetsProfile />
            </div>
        </div>
    );
}

  
export default Account;