import photo from '../../components/FastCard/fastpet.jpg';

const FastCard = ( {data} ) => {
    return (
        <div className="fastcard">
            <div className="card">
            <img src={photo} className="card__photo" alt="photo" />
            <div className='card__content'>
                <h3 className="card__name">{data.name}</h3>
                <span className="card__incident">{data.incident}</span>
                <div className="card__blood">{data.blood}</div>
                <span className="card__address">{data.address}</span>
            </div>
        </div>
        </div>
    );
}
 
export default FastCard;