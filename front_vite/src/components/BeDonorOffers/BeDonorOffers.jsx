
import FastCard from '../../components/FastCard/FastCard.jsx';
import axios from 'axios';
import baseUrl from '../../../config';
import React, { useEffect, useState, useCallback, } from 'react';


const BeDonorOffers = () => {
  let [pets, setPets] = useState([]);

  axios.get(baseUrl + '/donations/request').then(
    response => {
      setPets(response.data)
    }
  ).catch(err => {
    console.log(err)
  })

  return (
    <div className='offers'>
        {
        pets.map((data, index) => {
        return (
            <FastCard key={index} data={data} />
        )
    })
    }
    </div>
  )
}
export default BeDonorOffers;
