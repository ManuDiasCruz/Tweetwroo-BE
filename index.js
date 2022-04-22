import express, {json} from 'express'
import cors from 'cors'

const app = express()
app.use(json())
app.use(cors())

let users = []
let tweets = []

app.post('/sign-up', (request, response) => {
    const body = request.body

    const user = {
        username: body.username,
        avatar: body.avatar
    }
    users.push(user)
    response.send('OK')
})

app.listen(5000, () =>
    console.log("Servidor no ar em http://localhost/5000")
)