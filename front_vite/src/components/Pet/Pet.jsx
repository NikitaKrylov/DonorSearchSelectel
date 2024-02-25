import photo from '../../components/PetsProfile/cat.png';
import './Pet.scss';
import baseUrl from '../../../config';


const Pet = ({data}) => {
    return (<div className="pet">
    <div className="pet__pet-info">
        <img className="pet__photo" src={baseUrl + '/' + data.photo || photo} />
        <div className='pet__text'>
            <h2 className="pet__petname">{data.name}</h2>
            <span className="pet__age">{data.age}</span>
        </div>
    </div>
    <div className="pet__donation">
        <p className="pet__donation-info">донаций 0 л</p>
    </div>
    </div> );
}
 
export default Pet;