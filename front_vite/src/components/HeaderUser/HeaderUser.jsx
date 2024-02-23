import photo from '../../components/HeaderUser/ava.png';
import './HeaderUser.scss'

const HeaderUser = () => {
    return (
        <div className="user-header">
            <div className="user-header__content">
                <span className="user-header__name">Иван Иванов</span>
                <span className="user-header__pets">2 питомца</span>
            </div>
            <img className="user-header__photo" src={photo}/>
        </div>
    );
}
 
export default HeaderUser;