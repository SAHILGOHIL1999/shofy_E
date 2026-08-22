import express from 'express'
import DBconnect from './src/config/db.js'


const app = express()

app.use(express.json())

DBconnect()

app.get("/" , (req , res) => {
  res.send("Welcome to Express....")
})

export default app