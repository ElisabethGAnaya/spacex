


async function onlyAdminAllowed(req, res, next) {
    const PASSWORD = process.env.TOKEN_PASSWORD
    let users = req.app.get('users')
    let token = req.token

    console.info(req.token)
    console.info(token===undefined)

    if (token === undefined) {
        return res.status(403).json({
            success: false,
            message: 'Debes estar autenticado para usar este servicio.'
        });
    }
    console.info("hello")
    if(token !== undefined) {
        try {
            let decodedToken = await jwt.verify(req.token, PASSWORD)
            console.info(decodedToken)
            //comprobar si el usuario sigue existiendo en la base datos
            let foundUser = users.find((user) => {
                return user.id === decodedToken._id
            })

            if (!foundUser) {
                res.status(403).json({ success: false, message: 'El usuario autenticado ya no está en el sistema' })
                return
            }

            //que su perfil es el adecuado para la acción que ha solictado
            if (decodedToken.profile !== 'admin') {
                res.status(403).json({ success: false, message: 'Debes ser administrador para poder crear elementos.' })
                return
            }

            next()

        } catch (e) {
            res.status(403).json({ status: false, message: 'No hemos podido comprobar las credenciales, autentícate nuevamente.' })
            return
        }
    }
}


module.exports = onlyAdminAllowed
