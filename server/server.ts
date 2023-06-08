// import { join } from 'node:path'
// import express from 'express'
// import cors, { CorsOptions } from 'cors'

const server = express()

import { join } from 'node:path'
import express from 'express'
import widgets from './routes/route'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/people', widgets)

// server.get('/api/v1/greeting', (req, res) => {
//   const greetings = ['hola', 'hi', 'hello', 'howdy']
//   const index = Math.floor(Math.random() * greetings.length)
//   console.log(index)
//   res.json({ greeting: greetings[index] })
// })

// server.use(express.json())
// server.use(express.static(join(__dirname, './public')))
// server.use(cors('*' as CorsOptions))

export default server
