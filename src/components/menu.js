import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import styles from '../styles/menu.module.css';

const Menu = () => {

  const { showMenu, setShowMenu } = useContext(AppContext);

  return (
    <div className={styles.menu}>
      <div className={styles.top}>
        <div className={styles.hello}>
          <h3>GET IN TOUCH</h3>
          <a>Random link</a>
          <a>Random link</a>
          <a>Random link</a>
        </div>

        <div className={styles.projects}>
          <h3>OUR SERVICES</h3>
          <a>Random link</a>
          <a>Random link</a>
          <a>Random link</a>
        </div>

        <div className={styles.blogs}>
          <h3>BLOGS</h3>
          <a>Random link</a>
          <a>Random link</a>
          <a>Random link</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>&copy; HR Company</span>
        <Link to='/' className={styles.home} onClick={() => setShowMenu(false)}>Return Home</Link>
      </div>
    </div>
  )
}

export default Menu;