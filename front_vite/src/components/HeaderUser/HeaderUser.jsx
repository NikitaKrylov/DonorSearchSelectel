import photo from '../../components/HeaderUser/ava.png';
import './HeaderUser.scss'
import logo from '../../components/Header/logo.svg';
import { Link } from 'react-router-dom';
const HeaderUser = () => {
    return (
        <header className="header">
            <div className="header__content">
                <img src={logo} className="header__logo" alt="logo" />
                <div className="header__navigation">
                    <Link to="/">
                    <a className="header__link" href="">
                        главная
                    </a>
                    </Link>
                    <Link to="/finddonor">
                    <a className="header__link" href="">
                        найти донора
                    </a>
                    </Link>
                    <Link to="/bedonor">
                    <a className="header__link" href="">
                        стать донором
                    </a>
                    </Link>
                    <a className="header__link" href="">
                        еще
                    </a>
                </div>
                <Link to="/account">
                    <button>
                        <div className="user-header">
                            <div className="user-header__content">
                                <span className="user-header__content__name">Иван Иванов</span>
                                <span className="user-header__content__pets">2 питомца</span>
                            </div>
                        <img className="user-header__photo" src={photo}/>
                        </div>
                    </button>
                </Link>
            </div>
        </header>
        
    );
}
 
export default HeaderUser;
