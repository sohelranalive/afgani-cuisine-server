const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

const data = { name: 'Sohel', age: 23 }

app.use(cors())

app.get('/', (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})