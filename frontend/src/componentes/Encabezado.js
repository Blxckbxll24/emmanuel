import React from 'react';
//agregar los enlaces 
import { Link, useNavigate } from 'react-router-dom';

function Encabezado(){

const login=localStorage.getItem('usuario');
const navegacion=useNavigate();

const salir=()=>{
    localStorage.clear();
    navegacion('/');
}

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
            {
                login ?
                <>
                <a onClick={salir}>Salir</a>
                </>
                :
                <>
                <Link to="/acceso">Acceder</Link>
                </>
            }
            <Link to='/registro'>Registro</Link>
        </nav>
        </>
    )
}
export default Encabezado;