import React from 'react'
import FastCard from '../../components/FastCard/FastCard.jsx';
const BeDonorOffers = () => {
  return (
    <div className='offers'>
        {
        FastPets.map((data, index) => {
        return (
            <FastCard key={index} data={data} />
        )
    })
    }
    </div>
  )
}
export default BeDonorOffers;
