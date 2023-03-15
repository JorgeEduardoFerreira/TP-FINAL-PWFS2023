import { useState } from "react"
import { Link } from "react-router-dom";
import * as API from '../../servicios/servicios'

export function Registro(){
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [us_nombre, setUs_nombre] = useState('');
    const [us_apellido, setUs_apellido] = useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('');
    const [mensajeError, setmensajeError] = useState('');


    const registroForm  = async (event)=>{
        event.preventDefault();
        const user = await API.Registro({us_nombre, us_apellido, email, password, nickname})
        if(user.status){ 
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('');
            }, 4000)
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                window.location.href = '/';;
            }, 1000)
            
            // window.location.reload(true)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('');
            }, 4000)
        }
        
    }
    return(
        <>
        <center><img src="/etechsinfondo.png" className="card" alt="etech logo" width="102" height="100" /></center>
        <div className="container">
        {
            mensajeSuccess?
            <div className="alert alert-success" role="alert">
                {mensajeSuccess}
            </div>:''
        }
        {
            mensajeError?
            <div className="alert alert-danger" role="alert">
                {mensajeError}
            </div>:''
        }
        <div className="card">
            <br></br>
            <div className="card-header">
                Crear Usuario
            </div>
            <div className="card-body">
                <form onSubmit={registroForm}> 
                    <div className="form-group">
                        <label htlmfor="">Nickname</label>
                        <input required
                        type="text" 
                        value={nickname} 
                        className="form-control" 
                        placeholder="Nickname" 
                        onChange={(event)=>setNickname(event.target.value)} />
                        
                        <small id="helpId" className="text-muted">&nbsp;</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Contraseña</label>
                        <input required
                        type="password" 
                        value={password} 
                        className="form-control" 
                        placeholder="Contraseña" 
                        onChange={(event)=>setPassword(event.target.value)} />
                        <small id="helpId" className="text-muted">&nbsp;</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input required
                        type="email" 
                        value={email} 
                        className="form-control" 
                        placeholder="nombre@dominio.com" 
                        onChange={(event)=>setEmail(event.target.value)} />
                        <small id="helpId" className="text-muted">&nbsp;</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Nombre del Usuario</label>
                        <input 
                        type="text" required
                        value={us_nombre} 
                        className="form-control" 
                        placeholder="Nombre del Usuario" 
                        onChange={(event)=>setUs_nombre(event.target.value)} />
                        <small id="helpId" className="text-muted">&nbsp;</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Apellido del Usuario</label>
                        <input 
                        type="text" required
                        value={us_apellido} 
                        className="form-control" 
                        placeholder="Apellido del Usuario" 
                        onChange={(event)=>setUs_apellido(event.target.value)} />
                        <small id="helpId" className="text-muted">&nbsp;</small>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                        <Link to={'/'}><button type="button" className="btn btn-secondary">Volver</button></Link>
                    </div>
                </form>
                
            </div>
            
            <div className="card-footer text-muted">
               INVENTARIO 1.0
            </div>
        </div>
        </div>
        </>
    )
}