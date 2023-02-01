const express = require('express');
const app = express();

require('dotenv').config();

//Directorio publico
app.use(express.static(__dirname + '/public'));

//lectura del body
app.use(express.json());

//Rutas
app.use('/auth',require('./routes/authRouter'))

app.listen(process.env.PORT,()=>{
console.log(`server corriendo en el puerto ${process.env.PORT}`);
})