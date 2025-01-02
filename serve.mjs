import express from 'express'

const app = express()
app.use('/', express.static('./public'))

const PORT = process.env.PORT ?? 3000

await new Promise(r => app.listen(PORT, r))

console.log(`Listening on port ${PORT}`)

