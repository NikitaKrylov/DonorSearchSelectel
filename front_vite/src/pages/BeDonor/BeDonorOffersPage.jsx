import React from 'react'
import BeDonorForm from '../../components/BeDonorForm/BeDonorForm.jsx';
import Header from '../../components/Header/index.jsx';
import HeaderUser from '../../components/HeaderUser/HeaderUser.jsx';
import AttentionBanner from '../../components/AttentionBanner/AttentionBanner.jsx';
import Cookies from "js-cookie";
import BeDonorOffers from '../../components/BeDonorOffers/BeDonorOffers.jsx';
import './BeDonor.scss';
const BeDonorOffersPage = ()=> {
const auth_result = Cookies.get("jwt_authorization");
  return (
    <div className='offers'>
         {auth_result ? (<HeaderUser />):(<Header />)}
        {auth_result ? (< BeDonorOffers />):(<AttentionBanner />)}
            
    </div>
  )
}
export default BeDonorOffersPage;
