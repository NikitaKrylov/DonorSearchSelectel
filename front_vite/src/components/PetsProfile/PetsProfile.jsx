import { MyPets } from '../Pet/utils.js';
import Pet from '../Pet/Pet.jsx';
import './PetsProfile.scss';

const PetsProfile = () => {
    return (
        <div className="pets-profile">
            <div className='pets-profile__header'>
                <h2 className='pets-profile__title'>Ваши питомцы</h2>
                <button className='pets-profile__button'></button>
            </div>
            <div className="pets-profile__list">
                {
                    MyPets.map((data, index) => {
                    return (
                        <Pet key={index} data={data} />
                    )
                })
                }
            </div>
        </div>
    );
};

export default PetsProfile;
