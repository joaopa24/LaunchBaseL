const crypt = require('crypto')
module.exports = {
    loginForm(req,res){
       return res.render("session/login")
    },
    login(req,res){
       //verificar se o usuario está cadastrado
       req.session.userId = req.user.id
       
       return res.redirect("/users")
    },
    logout(req,res){
        req.session.destroy()
        return res.redirect("/")
    },
    forgotForm(req,res){
        return res.render("session/forgot-password")
     },
     forgot(req, res){
         const user = req.user

         // token para esse usúario
         const token = crypto.randomBytes(20).toString("hex")
         // criar uma expiração do token
         let now = new Date()
         now = now.setHours(now.getHours() + 1)

         await User.update(user.id, {
             reset_token:token,
             reset_token_expires:now
         })
         // enviar um email com um link de recuperação

         // avisar o usuário que enviamos o email
     }

}
