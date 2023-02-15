import { useContext} from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import styles from '../styles/footer.module.css';
import Socials from './socials';

const Navbar = () => {

  const { lang, setLang } = useContext(AppContext);

    return (
        <footer className={styles.footer}>

          <span>Copyright 2012 - 2022 HR Company France</span>

          <Socials />

        </footer>
    )
}
  
export default Navbar;