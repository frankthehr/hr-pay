import { useContext} from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import Socials from './socials';

const Navbar = () => {

  const { lang, setLang } = useContext(AppContext);

  function setEnglish() {
    setLang(true);
    localStorage.setItem('langPref', true);
  }

  function setFrench() {
    setLang(false);
    localStorage.setItem('langPref', false);
  }

  return (
    <nav className={styles.nav}>

      <Socials />

      <div className={styles.lang}>
        <span onClick={setEnglish}>EN</span>
        <span onClick={setFrench}>FR</span>
      </div>

    </nav>
  )
}
  
export default Navbar;