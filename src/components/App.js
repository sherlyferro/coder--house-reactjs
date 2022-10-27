import React from 'react';
import ItemListContainer from './ItemListContainer.js';
import Footer from './Footer';
import Nabvar from './Nabvar';

function App() {
  return (
    <div className="App">
      <Nabvar />
      <ItemListContainer  title="Categorias" />
      <Footer />
    </div>
  );
}

export default App;
