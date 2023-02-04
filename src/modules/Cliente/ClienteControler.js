const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function create(req,res) {
    const cliente = await prisma.cliente.create({
        data: req.body
    })
    res.json(cliente)
}

async function get(req,res) {
    res.json(await prisma.cliente.findMany())
}

module.exports = {create, get}