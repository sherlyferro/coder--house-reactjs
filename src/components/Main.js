import React from 'react';
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './ItemListContainer';
import Carrito from "./Carrito"
function Main() {
    return (
        <main>
            <Routes>
                {/*landing*/}
                <Route path='/' element={<h1>HOME</h1>} />
                {/*productos + categorias*/}
                <Route path='/productos' element={<ItemListContainer />} />

                {/*productos + categorias*/}

                <Route path="/productos/:cat" element={<ItemListContainer />} />

                {/*carrito*/}
                <Route path='/carrito' element={<Carrito />} />


                {/*404*/}

                <Route path="*" element={<h1>404</h1>} />
                   {/*CUANDO SE CLICLEA A LA RUTA SE VA ALA RUTA DEL PRODUCTO*/}



            </Routes>
        </main>
    )
}

export default Main;