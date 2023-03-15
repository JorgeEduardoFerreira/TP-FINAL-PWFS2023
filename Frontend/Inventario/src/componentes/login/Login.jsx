import { useState } from "react"
import { Link } from "react-router-dom"
import * as API from '../../servicios/servicios'

export function Login(){
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [mensajeError, setmensajeError] = useState('');

    const enviarForm  = async (event)=>{
        event.preventDefault();
        const user = await API.Login({nickname, password})
        if(user.status){
            // console.log(user.token);
             window.localStorage.setItem('nickname', JSON.stringify(user));
             window.localStorage.setItem('token', JSON.stringify(user.token));
            setNickname('')
            setPassword('')
            window.location.reload(true)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 3000)
        }
    }

    return(
     <div className="container">
            <br></br>
            <div className="card text-center text-bg-secondary mb-3">
            <h1>INVENTARIO 1.0</h1>
            
            <center>
                <img src="/etechsinfondo.png" width="160" height="150"></img>
            </center>
            </div>
        

        <div className="form-signin w-100 m-auto">
        <form onSubmit={enviarForm}>
                <h1 className="h3 text-center mb-3 fw-normal">Ingresar sus datos</h1>
                {
                    mensajeError?
                    <div className="alert alert-danger" role="alert">
                     {mensajeError}
                    </div>:''
                }
                
                <div className="form-floating">
                
                <input 
                type="text" required
                className="form-control" 
                id="floatingInput" 
                placeholder="Nickname/Usuario"
                value={nickname}
                onChange={(event)=>setNickname(event.target.value)}
                />
                <label htmlFor="floatingInput">Nickname/Usuario</label>
                </div>
                <div className="form-floating">
                
                <input 
                type="password" required
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)} />
                <label htmlFor="floatingPassword">Password/Contraseña</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                <Link to={'/registro'}>
                    Registro
                </Link>
        </form>
        </div>
        
     </div>
    )
}