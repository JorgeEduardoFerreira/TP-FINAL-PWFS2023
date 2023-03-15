const { Router, query } = require('express');
const express = require ('express');
const router = express();
// libreria que utilizamos para la encriptar los password
const bcrypt= require('bcrypt');
// libreria que utilizamos para la generacion de los token
const jwt= require('jsonwebtoken');


// Archivo de Conexion a la base de datos
const mysqlConexion = require('../database');

/////Endpoints/////

//Pantalla de inicio
router.get('/', (req, res)=>{
    res.send('BIENVENIDOS AL SISTEMA DE GESTION DE INVENTARIO');
});


////////////////////////////////////////////////
//////////ENDPOINT SECCION ASIGNACIONES///////// 
////////////////////////////////////////////////

//Endpoint asignaciones. Devuelve todos los asignaciones de los equipos
router.get('/asignacion', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            mysqlConexion.query('select * from asignacion order by idasignacion', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
    //     }
    // })
});

//Endpoint asignaciones. Devuelve todos las asignaciones DETALLADAS de los equipos
router.get('/asignaciondt',verificarToken, (req, res)=>{
    jwt.verify(req.token, 'queperno', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConexion.query('select * from asignaciones order by idasignacion, apellido', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        }
    })
});

//Endpoint asignaciones. Devuelve todos las asignaciones ACTIVAS DETALLADAS de los equipos
router.get('/asignaciondtact',verificarToken, (req, res)=>{
    jwt.verify(req.token, 'queperno', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConexion.query('select * from asignaciones where estado=1 order by idasignacion, apellido ', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        }
    })
});

//Endpoint para listar una asignacion identificando por su id
router.get('/asignacion/:idasignacion',verificarToken, (req, res)=>{
    jwt.verify(req.token, 'queperno', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const  { idasignacion } = req.params;
            mysqlConexion.query('select * from asignacion where idasignacion=?',[idasignacion], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        }
    })
});

//Endpoint para listar una asignacion DETALLADA identificando por su id
router.get('/asignaciondt/:idasignacion', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { idasignacion } = req.params;
            mysqlConexion.query('select * from asignaciones where idasignacion=?',[idasignacion], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});



//Endpoint Insertar Asignación.
router.post('/asignacion/crearasig', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const { idpersonal, iddispositivo, fecha_asignacion } = req.body
            let query=`INSERT INTO asignacion (idpersonal, iddispositivo, fecha_asignacion) VALUES ('${idpersonal}','${iddispositivo}','${fecha_asignacion}')`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se cargo la asignación correctamente');
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
        //  }
    // })
    
});


//Endpoint para dar de BAJA una Asignacion identificando por su id
router.put('/asignacion/bajaasig/:idasignacion', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'queperno', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            let idasignacion  = req.params.idasignacion; // asigna a asignacion el valor que recibe por el parametro 
            let query=`UPDATE asignacion SET estado=0 WHERE idasignacion='${idasignacion}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"La asignacion se dio de BAJA correctamente"
                    });
                }else{
                    console.log(err)
                }
            })
         }
     })
});


//Endpoint para dar de ALTA una Asignacion identificando por su id
router.put('/asignacion/altaasig/:idasignacion', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'queperno', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            let ideasignacion  = req.params.idasignacion; // asigna a idsucursal el valor que recibe por el parametro 
            let query=`UPDATE asignacion SET estado=1 WHERE idasignacion='${ideasignacion}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"La asignacion se dio de ALTA correctamente"
                    });
                }else{
                    console.log(err)
                }
            })
         }
     })            
});


/////////////////////////////////////////////////
////////////ENDPOINT SECCION SUCURSAL////////////
/////////////////////////////////////////////////

//Endpoint para listar las sucursales
router.get('/sucursal', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from sucursal order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar una sucursal identificando por su id
router.get('/sucursal/:idsucursal', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { idsucursal } = req.params;
            mysqlConexion.query('select * from sucursal where idsucursal=?',[idsucursal], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para crear una sucursal
router.post('/sucursal/crearsuc', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                const { nom_sucursal } = req.body

                let query=`INSERT INTO sucursal (nom_sucursal) VALUES ('${nom_sucursal}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente la sucursal :' +nom_sucursal
                            });
                            console.log('Se agregó correctamente la sucursal  : '+nom_sucursal);
                    }else{
                        if(err.code=='ER_DUP_ENTRY'){
                            res.send('Ya existe la sucursal con el nombre ' +nom_sucursal+' '+err);
                            console.log('Ya existe la sucursal con el nombre ' +nom_sucursal+' '+err);
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    }
                })
            // }
    // })
});

//Endpoint para Actualizar modificar una sucursal
router.put('/sucursal/updatesuc/:idsucursal', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idsucursal = req.params.idsucursal; //asigna a idsucursal el valor que recibe por el parametro en la ruta
            let nombre_nuevo_sucursal = req.body.nom_sucursal  //asigna a nombre_nuevo_sucursal el valor que recibe en el Body.nom_sucursal
            let query=`UPDATE sucursal SET nom_sucursal='${nombre_nuevo_sucursal}' WHERE idsucursal='${idsucursal}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'La sucursal: '+idsucursal+' cambió su nombre a : '+nombre_nuevo_sucursal
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
    //      };
    //  }
});

//Endpoint para dar de BAJA a la sucursal identificando por su id
router.put('/sucursal/bajasuc/:idsucursal', (req, res)=>{
    //  jwt.verify(req.token, 'queperno', (error, valido)=>{
    //      if(error){
    //          res.sendStatus(403);
    //      }else{
            let idsucursal  = req.params.idsucursal; // asigna a idsucursal el valor que recibe por el parametro 
            let query=`UPDATE sucursal SET estado=0 WHERE idsucursal='${idsucursal}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"La sucursal se dio de BAJA correctamente"
                    });
                }else{
                    console.log(err)
                }
            })
    //      }
    //  })
});


//Endpoint para dar de ALTA a la sucursal identificando por su id
router.put('/sucursal/altasuc/:idsucursal', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idsucursal  = req.params.idsucursal; // asigna a idsucursal el valor que recibe por el parametro 
            let query=`UPDATE sucursal SET estado=1 WHERE idsucursal='${idsucursal}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"La sucursal se dio de ALTA correctamente"
                    });
                }else{
                    console.log(err)
                }
            })
    //      }
    //  })            
});


/////////////////////////////////////////////////
////////////ENDPOINT SECCION DIVISION////////////
/////////////////////////////////////////////////

//Endpoint para listar las DIVISIONES
router.get('/division', (req, res)=>{
    //jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            mysqlConexion.query('select * from division order by estado DESC', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
            })
    //      }
    // })
});


//Endpoint para listar una DIVISION identificando por su id
router.get('/division/:iddivision', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { iddivision } = req.params;
            mysqlConexion.query('select * from division where iddivision=?',[iddivision], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para crear una DIVISION
router.post('/division/creardiv', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                const { nom_division } = req.body

                let query=`INSERT INTO division (nom_division) VALUES ('${nom_division}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente la división :' +nom_division
                            });
                            console.log('Se agregó correctamente la división  : '+nom_division);
                    }else{
                        if(err.code=='ER_DUP_ENTRY'){
                            res.send('Ya existe la división con el nombre ' +nom_division+' '+err);
                            console.log('Ya existe la división con el nombre ' +nom_division+' '+err);
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    }
                })
            // }
    // })
});

//Endpoint para Actualizar modificar una DIVISION
router.put('/division/updatediv/:iddivision', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let iddivision = req.params.iddivision; //asigna a iddivision el valor que recibe por el parametro en la ruta
            let nombre_nuevo_division = req.body.nom_division  //asigna a nombre_nuevo_division el valor que recibe en el Body.nom_division
            let query=`UPDATE division SET nom_division ='${nombre_nuevo_division}' WHERE iddivision='${iddivision}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'La división : '+iddivision+' cambió su nombre a : '+nombre_nuevo_division
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
        //  };
     // }
});

//Endpoint para dar de BAJA a la DIVISIÓN identificando por su id
router.put('/division/bajadiv/:iddivision', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                let iddivision  = req.params.iddivision; // asigna a iddivision el valor que recibe por el parametro 
                let query=`UPDATE division SET estado=0 WHERE iddivision='${iddivision}'`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:"La división se dio de BAJA correctamente"
                        });
                    }else{
                        console.log(err)
                    }
                })
            //  };
    //  }
});


//Endpoint para dar de ALTA a la DIVISION identificando por su id
router.put('/division/altadiv/:iddivision', (req, res)=>{
    //jwt.verify(req.token, 'queperno', (error, valido)=>{
    //  if(error){
    //      res.sendStatus(403);
    //  }else{
        let iddivision  = req.params.iddivision; // asigna a iddivision el valor que recibe por el parametro 
        let query=`UPDATE division SET estado=1 WHERE iddivision='${iddivision}'`;
        mysqlConexion.query(query, (err, registros)=>{
            if(!err){
                res.json({
                    status: true,
                    mensaje:"La división se dio de ALTA correctamente"
                });
            }else{
                console.log(err)
            }
        })
    //  }
    //}) 
});



/////////////////////////////////////////////////
//////////////ENDPOINT SECCION AREA//////////////
/////////////////////////////////////////////////

//Endpoint para listar las Areas
router.get('/area', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from area order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar un Area identificando por su id
router.get('/area/:idarea', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { idarea } = req.params;
            mysqlConexion.query('select * from area where idarea=?',[idarea], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para crear un Area
router.post('/area/crearar', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                const { nom_area } = req.body

                let query=`INSERT INTO area (nom_area) VALUES ('${nom_area}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente el area :' +nom_area
                            });
                            console.log('Se agregó correctamente el area  : '+nom_area);
                    }else{
                        if(err.code=='ER_DUP_ENTRY'){
                            res.send('Ya existe el area con el nombre ' +nom_area+' '+err);
                            console.log('Ya existe el area con el nombre ' +nom_area+' '+err);
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    }
                })
            // }
    // })
});

//Endpoint para Actualizar modificar un Area
router.put('/area/updatear/:idarea', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idarea = req.params.idarea; //asigna a idarea el valor que recibe por el parametro en la ruta
            let nombre_nuevo_area = req.body.nom_area //asigna a nombre_nuevo_area el valor que recibe en el Body.nom_area
            let query=`UPDATE area SET nom_area ='${nombre_nuevo_area}' WHERE idarea='${idarea}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'El Area : '+idarea+' cambió su nombre a : '+nombre_nuevo_area
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
        //  };
     // }
});

//Endpoint para dar de BAJA a el Area identificando por su id
router.put('/area/bajaar/:idarea', (req, res)=>{
    //jwt.verify(req.token, 'queperno', (error, valido)=>{
    //  if(error){
    //      res.sendStatus(403);
    //  }else{
        let idarea  = req.params.idarea; // asigna a idarea el valor que recibe por el parametro 
        let query=`UPDATE area SET estado=0 WHERE idarea='${idarea}'`;
        mysqlConexion.query(query, (err, registros)=>{
            if(!err){
                res.json({
                    status: true,
                    mensaje:'El Area: ' +idarea+' se dio de BAJA correctamente'
                });
            }else{
                console.log(err)
            }
        })
    //  }
    //}) 
});


//Endpoint para dar de ALTA a el Area identificando por su id
router.put('/area/altaar/:idarea', (req, res)=>{
    //jwt.verify(req.token, 'queperno', (error, valido)=>{
    //  if(error){
    //      res.sendStatus(403);
    //  }else{
        let idarea  = req.params.idarea; // asigna a idarea el valor que recibe por el parametro 
        let query=`UPDATE area SET estado=1 WHERE idarea='${idarea}'`;
        mysqlConexion.query(query, (err, registros)=>{
            if(!err){
                res.json({
                    status: true,
                    mensaje:'El Area: ' +idarea+ ' se dio de ALTA correctamente'
                });
            }else{
                console.log(err)
            }
        })
    //  }
    //}) 
});



/////////////////////////////////////////////////
////////////ENDPOINT SECCION EMPRESA/////////////
/////////////////////////////////////////////////

//Endpoint para listar las EMPRESAS
router.get('/empresa', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from empresa order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar una EMPRESA identificando por su id
router.get('/empresa/:idempresa', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { idempresa } = req.params;
            mysqlConexion.query('select * from empresa where idempresa=?',[idempresa], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para crear una EMPRESA
router.post('/empresa/crearemp', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                const { nom_empresa,dir_empresa,tel1,tel2} = req.body

                let query=`INSERT INTO empresa (nom_empresa,dir_empresa,tel1,tel2) VALUES ('${nom_empresa}','${dir_empresa}','${tel1}','${tel2}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente la Empresa :' +nom_empresa
                            });
                            console.log('Se agregó correctamente la Empresa : '+nom_empresa);
                    }else{
                        if(err.code=='ER_DUP_ENTRY'){
                            res.send('Ya existe la Empresa con el nombre ' +nom_empresa+' '+err);
                            console.log('Ya existe la Empresa con el nombre ' +nom_empresa+' '+err);
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    }
                })
            // }
    // })
});

//Endpoint para Actualizar modificar una EMPRESA
router.put('/empresa/updateemp/:idempresa', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idempresa = req.params.idempresa; //asigna a idempresa el valor que recibe por el parametro en la ruta
            const {nom_empresa,dir_empresa,tel1,tel2} = req.body //asigna a la constante el contenido del json que recibe en el Body
            let query=`UPDATE empresa SET nom_empresa='${nom_empresa}',dir_empresa='${dir_empresa}',tel1='${tel1}',tel2='${tel2}' WHERE idempresa='${idempresa}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'La Empresa : '+idempresa+' '+nom_empresa+' fue actualizada'
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
        //  };
     // }
});

//Endpoint para dar de BAJA a una EMPRESA identificando por su id
router.put('/empresa/bajaemp/:idempresa', (req, res)=>{
    //jwt.verify(req.token, 'queperno', (error, valido)=>{
    //  if(error){
    //      res.sendStatus(403);
    //  }else{
        let idempresa  = req.params.idempresa; // asigna a idempresa el valor que recibe por el parametro 
        let query=`UPDATE empresa SET estado=0 WHERE idempresa='${idempresa}'`;
        mysqlConexion.query(query, (err, registros)=>{
            if(!err){
                res.json({
                    status: true,
                    mensaje:'La Empresa: ' +idempresa+' se dio de BAJA correctamente'
                });
            }else{
                console.log(err)
            }
        })
    //  }
    //}) 
});


//Endpoint para dar de ALTA a una EMPRESA identificando por su id
router.put('/empresa/altaemp/:idempresa', (req, res)=>{
    //jwt.verify(req.token, 'queperno', (error, valido)=>{
    //  if(error){
    //      res.sendStatus(403);
    //  }else{
        let idempresa  = req.params.idempresa; // asigna a idempresa el valor que recibe por el parametro 
        let query=`UPDATE empresa SET estado=1 WHERE idempresa='${idempresa}'`;
        mysqlConexion.query(query, (err, registros)=>{
            if(!err){
                res.json({
                    status: true,
                    mensaje:'La Empresa: ' +idempresa+ ' se dio de ALTA correctamente'
                });
            }else{
                console.log(err)
            }
        })
    //  }
    //})     
});


/////////////////////////////////////////////////
////////////ENDPOINT SECCION EQUIPO /////////////
/////////////////////////////////////////////////

//Endpoint para listar los Equipos
router.get('/equipo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from equipo order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar un Equipo identificando por su id
router.get('/equipo/:idequipo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { idequipo } = req.params;
            mysqlConexion.query('select * from equipo where idequipo=?',[idequipo], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para crear un Equipo
router.post('/equipo/creareq', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                const { nom_equipo } = req.body

                let query=`INSERT INTO equipo (nom_equipo) VALUES ('${nom_equipo}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente el equipo :' +nom_equipo
                            });
                            console.log('Se agregó correctamente el equipo  : '+nom_equipo);
                    }else{
                        if(err.code=='ER_DUP_ENTRY'){
                            res.send('Ya existe el equipo con el nombre ' +nom_equipo+' '+err);
                            console.log('Ya existe el equipo con el nombre ' +nom_equipo+' '+err);
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    }
                })
            // }
    // })
});

//Endpoint para Actualizar modificar un Equipo
router.put('/equipo/updateeq/:idequipo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idequipo = req.params.idequipo; //asigna a idequipo el valor que recibe por el parametro en la ruta
            let nombre_nuevo_equipo = req.body.nom_equipo //asigna a nombre_nuevo_equipo el valor que recibe en el Body.nom_area
            let query=`UPDATE equipo SET nom_equipo ='${nombre_nuevo_equipo}' WHERE idequipo='${idequipo}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'El Equipo : '+idequipo+' cambió su nombre a : '+nombre_nuevo_equipo
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
        //  };
     // }
});

//Endpoint para dar de BAJA a el Equipo identificando por su id
router.put('/equipo/bajaeq/:idequipo', (req, res)=>{
    //jwt.verify(req.token, 'queperno', (error, valido)=>{
    //  if(error){
    //      res.sendStatus(403);
    //  }else{
        let idequipo  = req.params.idequipo; // asigna a idequipo el valor que recibe por el parametro 
        let query=`UPDATE equipo SET estado=0 WHERE idequipo='${idequipo}'`;
        mysqlConexion.query(query, (err, registros)=>{
            if(!err){
                res.json({
                    status: true,
                    mensaje:'El equipo: ' +idequipo+' se dio de BAJA correctamente'
                });
            }else{
                console.log(err)
            }
        })
    //  }
    //})     
});


//Endpoint para dar de ALTA a el Equipo identificando por su id
router.put('/equipo/altaeq/:idequipo', (req, res)=>{
    //jwt.verify(req.token, 'queperno', (error, valido)=>{
    //  if(error){
    //      res.sendStatus(403);
    //  }else{
        let idequipo  = req.params.idequipo; // asigna a idequipo el valor que recibe por el parametro 
        let query=`UPDATE equipo SET estado=1 WHERE idequipo='${idequipo}'`;
        mysqlConexion.query(query, (err, registros)=>{
            if(!err){
                res.json({
                    status: true,
                    mensaje:'El equipo: ' +idequipo+ ' se dio de ALTA correctamente'
                });
            }else{
                console.log(err)
            }
        })
    //  }
    //})     
});




/////////////////////////////////////////////////
////////////ENDPOINT SECCION PUESTO /////////////
/////////////////////////////////////////////////

//Endpoint para listar los puestos
router.get('/puesto', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from puesto order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar un puesto identificando por su id
router.get('/puesto/:idpuesto', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { idpuesto } = req.params;
            mysqlConexion.query('select * from puesto where idpuesto=?',[idpuesto], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
                })
        // }
    // })
});

//Endpoint para crear un puesto
router.post('/puesto/crearpu', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                const { nom_puesto } = req.body

                let query=`INSERT INTO puesto (nom_puesto) VALUES ('${nom_puesto}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente el puesto :' +nom_puesto
                            });
                            console.log('Se agregó correctamente el puesto  : '+nom_puesto);
                    }else{
                        if(err.code=='ER_DUP_ENTRY'){
                            res.send('Ya existe el puesto con el nombre ' +nom_puesto+' '+err);
                            console.log('Ya existe el puesto con el nombre ' +nom_puesto+' '+err);
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    }
                })
            // }
    // })
});

//Endpoint para Actualizar modificar un puesto
router.put('/puesto/updatepu/:idpuesto', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idpuesto = req.params.idpuesto; //asigna a idpuesto el valor que recibe por el parametro en la ruta
            let nombre_nuevo_puesto = req.body.nom_puesto //asigna a nombre_nuevo_puesto el valor que recibe en el Body.nom_area
            let query=`UPDATE puesto SET nom_puesto ='${nombre_nuevo_puesto}' WHERE idpuesto='${idpuesto}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'El puesto : '+idpuesto+' cambió su nombre a : '+nombre_nuevo_puesto
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
        //  };
     // }
});

//Endpoint para dar de BAJA a el puesto identificando por su id
router.put('/puesto/bajapu/:idpuesto', (req, res)=>{
    //jwt.verify(req.token, 'queperno', (error, valido)=>{
    //  if(error){
    //      res.sendStatus(403);
    //  }else{
        let idpuesto  = req.params.idpuesto; // asigna a idpuesto el valor que recibe por el parametro 
        let query=`UPDATE puesto SET estado=0 WHERE idpuesto='${idpuesto}'`;
        mysqlConexion.query(query, (err, registros)=>{
            if(!err){
                res.json({
                    status: true,
                    mensaje:'El puesto: ' +idpuesto+' se dio de BAJA correctamente'
                });
            }else{
                console.log(err)
            }
        })
    //  }
    //})    
});


//Endpoint para dar de ALTA a el puesto identificando por su id
router.put('/puesto/altapu/:idpuesto', (req, res)=>{
    //jwt.verify(req.token, 'queperno', (error, valido)=>{
    //  if(error){
    //      res.sendStatus(403);
    //  }else{
        let idpuesto  = req.params.idpuesto; // asigna a idpuesto el valor que recibe por el parametro 
        let query=`UPDATE puesto SET estado=1 WHERE idpuesto='${idpuesto}'`;
        mysqlConexion.query(query, (err, registros)=>{
            if(!err){
                res.json({
                    status: true,
                    mensaje:'El puesto: ' +idpuesto+ ' se dio de ALTA correctamente'
                });
            }else{
                console.log(err)
            }
        })
    //  }
    //})     
});



/////////////////////////////////////////////////
////////////ENDPOINT SECCION SECTOR /////////////
/////////////////////////////////////////////////

//Endpoint para listar los SECTORES
router.get('/sector', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from sector order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar un SECTOR identificando por su id
router.get('/sector/:idsector', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { idsector } = req.params;
            mysqlConexion.query('select * from sector where idsector=?',[idsector], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para crear un puesto
router.post('/sector/crearsec', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                const { nom_sector } = req.body

                let query=`INSERT INTO sector (nom_sector) VALUES ('${nom_sector}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente el sector :' +nom_sector
                            });
                            console.log('Se agregó correctamente el sector  : '+nom_sector);
                    }else{
                        if(err.code=='ER_DUP_ENTRY'){
                            res.send('Ya existe el sector con el nombre ' +nom_sector+' '+err);
                            console.log('Ya existe el sector con el nombre ' +nom_sector+' '+err);
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    }
                })
            // }
    // })
});

//Endpoint para Actualizar modificar un SECTOR
router.put('/sector/updatesec/:idsector', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idsector = req.params.idsector; //asigna a idsector el valor que recibe por el parametro en la ruta
            let nombre_nuevo_sector = req.body.nom_sector //asigna a nombre_nuevo_sector el valor que recibe en el Body.nom_area
            let query=`UPDATE sector SET nom_sector ='${nombre_nuevo_sector}' WHERE idsector='${idsector}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'El sector : '+idsector+' cambió su nombre a : '+nombre_nuevo_sector
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
        //  };
     // }
});

//Endpoint para dar de BAJA a el SECTOR identificando por su id
router.put('/sector/bajasec/:idsector', (req, res)=>{
    //jwt.verify(req.token, 'queperno', (error, valido)=>{
    //  if(error){
    //      res.sendStatus(403);
    //  }else{
        let idsector  = req.params.idsector; // asigna a idsector el valor que recibe por el parametro 
        let query=`UPDATE sector SET estado=0 WHERE idsector='${idsector}'`;
        mysqlConexion.query(query, (err, registros)=>{
            if(!err){
                res.json({
                    status: true,
                    mensaje:'El sector: ' +idsector+' se dio de BAJA correctamente'
                });
            }else{
                console.log(err)
            }
        })
    //  }
    //})     
});


//Endpoint para dar de ALTA a el SECTOR identificando por su id
router.put('/sector/altasec/:idsector', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idsector  = req.params.idsector; // asigna a idsector el valor que recibe por el parametro 
            let query=`UPDATE sector SET estado=1 WHERE idsector='${idsector}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El sector: ' +idsector+ ' se dio de ALTA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // })
});

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////
////////ENDPOINT SECCION TIPO DISPOSITIVO////////
/////////////////////////////////////////////////

//Endpoint para listar los Tipos de Dispositivos
router.get('/tdispositivo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from tipo_dispositivo order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar un Tipo de Dispositivo identificando por su id
router.get('/tdispositivo/:idtipo_dispositivo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { idtipo_dispositivo } = req.params;
            mysqlConexion.query('select * from tipo_dispositivo where idtipo_dispositivo=?',[idtipo_dispositivo], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para crear un Tipo de Dispositivo
router.post('/tdispositivo/creartd', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                const { tipo_dispositivo,nom_tipo_dispositivo} = req.body
                let query=`INSERT INTO tipo_dispositivo (tipo_dispositivo,nom_tipo_dispositivo) VALUES ('${tipo_dispositivo}','${nom_tipo_dispositivo}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente el tipo de dispositivo :' +tipo_dispositivo
                            });
                            console.log('Se agregó correctamente el tipo de dispositivo : '+tipo_dispositivo);
                    }else{
                        if(err.code=='ER_DUP_ENTRY'){
                            res.send('Ya existe el tipo de dispositivo con el nombre ' +tipo_dispositivo+' '+err);
                            console.log('Ya existe el tipo de dispositivo con el nombre ' +tipo_dispositivo+' '+err);
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    }
                })
            // }
    // })
});

//Endpoint para Actualizar modificar un tipo de dispositivo
router.put('/tdispositivo/updatetd/:idtipo_dispositivo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idtipo_dispositivo = req.params.idtipo_dispositivo; //asigna a idtipo_dispositivo el valor que recibe por el parametro en la ruta
            const {tipo_dispositivo,nom_tipo_dispositivo} = req.body //asigna a la constante el contenido del json que recibe en el Body
            let query=`UPDATE tipo_dispositivo SET tipo_dispositivo='${tipo_dispositivo}',nom_tipo_dispositivo='${nom_tipo_dispositivo}' WHERE idtipo_dispositivo='${idtipo_dispositivo}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'El Tipo de Dispositivo : '+idtipo_dispositivo+' '+tipo_dispositivo+' fue actualizado'
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
        //  };
     // }
});

//Endpoint para dar de BAJA a un Tipo de Dispositvio identificando por su id
router.put('/tdispositivo/bajatd/:idtipo_dispositivo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idtipo_dispositivo  = req.params.idtipo_dispositivo; // asigna a idtipo_dispositivo el valor que recibe por el parametro 
            let query=`UPDATE tipo_dispositivo SET estado=0 WHERE idtipo_dispositivo='${idtipo_dispositivo}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El Tipo de dispositivo: ' +idtipo_dispositivo+' se dio de BAJA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // }) 
});


//Endpoint para dar de ALTA a un Tipo de Dispositivo identificando por su id
router.put('/tdispositivo/altatd/:idtipo_dispositivo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  


            let idtipo_dispositivo  = req.params.idtipo_dispositivo; // asigna a idtipo_dispositivo el valor que recibe por el parametro 
            let query=`UPDATE tipo_dispositivo SET estado=1 WHERE idtipo_dispositivo='${idtipo_dispositivo}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El Tipo de dispositivo: ' +idtipo_dispositivo+ ' se dio de ALTA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // })     
});


/////////////////////////////////////////////////
///////////ENDPOINT SECCION PLACA MADRE//////////
/////////////////////////////////////////////////

//Endpoint para listar las PLACAS MADRES
router.get('/plmadre', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            mysqlConexion.query('select * from placa_madre order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});



//Endpoint para listar las PLACAS MADRES DETALLADAS
router.get('/plmadredt', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            mysqlConexion.query('select * from detalle_placa order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});

//Endpoint para listar una PLACA MADRE identificando por su id
router.get('/plmadre/:idplaca_madre', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const  {idplaca_madre} = req.params;
            mysqlConexion.query('select * from placa_madre where idplaca_madre=?',[idplaca_madre], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});


//Endpoint para listar una PLACA MADRE DETALLADA identificando por su id
router.get('/plmadredt/:idplaca_madre', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const  {idplaca_madre} = req.params;
            mysqlConexion.query('select * from detalle_placa where idplaca_madre=?',[idplaca_madre], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});


//Endpoint para crear una PLACA MADRE
router.post('/plmadre/crearplm', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const { idmarca, modelo_placa } = req.body
            let query=`INSERT INTO placa_madre (idmarca, modelo_placa) VALUES ('${idmarca}','${modelo_placa}')`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'Se agregó correctamente la placa madre:' +modelo_placa
                        });
                        console.log('Se agregó correctamente la placa madre : '+modelo_placa);
                }else{
                    if(err.code=='ER_DUP_ENTRY'){
                        res.send('Ya existe la placa madre con el modelo ' +modelo_placa+' '+err);
                        console.log('Ya existe la placa madre con el modelo ' +modelo_placa+' '+err);
                    }else{
                        console.log(err)
                        res.send('El error es: '+err);
                    }
                }
            })
    //   }
    // })
});

//Endpoint para Actualizar modificar una PLACA MADRE
router.put('/plmadre/updateplm/:idplaca_madre', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idplaca_madre = req.params.idplaca_madre; //asigna a idplaca_madre el valor que recibe por el parametro en la ruta
            const {idmarca,modelo_placa} = req.body //asigna a la constante el contenido del json que recibe en el Body
            let query=`UPDATE placa_madre SET idmarca='${idmarca}',modelo_placa='${modelo_placa}' WHERE idplaca_madre='${idplaca_madre}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'La placa Madre : '+idplaca_madre+' '+modelo_placa+' fue actualizada'
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
    //     };
    //  }
});

//Endpoint para dar de BAJA a una PLACA MADRE identificando por su id
router.put('/plmadre/bajaplm/:idplaca_madre', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idplaca_madre  = req.params.idplaca_madre; // asigna a idplaca_madre el valor que recibe por el parametro 
            let query=`UPDATE placa_madre SET estado=0 WHERE idplaca_madre='${idplaca_madre}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'La placa madre: ' +idplaca_madre+' se dio de BAJA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // }) 
});


//Endpoint para dar de ALTA a una PALACA MADRE identificando por su id
router.put('/plmadre/altaplm/:idplaca_madre', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idplaca_madre  = req.params.idplaca_madre; // asigna a idplaca_madre el valor que recibe por el parametro 
            let query=`UPDATE placa_madre SET estado=1 WHERE idplaca_madre='${idplaca_madre}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'La placa madre: ' +idplaca_madre+ ' se dio de ALTA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // })     
});



/////////////////////////////////////////////////
//////////////ENDPOINT SECCION MARCA/////////////
/////////////////////////////////////////////////

//Endpoint para listar las marcas
router.get('/marca', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            mysqlConexion.query('select * from marca order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});


//Endpoint para listar marcas identificando por su id
router.get('/marca/:idmarca', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const  { idmarca } = req.params;
            mysqlConexion.query('select * from marca where idmarca=?',[idmarca], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});

//Endpoint para crear una marca
router.post('/marca/crearmar', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const { nom_marca } = req.body
            let query=`INSERT INTO marca ( nom_marca) VALUES ('${nom_marca}')`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'Se agregó correctamente la Marca :' +nom_marca
                        });
                        console.log('Se agregó correctamente la Marca : '+nom_marca);
                }else{
                    if(err.code=='ER_DUP_ENTRY'){
                        res.send('Ya existe la Marca con el nombre ' +nom_marca+' '+err);
                        console.log('Ya existe la Marca con el nombre ' +nom_marca+' '+err);
                    }else{
                        console.log(err)
                        res.send('El error es: '+err);
                    }
                }
            })
    //   }
    // })
});

//Endpoint para Actualizar modificar una Marca
router.put('/marca/updatemar/:idmarca', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idmarca = req.params.idmarca; //asigna a idmarca el valor que recibe por el parametro en la ruta
            const {nom_marca} = req.body //asigna a la constante el contenido del json que recibe en el Body
            let query=`UPDATE marca SET nom_marca='${nom_marca}'WHERE idmarca='${idmarca}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'La  Marca : '+idmarca+' fue actualizada'
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
    //     };
    //  }
});

//Endpoint para dar de BAJA a una Marca identificando por su id
router.put('/marca/bajamar/:idmarca', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idmarca  = req.params.idmarca; // asigna a idmarca el valor que recibe por el parametro 
            let query=`UPDATE marca SET estado=0 WHERE idmarca='${idmarca}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'La Marca: ' +idmarca+' se dio de BAJA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // }) 
});


//Endpoint para dar de ALTA a una Marca identificando por su id
router.put('/marca/altamar/:idmarca', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idmarca  = req.params.idmarca; // asigna a idmarca el valor que recibe por el parametro 
            let query=`UPDATE marca SET estado=1 WHERE idmarca='${idmarca}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'La Marca: ' +idmarca+ ' se dio de ALTA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // })     
});


/////////////////////////////////////////////////
///////////ENDPOINT SECCION PROCESADOR///////////
/////////////////////////////////////////////////

//Endpoint para listar las Procesadores
router.get('/procesador', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            mysqlConexion.query('select * from procesador order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});

//Endpoint para listar las Procesadores DETALLADOS
router.get('/procesadordt', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            mysqlConexion.query('select * from detalle_procesador order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});


//Endpoint para listar un Procesador identificando por su id
router.get('/procesador/:idprocesador', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const  {idprocesador} = req.params;
            mysqlConexion.query('select * from procesador where idprocesador=?',[idprocesador], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});

//Endpoint para listar un Procesador DETALLADO identificando por su id
router.get('/procesadordt/:idprocesador', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const  {idprocesador} = req.params;
            mysqlConexion.query('select * from detalle_procesador where idprocesador=?',[idprocesador], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});

//Endpoint para crear un Procesador
router.post('/procesador/crearpro', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const { idmarca, desc_procesador } = req.body
            let query=`INSERT INTO procesador (idmarca, desc_procesador) VALUES ('${idmarca}','${desc_procesador}')`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'Se agregó correctamente el procesador: ' +desc_procesador
                        });
                        console.log('Se agregó correctamente el procesador : '+desc_procesador);
                }else{
                    if(err.code=='ER_DUP_ENTRY'){
                        res.send('Ya existe el procesador con el modelo ' +desc_procesador+' '+err);
                        console.log('Ya existe el procesador con el modelo ' +desc_procesador+' '+err);
                    }else{
                        console.log(err)
                        res.send('El error es: '+err);
                    }
                }
            })
    //   }
    // })
});

//Endpoint para Actualizar modificar un Procesador
router.put('/procesador/updatepro/:idprocesador', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idprocesador = req.params.idprocesador; //asigna a idprocesador el valor que recibe por el parametro en la ruta
            const {idmarca,desc_procesador} = req.body //asigna a la constante el contenido del json que recibe en el Body
            let query=`UPDATE procesador SET idmarca='${idmarca}',desc_procesador='${desc_procesador}' WHERE idprocesador='${idprocesador}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'El procesador : '+idprocesador+' '+desc_procesador+' fue actualizada'
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
    //     };
    //  }
});

//Endpoint para dar de BAJA a un Procesador identificando por su id
router.put('/procesador/bajapro/:idprocesador', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idprocesador  = req.params.idprocesador; // asigna a idprocesador el valor que recibe por el parametro 
            let query=`UPDATE procesador SET estado=0 WHERE idprocesador='${idprocesador}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El procesador: ' +idprocesador+' se dio de BAJA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // }) 
});


//Endpoint para dar de ALTA a un Procesador identificando por su id
router.put('/procesador/altapro/:idprocesador', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idprocesador  = req.params.idprocesador; // asigna a idprocesador el valor que recibe por el parametro 
            let query=`UPDATE procesador SET estado=1 WHERE idprocesador='${idprocesador}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El procesador: ' +idprocesador+ ' se dio de ALTA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // })     
});


/////////////////////////////////////////////////
////////ENDPOINT SECCION SISTEMA OPERATIVO///////
/////////////////////////////////////////////////

//Endpoint para listar los SISTEMAS OPERATIVOS
router.get('/so', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            mysqlConexion.query('select * from so order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});


//Endpoint para listar un SISTEMA OPERATIVO identificando por su id
router.get('/so/:idso', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const  { idso } = req.params;
            mysqlConexion.query('select * from so marca where idso=?',[idso], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});

//Endpoint para crear un SISTEMA OPERATIVO
router.post('/so/crearso', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const { version } = req.body
            let query=`INSERT INTO so (version) VALUES ('${version}')`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'Se agregó correctamente un SISTEMA OPERATIVO : ' +version
                        });
                        console.log('Se agregó correctamente un SISTEMA OPERATIVO : '+version);
                }else{
                    if(err.code=='ER_DUP_ENTRY'){
                        res.send('Ya existe un SISTEMA OPERATIVO con el nombre ' +version+' '+err);
                        console.log('Ya existe un SISTEMA OPERATIVO con el nombre ' +version+' '+err);
                    }else{
                        console.log(err)
                        res.send('El error es: '+err);
                    }
                }
            })
    //   }
    // })
});

//Endpoint para Actualizar modificar un SISTEMA OPERATIVO
router.put('/so/updateso/:idso', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idso = req.params.idso; //asigna a idso el valor que recibe por el parametro en la ruta
            const { version } = req.body //asigna a la constante el contenido del json que recibe en el Body
            let query=`UPDATE so SET version='${version}' WHERE idso='${idso}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'El SISTEMA OPERATIVO : '+idso+' fue actualizado'
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
    //     };
    //  }
});

//Endpoint para dar de BAJA a un SISTEMA OPERATIVO identificando por su id
router.put('/so/bajaso/:idso', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idso  = req.params.idso; // asigna a idso el valor que recibe por el parametro 
            let query=`UPDATE so SET estado=0 WHERE idso='${idso}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El SISTEMA OPERATIVO: ' +idso+' se dio de BAJA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // }) 
});


//Endpoint para dar de ALTA a un SISTEMA OPERATIVO identificando por su id
router.put('/so/altaso/:idso', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idso  = req.params.idso; // asigna a idso el valor que recibe por el parametro 
            let query=`UPDATE so SET estado=1 WHERE idso='${idso}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El SISTEMA OPERATIVO: ' +idso+ ' se dio de ALTA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // })     
});



/////////////////////////////////////////////////
//////////ENDPOINT SECCION MEMORIA RAM///////////
/////////////////////////////////////////////////

//Endpoint para listar las Memorias Ram
router.get('/ram', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from ram order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar una Memoiria Ram identificando por su id
router.get('/ram/:idram', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { idram } = req.params;
            mysqlConexion.query('select * from ram where idram=?',[idram], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para crear una Memoria Ram
router.post('/ram/crearram', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                const { tipo_ram,rtamaño,rtipo_tamaño} = req.body
                let query=`INSERT INTO ram (tipo_ram, rtamaño, rtipo_tamaño) VALUES ('${tipo_ram}','${rtamaño}','${rtipo_tamaño}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente la Memoria Ram :' +tipo_ram+' - '+rtamaño+' '+rtipo_tamaño
                            });
                            console.log('Se agregó correctamente la Memoria Ram :' +tipo_ram+' - '+rtamaño+' '+rtipo_tamaño);
                    }else{
                        if(err.code=='ER_DUP_ENTRY'){
                            res.send('Ya existe la Memoria Ram con el nombre ' +tipo_ram+' - '+rtamaño+' '+rtipo_tamaño+' '+err);
                            console.log('Ya existe la Memoria Ram con el nombre ' +tipo_ram+' - '+rtamaño+' '+rtipo_tamaño+' '+err);
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    }
                })
            // }
    // })
});

//Endpoint para Actualizar modificar una Memoria Ram
router.put('/ram/updateram/:idram', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idram = req.params.idram; //asigna a idram el valor que recibe por el parametro en la ruta
            const {tipo_ram,rtamaño,rtipo_tamaño} = req.body //asigna a la constante el contenido del json que recibe en el Body
            let query=`UPDATE ram SET tipo_ram='${tipo_ram}',rtamaño='${rtamaño}',rtipo_tamaño='${rtipo_tamaño} WHERE idram='${idram}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'La Memoria Ram :' +tipo_ram+' - '+rtamaño+' '+rtipo_tamaño+' fue actualizada'
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
        //  };
     // }
});

//Endpoint para dar de BAJA a una Memoria Ram identificando por su id
router.put('/ram/bajaram/:idram', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idram  = req.params.idram; // asigna a idram el valor que recibe por el parametro 
            let query=`UPDATE ram SET estado=0 WHERE idram='${idram}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'La Memoria Ram: ' +idram+' se dio de BAJA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // }) 
});


//Endpoint para dar de ALTA a una Memoria Ram identificando por su id
router.put('/ram/altaram/:idram', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idram  = req.params.idram; // asigna a idram el valor que recibe por el parametro 
            let query=`UPDATE ram SET estado=1 WHERE idram='${idram}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'La Memoria Ram: ' +idram+ ' se dio de ALTA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // })     
});



/////////////////////////////////////////////////
////////////ENDPOINT SECCION FUENTE//////////////
/////////////////////////////////////////////////

//Endpoint para listar las FUENTES
router.get('/fuente', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            mysqlConexion.query('select * from fuente order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});


//Endpoint para listar una FUENTE identificando por su id
router.get('/fuente/:idfuente', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const  { idfuente } = req.params;
            mysqlConexion.query('select * from fuente marca where idfuente=?',[idfuente], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
    //   }
    // })
});

//Endpoint para crear un FUENTE
router.post('/fuente/crearfu', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //   if(error){
    //       res.sendStatus(403);
    //   }else{
            const { potencia } = req.body
            let query=`INSERT INTO fuente (potencia) VALUES ('${potencia}')`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'Se agregó correctamente una FUENTE : ' +potencia
                        });
                        console.log('Se agregó correctamente una FUENTE : '+potencia);
                }else{
                    if(err.code=='ER_DUP_ENTRY'){
                        res.send('Ya existe una FUENTE con la potencia ' +potencia+' '+err);
                        console.log('Ya existe una FUENTE con la potencia ' +potencia+' '+err);
                    }else{
                        console.log(err)
                        res.send('El error es: '+err);
                    }
                }
            })
    //   }
    // })
});

//Endpoint para Actualizar modificar una FUENTE
router.put('/fuente/updatefu/:idfuente', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idfuente = req.params.idfuente; //asigna a idfuente el valor que recibe por el parametro en la ruta
            const { potencia } = req.body //asigna a la constante el contenido del json que recibe en el Body
            let query=`UPDATE fuente SET potencia='${potencia}' WHERE idfuente='${idfuente}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'La FUENTE : '+idfuente+' fue actualizado'
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
    //     };
    //  }
});

//Endpoint para dar de BAJA a una FUENTE identificando por su id
router.put('/fuente/bajafu/:idfuente', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idfuente  = req.params.idfuente; // asigna a idfuente el valor que recibe por el parametro 
            let query=`UPDATE fuente SET estado=0 WHERE idfuente='${idfuente}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'La FUENTE: ' +idfuente+' se dio de BAJA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // }) 
});


//Endpoint para dar de ALTA a una FUENTE identificando por su id
router.put('/fuente/altafu/:idfuente', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idfuente  = req.params.idfuente; // asigna a idfuente el valor que recibe por el parametro 
            let query=`UPDATE fuente SET estado=1 WHERE idfuente='${idfuente}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'La FUENTE : ' +idfuente+ ' se dio de ALTA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // })     
});



/////////////////////////////////////////////////
/////////////ENDPOINT SECCION DISCO//////////////
/////////////////////////////////////////////////

//Endpoint para listar los Discos
router.get('/disco', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from disco order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar un Disco identificando por su id
router.get('/disco/:iddisco', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { iddisco } = req.params;
            mysqlConexion.query('select * from disco where iddisco=?',[iddisco], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para crear un Disco
router.post('/disco/creardisc', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                const { tipo_disco,dtamaño,dtipo_tamaño} = req.body
                let query=`INSERT INTO disco (tipo_disco,dtamaño,dtipo_tamaño) VALUES ('${tipo_disco}','${dtamaño}','${dtipo_tamaño}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente el Disco :' +tipo_disco+' - '+dtamaño+' '+dtipo_tamaño
                            });
                            console.log('Se agregó correctamente el Disco :' +tipo_disco+' - '+dtamaño+' '+dtipo_tamaño);
                    }else{
                        if(err.code=='ER_DUP_ENTRY'){
                            res.send('Ya existe el Disco con el nombre ' +tipo_disco+' - '+dtamaño+' '+dtipo_tamaño+' '+err);
                            console.log('Ya existe la Memoria Ram con el nombre ' +tipo_disco+' - '+dtamaño+' '+dtipo_tamaño+' '+err);
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    }
                })
            // }
    // })
});

//Endpoint para Actualizar modificar un Disco
router.put('/disco/updatedisc/:iddisco', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let iddisco = req.params.iddisco; //asigna a iddisco el valor que recibe por el parametro en la ruta
            const {tipo_disco,dtamaño,dtipo_tamaño} = req.body //asigna a la constante el contenido del json que recibe en el Body
            let query=`UPDATE disco SET tipo_disco='${tipo_disco}',dtamaño='${dtamaño}',dtipo_tamaño='${dtipo_tamaño}' WHERE iddisco='${iddisco}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'El Disco :' +tipo_disco+' - '+dtamaño+' '+dtipo_tamaño+' fue actualizado'
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
        //  };
     // }
});

//Endpoint para dar de BAJA a un Disco identificando por su id
router.put('/disco/bajadisc/:iddisco', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let iddisco  = req.params.iddisco; // asigna a iddisco el valor que recibe por el parametro 
            let query=`UPDATE disco SET estado=0 WHERE iddisco='${iddisco}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El Disco: ' +iddisco+' se dio de BAJA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // }) 
});


//Endpoint para dar de ALTA a un Disco identificando por su id
router.put('/disco/altadisc/:iddisco', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let iddisco  = req.params.iddisco; // asigna a iddisco el valor que recibe por el parametro 
            let query=`UPDATE disco SET estado=1 WHERE iddisco='${iddisco}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El Disco: ' +iddisco+ ' se dio de ALTA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // })     
});



//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////
///////////ENDPOINT SECCION PERSONAL/////////////
/////////////////////////////////////////////////

//Endpoint para listar el PERSONAL
router.get('/personal', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from personal order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para listar el PERSONAL DETALLADO
router.get('/personaldt', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from detallepersonal order by estado DESC', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar un PERSONAL identificando por su id
router.get('/personal/:idpersonal', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { idpersonal } = req.params;
            mysqlConexion.query('select * from personal where idpersonal=?',[idpersonal], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para listar un PERSONAL DETALLADO identificando por su id
router.get('/personaldt/:idpersonal', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { idpersonal } = req.params;
            mysqlConexion.query('select * from detallepersonal where idpersonal=?',[idpersonal], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para crear un PERSONAL
router.post('/personal/crearper', (req, res)=>{
        // jwt.verify(req.token, 'queperno', (error, valido)=>{
            // if(error){
            //     res.sendStatus(403);
            // }else{
                const { num_legajo,nombre,apellido,idpuesto,idsector,idarea,idsucursal,iddivision,idempresa,idequipo} = req.body
                let query=`INSERT INTO personal (num_legajo,nombre,apellido,idpuesto,idsector,idarea,idsucursal,iddivision,idempresa,idequipo)
                                         VALUES ('${num_legajo}','${nombre}','${apellido}','${idpuesto}','${idsector}','${idarea}','${idsucursal}','${iddivision}','${idempresa}','${idequipo}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente la persona :' +apellido+' '+nombre
                            });
                            console.log('Se agregó correctamente la persona :' +apellido+' '+nombre);
                    }else{
                        if(err.code=='ER_DUP_ENTRY'){
                            res.send('Ya existe la persona con el Apellido y Nombre ' +apellido+' - '+nombre+' '+err);
                            console.log('Ya existe la persona con el Apellido y Nombre ' +apellido+' - '+nombre+' '+err);
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    }
                })
            // }
    // })
});

//Endpoint para Actualizar modificar un PERSONAL
router.put('/personal/updateper/:idpersonal', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let idpersonal = req.params.idpersonal; //asigna a idpersonal el valor que recibe por el parametro en la ruta
            const { num_legajo,nombre,apellido,idpuesto,idsector,idarea,idsucursal,iddivision,idempresa,idequipo} = req.body //asigna a la constante el contenido del json que recibe en el Body
            let query=`UPDATE personal SET num_legajo='${num_legajo}',nombre='${nombre}',apellido='${apellido}',idpuesto='${idpuesto}',idsector='${idsector}',idarea='${idarea}',
                        idsucursal='${idsucursal}',iddivision='${iddivision}',idempresa='${idempresa}',idequipo='${idequipo}' WHERE idpersonal='${idpersonal}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'La persona:' +idpersonal+' - '+apellido+' '+nombre+' fue actualizada'
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
        //  };
     // }
});

//Endpoint para dar de BAJA a un PERSONAL identificando por su id
router.put('/personal/bajaper/:idpersonal', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idpersonal  = req.params.idpersonal; // asigna a idpersonal el valor que recibe por el parametro 
            let query=`UPDATE personal SET estado=0 WHERE idpersonal='${idpersonal}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El Personal: ' +idpersonal+' se dio de BAJA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // }) 
});


//Endpoint para dar de ALTA a un PERSONAL identificando por su id
router.put('/personal/altaper/:idpersonal', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{  
            let idpersonal  = req.params.idpersonal; // asigna a iddisco el valor que recibe por el parametro 
            let query=`UPDATE personal SET estado=1 WHERE idpersonal='${idpersonal}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El Personal: ' +idpersonal+ ' se dio de ALTA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
    //     }
    // })     
});



//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////
//////////ENDPOINT SECCION DISPOSITIVO///////////
/////////////////////////////////////////////////

//Endpoint para listar lso Dispositivos
router.get('/dispositivo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from dispositivo order by estado DESC', (err, registro)=>{
                                 //NO pude hacer Funcionar con la Vista detalle Dispositivo :'(
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});

//Endpoint para listar lso Dispositivos DETALLADOS
router.get('/dispositivodt', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            mysqlConexion.query('select * from detalledispositivo order by estado DESC', (err, registro)=>{
                                 //NO pude hacer Funcionar con la Vista detalle Dispositivo :'(
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar un Dispositivo identificando por su id
router.get('/dispositivo/:iddispositivo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { iddispositivo } = req.params;
            mysqlConexion.query('select * from dispositivo where iddispositivo=?',[iddispositivo], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para listar un Dispositivo DETALLADO identificando por su id
router.get('/dispositivodt/:iddispositivo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
        // if(error){
        //     res.sendStatus(403);
        // }else{
            const  { iddispositivo } = req.params;
            mysqlConexion.query('select * from detalledispositivo where iddispositivo=?',[iddispositivo], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        // }
    // })
});


//Endpoint para crear un Dispositivo
router.post('/dispositivo/creardisp', verificarToken, (req, res)=>{
        jwt.verify(req.token, 'queperno', (error, valido)=>{
            if(error){
                res.sendStatus(403);
            }else{
                const { idtipo_dispositivo,idmarca,fecha_compra,idprocesador,idram,iddisco,idplaca_madre,idfuente,idso,modelo,observaciones,cod_inventario,reporte} = req.body
                let query=`INSERT INTO dispositivo (idtipo_dispositivo,idmarca,fecha_compra,idprocesador,idram,iddisco,idplaca_madre,idfuente,idso,modelo,observaciones,cod_inventario,reporte)
                                         VALUES ('${idtipo_dispositivo}','${idmarca}','${fecha_compra}','${idprocesador}','${idram}','${iddisco}','${idplaca_madre}','${idfuente}','${idso}','${modelo}','${observaciones}','${cod_inventario}','${reporte}')`;
                mysqlConexion.query(query, (err, registros)=>{
                    if(!err){
                        res.json({
                            status: true,
                            mensaje:'Se agregó correctamente el dispositivo '
                            });
                        console.log('Se agregó correctamente el dispositivo ');
                    }else{
                        res.json({
                            status: false,
                            mensaje:'Ocurrio un error '+err
                            });
                        console.log(err)
                    }
                })

                
            }
    })
});

//Endpoint para Actualizar modificar un Dispositivo|
router.put('/dispositivo/updatedisp/:iddispositivo', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            let iddispositivo = req.params.iddispositivo; //asigna a iddispositivo el valor que recibe por el parametro en la ruta
            const { idtipo_dispositivo,idmarca,fecha_compra,idprocesador,idram,iddisco,idplaca_madre,idfuente,idso,modelo,observaciones,cod_inventario,reporte} = req.body  //asigna a la constante el contenido del json que recibe en el Body
            let query=`UPDATE dispositivo SET idtipo_dispositivo='${idtipo_dispositivo}',idmarca='${idmarca}',fecha_compra='${fecha_compra}',idprocesador='${idprocesador}',idram='${idram}',iddisco='${iddisco}',
                        idplaca_madre='${idplaca_madre}',idfuente='${idfuente}',idso='${idso}',modelo='${modelo}',observaciones='${observaciones}',cod_inventario='${cod_inventario}',reporte='${reporte}' WHERE iddispositivo='${iddispositivo}'`;
                    mysqlConexion.query(query, (err, registros)=>{
                        if(!err){
                            res.json({
                                status: true,
                                mensaje: 'El Dispositivo:' +iddispositivo+' fue actualizado'
                                });
                        }else{
                            console.log(err)
                            res.send('El error es: '+err);
                        }
                    });   
        //  };
     // }
});

//Endpoint para dar de BAJA a un Dispositivo identificando por su id
router.put('/dispositivo/bajadisp/:iddispositivo', (req, res)=>{
    jwt.verify(req.token, 'queperno', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{  
            let iddispositivo  = req.params.iddispositivo; // asigna a iddispositivo el valor que recibe por el parametro 
            let query=`UPDATE dispositivo SET estado=0 WHERE iddispositivo='${iddispositivo}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El dispositivo: ' +iddispositivo+' se dio de BAJA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
        }
    }) 
});


//Endpoint para dar de ALTA a un Dispositivo identificando por su id
router.put('/dispositivo/altadisp/:iddispositivo', (req, res)=>{
    jwt.verify(req.token, 'queperno', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{  
            let iddispositivo  = req.params.iddispositivo; // asigna a iddispositivo el valor que recibe por el parametro 
            let query=`UPDATE dispositivo SET estado=1 WHERE iddispositivo='${iddispositivo}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:'El dispositivo: ' +iddispositivo+ ' se dio de ALTA correctamente'
                    });
                }else{
                    console.log(err)
                }
            })
        }
    })     
});



////////////////////////////////////////////////
////////////ENDPOINT SECCION USUARIO//////////// 
////////////////////////////////////////////////

//Endpoint Usuario. Devuelve todos los usuario
router.get('/usuario', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'queperno', verificarToken, (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConexion.query('select * from usuario order by idusuario', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        }
    })
});


//Endpoint Usuario. Devuelve todos los usuario ACTIVOS
router.get('/usuarioact', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'queperno', verificarToken, (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConexion.query('select * from usuario where estado=1 order by idusuario', (err, registro)=>{
                if(!err){
                    res.json(registro);
                }else{
                    console.log(err)
                }
            })
        }
    })
});



//Endpoint para listar un usuario identificando por su id
router.get('/usuario/:idusuario', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'queperno', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const  { idusuario } = req.params;
            mysqlConexion.query('select * from usuario where idusuario=?',[idusuario], (err, registros)=>{
                if(!err){
                    res.json(registros);
                }else{
                    console.log(err)
                }
            })
        }
    })
});


//Endpoint crear un usuario
//Dejo el JWT.Verifiy por una idea a futuro
router.post('/usuario/crearaus', (req, res)=>{
    // jwt.verify(req.token, 'queperno', (error, valido)=>{
    //     if(error){
    //         res.sendStatus(403);
    //     }else{
            const { us_nombre, us_apellido, email, password, nickname } = req.body
            let hash = bcrypt.hashSync(password,10)
            let query=`INSERT INTO usuario ( us_nombre, us_apellido, email, password, nickname ) VALUES ('${us_nombre}','${us_apellido}','${email}','${hash}','${nickname}')`;
                    // INSERT INTO log (nickname, movimiento) VALUES ('${nickname}','"Cracion de usuario"')`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status:true,
                        mensaje:('El usuario se creó correctamente.')
                    });
                }else{
                    console.log(err)
                    res.json({
                        status: false,
                        mensaje:"ERROR.La acción no se realizo."
                    });
                }
            })
    //      }
    // })
    
});

//Endpoint actualizar un usuario
router.post('/usuario/updateus', (req, res)=>{
    jwt.verify(req.token, 'queperno', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            let idusuario = req.params.idusuario; //asigna a idusuario el valor que recibe por el parametro en la ruta
            const { us_nombre, us_apellido, email, password, nickname } = req.body
            let query=`update usuario  set us_nombre='${us_nombre}', us_apellido='${us_apellido}', email='${email}', password='${password}', nickname='${nickname}') where idusuario='${idusuario}'`;
                    // `INSERT INTO log (nickname, movimiento) VALUES ('${nickname}','Actualización de usuario')`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.send('El usuario : '+idusuario+' se actualizó correctamente');
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
         }
    })
    
});


//Endpoint para dar de BAJA un usuario identificando por su id
router.put('/usuario/bajaus/:idusuario', verificarToken, (req, res)=>{
     jwt.verify(req.token, 'queperno', (error, valido)=>{
         if(error){
             res.sendStatus(403);
         }else{
            let idusuario  = req.params.idusuario; // asigna a idusuario el valor que recibe por el parametro 
            let query=`UPDATE usuario SET estado=0 WHERE idusuario='${idusuario}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El usuario se dio de BAJA correctamente"
                    });
                }else{
                    res.json({
                    status: false,
                    mensaje:"Ocurrio un error"
                    });
                    console.log(err)
                }
            })
         }
     })
});


//Endpoint para dar de ALTA un usuario identificando por su id
router.put('/usuario/altaus/:idusuario', verificarToken,(req, res)=>{
    jwt.verify(req.token, 'queperno', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            let idusuario  = req.params.idusuario; // asigna a idusuario el valor que recibe por el parametro 
            let query=`UPDATE usuario SET estado=1 WHERE idusuario='${idusuario}'`;
            mysqlConexion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El Usuario se dio de ALTA correctamente"
                    });
                }else{
                    console.log(err)
                }
            })
         }
     })            
});


//Endpoint para LOGUEO del usuario
router.post('/login', (req, res)=>{
    const {nickname, password} =req.body  //Extrae el nombre de usuario(nickname) y la contraseña(password) del json enviado por el formulario 
        //verificar aca si los campos nickname y contraseña estan vacios para reforzar el control en el frontend
        if(nickname!=undefined && password!=undefined){
            mysqlConexion.query('select idusuario, us_nombre, us_apellido, email, password, nickname from usuario where estado=1 AND nickname=?',[nickname], (err, rows)=>{
                if(!err){
                    if(rows.length!=0){
                        const bcryptPassword = bcrypt.compareSync(password, rows[0].password);
                        if(bcryptPassword){
                            jwt.sign({rows}, 'queperno' ,(err, token)=>{
                                res.json(
                                    {
                                        status: true,
                                        datos: rows,
                                        token: token
                                    });    
                            },
                            { expiresIn: '1m' }) 
                        }else{
                            res.json(
                                {
                                    status: false,
                                    mensaje:"La Contraseña es incorrecta"
                                });
                        }
                    }else{
                        res.json(
                            {
                                status: false,
                                mensaje:"El usuario no existe "
                            });
                        
                    }
                }else{
                    res.json(
                        {
                            status: false,
                            mensaje:"Error en el servidor"
                        });
                    
                }
            });
        }else{
            res.json({
                status: false,
                mensaje:"Faltan completar datos"
            });
        }
});


//Endpoint para RESETEAR password del usuario
router.put('/usuario/resetpassword/:idusuario', (req, res)=>{
    // asigna a id_usuario el valor que recibe por el parametro 
     let idusuario  = req.params.idusuario;
    // //asigna el valor que recibe  en el Body 
     const { password } =req.body 
     let hash = bcrypt.hashSync(password,10); 
    //  generamos la query de modificacion del password
     let query=`UPDATE usuarios SET password='${hash}' WHERE idusuario='${idusuario}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('Se cambió el password al usuario ID : '+idusuario+'. Vuela al inicio e inicie sesion nuevamente.');
        }else{
            console.log(err)
        }
    })

    
});


////////////////////////////////////////////////
//////////////////FUNCIONES///////////////////// 
////////////////////////////////////////////////


function verificarToken(req, res, next){
    console.log('controlo lo que llega', req.headers)
    const BearerHeader= req.headers['authorization']
    if(typeof BearerHeader!=='undefined'){
        const bearerToken= BearerHeader.split(" ")[1]
        req.token=bearerToken;
        next();
    }else{
        res.send('Para consultar las apis debe estar autenticado.Gracias');
        console.log('Ocurrio un error')
    }
}

module.exports = router;
