const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function create(req,res) {
    const livro = await prisma.livro.create({
        data: req.body
    })
    res.json(livro)
}

async function get(req,res) {
    res.json(await prisma.livro.findMany())
}


async function putIsAlterado(req,res) {
    const livro = await prisma.livro.findUnique({
        where: {
            id:parseInt(req.params.id) 
        }
    })
     
    livro.isAlugado = !livro.isAlugado

    const livroUpdate = await prisma.livro.update({
        data:livro,
        where: {
            id: livro.id
        }
    })

    res.json(livroUpdate)
}



module.exports = {create, get, putIsAlterado}