import photo from '../../components/PetsProfile/cat.png';
import './PetsProfile.scss';

const PetsProfile = () => {
    return (
        <div className="pets-profile">
            <div className='pets-profile__header'>
                <h2 className='pets-profile__title'>Ваши питомцы</h2>
                <button className='pets-profile__button'>+</button>
            </div>
            <div className="pets-profile__pet">
                <div className="pets-profile__pet-info">
                    <img className="pets-profile__photo" src={photo} />
                    <h2 className="pets-profile__petname">Пит</h2>
                    <span className="pets-profile__petage">1 год</span>
                </div>
                <div className="pets-profile__donation">
                    <p className="pets-profile__info"><span className='pets-profile__donation-word'>донаций</span> 3 | 0.2 л</p>
                </div>
            </div>
        </div>
    );
};

export default PetsProfile;
