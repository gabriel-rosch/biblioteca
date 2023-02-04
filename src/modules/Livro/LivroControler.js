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

module.exports = {create, get}