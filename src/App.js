import './fonts/fonts.scss'
import styles from './App.module.scss';
import Navigation from './components/Nav';

function App() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
