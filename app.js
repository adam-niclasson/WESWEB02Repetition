const express = require('express')
const dbModule = require('./dbModule')
const PersonModel = require('./PersonModel')
const app = express()
const port = 3000

app.use(express.static(__dirname + '\\staticFiles\\'))
app.use(express.json())
app.use(express.urlencoded())

app.post('/test', function (req, res) {

    PersonModel.savePerson(req.body.name)

    res.sendStatus(418)
})

app.listen(port, () => console.log(`Example app listening on port port!`))