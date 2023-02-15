import styles from '../styles/socials.module.css';

const Socials = ({links}) => {

    return (
        <div className={styles.socials}>

          <a href="https://www.linkedin.com/company/hr-company-france/" rel="noopener noreferrer" target="_blank" className={styles.linkedin}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/>
            </svg>
          </a>

          <a href="https://twitter.com/TheHRCompanyIRE" rel="noopener noreferrer" target="_blank" className={styles.twitter}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/thehrcompany/" rel="noopener noreferrer" target="_blank" className={styles.instagram}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
            </svg>
          </a>

          <a href="https://www.facebook.com/thehrcompany" rel="noopener noreferrer" target="_blank" className={styles.facebook}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
            </svg>
          </a>

          <a rel="noopener noreferrer" target="_blank" className={styles.pinterest}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M16.094 4C11.017 4 6 7.383 6 12.861c0 3.483 1.958 5.463 3.146 5.463c.49 0 .774-1.366.774-1.752c0-.46-1.174-1.44-1.174-3.355c0-3.978 3.028-6.797 6.947-6.797c3.37 0 5.864 1.914 5.864 5.432c0 2.627-1.055 7.554-4.47 7.554c-1.231 0-2.284-.89-2.284-2.166c0-1.87 1.197-3.681 1.197-5.611c0-3.276-4.537-2.682-4.537 1.277c0 .831.104 1.751.475 2.508C11.255 18.354 10 23.037 10 26.066c0 .935.134 1.855.223 2.791c.168.188.084.169.341.075c2.494-3.414 2.263-4.388 3.391-8.856c.61 1.158 2.183 1.781 3.43 1.781c5.255 0 7.615-5.12 7.615-9.738C25 7.206 20.755 4 16.094 4z"/>
            </svg>
          </a>

        </div>
    )
  }
  
  export default Socials;

// Do navbar with common info, then a page for each company