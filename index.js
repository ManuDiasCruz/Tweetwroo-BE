import express, {json} from 'express'
import cors from 'cors'

const app = express()
app.use(json())
app.use(cors())

let users = []
let tweets = []



app.listen(5000)