import { useContext} from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import { notfoundFR, notfoundEN } from '../data/copy';
import styles from '../styles/notfound.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Menu from '../components/menu';

const NotFound = () => {

    const { lang, showMenu } = useContext(AppContext);

    return (
        <div className={styles.notfoundcontainer}>
            <Navbar />
            <div className={styles.notfound}>
            <img className={styles.logo} src="/images/HR-Gp-logo.png" alt="Logo for GlobalPaie HR Company"></img>
                <h2>{ lang ? notfoundEN.title : notfoundFR.title }</h2>
                <h3>{ lang ? notfoundEN.subtitle : notfoundFR.subtitle }</h3>
                <Link to="/" className={styles.return}>{ lang ? notfoundEN.returnHome : notfoundFR.returnHome }</Link>
            </div>
            <Footer />
            { showMenu && <Menu />}
        </div>
    )
}
  
export default NotFound;