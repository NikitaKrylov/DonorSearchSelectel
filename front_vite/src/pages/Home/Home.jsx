import './Home.scss';
import Header from '../../components/Header/index.jsx';
import Banner from '../../components/Banner/index.jsx'
import { Pets } from '../../components/Card/utils.js';
import Card from '../../components/Card/Card.jsx';


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

        </div>
        
    )

};

export default Home;
