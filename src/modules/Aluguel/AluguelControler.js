const moment = require('moment')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function create(req,res) {
    const aluguel = await prisma.aluguel.create({
        data: req.body
    })
    res.json(aluguel)
}

async function get(req,res) {
    res.json(await prisma.aluguel.findMany({
        include: {
            Livro: true,
            Cliente: true
        }
    }))
}

async function put(req,res) {
    let {data,dataDevolucao} = req.body;    
    
    let dias = moment(dataDevolucao).diff(data, 'days') 
    
    req.body.valorArrecadado = parseFloat(dias) * parseFloat(req.body.valorDiaria) 

    delete req.body.valorDiaria

    const aluguel = await prisma.aluguel.update({
        data: req.body,
        where: {
            id: req.body.id,
        }
    })

    return res.json(aluguel)
}



module.exports = {create, get, put}