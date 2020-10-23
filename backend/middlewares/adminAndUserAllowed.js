const jwt = require('jsonwebtoken')
const User = require('../models/users')

module.exports = async(req, res, next) => {
    let token = req.token

    if (token === undefined) {
        return res.status(403).json({
            success: false,
            message: 'Debes estar autenticado para usar este servicio.'
        });
    }

    if (token) {
        try {
            let decodedToken = await jwt.verify(req.token, process.env.PASSPHRASE)

            //metemos la info del token decodificada para los middlewares que vengan a continuación
            req.user = decodedToken

            //comprobar si el usuario sigue existiendo en la base datos
            let foundUser = await User.findOne({ _id: decodedToken._id, enabled: true }).exec()

            if (!foundUser) {
                res.status(403).json({ success: false, message: 'El usuario autenticado ya no está en el sistema' })
                return
            }

            //que su perfil es el adecuado para la acción que ha solictado
            if (decodedToken.profile !== 'admin' && decodedToken.profile !== 'user') {
                res.status(403).json({ success: false, message: 'Debes ser administrador o usuario para poder crear elementos.' })
                return
            }

            next()

        } catch (e) {
            res.status(403).json({ status: false, message: 'No hemos podido comprobar las credenciales, autentícate nuevamente.' })
            return
        }
    }
}
