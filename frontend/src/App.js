
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Nosotros from './paginas/Nosotros';
import Categoria from './paginas/Categoria';
import Contacto from './paginas/Contacto';
import Acceso from './paginas/Acceso';
import Registro from './paginas/Registro1';
import AgregarMascota from './paginas/AgregarMascota';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/nosotros' element={<Nosotros/>}></Route>
      <Route path='/categorias' element={<Categoria/>}></Route>
      <Route path='/contacto' element={<Contacto/>}></Route>
      <Route path='/acceso' element={<Acceso/>}></Route>
      <Route path='/registro' element={<Registro/>}></Route>
      <Route path='/agregarmascota' element={<AgregarMascota/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
