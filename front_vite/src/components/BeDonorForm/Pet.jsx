import React from 'react'
import pit from './pit.png';
import './Pet.scss';
const Pet = () => {
  return (
    <div className='pet'>
        <div className='pet__photo'>
            <img src={pit}></img>
        </div>
        <div className='pet__info'>
            <h1>Пит</h1>
            <h2>1 год</h2>
        </div>
    </div>
  )
};
export default Pet;
