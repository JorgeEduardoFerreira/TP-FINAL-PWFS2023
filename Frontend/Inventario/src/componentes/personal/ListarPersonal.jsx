import React, { useEffect } from 'react'
import { useState } from 'react'
import * as API from '../../servicios/servicios'

export function ListarPersonal(){

    const [personales, setPersonales] = useState([]);
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    useEffect(()=>{
        API.getPersonales().then(setPersonales)
    },[])
    
    
    const bajaPersonal  = async(idpersonal)=>{
        const user = await API.BajaPersonal(idpersonal)
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

    const altaPersonal  = async(idpersonal)=>{
        const user = await API.AltaPersonal(idpersonal)
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
                    <center><h1>Listado de Personal</h1></center>
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
                                    <th>Legajo</th>
                                    <th>Apellido</th>
                                    <th>Nombre</th>
                                    <th>Puesto</th>
                                    <th>Sector</th>
                                    <th>Area</th>
                                    <th>Sucursal</th>
                                    <th>Division</th>
                                    <th>Empresa</th>
                                    <th>Equipo</th>
                                    <th>Estado</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {personales.map((personal)=>(
                                    <tr key={personal.idpersonal}>
                                        <td scope="row">{personal.idpersonal}</td>
                                        <td>{personal.Legajo}</td>
                                        <td>{personal.Apellido}</td>
                                        <td>{personal.Nombre}</td>
                                        <td>{personal.Puesto}</td>
                                        <td>{personal.Sector}</td>
                                        <td>{personal.Area}</td>
                                        <td>{personal.Sucursal}</td>
                                        <td>{personal.Division}</td>
                                        <td>{personal.Empresa}</td>
                                        <td>{personal.Equipo}</td>
                                        <td><div>
                                                {
                                                (personal.estado=='1'?
                                                    <span className="badge bg-info">Activo</span>
                                                :
                                                    <span className="badge bg-warning">Baja</span>)
                                                }
                                                
                                            </div>   
                                        </td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                { (personal.estado=="1")?  
                                                <button onClick={() => bajaPersonal(personal.idpersonal)} type="button" className="btn btn-danger">Dar de Baja</button>
                                                :
                                                <button onClick={() => altaPersonal(personal.idpersonal)} type="button" className="btn btn-success">Dar de Alta</button>
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
                    INVENTARIO 1.0 - LISTADO DE PERSONAL
                </div>
            </div>
        </div>
    </>
)}