import React from 'react';
import Nabvar from './components/Nabvar'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Nabvar />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
