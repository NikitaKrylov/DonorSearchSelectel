import Header from '../../components/Header';
import './CardRequest.scss';
import photo from '../../pages/CardRequest/ava.png';
import HeaderUser from '../../components/HeaderUser/HeaderUser';

const CardRequest = () => {
    return (
        <div className="request">
            <HeaderUser />
            <div className="main">
                <a className="main__back"> Назад </a>

                <div className="main__header">
                    <h2 className="main__petname">Мышка</h2>
                    <div className="main__relevance">Актуально</div>
                </div>

                <div className="main__info">
                    <img src={photo} className="main__photo" alt="photo" />
                    <h3 className="incident">Авария</h3>
                </div>
                <div className="main__important"></div>
                <h2 className='main__title'>Расписание сеансов для сдачи крови</h2>
                <h2 className='main__title'>Причина поиска крови</h2>
                <p className='main__text'>Томас попал в аварию и получил серьезные травмы, включая потерю крови. Необходимость операции: Врачи рекомендуют оперативное вмешательство, чтобы спасти жизнь нашего кота. Однако для этого ему необходима донорская кровь. Томас страдает от анемии, и ему требуется трансфузия крови для восстановления уровня гемоглобина.</p>
                <h2 className='main__title'>Контакты владельца</h2>
            </div>
        </div>
    );
};

export default CardRequest;
