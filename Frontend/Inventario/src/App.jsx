//Importacion de librerias
import { Routes, Route, Link, Form } from 'react-router-dom'
import { useEffect, useState } from 'react'
//importacion de componentes
import { Login } from './componentes/login/Login'
import { Registro } from './componentes/login/Registro'
import { Menu } from './componentes/panel/Menu'
import { MenuAdmin } from './componentes/panel/MenuAdmin'
import { Principal } from './componentes/panel/Principal'
import { NoEncontrada } from './componentes/NoEncontrada/NoEncontrada'
import { AdminListarusuarios } from './componentes/admin/AdminListarusuarios'
import { AdminListarasignaciones } from './componentes/admin/AdminListarasignaciones'
import { ListarAsignaciones } from './componentes/asignaciones/ListarAsignaciones'
import { ListarDispositivo } from './componentes/dispositivo/ListarDispositivo'
import { CrearDispositivo } from './componentes/dispositivo/CrearDispositivo'
import { ListarUsuarios } from './componentes/usuarios/ListarUsuarios'
import { ListarPersonal } from './componentes/personal/ListarPersonal'

function App() {
  const [nick, setNick] = useState('');
  const [usuario_admin, setUsuario_admin] =useState('')

  useEffect(()=>{
    const usuarioLogueado = JSON.parse(localStorage.getItem('nickname'))//Extraemos de la memoria local el nickname
    if(usuarioLogueado){ //y preguntamos si existe
      setNick(usuarioLogueado)
      setUsuario_admin(usuarioLogueado.datos[0].nickname)// si existe lo seteamos en la variable nickname
    }
  },[]) //esperamos un array que inicialmente esta vacio []


  console.log("me tiene podrido",usuario_admin)

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px', marginBottom: '20px' }}>
      {
        !nick? //Si existe un usuario cargado en la memoria local muestra el menu o muestra el login
          <>
            <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/registro' element={<Registro/>}></Route>
              <Route path='*' element={<NoEncontrada/>}></Route>
            </Routes>
          </>
        :
          usuario_admin==="admin"?  //a futuro evaluar de crerar una columna en la base de datos de  usuarios llamada "admin" 
                                    //y poner 1 o 0 para poder asignar a otros ususrios el permiso de administrador, luego la condicion
                                    // seria si el campo admin, la extrazion del valor seria reemplazando setUsuario_admin(usuarioLogueado.datos[0].nickname)
                                    // por setUsuario_admin(usuarioLogueado.datos[0].admin) y la condicion seriausuario_admin===1?
            <div >
              <div>
                <center>INVENTARIO 1.0 - ADMINISTRADOR</center>
              </div>
              <MenuAdmin/>
                <Routes>
                    <Route path='/' element={<Principal/>}></Route>
                    <Route path='/listarasignaciones' element={<ListarAsignaciones/>}></Route>
                    <Route path='/listardispositivo' element={<ListarDispositivo/>}></Route>
                    <Route path='/listarusuarios' element={<ListarUsuarios/>}></Route>
                    <Route path='/creardispositivo' element={<CrearDispositivo/>}></Route>
                    <Route path='/adminlistarusuarios' element={<AdminListarusuarios/>}></Route>
                    <Route path='/adminlistarasignaciones' element={<AdminListarasignaciones/>}></Route>
                    <Route path='/listarpersonal' element={<ListarPersonal/>}></Route>
                    <Route path='*' element={<NoEncontrada/>}></Route>
                </Routes>
            </div>
          :
            <div >
              <div>
                <center>INVENTARIO 1.0</center>
              </div>
              <Menu/> 
                <Routes>
                    <Route path='/' element={<Principal/>}></Route>
                    <Route path='/listarasignaciones' element={<ListarAsignaciones/>}></Route>
                    <Route path='/listardispositivo' element={<ListarDispositivo/>}></Route>
                    <Route path='/creardispositivo' element={<CrearDispositivo/>}></Route>
                    <Route path='/listarUsuarios' element={<ListarUsuarios/>}></Route>
                    <Route path='/listarpersonal' element={<ListarPersonal/>}></Route>
                    <Route path='*' element={<NoEncontrada/>}></Route>
                </Routes>
            </div>   
      }    
    </div>
  )}

export default App
