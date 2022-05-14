const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.route('/').get((req, res) => {
    res.send('Hello World!')
})

app.get('/name/:name', (req, res) => {
    res.send('Hello my name is ' + req.params.name)
})

app.post('/posts', (req, res) => {
    res.send(req.body.author + " added a new blog post called: " + req.body.subject)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})