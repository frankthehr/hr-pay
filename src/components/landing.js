import { useContext} from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import styles from '../styles/landing.module.css';

const Services = () => {

  return (
    <div className={styles.landing}>

      <img className={styles.logo} src="/images/HR-Gp-logo.png" alt="Logo for GlobalPaie HR Company"></img>

      <div className={styles.title}>

        <h1>HR Pay</h1>

        <h2>We cover all your payroll and HR needs</h2>

      </div>
    </div>
  )
}
  
export default Services;