import './styles/styles.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Contact from './views/contact';
import NotFound from './views/notfound';

export const AppContext = React.createContext();

function App() {

  const [lang, setLang] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    checkLangPref();
  },[])

  function checkLangPref() {
    const langPref = localStorage.getItem('langPref');
    if (langPref === null) return;
    if (langPref === 'false') setLang(false);
  }

  return (
    <AppContext.Provider value={{ lang, setLang, showMenu, setShowMenu }}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
