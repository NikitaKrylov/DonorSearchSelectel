import React from 'react'
import './BeDonorForm.scss';
import Pet from './Pet';
const BeDonorForm = () => {
  return (
    <div className='bdonorform'>
        <h4>Спаси жизнь пушистому другу в <span>2 шага </span></h4>
        <h3>Если вы с питомцем собираетесь сдать кровь в первый раз, то советуем вам ознакомиться с тем, как работает на сервис
        </h3>
        <div className='bdonorform__oz'>
            <button>Ознакомиться</button>
        </div>
        <div className='bdonorform__st1'>
            <h3>Шаг 1</h3>
            <span>Выберите питомца который будет донором</span>
            <div className='bdonorform__st1__pets'>
                <h3>Ваши питомцы</h3>
                <Pet />
            </div>
        </div >
        <div className='bdonorform__st2'>
            <h2>Шаг 2</h2>
            <h3>
            Укажите в каком городе было бы удобно сдать кровь
            </h3>
            <div className='bdonorform__st2__inp1'><input placeholder="Укажите город"/></div>
        </div>
        
        <div className='bdonorform__bot'>
           <span>Отлично, а теперь давай найдем подходящую для твоего питомца заявку </span>
            <div className='bdonorform__bot__btn'>
                <button>Смотреть заявки</button>
            </div>
        </div>
    </div>
  )
};
export default BeDonorForm;
