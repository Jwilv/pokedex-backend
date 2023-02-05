const {response} = require('express')
const jwt = require('jsonwebtoken')


const validateJwt = (req, res = response, next)=>{
//x-token del header
const token = req.header('x-token')
//si no hay tira error
if(!token){
    res.status(401).json({
        ok:false,
        msg:'no hay token en la peticion'
    })
}


try {
    //extraemos el uid y el name y verificamos el token
    const {uid, name} = jwt.verify(
        token,
        process.env.SECRET_JWT_SEED,
    )
    //subimos el uid y el name a req
    req.uid = uid;
    req.name = name;
} catch (error) {
    return res.status().json({
        ok:false,
        msg:'token no valido'
    })
}


next();

}

module.exports = {
    validateJwt
}