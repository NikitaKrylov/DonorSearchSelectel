import React from 'react'
import FindDonorForm from '../../components/FindDonorForm/FindDonorForm.jsx';
import Header from '../../components/Header/index.jsx';
import HeaderUser from '../../components/HeaderUser/HeaderUser.jsx';
import AttentionBanner from '../../components/AttentionBanner/AttentionBanner';
import Cookies from "js-cookie";
import './FindDonor.scss';
const FindDonor = ()=> {
const auth_result = Cookies.get("jwt_authorization");
  return (
    <div className='finddonor'>
         {auth_result ? (<HeaderUser />):(<Header />)}
        <div > {auth_result ? (< FindDonorForm />):(<AttentionBanner />)}</div>
            
    </div>
  )
}
export default FindDonor;
