//Rutas
//auth
// hostname + /auth

const {Router} = require('express');
const router = Router();
const {check} = require('express-validator')
const {loginUser,createUser} = require('../controllers/auth')

router.post('/login',[
check('password','la password debe ser de minimo 6 caracteres').isLength({min:6}),
check('email','debe ser un email').isEmail(),

],loginUser);

router.post('/register',[
    check('name','debe ser un name').notEmpty(),
    check('email','debe ser un email').isEmail(),
    check('password','la password debe ser de minimo 6 caracteres').isLength({min:6})
    
    ],createUser);

router.get('/renew')

module.exports = router;