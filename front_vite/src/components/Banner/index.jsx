import React from 'react';
import banner from '../../components/Banner/banner_img.png';
import './Banner.scss';
import { Link } from 'react-router-dom';

const Banner = () =>{
  return (

      <div className='banner'>
        <Link to='/finddonor'>
          <button className='banner__btn'>Найти донора</button>
        </Link>
      </div>
    
    
  );
};
export default Banner;