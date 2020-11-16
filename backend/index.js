const express = require('express')
const cors = require('cors')

const app = express()

require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`)
})