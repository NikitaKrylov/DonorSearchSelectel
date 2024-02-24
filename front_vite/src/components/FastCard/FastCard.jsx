import photo from '../../components/FastCard/fastpet.jpg';
import './FastCard.scss';

const FastCard = ( {data} ) => {
    return (
        <div className="fastcard">
            <div className="fastcard__card">
            <img src={photo} className="fastcard__photo" alt="photo" />
            <div className='fastcard__content'>
                <h3 className="fastcard__name">{data.name}</h3>
                <span className="fastcard__incident">{data.incident}</span>
                <div className="fastcard__blood">{data.blood}</div>
                <span className="fastcard__address">{data.address}</span>
            </div>
        </div>
        </div>
    );
}
 
export default FastCard;