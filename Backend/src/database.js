const mysql = require('mysql');

const mysqlConexion  =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'tp-final-inventario'
});

mysqlConexion.connect(function(err){
    if(err){
        console.log ("La conexion a la base de datos FALLO. Error", err)
        return;
    }else{
        console.log ("La conexion a la base de datos fue exitosa")
    }
});

module.exports = mysqlConexion;