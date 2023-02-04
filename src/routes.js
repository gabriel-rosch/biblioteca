const { Router } = require('express')
const routes = Router();
const clientController = require('./modules/Cliente/ClienteControler')
const livroController = require('./modules/Livro/LivroControler')


routes.get('/',(req,res)=>{
    return res.json("Server Up")
})

routes.get('/cliente',clientController.get)
routes.post('/cliente',clientController.create)

routes.get('/livro',livroController.get)
routes.post('/livro',livroController.create)
routes.post('/livro/:id',livroController.putIsAlterado)

module.exports = {routes}