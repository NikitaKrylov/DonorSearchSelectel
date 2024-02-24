import React from 'react'
import BeDonorForm from '../../components/BeDonorForm/BeDonorForm.jsx';
import Header from '../../components/Header/index.jsx';
import HeaderUser from '../../components/HeaderUser/HeaderUser.jsx';
import AttentionBanner from '../../components/AttentionBanner/AttentionBanner.jsx';
import Cookies from "js-cookie";
import './BeDonor.scss';
const BeDonor = ()=> {
const auth_result = Cookies.get("jwt_authorization");
  return (
    <div className='bedonor'>
         {auth_result ? (<HeaderUser />):(<Header />)}
        <div > {auth_result ? (< BeDonorForm />):(<AttentionBanner />)}</div>
            
    </div>
  )
}
export default BeDonor;
