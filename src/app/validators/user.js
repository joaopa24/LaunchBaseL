const User = require('../models/User')

function post(req,res,next){
      //check if has all fields
      const keys = Object.keys(req.body)
         
      for (key of keys) {
          if (req.body[key] == "") {
              return res.send("porfavor preencha todos os campos")
          }
      }
      //check if user exists[email, cpf_cnpj]
      let { email, cpf_cnpj, password, passwordRepeat } = req.body

      cpf_cnpj = cpf_cnpj.replace(/\D/g,"")
      
      const user = await User.findOne({
          where:{email},
          or:{cpf_cnpj}
      })

      if(user) return res.send('Users Exists')
      //check if passwords match

      if(password != passwordRepeat) return res.send('Passwords dont match')

      next()
}