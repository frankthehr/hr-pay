import { useContext} from 'react';
import { AppContext } from '../App';
import { homeFR, homeEN } from '../data/copy';
import Menu from '../components/menu';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Landing from '../components/landing';
import GPServices from '../components/services';
import styles from '../styles/home.module.css';

const Home = () => {

    const { lang, showMenu } = useContext(AppContext);

    return (
        <>
            <Navbar />
            <Landing />
            <GPServices />
            <div className={styles.content}>

                <section className={styles.advice}>
                    <div>
                        <h4>{lang ? homeEN.adviceSubtitle : homeFR.adviceSubtitle }</h4>
                        <h3>{lang ? homeEN.adviceTitle : homeFR.adviceTitle }</h3>
                        <p>{lang ? homeEN.adviceText : homeFR.adviceText }</p>
                    </div>
                    <div className={styles.photoone}></div>
                </section>

                <section className={styles.advice}>
                <div className={styles.phototwo}></div>
                    <div>
                        <h4>{lang ? homeEN.adviceSubtitle : homeFR.adviceSubtitle }</h4>
                        <h3>{lang ? homeEN.adviceTitle : homeFR.adviceTitle }</h3>
                        <p>{lang ? homeEN.adviceText : homeFR.adviceText }</p>
                    </div>
                </section>
            </div>
            <Footer />
            { showMenu && <Menu />}
        </>
    )
  }
  
  export default Home;