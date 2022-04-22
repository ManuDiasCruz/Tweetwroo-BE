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

app.post('/tweets', (request, response) => {
    const { msg } = request.body
    const { user } = request.headers

    const searchUserMatchAvatar = users.find((user) => user.username === user);

    const tweet = {
        username: msg,
        avatar: searchUserMatchAvatar.avatar,
        tweet: msg
    }
    tweets.push(tweet)
    response.send('OK')
})

app.listen(5000, () =>
    console.log("Servidor no ar em http://localhost/5000")
)