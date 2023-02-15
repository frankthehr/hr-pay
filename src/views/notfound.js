import { useContext} from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import { notfoundFR, notfoundEN } from '../data/copy';
import styles from '../styles/notfound.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Logos from '../components/logos';

const NotFound = () => {

    const { lang } = useContext(AppContext);

    return (
        <div className={styles.notfoundcontainer}>
            <Navbar />
            <Logos />
            <div className={styles.notfound}>
                <h2>{ lang ? notfoundEN.title : notfoundFR.title }</h2>
                <h3>{ lang ? notfoundEN.subtitle : notfoundFR.subtitle }</h3>
                <Link to="/" className={styles.return}>{ lang ? notfoundEN.returnHome : notfoundFR.returnHome }</Link>
            </div>
            <Footer />
        </div>
    )
}
  
export default NotFound;