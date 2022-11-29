const express = require('express')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.post('/api/sauces', (req, res, next) => {
    console.log(req.body)
    res.status(201).json({
        message: 'Sauce ajoutée !'
    })
})

app.get('/api/sauces', (req, res, next) => {
    const sauces = [
        {
            _id: '00001',
            userId: '',
            name: 'Samouraï',
            manufacturer: 'Amora',
            description: `La sauce samouraï est une sauce typiquement belge, assez relevée, servie traditionnellement avec des frites. Elle n'est pas, comme son nom pourrait le faire croire, originaire du Japon. Il s'agit d'un mélange de mayonnaise, de ketchup et de sambal ulek ou de harissa.`,
            mainPepper: 'Sambal Ulek',
            imageUrl: '',
            heat: 7,
            likes: 100,
            dislikes: 2,
            usersLiked: ['likes' + 'userId'],
            usersDisliked: ['dislikes' + 'userId']
        }
    ]
    res.status(200).json(sauces)
})

module.exports = app