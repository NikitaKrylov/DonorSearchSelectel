import './Footer.scss';
const Footer = () => {
    // let emailValue = '';

    // const form = document.querySelector('.footer__form');
    // const emailInput = document.querySelector('.footer__email');

    // form.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     emailValue = emailInput.value;
    //     sendEmailToServer(emailValue);
    // });

    // const sendEmailToServer = async (emailValue) => {
    //     await axios.post('http://31.129.49.245:8000', {
    //         email: emailValue
    //     })
    //     .then(function (response) {
    //         console.log('Email отправлен на сервер:', response.data);
    //     })
    //     .catch(function (error) {
    //         console.error('Произошла ошибка при отправке email:', error);
    //     });
        // };
        return (
            <div className="footer">
                <div className='footer__up'>
                    <div className="footer__column">
                        <a className="footer__num" href="tel:+7(952)8120000">
                            +7 (952) 812 00 00
                        </a>
                        <span className="footer__text">Звонок по России бесплатный</span>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__title">Навигация</h3>
                        <div className="footer__links">
                            <a className="footer__link" href="#">
                                Главная
                            </a>
                            <a className="footer__link" href="#">
                                Найти донора
                            </a>
                            <a className="footer__link" href="#">
                                О нас
                            </a>
                            <a className="footer__link" href="#">
                                Еще
                            </a>
                        </div>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__title">Полезные ссылки</h3>
                        <div className="footer__links">
                            <a className="footer__link" href="#">
                                Хозяевам питомцев
                            </a>
                            <a className="footer__link" href="#">
                                Волонтерам
                            </a>
                            <a className="footer__link" href="#">
                                Ветеринарам
                            </a>
                            <a className="footer__link" href="#">
                                Банкам крови
                            </a>
                        </div>
                    </div>
                    <form className="footer__form">
                        <h3 className="footer__title">
                            Подпишись на нашу
                            <br />
                            рассылку!
                        </h3>
                        <span className="footer__text">Не упусти самое важное</span>
                        <div className="footer__send">
                            <input className="footer__email" type="email" name="email" placeholder="Ваш email"/>
                            <input className="footer__button" type="submit" value="Подписаться" />
                        </div>
                    </form>
                </div>
                <div className='footer__down'>
                    <div className='footer__line'></div>
                    <div className='footer__networks'>
                        <a className='footer__network' href='#'></a>
                        <a className='footer__network' href='#'></a>
                        <a className='footer__network' href='#'></a>
                    </div>
                    <span className='footer__span'>Дай лапу | © 2024</span>
                </div>
                
            </div>
        );
    }


    

export default Footer;
