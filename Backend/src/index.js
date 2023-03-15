const express = require ('express');
const app = express();
app.use(express.json());
const morgan = require ('morgan');
const cors = require('cors');
app.use(cors());


//configuro el puerto donde correr el servidor
app.set('port', process.env.PORT || 3333 );

//middlewares
app.use(morgan('dev'));

//CORS
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//arranco el servidor NODE.js
app.listen (app.get('port'), ()=>{
    console.log ('El servidor se esta ejecutando en el puerto '+app.get('port'))
});

//direccion de las rutas de los endpoints
app.use(require('./router/router'));