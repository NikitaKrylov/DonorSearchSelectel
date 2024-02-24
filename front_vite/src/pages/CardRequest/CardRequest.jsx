import Header from '../../components/Header';
import './CardRequest.scss';
import photo from '../../pages/CardRequest/ava.png';
import HeaderUser from '../../components/HeaderUser/HeaderUser';
import Footer from '../../components/Footer/Footer.jsx';

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
                    <div className='main__data'>
                        <h3 className="main__incident">Несчастный случай</h3>
                        <div className='main__blood'>
                            <div className='main__blood-type'>B (|||) Rh+</div>
                            <div className='main__blood-amount'>200 мл</div>
                        </div>
                    </div>
                </div>
                <div className="main__important"></div>
                <h2 className='main__title'>Расписание сеансов для сдачи крови</h2>
                <p className='main__text'>Выберите дату, в которую вам будем удобно прийти с вашем питомцем в клинику</p>
                <div class="main__date-buttons">
                    <button class="main__date-button">Сегодня</button>
                    <button class="main__date-button">Завтра</button>
                    <button class="main__date-button">Послезавтра</button>
                </div>
                <button className='main__record-btn'>
                Записаться
                </button>
                <h2 className='main__title'>Причина поиска крови</h2>
                <p className='main__text'>Томас попал в аварию и получил серьезные травмы, включая потерю крови. Необходимость операции: Врачи рекомендуют оперативное вмешательство, чтобы спасти жизнь нашего кота. Однако для этого ему необходима донорская кровь. Томас страдает от анемии, и ему требуется трансфузия крови для восстановления уровня гемоглобина.</p>
                <h2 className='main__title'>Контакты владельца</h2>
            </div>
            <Footer />
        </div>
    );
};

export default CardRequest;
