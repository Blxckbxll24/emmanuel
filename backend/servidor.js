import express from "express";
import mysql from "mysql";
import cors from 'cors';
import jwt from 'jsonwebtoken';
import multer from "multer";
import path from "path";

//crear la instancia de express

const app = express();
app.use(express.json());
app.use(cors());
const conexion = mysql.createConnection({
    server: 'localhost',
    user: 'root',
    password: '',
    database: 'mascotitas'
});

conexion.connect(function (error) {
    if (error) {
        console.log("Error en la bd")
    } else {
        console.log("conectado exitosamente")
    }
});

//consultar la lista de mascotas
app.get('/obtenerMascotas', (peticion, respuesta) => {
    const sql = "select * from mascotas";
    conexion.query(sql, (error, resultado) => {
        if (error) return respuesta.json({ Respuesta: "Error" })
        return respuesta.json({ respuesta: "exitoso", contenido: resultado });
    });
});

// acceso
app.post('/acceso', (peticion, respuesta) => {
    const sql = "select * from usuarios where correo_electronico= ? and contrasenia= ? ";
    console.log(peticion.body);
    conexion.query(sql, [peticion.body.correo_electronico, peticion.body.contrasenia],
        (error,resultado) => {
            if(error) return respuesta.json({mensaje:"error"})
            if(resultado.length>0){
                const token=jwt.sign({usuario:'administrador'},'coto',{expiresIn:'1d'});
                respuesta.cookie(token);
               return respuesta.json({Estatus:"CORRECTO",Usuario:token})
            } else{
                return respuesta.json({Estatus:"ERROR",Error:"usuario o contraseña incorrecta"});
            }
        })
})
// registro
app.post('/registro', (peticion, respuesta) => {
    const sql = "insert into usuarios(nombre_usuario, correo_electronico,contrasenia) values(?,?,?) ";
    console.log(peticion.body);
    conexion.query(sql, [peticion.body.nombre_usuario,peticion.body.correo_electronico, peticion.body.contrasenia],
        (error,resultado) => {
            if(error) return respuesta.json({mensaje:"error"})
            return respuesta.json({ Estatus: "CORRECTO"});
        })
})

const almacenamiento= multer.diskStorage({
    destnation:(peticion,archivo, funcion)=>{
        funcion(null,'public/imagenes')
    },

    filename: (peticion,archivo,funcion)=>{
        funcion(null,archivo.originalname+path.extname(archivo.originalname))
    }
});
const subirfoto =multer({
    storage:almacenamiento
})
app.post('/agregarmascota',subirfoto.single('foto'),(peticion,respuesta)=>{
    const sql='insert into mascotas(nombre,edad,foto,estatus) values(?)';
    const datos=[
        peticion.body.nombre,
        peticion.body.edad,
        peticion.file.filename,
        peticion.body.estatus,

    ]
    conexion.query(sql,[datos],(error,resultado)=>{
        if (error) return respuesta.json({'Estatus':'error'});
        return respuesta.json({'Estatus':'EXITOSO'})
    })
})


//iniciar el servidor

app.listen(8082, () => {
    console.log("servidor iniciado");
});
