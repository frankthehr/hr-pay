import { useContext} from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import styles from '../styles/services.module.css';

const Landing = () => {

  return (
    <div className={styles.services}>

      <div className={styles.intro}>
        <h2>Our Services</h2>

        <p>We provide a variety of solutions encompassing both HR and payroll payment to help you manage your employees and paylsip. Our HR services include managing employee data, handling benefits administration, and providing compliance guidance. The payroll services offered usually include calculating and processing employee paychecks, managing tax withholdings, and generating reports for tax filings.</p>
      </div>

      <div className={styles.payroll}>
        <h2>Our Payroll Solutions</h2>

        <div className={styles.payrollSolutions}>
          <div></div>
        </div>
      </div>

    </div>
  )
}
  
export default Landing;