// MERN

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/api/register', async (req, res) => {
    console.log(req.body)
    res.json({ status: 'ok' })
} )

app.get('/hello', (req, res) => {
    res.send("----------------hello world skg------------------")
} )

app.listen(1337, () => {
    console.log('------------------Server started on 1337------------------')
})