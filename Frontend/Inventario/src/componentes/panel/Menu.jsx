import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Principal } from './Principal'


export function Menu(){
    const [nickname, setNickname] =useState('')
    const [nombre_usuario, setNombreUsuario] =useState('')
     //Funcion donde borro del local storage el nombre de usuario para desloguear
    const logout  = async (event)=>{ 
            setNickname('')
            window.localStorage.removeItem('nickname')
            window.location.href = '/';
            // window.location.reload(true);
    }

    // extraigo del json el nickname y lo almaceno localmente, y seteo la variable con el nombre del usuario
    useEffect(()=>{ 
      const usuarioLogueado = JSON.parse(localStorage.getItem('nickname'))
      if(usuarioLogueado){
        setNombreUsuario(usuarioLogueado.datos[0].us_nombre)
      }
    },[])
    return(
      <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >MENU</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to={'/'}>Inicio</Link>
                  </li>
                    
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Asignaciones
                    </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to={'/listarasignaciones'}>Listar Asignaciones</Link>
                      </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dispositivos
                    </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to={'/listardispositivo'}>Listar Dispositivos</Link>
                        <Link className="dropdown-item" to={'/creardispositivo'}>Crear Dispositivos</Link>
                      </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Personal
                    </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to={'/listarpersonal'}>Listar Personal</Link>
                      </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Usuarios
                    </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to={'/listarusuarios'}>Listar Usuarios</Link>
                      </div>
                  </li>

                </ul>
                  <div className="ms-auto" style={{padding: "10px" }}> { nombre_usuario+" "  }  
                    <button onClick={logout} className="btn btn-danger ms-auto" type="button"> Salir</button>
                  </div>
              </div>
                
          </nav>
          </>
        
          
        //         
    )
}