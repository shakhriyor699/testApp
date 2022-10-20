import React from 'react'

import styles from './Contacts.module.scss'

const Contacts = () => {
  return (
    <div className={styles['contacts']}>
      <h2 className={styles['contacts__title']}>Контакты</h2>
      <p className={styles['contacts__description']}>
        Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам на почту
        <a href="#">info@site.com</a>
      </p>
      <form action="" className={styles['contacts__form']}>
        <div className={styles['contacts__form-group']}>
          <input type="text" placeholder="Ваше имя *" className={styles['contacts__form-input']} />
          <input type="email" placeholder="Ваш E-mail *" className={styles['contacts__form-input']} />
          <textarea placeholder='Комментарий *'></textarea>
          <div className={styles['contacts__form-radio']}>
            <span>Согласен с
              <a href="">Политикой конфиденциальности</a>
            </span>
          </div>
        </div>
        <button className={styles['contacts__form-btn']}>Отправить</button>
      </form>
    </div>
  )
}

export default Contacts