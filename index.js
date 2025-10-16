import express from 'express'
import mongoose from 'mongoose'
import Fruit from "./models/fruit.js"

const connectionString = "mongodb+srv://Tafarigeorge:rootuser@cluster0.brawdxd.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0"

await mongoose.connect(connectionString)


const app = express()

app.use(express.json())

app.get("/fruits", async (req, res) => {
    const results = await Fruit.find({})
    console.log(results);
    res.json(results)
})

app.get('/fruits/:id', async (req, res) => {
    const result = await Fruit.findById(req.params.id)
})

app.post('/fruits', async (req, res) =>{
    const fruitDoc = new Fruit(req,body)
    const result = await fruitDoc.save()
    res.json(result);
})

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(3000, () => {
    console.log("Listening on on port: 3000");
})