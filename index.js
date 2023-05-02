const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


const chefsInfo = require('./data/chefsInfo.json')
const cuisineInfo = require('./data/cuisineInfo.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send(chefsInfo)
})

app.get('/cuisine', (req, res) => {
    res.send(cuisineInfo)
})

app.get('/cuisine/:id', (req, res) => {
    const id = req.params.id;
    const selectedCuisine = cuisineInfo.filter(cuisine => cuisine.chefsId == id)
    res.send(selectedCuisine)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})