const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
console.log("0")

MongoClient.connect(connectionURL, (error, client) => {
    console.log("1")
    if(error){
        console.log("2")
        return console.log('Unable to connect to database!')
    } 
    
    console.log('Connected successfully to MongoDB server!')
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'Andrew',
        age: 27
    })
    
})

