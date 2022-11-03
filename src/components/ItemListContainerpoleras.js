import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';


let productosIniciales = [
    { id: 1, nombre: "poleras 1",precio:20, categoria: "polos", img:"https://www.yanbal.com/medias/25032492-01.jpg-Yanbal-OriginalFormat-145Wx145H?context=bWFzdGVyfGltYWdlc3w2OTExfGltYWdlL2pwZWd8aW1hZ2VzL2g4Yy9oYzcvOTE5NTk1OTc0NjU5MC5qcGd8ZWIwNzAxYmUwNDFlYjRhZDIxNjMzODkyMDJiMTYyYTZkYzVlODQ2ZWJiYjYzZDQ3M2Q3ZDBmNDkzYjUwZGY0Yg" },
    { id: 2, nombre: "poleras 2",precio:50, categoria: "polos", img:"https://www.yanbal.com/medias/25032492-01.jpg-Yanbal-OriginalFormat-145Wx145H?context=bWFzdGVyfGltYWdlc3w2OTExfGltYWdlL2pwZWd8aW1hZ2VzL2g4Yy9oYzcvOTE5NTk1OTc0NjU5MC5qcGd8ZWIwNzAxYmUwNDFlYjRhZDIxNjMzODkyMDJiMTYyYTZkYzVlODQ2ZWJiYjYzZDQ3M2Q3ZDBmNDkzYjUwZGY0Yg" },

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

