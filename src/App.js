import './styles/styles.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/notfound';

export const AppContext = React.createContext();

function App() {

  const [lang, setLang] = useState(true);

  useEffect(() => {
    checkLangPref();
  },[])

  function checkLangPref() {
    const langPref = localStorage.getItem('langPref');
    if (langPref === null) return;
    if (langPref === 'false') setLang(false);
  }

  return (
    <AppContext.Provider value={{ lang, setLang }}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
