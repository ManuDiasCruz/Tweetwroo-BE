import express, {json} from 'express'
import cors from 'cors'

const app = express()
app.use(json())
app.use(cors())

let users = []
let tweets = []

app.post('/sign-up', (request, response) => {
    const body = request.body
    
    const newUser = {
        username: body.username,
        avatar: body.avatar
    }
    users.push(newUser)
    
    response.send(users)
})

app.post('/tweets', (request, response) => {
    const body = request.body
    
    const user = users.find((user) => user.username === body.username)

    const newTweet = {
        username: user.username,
        avatar: user.avatar,
        tweet: body.tweet,
    }
    tweets.push(newTweet)
    
    response.send('OK')
})

app.get('/tweets', (request, response) => {
    let latestTweets = []
    let counter = 10
    if (tweets.length < 10)
        for (let i = tweets.length-1; i >= 0; i--){
            latestTweets.push(tweets[i])
        }
    else
        for (let i = tweets.length-1; i >= tweets.length - 10; i--){
            latestTweets.push(tweets[i])
        }

    response.send(latestTweets)
})

app.listen(5000, () =>
    console.log("Server listening at http://localhost/5000")
)