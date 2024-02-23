import photo from '../../components/Card/petphoto.png';

import './Card.scss';

const Card = ({ data }) => {
    return (
        <div className="card">
            <img src={photo} className="card__photo" alt="photo" />
            <h3 className="card__name">{data.name}</h3>
            <span className="card__incident">{data.incident}</span>
            <span className="card__age">{data.age}</span>
        </div>
    );
};

export default Card;
