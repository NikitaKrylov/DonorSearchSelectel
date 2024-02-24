import React from 'react'
import pit from './pit.png';
import './Pet.scss';
import baseUrl from '../../../config';


const Pet = ({data, onClickEvent}) => {
  return (
    <div className='pet' onClick={onClickEvent}>
        <div className='pet__photo'>
            <img src={baseUrl + '/' + data.photo}></img>
        </div>
        <div className='pet__info'>
            <h1>{data.name}</h1>
            <h2>{data.age} год</h2>
        </div>
    </div>
  )
};
export default Pet;
