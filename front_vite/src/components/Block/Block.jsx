import './Block.scss'

const Block = ( {data}) => {
    return (
        <div className="block">
            <div className="block__icon">{data.icon}</div>
            <div className="block__info">
                <h3 className="block__action">{data.action}</h3>
                <span className="block__description">{data.description}</span>
            </div>
        </div>
    );
}
 
export default Block;