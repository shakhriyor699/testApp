import './fonts/fonts.scss'
import styles from './App.module.scss';
import Navigation from './components/Nav';
import {
  Routes,
  Route,
  useLocation 
} from "react-router-dom"
import Contacts from './components/Contacts';

let list = ['Проекты', 'О компании', 'Контакты']
let lang = ['RU', 'EN']

function App() {
  let location = useLocation ()
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <Navigation list={list} lang={lang} />
        <div className={styles["wrapper__content"]}>
          <span className={styles['wrapper__content-span']}>Главная - <span>Контакты</span></span>
          <Routes>
            <Route path="/" element={location.pathname.split('/')[1]} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
