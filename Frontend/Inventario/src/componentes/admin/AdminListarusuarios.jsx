import React, { useEffect } from 'react'
import { useState } from 'react'
import * as API from '../../servicios/servicios'

export function AdminListarusuarios(){

    const [usuarios, setUsuarios] = useState([]);
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    useEffect(()=>{
        API.getUsuarios().then(setUsuarios)
    },[])
    
    
    const bajaUsuario  = async(idusuario)=>{
        const user = await API.BajaUsuario(idusuario)
        if(user.status){
            
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
                window.location.reload(true)
            }, 2500)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 3000)
        }
    }

    const altaUsuario  = async(idusuario)=>{
        const user = await API.AltaUsuario(idusuario)
        if(user.status){
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.reload(true)
            }, 2500)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 3000)
        }
    }
return(
    <>
        <div id="content" className="content">
            <div className="panel panel-blue">
                <div className="panel-heading">
                    <center><h1>Administrar de Usuarios</h1></center>
                </div>
                <div className="panel-body">
                    {
                    mensajeError? // si hay error muesta el erro sino : deja vacio
                        <div className="alert alert-warning" role="alert">
                            {mensajeError}
                        </div>
                        : ''
                    }
                    {
                    mensajeSuccess?
                        <div className="alert alert-success" role="alert">
                            {mensajeSuccess}
                        </div>  
                        : ''
                    }
                    <div className="card-body">
                        <table className="table table-hover table-responsive ">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Apellido</th>
                                    <th>Nombre</th>
                                    <th>Nickname</th>
                                    <th>Email</th>
                                    <th>Estado</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((usuario)=>(
                                    <tr key={usuario.idusuario}>
                                        <td scope="row">{usuario.idusuario}</td>
                                        <td>{usuario.us_apellido}</td>
                                        <td>{usuario.us_nombre}</td>
                                        <td>{usuario.nickname}</td>
                                        <td>{usuario.email}</td>
                                        <td><div>
                                                {
                                                (usuario.estado=='1'?
                                                    <span className="badge bg-info">Activo</span>
                                                :
                                                    <span className="badge bg-warning">Baja</span>)
                                                }
                                                
                                            </div>   
                                        </td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                { (usuario.estado=="1")?  
                                                <button onClick={() => bajaUsuario(usuario.idusuario)} type="button" className="btn btn-danger">Dar de Baja</button>
                                                :
                                                <button onClick={() => altaUsuario(usuario.idusuario)} type="button" className="btn btn-success">Dar de Alta</button>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    INVENTARIO 1.0 - ADMINISTRAR USUARIOS
                </div>
            </div>
        </div>
    </>
)}