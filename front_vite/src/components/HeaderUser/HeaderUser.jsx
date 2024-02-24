import photo from '../../components/HeaderUser/ava.png';
import './HeaderUser.scss'
import logo from '../../components/Header/logo.svg';
const HeaderUser = () => {
    return (
        <header className="header">
            <div className="header__content">
                <img src={logo} className="header__logo" alt="logo" />
                <div className="header__navigation">
                    <a className="header__link" href="">
                        главная
                    </a>
                    <a className="header__link" href="">
                        найти донора
                    </a>
                    <a className="header__link" href="">
                        стать донором
                    </a>
                    <a className="header__link" href="">
                        еще
                    </a>
                </div>
                <div className="user-header">
                    <div className="user-header__content">
                        <span className="user-header__name">Иван Иванов</span>
                        <span className="user-header__pets">2 питомца</span>
                    </div>
                <img className="user-header__photo" src={photo}/>
                </div>
            </div>
        </header>
        
    );
}
 
export default HeaderUser;
