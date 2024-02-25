import photo from '../../components/FastCard/fastpet.jpg';
import './FastCard.scss';
import baseUrl from '../../../config.js'


const FastCard = ( {data} ) => {
    return (
        <div className="fastcard">
            <div className="fastcard__card">
            <img src={baseUrl + "/" + data.subject.photo} className="fastcard__photo" alt="photo" />
            <div className='fastcard__content'>
                <h3 className="fastcard__name">{data.subject.name}</h3>
                <span className="fastcard__incident">{data.reason}</span>
                <div className="fastcard__blood">{data.subject.blood_type}</div>
                <span className="fastcard__address">{data.location}</span>
            </div>
        </div>
        </div>
    );
}
 
export default FastCard;