import express from "express";
import mysql from "mysql";
import cors from 'cors';

//crear la instancia de express

const app=express();
app.use(cors());
const conexion= mysql.createConnection({
    server: 'localhost',
    user: 'root',
    password: '',
    database: 'mascotitas'
});

conexion.connect(function(error){
    if (error) {
        console.log("Error en la bd")
    } else {
        console.log("conectado exitosamente")
    }
});

//consultar la lista de mascotas
app.get('/obtenerMascotas',(peticion,respuesta)=>{
    const sql="select * from mascotas";
    conexion.query(sql,(error,resultado)=>{
        if(error) return respuesta.json({Respuesta:"Error"})
        return respuesta.json({respuesta:"exitoso", contenido:resultado});
    });
});




//iniciar el servidor

app.listen(8082,()=>{
    console.log("servidor iniciado");
});
