import React, { useEffect } from 'react'
import { useState } from 'react'
import * as API from '../../servicios/servicios'

export function ListarDispositivo(){

    const [dispositivos, setDispositivos] = useState([]);
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    useEffect(()=>{
        API.getDispositivos().then(setDispositivos)
    },[])
    
    
    const bajaDispositivo  = async(iddispositivo)=>{
        const user = await API.BajaDispositivo(iddispositivo)
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

    const altaDispositivo  = async(iddispositivo)=>{
        const user = await API.AltaDispositivo(iddispositivo)
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
                    <center><h1>Listado de Dispositivos</h1></center>
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
                                    <th>Tipo Dispositivo</th>
                                    <th>Marca Dispositivo</th>
                                    <th>Fecha Compra</th>
                                    <th>Cap. Disco</th>
                                    <th>GB/TB</th>
                                    <th>Tipo Disco</th>
                                    <th>Marca Procesador</th>
                                    <th>Desc Procesador</th>
                                    <th>Marca Placa Madre</th>
                                    <th>Modelo Placa Madre</th>
                                    <th>Estado</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dispositivos.map((dispositivo)=>(
                                    <tr key={dispositivo.iddispositivo}>
                                        <td scope="row">{dispositivo.iddispositivo}</td>
                                        <td>{dispositivo.Tipo_Dispositivo}</td>
                                        <td>{dispositivo.Marca_Dispositivo}</td>
                                        <td>{dispositivo.Fecha_Compra}</td>
                                        <td>{dispositivo.dtamaño}</td>
                                        <td>{dispositivo.dtipo_tamaño}</td>
                                        <td>{dispositivo.tipo_disco}</td>
                                        <td>{dispositivo.Marca_procesador}</td>
                                        <td>{dispositivo.Descrip_Procesador}</td>
                                        <td>{dispositivo.Marca_Placa_Madre}</td>
                                        <td>{dispositivo.Modelo_placa_Madre}</td>
                                        <td><div>
                                                {
                                                (dispositivo.estado=='1'?
                                                    <span className="badge bg-info">Activo</span>
                                                :
                                                    <span className="badge bg-warning">Baja</span>)
                                                }
                                                
                                            </div>   
                                        </td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                { (dispositivo.estado=="1")?  
                                                <button onClick={() => bajaDispositivo(dispositivo.iddispositivo)} type="button" className="btn btn-danger">Dar de Baja</button>
                                                :
                                                <button onClick={() => altaDispositivo(dispositivo.iddispositivo)} type="button" className="btn btn-success">Dar de Alta</button>
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
                    INVENTARIO 1.0 - LISTADO DE DISPOSITIVOS
                </div>
            </div>
        </div>
    </>
)}