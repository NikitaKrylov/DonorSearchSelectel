import photo from '../../components/Card/petphoto.png';

import './Card.scss';

const Card = ({ data }) => {
    return (
        <div className="card">
            <div className='card__wrap'>
                <img src={photo} className="card__photo" alt="photo" />
                <div className='card__content'>
                    <div className='card__info'>
                        <h3 className="card__name">{data.name}</h3>
                        <span className="card__incident">{data.incident}</span>
                    </div>
                    <span className="card__age">{data.age}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
