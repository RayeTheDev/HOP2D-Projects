const { default: axios } = require('axios')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const User = [
    {
        name: "Turbold",
        age: '16',
        sex: 'male'
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
app.get('/', (req, res) => {


    res.json(User)
    // res.render("index")
})




const userRouter = require("./routes/users")

app.use('/users', userRouter)

app.listen(8000)    