
import React from 'react';
import { useEffect, useState } from 'react';
import * as API from '../../servicios/servicios'
import { } from 'bootstrap';
import { Link } from 'react-router-dom';

 
export function AdminListarasignaciones(){
 
  const [asignaciondt, setAsignaciondt] = useState([]);
  const [mensajeError, setmensajeError] = useState('')
  const [mensajeSuccess, setmensajeSuccess] = useState('')

  useEffect(()=> { // Se hace la llamada a la API    
    API.getAsignaciondt() .then(setAsignaciondt)    
},[]);


const bajaAsigancion  = async(idasignacion)=>{
  const user = await API.BajaAsigancion(idasignacion)
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

const altaAsignacion  = async(idasignacion)=>{
  const user = await API.AltaAsignacion(idasignacion)
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
                
                    <center><h1>Listado de Asignaciones</h1></center>
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
            
                    
                    <table className="table table-striped table-bordered dt-responsive dtr-inline" >
                        <thead>
                            <tr>
                                <th>Idasignacion</th>
                                <th>Fecha Asignacion</th>
                                <th>IDper-NumLeg</th>
                                <th>Apellido</th>
                                <th>Nombre</th>
                                <th>Puesto</th>
                                <th>Sector</th>
                                <th>Sucursal</th>
                                <th>iddispositivo</th>
                                <th>Tipo Dispositivo</th>
                                <th>Marca Dispositivo</th>
                                <th>Fecha Compra</th>
                                <th>IDmarca-Marca Procesador</th>
                                <th>Desc Procesador</th>
                                <th>IDmarca-Marca Placa Madre</th>
                                <th>Modelo Placa Madre</th>
                                <th>Estado</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {asignaciondt.map((asignaciones)=>(
                            <tr key={asignaciones.idasignacion}>
                                <td scope="row">{asignaciones.idasignacion}</td>
                                <td>{asignaciones.fecha_asignacion}</td>
                                <td>{asignaciones.IDperNumLeg}</td>
                                <td>{asignaciones.Apellido}</td>
                                <td>{asignaciones.Nombre}</td>
                                <td>{asignaciones.Puesto}</td>
                                <td>{asignaciones.Sector}</td>
                                <td>{asignaciones.Sucursal}</td>
                                <td>{asignaciones.iddispositivo}</td>
                                <td>{asignaciones.Tipo_Dispositivo}</td>
                                <td>{asignaciones.Marca_Dispositivo}</td>
                                <td>{asignaciones.Fecha_Compra}</td>
                                <td>{asignaciones.IDmarcaMarca_Proc}</td>
                                <td>{asignaciones.Descrip_Procesador}</td>
                                <td>{asignaciones.IDmarcaMarca_PlMa}</td>
                                <td>{asignaciones.Modelo_Placa_Madre}</td>
                                <td>
                                    <div>
                                        {
                                        (asignaciones.estado=='1'?
                                            <span className="badge bg-info">Activo</span>
                                        :
                                            <span className="badge bg-warning">Baja</span>)
                                        }
                                    </div>   
                                </td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="">
                                        { (asignaciones.estado=="1")?  
                                        <button onClick={() => bajaAsigancion(asignaciones.idasignacion)} type="button" className="btn btn-danger">Dar de Baja</button>
                                        :
                                        <button onClick={() => altaAsignacion(asignaciones.idasignacion)} type="button" className="btn btn-success">Dar de Alta</button>
                                        }
                                    </div> 
                                </td>
                            </tr>
                        ))} 
                        </tbody>
                    </table>
                    <div className="card-footer text-muted">
                    INVENTARIO 1.0 - ADMINISTRAR ASIGNACIONES
                    </div>   
               </div>
            </div>
        </div> 
    </>
)}

