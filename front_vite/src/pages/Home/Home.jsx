import './Home.scss';
import Header from '../../components/Header/index.jsx';
import Banner from '../../components/Banner/index.jsx'
import { Pets } from '../../components/Card/utils.js';
import Card from '../../components/Card/Card.jsx';
import { Instruction } from '../../components/Block/utils.js';
import Block from '../../components/Block/Block.jsx';
import FastCard from '../../components/FastCard/FastCard.jsx';
import { FastPets } from '../../components/FastCard/utils.js';


const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <h2 className='home__title'>Им подарили новую жизнь</h2>
            <div className='home__cards'>
                {
                    Pets.map((data, index) => {
                    return (
                        <Card key={index} data={data} />
                    )
                })
                }
            </div>
            <div className="home__img"></div>
            <div className='home__instruction'>
                    <div className='home__img-instruction'></div>
                    <div className="home__instructions">
                        <span className='home__how-instruction'>Как работает сервис</span>
                        <h2 className='home__title'>В несколько кликов</h2>
                            {
                                Instruction.map((data, index) => {
                                return (
                                    <Block key={index} data={data} />
                                )
                            })
                            }
                    </div>
            </div>
            <h2 className='home__title'>Срочные запросы на донацию</h2>
            <button className='home__more-btn'>Смотреть все</button>
            <div className='home__fastcards'>
                {
                    FastPets.map((data, index) => {
                    return (
                        <FastCard key={index} data={data} />
                    )
                })
                }
            </div>
            <div className='home__blockinfo-wrap'>
                <div className='home__blockinfo'></div>
            </div>
            <h2 className='home__title'>Рекомендуем к прочтению</h2>
        </div>
        
    )

};

export default Home;
