const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/generateJwt');

const loginUser = (req, res = response) => {

}

const createUser = async(req, res = response) => {
    try {

        const { email, password } = req.body;

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'el email que ingreso ya esta en uso'
            })
        }
        //se crea un user con la info
        user = new User(req.body);

        //se incrypta la password para luego asignarla al user
        //para luego guardarlo en la base de datos
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt)

        await user.save()

        const token = await generateJwt(user.id, user.name)

        return res.status(201).json({
            ok:true,
            user,
            token
        })


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