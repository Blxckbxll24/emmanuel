import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AgregarMascota() {

    const [mascota, setMascota] = useState({
        nombre: '',
        edad: '',
        foto: '',
        estatus: 1
    });
    const navegacion = useNavigate();
    const agregarMascota = (e) => {
        e.preventDefault();
        const datosFormulario = new FormData();
        datosFormulario.append('nombre', mascota.nombre);
        datosFormulario.append('edad', mascota.edad);
        datosFormulario.append('estatus', mascota.estatus);
        datosFormulario.append('foto', mascota.foto);
        console.log(mascota)
        axios.post('http://localhost:8082/agregarmascota', datosFormulario)
            .then(respuesta => {
                console.log(respuesta);

            })
            .catch(error => console.log(error));
    }
    return (


        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <h1 class="text-center mb-4">Nombre de la mascota</h1>
                    <form onSubmit={agregarMascota}>
                    <div class="mb-3">
                            <label for="nombre" class="form-label">Nombtre de la mascota</label>
                            <input type="text" class="form-control" id="nombre" name="nombre" required 
                            onChange={(e)=>setMascota({...mascota,nombre:e.target.value})}/>
                        </div>
                        <div class="mb-3">
                            <label for="nombre" class="form-label">edad</label>
                            <input type="text" class="form-control" id="edad" name="edad" required 
                             onChange={(e)=>setMascota({...mascota,edad:e.target.value})}/>
                        </div>
                        <div class="mb-3">
                            <label for="imagen" class="form-label">foto de la mascota</label>
                            <input type="file" class="form-control" id="imagen" name="imagen" accept="image/*" required
                             onChange={(e)=>setMascota({...mascota,foto:e.target.files[0]})} />
                        </div>s
                        <div class="mb-3">
                            <label for="tipo" class="form-label">Estatus</label>
                            <select class="form-select" id="tipo" name="tipo" required
                             onChange={(e)=>setMascota({...mascota,estatus:e.target.value})}>
                                <option value="">Seleccione un tipo</option>
                                <option value="1">Activo</option>
                                <option value="2">Inactivo</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Registrar División</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default AgregarMascota;