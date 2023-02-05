//Rutas
//auth
// hostname + /auth

const {Router} = require('express');
const router = Router();
const {check} = require('express-validator')
const { loginUser, createUser, renewToken } = require('../controllers/auth')
const {validateFields} = require('../middlewares/validate-fields');
const { validateJwt } = require('../middlewares/validate-jwt');

router.post('/login',[
check('password','la password debe ser de minimo 6 caracteres').isLength({min:6}),
check('email','debe ser un email').isEmail(),
validateFields
],loginUser);

router.post('/register',[
    check('name','debe ser un name').notEmpty(),
    check('email','debe ser un email').isEmail(),
    check('password','la password debe ser de minimo 6 caracteres').isLength({min:6}),
    validateFields
    ],createUser);

router.get('/renew',validateJwt,renewToken)

module.exports = router;