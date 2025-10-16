import express from 'express'
import mongoose from 'mongoose'

const connectionString = "mongodb+srv://Tafarigeorge:rootuser@cluster0.brawdxd.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0"

await mongoose.connect(connectionString)


const app = express()

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(3000, () => {
    console.log("Listening on on port: 3000");
})