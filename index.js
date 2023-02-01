const express = require('express');
const app = express();

require('dotenv').config();

//Directorio publico
app.use(express.static(__dirname + '/public'));

//lectura del body
app.use(express.json());

app.listen(process.env.PORT,()=>{
console.log(`server corriendo en el puerto ${process.env.PORT}`);
})