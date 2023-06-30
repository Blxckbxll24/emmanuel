import React from "react";
import Encabezado from "../componentes/Encabezado";

function Inicio(){
    return(
        <>
        <Encabezado/>
        <div className="container">
            <h1>Bienvenidos a nuestro portal</h1>
        </div>
        </>
    );
}
export default Inicio;