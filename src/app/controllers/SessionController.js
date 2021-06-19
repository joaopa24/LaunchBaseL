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
         // token para esse usúario

         // criar uma expiração do token

         // enviar um email com um link de recuperação

         // avisar o usuário que enviamos o email
     }

}
