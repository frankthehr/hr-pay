import { useContext} from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import Socials from './socials';

const Navbar = () => {

  const { lang, setLang, showMenu, setShowMenu } = useContext(AppContext);

  function setEnglish() {
    setLang(true);
    localStorage.setItem('langPref', true);
  }

  function setFrench() {
    setLang(false);
    localStorage.setItem('langPref', false);
  }

  return (
    <nav className={ showMenu ? styles.menuNav : styles.nav}>

      <Socials />

      <div className={styles.rightNav}>
        <span className={styles.lang} onClick={setEnglish}>EN</span>
        <span className={styles.lang} onClick={setFrench}>FR</span>

        <div className="navbarBurger" onClick={() => setShowMenu(!showMenu)}>
          <span className={ showMenu ? 'menuSelected' : '' }></span>
          <span className={ showMenu ? 'menuSelected' : '' }></span>
          <span className={ showMenu ? 'menuSelected' : '' }></span>
        </div>
      </div>

    </nav>
  )
}
  
export default Navbar;