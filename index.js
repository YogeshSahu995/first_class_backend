require('dotenv').config()

const express = require('express')

const app = express()

const githubData = {
  "login": "YogeshSahu995",
  "id": 171216907,
  "node_id": "U_kgDOCjSQCw",
  "avatar_url": "https://avatars.githubusercontent.com/u/171216907?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/YogeshSahu995",
  "html_url": "https://github.com/YogeshSahu995",
  "followers_url": "https://api.github.com/users/YogeshSahu995/followers",
  "following_url": "https://api.github.com/users/YogeshSahu995/following{/other_user}",
  "gists_url": "https://api.github.com/users/YogeshSahu995/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/YogeshSahu995/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/YogeshSahu995/subscriptions",
  "organizations_url": "https://api.github.com/users/YogeshSahu995/orgs",
  "repos_url": "https://api.github.com/users/YogeshSahu995/repos",
  "events_url": "https://api.github.com/users/YogeshSahu995/events{/privacy}",
  "received_events_url": "https://api.github.com/users/YogeshSahu995/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Yogesh ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-05-30T04:42:35Z",
  "updated_at": "2024-09-29T10:22:22Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=> {
  res.send('yogesh.com')
})

app.get('/login', (req, res) => {
  res.send('<h1> please login at a trendy shop </h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2> Free Fire </h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})