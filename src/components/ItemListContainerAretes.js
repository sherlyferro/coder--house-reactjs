import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';


let productosIniciales = [
    { id: 1, nombre: "arete 1",precio:20, categoria: "arete", img:"https://i.pinimg.com/564x/eb/09/b6/eb09b6586e262b470c5821a36ca58859.jpg" },
    { id: 2, nombre: "arete 2",precio:50, categoria: "polos", img:"https://i.pinimg.com/564x/f0/1c/80/f01c80f8b6bed61f6e175dcc1f27fea5.jpg" },

]
const ItemListContainerAretes = () => {

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

export default ItemListContainerAretes;

















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

