import React, { useEffect } from 'react'
import { useState } from 'react'
import * as API from '../../servicios/servicios'
import { Link } from 'react-router-dom';

export function EditarPersonal(){

    const [personales, setPersonales] = useState([]);
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    useEffect(()=>{
        API.getPersonales().then(setPersonales)
    },[])

return(
    <>
        <div id="content" className="content">
            <div className="panel panel-blue">
                <div className="panel-heading">
                    <h1>Editar Personales</h1>
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
                    <Link className="btn btn-primary ms-auto" to={'/crearpersonal'} role="button">Crear Personal</Link>
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
                            {personales.map((personal)=>(
                                <tr key={personal.idpersonal}>
                                    <td scope="row">{personal.idpersonal}</td>
                                    <td>{personal.us_apellido}</td>
                                    <td>{personal.us_nombre}</td>
                                    <td>{personal.nickname}</td>
                                    <td>{personal.email}</td>
                                    <td>{personal.estado}</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="">
                                            { (personal.estado=="1")?  
                                            <Link to={'/listarPersonales'}><button type="button" className="btn btn-secondary">Listar Personales</button></Link>
                                            :
                                            <Link to={'/edicionpersonal'}><button type="button" className="btn btn-warning">Edición Personal</button></Link>
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