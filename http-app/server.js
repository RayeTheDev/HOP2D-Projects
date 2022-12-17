const { default: axios } = require('axios')
const express = require('express'),
        cors = require(cors);
const app = express()

app.set('view engine', 'ejs')

const User = [
    {
        name: "Turbold",
        age: '16',
        sex: 'male',
        playlist: {
            name: "Dulmaa",
            likes: 12,
        }
    },
    {
        name: "Munkhuu",
        age: '16',
        sex: 'male'
    },
    {
        name: "Temuugen",
        age: '16',
        sex: 'male'
    },
    {
        name: "Nasaa",
        age: '17',
        sex: 'male'
    },
]

app.use(cors())
app.get('/', (req, res) => {
    res.json(User)
})




const userRouter = require("./routes/users")

app.use('/users', userRouter)

app.listen(8000)    