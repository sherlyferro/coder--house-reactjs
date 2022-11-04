import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';


let productosIniciales = [
    { id: 1, nombre: "poleras 1",precio:20, categoria: "polos", img:"https://i.pinimg.com/564x/92/92/a5/9292a5b560e129c225d4ea65abadab3a.jpg" },
    { id: 2, nombre: "poleras 2",precio:50, categoria: "polos", img:"https://i.pinimg.com/564x/52/7d/04/527d049f2cad46d50cf20ec75e1b9b0f.jpg" },

]
const ItemListContainerPoleras= () => {

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

export default ItemListContainerPoleras;

















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

