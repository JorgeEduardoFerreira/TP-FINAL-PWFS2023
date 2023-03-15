//DIRECCION DE NUESTRO SERVIDOR BACKEND NODE.JS
const API_URL ='http://localhost:3333'


////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////SERVICIOS USUARIOS///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


//SERVICIO DE CONSULTA DE USUARIOS
export async function getUsuarios(){
  const token = JSON.parse(localStorage.getItem('token'));
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
    try{
        const response = await fetch(`${API_URL}/usuario`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('El error es', error);
    }
}


//SERVICIO DE CONSULTA DE USUARIOS ACTIVOS
export async function getUsuariosact(){
  const token = JSON.parse(localStorage.getItem('token'));
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
    try{
        const response = await fetch(`${API_URL}/usuarioact`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('El error es', error);
    }
}


//SERVICIO DE CONSULTA DE USUARIOS POR ID
export async function getUsuariosById(){
    const token = JSON.parse(localStorage.getItem('token')); //extraigo el token del local storage
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, //incluyo el token en la cabecera 
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/usuario/${idusuario}`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('El error es', error);
    }
}

//SERVICIO DE REGISTRAR USUARIO
export async function Registro(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    try{
        const response = await fetch(`${API_URL}/usuario/crearaus`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){
        // console.log('no funciona')
    }
}

//SERVICIO DE BAJA DEL USUARIO
export async function BajaUsuario(idusuario){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,

        }
    };
    try{
        const response = await fetch(`${API_URL}/usuario/bajaus/${idusuario}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

//SERVICIO DE ALTA DEL USUARIO
export async function AltaUsuario(idusuario){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    };
    try{
        const response = await fetch(`${API_URL}/usuario/altaus/${idusuario}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

//SERVICIO DE EDITAR DEL USUARIO
export async function updateUsuario(idusuario){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    };
    try{
        const response = await fetch(`${API_URL}/usuario/updateus/${idusuario}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

//Servicio de Logueo del usuario
export async function Login(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/login`, requestOptions)
    const data = await response.json();
    // console.log(data)
    return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////SERVICIOS ASIGANCIONES///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//Servicio para listar asignaciones
export async function getAsignaciondt() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    };
    try {
      const response = await fetch(`${API_URL}/asignaciondt`, requestOptions);
      const data = await response.json(); // Await la respuesta de la promesa
      return data;
    } catch(error) {
      console.log('El Error es', error);
    }
  }

//Servicio para listar asignaciones ACTIVAS
export async function getAsignaciondtact() {
  const token = JSON.parse(localStorage.getItem('token'));
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
  try {
    const response = await fetch(`${API_URL}/asignaciondtact`, requestOptions);
    const data = await response.json(); // Await la respuesta de la promesa
    return data;
  } catch(error) {
    console.log('El Error es', error);
  }
}

//Servicio para dar de ALTA asignaciones
export async function AltaAsignacion(idasignacion) {
  const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    };
    try {
      const response = await fetch(`${API_URL}/asignacion/altaasig/${idasignacion}`, requestOptions);
      const data = await response.json(); // Await la respuesta de la promesa
      console.log(data)
      return data;
    } catch(error) {
      console.log('El Error es', error);
    }
  }

//Servicio para dar de BAJA asignaciones
export async function BajaAsigancion(idasignacion) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }

    };
    try {
      const response = await fetch(`${API_URL}/asignacion/bajaasig/${idasignacion}`, requestOptions);
      const data = await response.json(); // Await la respuesta de la promesa
      return data;
    } catch(error) {
      console.log('El Error es', error);
    }
  }



////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////SERVICIOS DISPOSITIVO///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


//SERVICIO DE CONSULTA DE DISPOSITIVOS
export async function getDispositivos(){
  const token = JSON.parse(localStorage.getItem('token'));
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
    try{
        const response = await fetch(`${API_URL}/dispositivodt`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('El error es', error);
    }
}

//SERVICIO DE BAJA DEL DISPOSITIVO
export async function BajaDispositivo(iddispositivo){
  const token = JSON.parse(localStorage.getItem('token'));
  const requestOptions={
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`

      }
  };
  try{
      const response = await fetch(`${API_URL}/dispositivo/bajadisp/${iddispositivo}`, requestOptions)
      const data = await response.json();
      console.log(data)
      return data;
  } catch(error){

      alert('No se puede conectar con el servidor')
  }
}

//SERVICIO DE ALTA DEL DISPOSITIVO
export async function AltaDispositivo(iddispositivo){
  const token = JSON.parse(localStorage.getItem('token'));
  const requestOptions={
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
      }
  };
  try{
      const response = await fetch(`${API_URL}/dispositivo/altadisp/${iddispositivo}`, requestOptions)
      const data = await response.json();
      console.log(data)
      return data;
  } catch(error){

      alert('No se puede conectar con el servidor')
  }
}

//SERVICIO PARA CREAR UN DISPOSITIVO
export async function GuardarDispositivo(datosdispositivo){
  const token = JSON.parse(localStorage.getItem('token'));
  const requestOptions={
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(datosdispositivo)
  };
  try{
      const response = await fetch(`${API_URL}/dispositivo/creardisp`, requestOptions)
      const data = await response.json();
      console.log(data)
      return data;
  } catch(error){

      alert('No se puede conectar con el servidor')
  }
}









////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////SERVICIOS PERSONAL///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


//SERVICIO DE CONSULTA DE personal Activo
export async function getPersonales(){
  const token = JSON.parse(localStorage.getItem('token'));
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
    try{
        const response = await fetch(`${API_URL}/personaldt`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('El error es', error);
    }
}

//SERVICIO DE BAJA DEL PERSONAL
export async function BajaPersonal(idpersonal){
  const token = JSON.parse(localStorage.getItem('token'));
  const requestOptions={
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,

      }
  };
  try{
      const response = await fetch(`${API_URL}/personal/bajaper/${idpersonal}`, requestOptions)
      const data = await response.json();
      console.log(data)
      return data;
  } catch(e){

      alert('No se puede conectar con el servidor')
  }
}

//SERVICIO DE ALTA DEL PERSONAL
export async function AltaPersonal(idpersonal){
  const token = JSON.parse(localStorage.getItem('token'));
  const requestOptions={
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,

      }
  };
  try{
      const response = await fetch(`${API_URL}/personal/altaper/${idpersonal}`, requestOptions)
      const data = await response.json();
      console.log(data)
      return data;
  } catch(e){

      alert('No se puede conectar con el servidor')
  }
}










