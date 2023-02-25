const { Router } = require('express')
const routes = Router();
const clientController = require('./modules/Cliente/ClienteControler')
const livroController = require('./modules/Livro/LivroControler')
const aluguelController = require('./modules/Aluguel/AluguelControler')


routes.get('/',(req,res)=>{
    return res.json("Server Up")
})

routes.get('/cliente',clientController.get)
routes.post('/cliente',clientController.create)

routes.get('/livro',livroController.get)
routes.post('/livro',livroController.create)
routes.post('/livro/:id',livroController.putIsAlterado)


routes.get('/aluguel',aluguelController.get)
routes.post('/aluguel',aluguelController.create)
routes.put('/aluguel',aluguelController.put)

module.exports = {routes}