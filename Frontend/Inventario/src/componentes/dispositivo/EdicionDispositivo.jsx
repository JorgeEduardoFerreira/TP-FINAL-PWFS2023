import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import * as API from '../../servicios/servicios'

export function EdicionUsuario(){

const [usuario, setUsuario] = useState('');
const {idusuario} = useParams();
console.log( "id del usuario es", idusuario)

const [mensajeSuccess, setmensajeSuccess] = useState('')

useEffect(()=>{
    trae_datos(idusuario)
},[])

const trae_datos  = async ()=>{
    const datos_usuario = await API.getUsuariosById(idusuario)
    console.log(datos_usuario)
    setUsuario(datos_usuario.nombre)
}

const editar_usuario = ()=>{
    const datos_enviar={
        nombre: usuario
    };
    API.updateUsuario(idusuario,datos_enviar);
      setmensajeSuccess('Se Edito el usuario')
        setTimeout(()=>{
            setmensajeSuccess('')
            // window.location.reload(true)
        }, 2000)
}
return (
    <>
        <div id="content" className="content">
            <div className="panel panel-blue">
                <div className="panel-heading">
                    <center>
                        <h3>Edicion del  usuario</h3>
                    </center>
                </div>
                    {
                        mensajeSuccess?
                        <div class="alert alert-success" role="alert">
                            {mensajeSuccess}
                        </div>
                            :''
                    }

                {/* INSERT INTO usuario ( us_nombre, us_apellido, email, password, nickname )*/}
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="">Nombre del usuario</label>
                            <input 
                                type="text"
                                value={usuario} 
                                onChange={(event)=>setUsuario(event.target.value)}
                                name="" id="" className="form-control" placeholder="" aria-describedby="helpId"
                            />
                    <small id="helpId" className="text-muted">&nbsp;</small>
                    </div>
                    <div className="form-group">
                        <button  onClick={editar_usuario}  type="button" className="btn btn-primary">Guardar Cambios</button>
                        <Link to={'/listarusuarios'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                    </div>
                </div>
                <div className="card-footer text-muted">
                INVENTARIO 1.0 - SECCION EDITAR USUARIO
                </div>
            </div>
        </div>
    </>
  )
}