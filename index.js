const express = require('express')
const app = express()
const port = 3000

app.route('/').get((req, res) => {
    res.send('Hello World!')
})

app.get('/name/:name', (req, res) => {
    res.send('Hello my name is ' + req.params.name)
})

app.post('/post', (req, res) => {
    res.send('Posted')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})