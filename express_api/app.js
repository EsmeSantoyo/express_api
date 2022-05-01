// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

app.get("/v1/explorers", (req, res) => {
    console.log(`Api explorers get all requests`);
    const explorer1 = {id: 1, name:"explorer"}
    const explorer2 = {id: 2,name:"explorer"}
    const explorer3 = {id: 3,name:"explorer"}
    const explorer4 = {id: 4,name:"explorer"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]

    res.status(200).json(explorers)
})

app.get("/v1/explorers/:id", (req, res) => {
    console.log(`Api explorers get all requests ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id:1,name:"Exme"}
    res.status(200).json(explorer)
})

app.post("/v1/explorers", (req, res) => {
    console.log(`Api explorers port request ${new Date()}`)
    const requestBody = req.body
    res.status(201).json({msg: "Created"})
})

app.put("/v1/explorers/:id", (req, res) => {
    console.log(`Api explorers put requests ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({msg: "Updated"})
})

app.delete("/v1/explorers/:id", (req, res) => {
    console.log(`Api explorers delete requests ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({msg: "Deleted"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
