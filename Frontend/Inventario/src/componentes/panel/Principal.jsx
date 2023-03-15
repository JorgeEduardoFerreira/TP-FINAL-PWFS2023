import React from 'react';
import { useEffect, useState } from 'react';


export function Principal(){
    
    const [nombre_usuario, setNombreUsuario] =useState('')
    // extraigo del json el nickname y lo almaceno localmente, y seteo la variable con el nombre del usuario
    useEffect(()=>{ 
        const usuarioLogueado = JSON.parse(localStorage.getItem('nickname'))
        if(usuarioLogueado){
          setNombreUsuario(usuarioLogueado.datos[0].us_nombre)
        }
        },[]);
    
     return(
      
        <div>
          <center>
          <h1>HOLA {nombre_usuario} </h1>
          <br></br>
          <h3>BIENVENIDO A</h3>
          <br>
          </br>
          </center>
          <div>
            <center><img src="/etechsinfondo.png" className="logo"  width="200" height="190" alt="logo etech" /></center>
          </div>
        </div>
    )
}