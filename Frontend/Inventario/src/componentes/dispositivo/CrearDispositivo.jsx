import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function CrearDispositivo(){

    
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [mensajeError, setmensajeError] = useState('')
    const [idtipo_dispositivo, setIdtipo_dispositivo] = useState('');
    const [idmarca, setIdmarca] = useState('');
    const [fecha_compra, setFecha_compra] = useState('');
    const [idprocesador, setIdprocesador] = useState('');
    const [idram, setIdram] = useState('');
    const [iddisco, setIddisco] = useState('');
    const [idplaca_madre, setIdplaca_madre] = useState('');
    const [idfuente, setIdfuente] = useState('');
    const [idso, setIdso] = useState('');
    const [modelo, setModelo] = useState('');
    const [observaciones, setObservaciones] = useState('');
    const [cod_inventario, setCod_inventario] = useState('');
    const [reporte, setReporte] = useState('');

    const creardispositivo = async (event) =>{
        event.preventDefault();
        const datosdispositivo={
            idtipo_dispositivo:idtipo_dispositivo,
            idmarca:idmarca,
            fecha_compra:fecha_compra,
            idprocesador:idprocesador,
            idram:idram,
            iddisco:iddisco,
            idplaca_madre:idplaca_madre,
            idfuente:idfuente,
            idso:idso,
            modelo:modelo,
            observaciones:observaciones,
            cod_inventario:cod_inventario,
            reporte:reporte
        };
        console.log(datosdispositivo)
        const user=  API.GuardarDispositivo(datosdispositivo)
            if(user.status){            
                mensajeSuccess(user.mensaje)
                setTimeout(()=>{
                    mensajeSuccess('')
                    window.location.href ='/listardispositivo';
                }, 2500)
            }else{
                setmensajeError(user.mensaje)
                setTimeout(()=>{
                    setmensajeError('')
                }, 3000)
            }
    }

    return(
        <div className="card">
            <div className="card-header">
                Crear un Nuevo Dispositivo
            </div>
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
                <form onSubmit={creardispositivo}>  
                
                    <div className='row'>

                    <div>DISPOSITIVO</div>
                        {/* LISTA TIPO DISPOSITIVO */}
                        <div className="form-group col-3" required>
                            <label htlmfor="" required >Tipo Disp</label>
                                <select onChange={(event)=>setIdtipo_dispositivo(event.target.value)} className='form-control'>
                                    <option>Seleccionar ...</option>
                                    <option value='1'>PC ESCRITORIO-PCE</option>
                                    <option value='2'>NOTEBOOK-NBK</option>
                                    <option value='3'>MONITOR-MON</option>
                                    <option value='4'>IMPRESORA-IMP</option>
                                    <option value='5'>SERVIDOR-SVR</option>
                                    <option value='6'>TELEVISION-TV</option>
                                    <option value='7'>UPS-UPS</option>
                                    <option value='8'>MODEM-MOD</option>
                                    <option value='9'>ROUTER-ROU</option>
                                    <option value='10'>SWITCH-SWI</option>
                                    <option value='11'>PATCHERA-PAT</option>
                                </select>
                        </div>
                        
                        {/* LISTA MARCAS */}
                        <div className="form-group col-3" required>
                            <label htlmfor="">Marca Disp</label>
                                <select onChange={(event)=>setIdmarca(event.target.value)} className='form-control'>
                                    <option>Seleccionar ...</option>
                                    <option value='1'>HP</option>
                                    <option value='2'>LG</option>
                                    <option value='3'>SAMSUNG</option>
                                    <option value='4'>DELL</option>
                                    <option value='5'>AMD</option>
                                    <option value='6'>INTEL</option>
                                    <option value='7'>ASUS</option>
                                    <option value='8'>GIGABYTE</option>
                                    <option value='9'>ASROCK</option>
                                    <option value='10'>MSI</option>
                                    <option value='11'>SOLARMAX</option>
                                    <option value='12'>SENTEY</option>
                                </select>
                        </div>

                        {/* FECHA DE COMPRA */}
                        <div className="form-group col-3">
                            <label htlmfor="">Fecha de compra</label>
                                <input 
                                    type="date"
                                    value={fecha_compra} 
                                    onChange={(event)=>setFecha_compra(event.target.value)}
                                    name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">&nbsp;</small>
                        </div>
                    
                        <div><br></br></div>
                        <div>COMPONENTES</div>
                        {/* LISTA PROCESADORES */}
                        <div className="form-group col-3" required>
                            <label htlmfor="">Procesador</label>
                                <select onChange={(event)=>setIdprocesador(event.target.value)} className='form-control'>
                                    <option>Seleccionar ...</option>
                                    <option value='1'>AMD Ryzen 5 4600G</option>
                                    <option value='2'>INTEL Core i3-10105 3.70GHz</option>
                                    <option value='3'>INTEL Core i3-7100 CPU 3.90GHz</option>
                                    <option value='4'>AMD DualCore A4-4000 3,2GHz</option>
                                </select>
                        </div>
        
                        {/* LISTA RAM */}
                        <div className="form-group col-2" required>
                            <label htlmfor="">Memoria RAM</label>
                                <select onChange={(event)=>setIdram(event.target.value)} className='form-control'>
                                    <option>Seleccionar ...</option>
                                    <option value='1'>DDR2 256MB</option>
                                    <option value='2'>DDR2 512MB</option>
                                    <option value='3'>DDR2 1GB</option>
                                    <option value='4'>DDR2 2GB</option>
                                    <option value='5'>DDR3 1GB</option>
                                    <option value='6'>DDR3 2GB</option>
                                    <option value='7'>DDR3 3GB</option>
                                    <option value='8'>DDR3 4GB</option>
                                    <option value='9'>DDR3 5GB</option>
                                    <option value='10'>DDR3 6GB</option>
                                    <option value='11'>DDR3 8GB</option>
                                    <option value='12'>DDR3 9GB</option>
                                    <option value='13'>DDR3 10GB</option>
                                    <option value='14'>DDR3 12GB</option>
                                    <option value='15'>DDR3 16GB</option>
                                    <option value='16'>DDR3 17GB</option>
                                    <option value='17'>DDR3 18GB</option>
                                    <option value='18'>DDR3 20GB</option>
                                    <option value='19'>DDR3 24GB</option>
                                    <option value='20'>DDR3 32GB</option>
                                    <option value='21'>DDR4 1GB</option>
                                    <option value='22'>DDR4 2GB</option>
                                    <option value='23'>DDR4 3GB</option>
                                    <option value='24'>DDR4 4GB</option>
                                    <option value='25'>DDR4 5GB</option>
                                    <option value='26'>DDR4 6GB</option>
                                    <option value='27'>DDR4 8GB</option>
                                    <option value='28'>DDR4 9GB</option>
                                    <option value='29'>DDR4 10GB</option>
                                    <option value='30'>DDR4 12GB</option>
                                    <option value='31'>DDR4 16GB</option>
                                    <option value='32'>DDR4 17GB</option>
                                    <option value='33'>DDR4 18GB</option>
                                    <option value='34'>DDR4 20GB</option>
                                    <option value='35'>DDR4 24GB</option>
                                    <option value='36'>DDR4 32GB</option>
                                </select>
                        </div>

                        {/* LISTA DISCO */}
                        <div className="form-group col-2" required>
                            <label htlmfor="">Disco</label>
                                <select onChange={(event)=>setIddisco(event.target.value)} className='form-control'>
                                    <option>Seleccionar ...</option>
                                    <option value='1'>HDD 320GB</option>
                                    <option value='2'>HDD 500GB</option>
                                    <option value='3'>HDD 1TB</option>
                                    <option value='4'>HDD 2TB</option>
                                    <option value='5'>SSD 120GB</option>
                                    <option value='6'>SSD 240GB</option>
                                    <option value='7'>SSD 256GB</option>
                                    <option value='8'>NVMe 128GB</option>
                                    <option value='9'>NVMe 256GB</option>
                                    <option value='10'>NVMe 240GB</option>
                                </select>
                        </div>
                        
                        {/* LISTA PLACAS MADRES */}
                        <div className="form-group col-3" required>
                            <label htlmfor="">Palca Madre</label>
                                <select onChange={(event)=>setIdplaca_madre(event.target.value)} className='form-control'>
                                    <option>Seleccionar ...</option>
                                    <option value='1'>ASUS-Prime A320M-K</option>
                                    <option value='2'>Gigabyte-H410M H V5</option>
                                    <option value='3'>Gigabyte-GA-H110M-H</option>
                                    <option value='4'>Gigabyte-GA-F2A55M-S1</option>
                                    <option value='5'>ASRock-FM2A55M-VG3+</option>
                                    <option value='6'>MSI-PRO H410M-B</option>
                                    <option value='7'>Gigabyte-H510M H</option>
                                </select>
                        </div>

                        {/* LISTA FUENTE */}
                        <div className="form-group col-2">
                            <label htlmfor="">Fuente de Energía</label>
                                <select onChange={(event)=>setIdfuente(event.target.value)} className='form-control'>
                                    <option>Seleccionar ...</option>
                                    <option value='1'>300W</option>
                                    <option value='2'>330W</option>
                                    <option value='3'>400W</option>
                                    <option value='4'>450W</option>
                                    <option value='5'>500W</option>
                                    <option value='6'>550W</option>
                                    <option value='7'>600W</option>
                                </select>
                        </div>

                        <div><br></br></div>
                        <div>SISTEMA OPERATIVO-OBS</div>
                        {/* LISTA SO */}
                        <div className="form-group col-1">
                            <label htlmfor="">Sist. Oper.</label>
                                <select onChange={(event)=>setIdso(event.target.value)} className='form-control'>
                                    <option>Seleccionar ...</option>
                                    <option value='1'>WIN 7</option>
                                    <option value='2'>WIN 10</option>
                                    <option value='3'>WIN 11</option>
                                    <option value='4'>WIN XP</option>
                                </select>
                        </div>

                        {/* INGRESAR MODELO */}
                        <div className="form-group col-2">
                            <label htlmfor="">Modelo</label>
                            <input 
                                type="number" min="2000" max="2050" step="1"
                                value={ modelo } 
                                onChange={(event)=>setModelo(event.target.value)}
                                name="" id="" className="form-control" placeholder="2010" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">&nbsp;</small>
                        </div>

                        {/* INGRESAR OBSERVACIONES */}
                        <div className="form-group col-9">
                            <label htlmfor="">Observaciones</label>
                            <input 
                                type="text"
                                value={ observaciones } 
                                onChange={(event)=>setObservaciones(event.target.value)}
                                name="" id="" className="form-control" placeholder="obs" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">&nbsp;</small>
                        </div>

                        <div><br></br></div>
                        <div>DATOS</div>

                        {/* INGRESAR INGRESAR CODIGO INVENTARIO */}
                        <div className="form-group col-3">
                            <label htlmfor="">Cod. Inventario</label>
                            <input 
                                type="text"
                                value={ cod_inventario } 
                                onChange={(event)=>setCod_inventario(event.target.value)}
                                name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">&nbsp;</small>
                        </div>

                        {/* INGRESAR LINK DEL REPORTE */}
                        <div className="form-group col-3">
                            <label htlmfor="">Reporte</label>
                            <input 
                                type="text"
                                value={ reporte } 
                                onChange={(event)=>setReporte(event.target.value)}
                                name="" id="" className="form-control" placeholder="link" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">&nbsp;</small>
                        </div>


                    </div>
                    <div className="row">
                        <div className='col-3 mt-3'>
                            <button  type="submit" className="btn btn-success">Guardar</button>
                            <Link to={'/listardispositivo'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                        </div>
                    </div>
                </form>
            </div>
            
            <div className="card-footer text-muted">
                INVENTARIO 1.0 - CREACION DE DISPOSITIVO
            </div>
        </div>
    )
}