import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import { notfoundFR, notfoundEN } from '../data/copy';
import styles from '../styles/contact.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Menu from '../components/menu';

const Contact = () => {

    const { lang, showMenu } = useContext(AppContext);

    const handleSubmit = () => {
      console.log('Test')
    }

    return (
      <>
        <Navbar />
        <div className={styles.contact}>
          <form
            action={'aaaa'}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className=""
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className=""
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="number"
              className=""
              required
            />
            <input
              type="text"
              placeholder="Company Name"
              name="company"
              className=""
              required
            />
            <textarea
              placeholder="Your message"
              name="message"
              className=""
              required
            />
            <button
              className=""
              type="submit"
            >
              Send a message
            </button>
          </form>
        </div>
        <Footer />
        { showMenu && <Menu />}
      </>
    )
}
  
export default Contact;