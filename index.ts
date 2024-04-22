

import express from 'express'
const app = express()

require('dotenv').config()
const port = process.env.PORT

app.get('/', (_req, _res) => {
_res.send('Heya. From AWS Elastic Beanstalk. From github.com:rodasamortin/hello-express')
})

    
app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})
