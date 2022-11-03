import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

function ItemListContainer(props) {  
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        <li> Tecnologia </li>
        <li>Mascotas </li>
        <li>Electro Hogar</li>
        <li> Dormitorio</li>
        <li> Muebles</li>
        <span className="material-symbols-outlined">
            flight 
        </span>
        <Button></Button>
      </ul>
    </div>
  );
}

export default ItemListContainer;
