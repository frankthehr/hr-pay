import styles from '../styles/logos.module.css';

const Logos = () => {

    return (
      <div className={styles.logos}>
        <a href="https://hrcompany.fr/" rel="noopener noreferrer" target="_blank">
          <img src="/images/hrlogo.png" alt="Logo for HR Company"></img>
        </a>
        <a href="https://www.globalpaie.com/" rel="noopener noreferrer" target="_blank">
          <img src="/images/paielogo.png" alt="Logo for Global Paie"></img>    
        </a>
      </div>
    )
}
  
export default Logos;