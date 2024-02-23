import './Account.scss';
import Header from '../../components/Header/index.jsx';
import Profile from '../../components/Profile/Profile.jsx';
import PetsProfile from '../../components/PetsProfile/PetsProfile.jsx';

const Account = () => {
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