import './Home.scss';
import Cookies from "js-cookie";
import Header from '../../components/Header/index.jsx';
import Banner from '../../components/Banner/index.jsx'
import { Pets } from '../../components/Card/utils.js';
import Card from '../../components/Card/Card.jsx';
import { Instruction } from '../../components/Block/utils.js';
import Block from '../../components/Block/Block.jsx';
import FastCard from '../../components/FastCard/FastCard.jsx';
import { FastPets } from '../../components/FastCard/utils.js';
import Article from '../../components/Article/Article.jsx';
import Question from '../../components/Question/Question.jsx';
import { Questions } from '../../components/Question/utils.js';
import Answer from '../../components/Question/Answer.jsx';
import {useState} from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import { Articles } from '../../components/Article/utils.js';
import HeaderUser from '../../components/HeaderUser/HeaderUser.jsx';
import axios from 'axios';
import { useEffect } from 'react';
import baseUrl from '../../../config.js'



const Home = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const auth_result = Cookies.get("jwt_authorization");
    const handleSelect = (question) => {
        setSelectedQuestion(question);
    };
    const [latestPets, setLatestPets] = useState([]);
    const [petsRequests, setPetsRequests] = useState([]);


    const l1 = () => { axios.get(baseUrl + '/donations/request', {
        params: {
            type: 'request',
            status: 'Завершена'
        }
    }).then(response => {
        setLatestPets(response.data)
    })
    }
    useEffect(() => {
        l1();
     }, []);


     const l2 = () => {
        axios.get(baseUrl + '/donations/request', {
            params: {
                status: 'Активна'
            }
        }).then(response => {setPetsRequests(response.data)})
     }
     useEffect(() => {
        l2();
     }, []);



    return (
        <div className='home'>
            {auth_result ? (<HeaderUser />):(<Header />)}
            <div className='main'>
            <Banner />
            <h2 className='home__title'>Им подарили новую жизнь</h2>
            <div className='home__cards'>
                {
                    latestPets.map((data, index) => {
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
                    petsRequests.map((data, index) => {
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
            <div className='home__articles'>
            {
                    Articles.map((data, index) => {
                    return (
                        <Article key={index} data={data} />
                    )
                })
                }
            </div>
            <button className='home__more-articles'>Все статьи</button>
            <div className="home__faq">
            <h2 className='home__title'>FAQ</h2>
                <div className='home__table'>
                    <div className='home__questions'>
                        {Questions.map((data, index) => (
                        <Question key={index} data={data} handleSelect={handleSelect} isSelected={selectedQuestion === data} />
                        ))}
                    </div>
                    <div className='home__answer'>
                        {selectedQuestion && <Answer answer={selectedQuestion.answer} />}
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
        
        
    )

};

export default Home;
