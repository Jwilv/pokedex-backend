const { response } = require('express');
const User = require('../models/User');

const loginUser = (req, res = response) => {

}

const createUser = (req, res = response) => {
    try {

        const { email, password } = req.body;

        let user = User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'el email que ingreso ya esta en uso'
            })
        }

        user = new User(req.body);


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'pongase en contacto con nosotros'
        })
    }
}

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew token'
    })
}


module.exports = {
    loginUser,
    createUser,
    renewToken,
}