import React from 'react';
//agregar los enlaces 
import { Link } from 'react-router-dom';

function Encabezado(){
    return(
        <>
        <header>
            <h1>OntaMiMascota.com</h1>
        </header>
        <nav>
            <Link to='/'>Inicio</Link>
            <Link to='/nosotros'>Nosotros</Link>
            <Link to='/categorias'>Categoria</Link>
            <Link to='/contacto'>IContacto</Link>
        </nav>
        </>
    )
}
export default Encabezado;