import './Home.scss';
import Header from '../../components/Header/index.jsx';
<<<<<<< HEAD
import Banner from '../../components/Banner/index.jsx'
import { Pets } from '../../components/Card/utils.js';
import Card from '../../components/Card/Card.jsx';

=======
import Banner from '../../components/Banner/index.jsx';
>>>>>>> 385cf7a60ddd799c559f38378c54166707217273

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
<<<<<<< HEAD
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

=======
>>>>>>> 385cf7a60ddd799c559f38378c54166707217273
        </div>
        
    )

};

export default Home;
