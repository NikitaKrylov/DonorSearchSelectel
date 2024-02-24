import './Postcard.scss';

const Postcard = ({data}) => {
    return (
        <img className="postcard" src={data.url}></img>
    );
}
 
export default Postcard;