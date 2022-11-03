import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './Itemlist';



let productosIniciales = [
  { id: 1, nombre: "arete 1", categoria: "arete" },
  { id: 2, nombre: "polos 1", categoria: "polos" }
]
const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const {cat } = useParams()
  console.log("EL GATETO ", cat)
  useEffect(() => {
    //console.log("aca pido productos despues de cargarlo")
    let simulacionPedido = new Promise((res) => {
      setTimeout(() => {
        res(productosIniciales)
      }, 2000);
    })
    simulacionPedido
      .then((respuesta) => {
        setItems(respuesta)
      })
      .catch((error) => {
        console.log(error)
      })
  },)


  return (
    <div>
      {items.length == 0 ? <h1>cargando ..</h1> : <ItemList items={items} />}
    </div>
  )
}

export default ItemListContainer;

















/*import { Button } from 'react-bootstrap'

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
}*/

