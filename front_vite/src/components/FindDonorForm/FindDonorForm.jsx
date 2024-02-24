import React, { useState } from 'react'
import './FindDonorForm.scss';
import Pet from './Pet';
const FindDonorForm = () => {
    let [mobileCheck,  setMobileCheck] = useState(false);
    let [emailCheck,  setEmailCheck] = useState(false);
    let [telegramCheck, setTelegramCheck] = useState(false);
    let [VKCheck, setVKCheck] = useState(false);
    let [reason,setReason] = useState("");
    let [amount,setAmount] = useState("");
    let [race,setRace] = useState("");
    let [vet,setVet] = useState("");
    let [date,setDate] = useState("");
  return (
    <div className='fdonorform'>
        <h4>Оставь заявку в <span>3 шага</span></h4>
        <h3>Если вы с питомцев впервые ищите донора, то мы советуем вам ознакомиться с тем, как работает наш сервис
        </h3>
        <div className='fdonorform__oz'>
            <button>Ознакомиться</button>
        </div>
        <div className='fdonorform__st1'>
            <h3>Шаг 1</h3>
            <span>Выберите питомца которому нужна кровь </span>
            <div className='fdonorform__st1__pets'>
                <h3>Ваши питомцы</h3>
                <Pet />
            </div>
        </div >
        <div className='fdonorform__st2'>
            <h2>Шаг 2</h2>
            <h3>
            Заполните детали заявки
            </h3>
            <div className='fdonorform__st2__inp1'><input onChange={(e) => setReason(e.target.value)} placeholder="Причина поиска крови"/></div>
            <div className='fdonorform__st2__inp2'><input onChange={(e) => setAmount(e.target.value)} placeholder="Нужный объем крови"/></div>
            <div className='fdonorform__st2__inp3'><input onChange={(e) => setRace(e.target.value)} placeholder="Порода"/></div>
            <div className='fdonorform__st2__inp4'><input onChange={(e) => setVet(e.target.value)} placeholder="Выберите удобную вам клинику"/></div>
            <div className='fdonorform__st2__inp5'><input onChange={(e) => setDate(e.target.value)} type="date" placeholder="Укажите сроки(до)"/></div>
            <h5>Укажите, какие ваши контакты показывать пользователям в вашей заявке</h5>
            <div className='fdonorform__st2__checkbox'>
                <input type='checkbox' onChange={(e) => setMobileCheck(e.target.checked)}></input>
                <span>Телефон</span>
            </div>
            <div className='fdonorform__st2__checkbox'>
                <input type='checkbox' onChange={(e) => setEmailCheck(e.target.checked)}></input>
                <span>Почта</span>
            </div>
            <div className='fdonorform__st2__checkbox'>
                <input type='checkbox' onChange={(e) => setTelegramCheck(e.target.checked)}></input>
                <span>Телеграмм</span>
            </div>
            <div className='fdonorform__st2__checkbox'>
                <input type='checkbox'onChange={(e) => setVKCheck(e.target.checked)}></input>
                <span>Вконтакте</span>
            </div>
        </div>
        <div className='fdonorform__st3'>
            <h2>Шаг 3</h2>
            <h5>Почти все, осталось прикрепить справку о наличии у животного заболевания или травмы</h5>
            <div className='fdonorform__st3__imgi'>
                <input type='file'></input>
                <span>Загрузите справку в формате pdf или прикрепите фотографию<svg width="28" height="37" viewBox="0 0 28 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 16.0766V31.9C27 32.9343 26.5891 33.9263 25.8577 34.6577C25.1263 35.3891 24.1343 35.8 23.1 35.8H4.9C3.86566 35.8 2.87368 35.3891 2.14228 34.6577C1.41089 33.9263 1 32.9343 1 31.9V5.9C1 4.86566 1.41089 3.87368 2.14228 3.14228C2.87368 2.41089 3.86566 2 4.9 2H12.9234C13.6128 2.0001 14.2738 2.27394 14.7613 2.76131L26.2387 14.2387C26.7261 14.7262 26.9999 15.3872 27 16.0766Z" stroke="#252525" stroke-width="1.54762" stroke-linejoin="round"/>
<path d="M14.0005 1.6499V11.3999C14.0005 12.0895 14.2744 12.7508 14.762 13.2384C15.2496 13.726 15.9109 13.9999 16.6005 13.9999H26.3505" stroke="#252525" stroke-width="1.54762" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.3096 18.9524V28.2381" stroke="#252525" stroke-width="1.85714" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.6665 23.5952H18.9522" stroke="#252525" stroke-width="1.85714" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
                


            </div>
           
        </div>
        <div className='fdonorform__bot'>
           <span>Отлично, ты все заполнил, отправляй заявку, а мы как можно быстрее найдем тебе подходящего донора</span>
            <div className='fdonorform__bot__btn'>
                <button>Отправить заявку</button>
            </div>
        </div>
    </div>
  )
};
export default FindDonorForm;
