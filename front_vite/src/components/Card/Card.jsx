import photo from '../../components/Card/petphoto.png';

import './Card.scss';
import baseUrl from '../../../config.js'


const Card = ({ data }) => {
    console.log(data)
    return (
        <div className="card">
            <div className='card__wrap'>
                <img src={baseUrl+'/'+data.subject.photo} className="card__photo" alt="photo" />
                <div className='card__content'>
                    <div className='card__info'>
                        <h3 className="card__name">{data.subject.name}</h3>
                        <span className="card__incident">{data.reason}</span>
                    </div>
                    <span className="card__age">{data.subject.age}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
