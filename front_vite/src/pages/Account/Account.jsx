import './Account.scss';
import Header from '../../components/Header/index.jsx';
import Profile from '../../components/Profile/Profile.jsx';
import PetsProfile from '../../components/PetsProfile/PetsProfile.jsx';
import axios from 'axios';
import Cookies from 'js-cookie';

const $base_url ='http://31.129.49.245:8000'

const Account = () => {

    axios.get('http://31.129.49.245:8000/users/me', {
        headers: {
            "Authorization": "Bearer " + Cookies.get('jwt_authorization')
        }
    }).then(response => {console.log(response.data)}).catch(
        
    )
    

    return (
        <div className='account'>
            <Header />
            <div className='account__profile'>
                <Profile />
                <PetsProfile />
            </div>
        </div>
    );
}

  
export default Account;