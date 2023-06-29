const { response } = require('express')
const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res) => {
  res.send("You're a wizard, Harry!")
})

// Params
app.get('/message/:id', (request, response) => {
  console.log(`Getting a message with the id of ${request.params.id}`)
  response.send({ msg: `Message with an id of ${request.params.id} found` })
})

// Query
app.get('/find', (request, response) => {
  console.log(
    `Finding someone with a name of ${request.query.myName} and an age of ${request.query.myAge}`
  )
  response.send({
    msg: `${request.query.myName} is ${request.query.myAge} years old.`
  })
})

// homework

app.get(`/dogs`, (request, response) => {
  response.send(`mutt`)
})

app.get(`/cats/:catName`, (request, response) => {
  response.send(`${request.params.catName}`)
})

app.post(`/towns`, (request, response) => {
  response.send({ hometown: 'Atlanta' })
})

app.put(`/profile/update/:username`, (request, response) => {
  response.send(
    `User profile with the username of ${request.params.username} was updated`
  )
})

app.delete(`/tacos`, (request, response) => {
  response.send({
    message: `I deleted the ${request.query.type} with an id of ${request.query.tacoId}`
  })
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
