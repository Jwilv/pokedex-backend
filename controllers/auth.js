const {response} = require('express')

const loginUser = (req, res = response) => {
res.json({
    ok:true,
    msg:'user log'
})
}

const createUser = (req, res = response) => {
    res.json({
        ok:true,
        msg:'user create'
    })
}

const renewToken = (req, res = response)=>{
res.json({
    ok:true,
    msg:'renew token'
})
}


module.exports = {
    loginUser,
    createUser,
    renewToken,
}