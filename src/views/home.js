import { useContext} from 'react';
import { AppContext } from '../App';
import { homeFR, homeEN } from '../data/copy';
import Menu from '../components/menu';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Landing from '../components/landing';
import Services from '../components/services';
import styles from '../styles/home.module.css';

const Home = () => {

    const { lang, showMenu } = useContext(AppContext);

    return (
        <>
            <Navbar />
            <Landing />
            <Services />
            <Footer />
            { showMenu && <Menu />}
        </>
    )
  }
  
  export default Home;