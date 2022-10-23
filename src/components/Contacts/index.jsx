import classNames from 'classnames'
import React, { useState } from 'react'
import styles from './Contacts.module.scss'

const Contacts = () => {
  const [active, setActive] = useState(false)
  const [{ name, email, comment }, setName] = useState({ name: '', email: '', comment: '' })
  const [sended, setSended] = useState(false)


  const handleActive = () => {
    setActive(!active)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' && email === '' && comment === '' && active === false) {
      setSended(false)
      alert('Please fill in all fields')
    } else {
      setSended(true)
      setName({ name: '', email: '', comment: '' })
    }
  }

  const handleInputChange = (e) => {
    setName({ [e.target.name]: e.target.value })
  }



  return (
    <div className={styles['contacts']}>
      <span className={styles['contacts__span']}>Главная - <span>Контакты</span></span>
      <h2 className={styles['contacts__title']}>Мы рядом</h2>
      <p className={styles['contacts__description']}>
        Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам на почту
        <a href="#">info@site.com</a>
      </p>
      <form action="" className={styles['contacts__form']}>
        <div className={styles['contacts__form-row']}>
          <div className={styles['contacts__form-group']}>
            <input type="text" required name='name' value={name} onChange={handleInputChange} className={styles['contacts__form-input']} />
            <label>Ваше имя *</label>
          </div>
          <div className={styles['contacts__form-group']}>
            <input type="text" required name='email' value={email} onChange={handleInputChange} className={styles['contacts__form-input']} />
            <label>Ваш E-mail *</label>
          </div>
          <div className={styles['contacts__form-group']}>
            <input type="text" required name='comment' value={comment} onChange={handleInputChange} className={classNames(styles['contacts__form-input'], styles['comments'])} />
            <label>Комментарий *</label>
          </div>
          <div onClick={handleActive} className={styles['contacts__form-radio']}>
            <span className={active ? styles['active'] : null}></span>
            <span>Согласен с
              <a href="">Политикой конфиденциальности</a>
            </span>
          </div>
        </div>
        <button onClick={(e) => handleSubmit(e)} className={classNames(styles['contacts__form-btn'], {
          [styles['active']]: sended
        })}>
          <svg width="227" height="227" viewBox="0 0 227 227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="113.5" cy="113.5" r="111" stroke="url(#paint0_linear_2_159)" stroke-width="5" class="contacts__circle" className={styles['border-svg']} />
            <defs>
              <linearGradient id="paint0_linear_2_159" x1="4.79578" y1="-7.23358e-05" x2="225.606" y2="12.6933" gradientUnits="userSpaceOnUse">
                <stop offset="0.206287" stop-color="#388AF3" />
                <stop offset="0.940271" stop-color="#A483E2" />
              </linearGradient>
            </defs>
          </svg>
          <span className={styles['contacts__form-btnContent']}>
            {/* <img src={message} alt="" /> */}
            <svg className={classNames(styles['message-svg'], {
              [styles['active']]: sended
            })} width="57" height="43" viewBox="0 0 57 43" xmlns="http://www.w3.org/2000/svg">
              <path d="M56.6904 2.69814C56.5253 2.36795 56.2983 2.07902 56.0507 1.85201C55.6586 1.50118 55.2046 1.25354 54.7299 1.12971C54.2553 0.985251 53.76 0.92334 53.244 0.92334C52.9138 0.92334 52.5836 0.943981 52.2534 0.985255L3.90044 7.34151C3.40514 7.40343 2.93049 7.50661 2.4971 7.65107C1.85735 7.87808 1.25887 8.20828 0.784215 8.70357C0.536568 8.95122 0.350833 9.26077 0.206372 9.61161C0.0619116 9.9418 0 10.3133 0 10.6847C0 11.0356 0.0619135 11.3864 0.185737 11.7166C0.350835 12.1913 0.619117 12.6246 0.928675 13.0167C1.23823 13.4089 1.63034 13.7597 2.06372 14.1105L8.04852 18.7539C8.4819 19.0841 8.93592 19.5587 9.3693 20.1159C10.0091 20.9621 10.5869 21.9939 10.979 23.0258C11.3711 24.0577 11.5981 25.1102 11.5981 25.9356L11.6807 38.2767C11.6807 38.6688 11.7013 39.0403 11.7219 39.3705C11.7426 39.6181 11.7632 39.8451 11.8045 40.0515C11.8251 40.2166 11.8664 40.3611 11.9077 40.5262C11.9696 40.7738 12.0521 41.0214 12.2791 41.331C12.3823 41.4961 12.5474 41.6612 12.7951 41.8263C13.0427 41.9914 13.3936 42.0946 13.7444 42.0946C14.1365 42.0946 14.4667 41.9708 14.6937 41.8263C14.735 41.8057 14.7556 41.785 14.7762 41.7644L14.7969 41.785L26.9522 32.8904L27.6539 33.427C28.8715 34.3556 30.3367 34.789 31.7607 34.789C32.7925 34.789 33.845 34.562 34.7737 34.0873C35.723 33.6333 36.5692 32.9317 37.2295 32.0443L55.8237 7.05259C56.1745 6.57794 56.4634 6.08264 56.6698 5.58735C56.8762 5.09206 57 4.57613 57 4.01892C57 3.60618 56.8968 3.13152 56.6904 2.69814ZM33.3291 31.2188C32.8338 31.4664 32.2766 31.5902 31.74 31.5902C30.9765 31.5902 30.2335 31.3632 29.5938 30.8679L23.6915 26.4309C23.5883 26.3484 23.4645 26.2865 23.3407 26.2039L50.9946 8.12573L34.6293 30.1456C34.2784 30.6203 33.8244 30.9711 33.3291 31.2188ZM14.8175 25.9356C14.8175 25.0482 14.6731 24.1402 14.4254 23.2322C14.1365 22.1797 13.7031 21.1272 13.1665 20.1366L13.3523 20.0747L43.8128 8.97185L19.4815 24.8831L17.9957 25.8531L17.9337 25.8944L17.1083 26.5548C16.386 27.2564 15.87 28.1645 15.5811 29.217L14.8588 31.8585L14.8175 25.9356ZM10.0091 16.2155L4.02426 11.5721C3.65279 11.2832 3.40514 11.0149 3.30195 10.8498C3.30195 10.8498 3.30195 10.8498 3.30195 10.8292C3.34323 10.8086 3.36387 10.7879 3.42578 10.7673C3.61151 10.6847 3.92107 10.6022 4.31318 10.5609L44.5145 5.27779L11.2679 17.3918C10.8552 16.9791 10.4424 16.5663 10.0091 16.2155ZM17.0257 36.1717L18.6973 30.0424C18.8831 29.4027 19.1513 28.99 19.4196 28.7629C19.6879 28.5359 19.9562 28.4327 20.2864 28.4327C20.6579 28.4327 21.1532 28.5772 21.731 29.0106L24.2281 30.8886L17.0257 36.1717Z" fill="url(#paint0_linear_2_167)" />
              <defs>
                <linearGradient id="paint0_linear_2_167" x1="1.20423" y1="0.923327" x2="56.483" y2="5.32276" gradientUnits="userSpaceOnUse">
                  <stop offset="0.206287" stop-color="#4F9CFF" />
                  <stop offset="0.940271" stop-color="#A483E2" />
                </linearGradient>
              </defs>
            </svg>
            <span>{sended ? 'Ваше сообщение отправлено!' : 'Отправить'}</span>
          </span>
        </button>
      </form>
    </div>
  )
}

export default Contacts