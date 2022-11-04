import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';


let productosIniciales = [
    { id: 1, nombre: "arete ",precio:20, categoria: "arete", img:"https://i.pinimg.com/564x/1a/82/5f/1a825f646eb26264c990f8f9fb1eb8ee.jpg" },
    { id: 2, nombre: "polos ",precio:50, categoria: "polos", img:"https://i.pinimg.com/564x/1c/5b/f6/1c5bf69ea1fd1492e59f3e48a7142002.jpg" },
    { id: 2, nombre: "pantalon ",precio:110, categoria: "polos", img:"https://i.pinimg.com/564x/1c/5b/f6/1c5bf69ea1fd1492e59f3e48a7142002.jpg" }
    
]

const ItemListContainer = () => {

    const [items, setItems] = useState([])

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
                //console.log(error)
            })
    })


    return (
        <div>
            <Container>
                {items.length == 0 ? <h1>cargando ..</h1> : <ItemList items={items} />}
            </Container>
            
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

