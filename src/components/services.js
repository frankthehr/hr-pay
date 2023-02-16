import { useContext} from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import styles from '../styles/services.module.css';
import GpFaq from './gpfaq';
import Logos from './logos';
import { homeEN, homeFR } from '../data/copy' 

const Services = () => {

  const { lang } = useContext(AppContext);

  return (
    <div className={styles.services}>

      <div className={styles.intro}>
        <h2>Our Services</h2>

        <p>We provide a variety of solutions encompassing both HR and payroll payment to help you manage your employees and paylsip. Our HR services include managing employee data, handling benefits administration, and providing compliance guidance. The payroll services offered usually include calculating and processing employee paychecks, managing tax withholdings, and generating reports for tax filings.</p>
      </div>

      <div className={styles.payroll}>
        <h2>Our Payroll Solutions</h2>

        <div className={styles.payrollSolutions}>

          <div>
            <i class="las la-coins"></i>
            <span>Preparation of payslips</span>
          </div>

          <div>
            <i class="las la-file-alt"></i>
            <span>Realization of exit documents</span>
          </div>

          <div>
            <i class="las la-receipt"></i>
            <span>Filing of the DSN and management of the withholding tax</span>
          </div>

          <div>
            <i class="las la-handshake"></i>
            <span>Complete management of work stoppages</span>
          </div>

          <div>
            <i class="las la-file-invoice-dollar"></i>
            <span>Payroll Consulting and Support</span>
          </div>
        </div>
      </div>

      <GpFaq />

      <div className={styles.payrollAdvisors}>
        <h2>Dedicated Advisors</h2>
        <div></div>
        <p>Your dedicated advisor is responsible for drawing up pay slips, mandatory social declarations, documents in the event of an employee's departure, or sending you accounting entries. He also takes care of everything in the event of a work stoppage of one of your employees.</p>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className={styles.hr}>
        <h2>Our HR Services</h2>

        <div className={styles.hrSolutions}>

          <div>
            <h3>Administrative Personnel Management</h3>
            <span>Implementation of procedures related to your staff (Compliance of the employment contract and other documents / Hiring / Regulatory posting / Procedures of all kinds ...) Complete guide to labour law adapted to your company.</span>
          </div>

          <div>
            <h3>Human Resources Management</h3>
            <span>Support and implementation for your company of social policy, organizational chart, training, professional evaluations, annual interviews, HR coaching...</span>
          </div>

          <div>
            <h3>Document and Conventional Management</h3>
            <span>Preparation of all the necessary documents (Employment contracts / Internal regulations / Employee guide...) in full compliance with labor law and collective agreements in your sector of activity.</span>
          </div>
        </div>
      </div>

      <div className={styles.hrForYou}>
        <h2>How can our HR solutions help you?</h2>

        <p>HR Company simplifies Human Resources management and secures your business by:</p>
        <ul>
          <li>Allowing you to be in full compliance with legal obligations in labor law</li>
          <li>Supporting you in the perfect regulatory and social compliance of your Company</li>
          <li>Acting quickly, answering your questions the same day</li>
          <li>Anticipating and solving HR problems</li>
          <li>Dedicating an HR expert to your company</li>
          <li>Saving you money</li>
        </ul>
      </div>

      <div className={styles.legalQuestion}>
        <h3>Have a legal question?</h3>
        <span>We answer in less than 24 hours!</span>
        <Link to="/contact">Contact us</Link>
      </div>

      <section className={styles.advice}>
        <div>
          <h4>Professional HR Support</h4>
          <h3>Your dedicated HR advisor is at your disposal</   h3>
          <p>We provide you with a dedicated HR advisor, reachable on a daily basis by phone. Its role is to support you in the management of your company's human resources, while ensuring that all the documents you write for your employees comply with social legislation.</p>
        </div>
        <div className={styles.photoone}></div>
      </section>

      <section className={styles.advice}>
        <div className={styles.phototwo}></div>
        <div>
          <h4>We ensure that your business is in compliance with the law</h4>
          <h3>HR documentation adapted to your corporate culture</h3>
          <p>Imagine that your employment contracts, house rules and all your HR procedures and practices are regularly updated, without you having to worry about them. That is the job of our experts. We take care of the necessary changes to your internal HR documentation, freeing up your time to deal with more important topics.</p>
        </div>
      </section>

      <div className={styles.together}>
        <div className={styles.togetherText}>
        <h3>HR Company and Globalpaie, united by common values.</h3>

        <p>We are driven by the desire to provide you with a quality service and to make Human Resources a real strength of your company.</p>

        <p>For this we make it a point of honor to answer you in less than 24 hours, to accompany you every day in the management of your HR issues, and to allow you to devote yourself in all serenity to your activity.</p>

        <p>Because we share common values, we form for you the most complementary duo of payroll and HR management players. Each specialist in its core activity, at the service of your company. You do not benefit from 1, but 2 advisors dedicated to your business.</p>
        </div>
      </div>

      <Logos />
    </div>
  )
}
  
export default Services;