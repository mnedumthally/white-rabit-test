const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs');
const url = require('url')
let authObj = null
    

const {logger} = require('./Utils')


try{
    authObj = JSON.parse(fs.readFileSync('./auth.json'))
}catch(e) {
    logger.error(`unable to parse the auth file ${e}`)
}
app.use(express.static(path.join(__dirname)))
app.use(bodyParser.json())
app.engine('html', require('ejs').renderFile)
app.set('views', __dirname + '/public/views')
const port = 3010
app.listen(port, err =>
    err
    ?   logger.info(`the server could not be started, ${err}`)
    :   logger.info(`server is listening on ${port}`)
)

app.get('/test',(request, response) => response.send('test'))

app.get('/index', (req, res) => {
    res.render('index.html')
})

app.get('/auth', (req, res) => {
    console.log(req.query, authObj)
    // let url_parts =url.parse(req.url, true)
    let username = req.query['username']
    let password = req.query['password']
    if(username === authObj['username'] && password === authObj['password']) {
        res.send(true)
    } else {
        res.send(false)
    }
    
})




