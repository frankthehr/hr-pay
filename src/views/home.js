import { useContext} from 'react';
import { AppContext } from '../App';
import { homeFR, homeEN } from '../data/copy';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Landing from '../components/landing';
import Services from '../components/services';
import styles from '../styles/home.module.css';

const Home = () => {

    const { lang } = useContext(AppContext);

    return (
        <>
            <Navbar />
            <Landing />
            <Services />
            <div className={styles.content}>
                <header>
                    <h2>{lang ? homeEN.header : homeFR.header }</h2>
                    <div className={styles.line}></div>
                    <p className={styles.intro}>
                        {lang ? homeEN.intro : homeFR.intro }
                    </p>
                    <div className={styles.prompts}>
                        <a href="https://hrcompany.fr/" rel="noopener noreferrer" target="_blank">{lang ? homeEN.hrLinkPrompt : homeFR.hrLinkPrompt }</a>
                        <a href="https://www.globalpaie.com/" rel="noopener noreferrer" target="_blank">{lang ? homeEN.paieLinkPrompt : homeFR.paieLinkPrompt }</a>
                    </div>
                </header>

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
        </>
    )
  }
  
  export default Home;