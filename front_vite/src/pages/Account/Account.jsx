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
        <div className="account">
            <HeaderUser />
            <div className="account__profile">
                <Profile />
                <div className="account__left">
                    <PetsProfile />
                    <div className="account__sum">
                        <h3 className="account__red">1 литр крови сдали ваши питомцы</h3>
                    </div>
                    <div className="account__postcards">
                        <h2 className='account__title'>Коллекция открыток</h2>
                        <div className='account__postcards-list'>
                            {
                                Postcards.map((data, index) => {
                                    return (
                                        <Postcard key={index} data={data} />
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Account;
