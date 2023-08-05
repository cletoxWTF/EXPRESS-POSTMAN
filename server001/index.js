//PARA EL PUERTO
const express=require('express');
const app=express();
const port = 3000;

//SABER EN QUE PUERTO ESTA EJECUTANDOSE
app.get('/server001', (req,res)=>{
    res.send('Bienvenido a mi sitio web');
});

app.listen(port, ()=>{
    console.log('Servidor escuchando en el puerto ' + port);
})


app.get('/server001/gastos', (req,res)=>{
    res.json(
    {
        gasto:'Salud',
        monto:14575.60,
        informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
    }
    );
});
var users ='{';
const morgan =require('morgan');
app.use(morgan('dev'));
//app.use(express.json());

app.get('/server001/about', (req,res)=>{
    res.send('<h1>Acerca de nosotros</h1>');
    function logger(req,res,next){
    console.log('Ruta Recibida '+ req.protocol+'://'+req.get('host')+ req.originalUrl);
    ncleaext();
}
});



// USUARIOS: 678, 550, 13

//PRACTICA
app.put('/server001/gastos/:id', (req,res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Gastos del usuario '+ (req.params.id) +' actualizados');
});

app.delete('/server001/gastos/:id', (req,res)=>{
    res.send('Gastos del usuario '+ (req.params.id) +' borrados');
});

app.get('/server001/usereg', (req,res)=>{
    users+='}';
    res.json(users);
});


//INTRODUCCION A LA PRACTICA
app.post('/server001/calculo', (req,res)=>{
    //console.log(req.body);
    res.send('Cálculo impuesto a la renta');
});
/*
{
    "ci":"1720803418",
    "ingresos":28000,
    "gastos":17000
}
*/
app.post('/server001/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    users+=JSON.stringify(req.body)+',';
    res.send('Usuario nuevo registrado');
    });
app.put('/server001/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Datos del usuario '+ (req.params.id) +' actualizados');
});
app.delete('/server001/usuarios/:id', (req,res)=>{
    res.send('Usuario '+ (req.params.id) +' borrado');
});
   

//PRACTICA 05

function logger(req,res,next){
 console.log('Ruta Recibida '+ req.protocol+'://'+req.get('host')+ req.originalUrl);
 next();
}
