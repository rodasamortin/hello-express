

import express from 'express'
const app = express()
const port = 3000


app.get('/', (_req, _res) => {
_res.send('Heya. From AWS Elastic Beanstalk. From github.com:rodasamortin/hello-express')
})

    
app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})

// exercise 1: https://hub.docker.com/r/rodasamortin/hello-world-express-docker
// completion receipt for exercise 1
