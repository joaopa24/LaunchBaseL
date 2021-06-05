module.exports = {
    loginForm(req,res){
       return res.render("session/login")
    },
    login(req,res){
       //verificar se o usuario está cadastrado
       req.session.userId = req.user.id
       
       return res.redirect("/users")
       //verificar se o password bate

       //depois colocar o usuário no req.session
    },
    logout(req,res){
        req.session.destroy()
        return res.redirect("/")
    }
}
