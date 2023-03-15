import React, { useEffect } from 'react'
import { useState } from 'react'
import * as API from '../../servicios/servicios'
import { Link } from 'react-router-dom';

export function EditarDispositivos(){

    const [dispositivos, setDispositivos] = useState([]);
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    useEffect(()=>{
        API.getDispositivos().then(setDispositivos)
    },[])

return(
    <>
        <div id="content" className="content">
            <div className="panel panel-blue">
                <div className="panel-heading">
                    <h1>Editar Dispositivos</h1>
                    <p>SOLO SE PUEDE EDITAR USUARIOS QUE NO ESTEN ACTIVOS, PARA EDITAR UN USUARIO PRIMERO DEBE DARLO DE BAJA</p>
                </div>
                {
                    mensajeError?
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
                <div className="panel-body">
                    <Link className="btn btn-primary ms-auto" to={'/creardispositivo'} role="button">Crear Dispositivo</Link>
                    <table className="table table-hover table-responsive">
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
                            {dispositivos.map((dispositivo)=>(
                                <tr key={dispositivo.iddispositivo}>
                                    <td scope="row">{dispositivo.iddispositivo}</td>
                                    <td>{dispositivo.us_apellido}</td>
                                    <td>{dispositivo.us_nombre}</td>
                                    <td>{dispositivo.nickname}</td>
                                    <td>{dispositivo.email}</td>
                                    <td>{dispositivo.estado}</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="">
                                            { (dispositivo.estado=="1")?  
                                            <Link to={'/listardispositivos'}><button type="button" className="btn btn-secondary">Listar Dispositivos</button></Link>
                                            :
                                            <Link to={'/ediciondispositivo'}><button type="button" className="btn btn-warning">Edición Dispositivo</button></Link>
                                            }
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer text-muted">
                INVENTARIO 1.0
                </div>
            </div>
        </div>
    </>      
)}