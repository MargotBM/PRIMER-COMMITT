var IPADDRESS="192.168.56.1";
var PORT=9095;
var express = require('express');
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-access-token');
   
    next();
}

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);

var server = app.listen(PORT,IPADDRESS);
console.log('Escuchando en '+IPADDRESS+':'+PORT);
/////////////////////////////////////////////////////
app.post('/getLogin', function(req, res){	
	
    var datos=req.param('data');
    datos=JSON.parse(datos);
    var msn={};
    if(datos.usuario==='Margot' && datos.contrasena==='123'){
    	msn.estado=1;
    	msn.mensage="INGRESASTE";
    }else{
    	msn.estado=0;
    	msn.mensage="No resgistrado";
    }
	        
   res.json(msn);
	
});
