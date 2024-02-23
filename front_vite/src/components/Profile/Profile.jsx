import photo from '../../components/Profile/bigava.png';
import './Profile.scss'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__content">
                <img className="profile__photo" src={photo}/>
                <h2 className="profile__username">Иван Иванов</h2>
                    <div className="profile__info">
                        <div className="profile__questions">
                            <span className="profile__question">Контакты</span>
                            <span className="profile__question">Адрес</span>
                            <span className="profile__question">Клиника</span>
                        </div>
                        <div className="profile__data">
                            <span className="profile__answer">+7 (952) 812 00 00</span>
                            <span className="profile__answer">Москва</span>
                            <span className="profile__answer">Москва, Красная площадь 1</span>
                        </div>
                    </div>
            </div>
        </div>
      );
}
 
export default Profile;