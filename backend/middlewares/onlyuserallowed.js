async function onlyAdminAllowed(req, res, next) {
  let users = req.app.get('users')
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

          //comprobar si el usuario sigue existiendo en la base datos
          let foundUser = users.find((user) => {
              return user.id === decodedToken._id && user.enabled
          })

          if (!foundUser) {
              res.status(403).json({ success: false, message: 'El usuario autenticado ya no está en el sistema' })
              return
          }

          //que su perfil es el adecuado para la acción que ha solictado
          if (decodedToken.profile !== 'user') {
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
