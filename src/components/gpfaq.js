import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import Question from './question';

const GpFaq = () => {

  const q1 = <h4>HRIS</h4>
  const a1 = <p>Collaborative space for managing absences, holidays, schedules, deposits.</p>

  const q2 = <h4>Digital Safe</h4>
  const a2 = <p>Deposit and conservation of HR and personal documents in your employees' safe.</p>

  const q3 = <h4>Reporting</h4>
  const a3 = <p>Track payroll activity and evolution via an interactive dashboard.</p>

  const q4 = <h4>Expense Reports</h4>
  const a4 = <p>Expense management tool and synchronization to payroll</p>

  const q5 = <h4>This is a question</h4>
  const a5 = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  return (
    <>
      <div id="gpfaq">
        <div className="heading">
          <h2>Digital Management Solution</h2>
          <span>And to complete its offer, Globalpaie has developed for you a fully digitized Human Resources management solution:</span>
        </div>

        <div className="questions">
          <Question questionText={q1} answerText={a1} />

          <Question questionText={q2} answerText={a2} />

          <Question questionText={q3} answerText={a3} />

          <Question questionText={q4} answerText={a4} />
        </div>
      </div>
    </>
  )
}

export default GpFaq;