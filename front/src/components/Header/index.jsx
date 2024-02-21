import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import './Header.scss';
import Register from './Register';
import Auth from './Auth';

const Header = () => {
    // const [open, setOpen] = useState(false);
    // const [isReg, setIsReg] = useState(true);

    // const onOpen = () => {
    //     setOpen(true);
    // }

    // const onClose = () => {
    //     setOpen(false);
    // }
    
    // const changeMode = () => {
    //     setIsReg(!isReg);
    // }

    // const [modalActive, setModalActive] = useState(true);
    return (
        <header className="header">
            <div className="header__content">
                <img src={require('./logo.svg')} className="header__logo"></img>
                <div className="header__navigation">
                    <a className="header__link" href="">
                        Главная
                    </a>
                    <a className="header__link" href="">
                        Найти донора
                    </a>
                    <a className="header__link" href="">
                        Стать донором
                    </a>
                    <a className="header__link" href="">
                        О нас
                    </a>
                </div>
                <div className="header__left">
                    <button className='header__login'>Войти</button>
                    {/* <Auth active={modalActive} setActive={setModalActive} />
                    {/* <Dialog className="modal" open={open} onClose={onClose}>
                        <div className="modal__wrap"> {isReg ? <Auth changeMode={changeMode} /> : <Register changeMode={changeMode} />} </div>
                    </Dialog>  */} 
                </div>
            </div>
        </header>
    );
};

export default Header;

// import {Button, IconButton, Dialog, TextField} from "@mui/material"; 
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; 
// import { useState } from "react"; 
// import './Header.scss'; 
// import Auth from "./Auth"; 
// import Register from "./Register"; 
 
// const Header = () => { 
//     const [open, setOpen] = useState(false); 
//     const [isReg, setIsReg] = useState(true); 
 
//     const onOpen = () => { 
//         setOpen(true); 
//     } 
 
//     const onClose = () => { 
//         setOpen(false); 
//     } 
     
//     const changeMode = () => { 
//         setIsReg(!isReg); 
//     } 
//     return (    
//         <header className = "header"> 
//                 <div className="logo"> 
//                     <img src="" alt="" /> 
//                     <span>reddit</span> 
//                 </div> 
//                 <input type="text" placeholder="Search Reddit"/> 
//                 <div className="actions"> 
//                     <Button variant="contained">Get App</Button> 
//                     <Button onClick={onOpen} variant="contained">Log In</Button> 
//                     <IconButton> 
//                         <MoreHorizIcon/> 
//                     </IconButton> 
//                     <Dialog className="modal" open={open} onClose={onClose}> 
//                         <div className="modal__wrap"> {isReg ? <Auth changeMode={changeMode} /> : <Register changeMode={changeMode} />} </div> 
//                     </Dialog> 
//                 </div> 
//         </header> 
//     ); 
// } 
  
// export default Header;