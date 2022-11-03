import React from 'react';
import Nabvar from './components/Nabvar'
import Main from './components/Main'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Nabvar />
      <Main />
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
