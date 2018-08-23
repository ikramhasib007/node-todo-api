const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('MongoDB Server Connected');

    const db = client.db('TodoApp');

    // db.collection("Todos").insertOne({
    //     text: "Somethings to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log("Unable to write a collection.", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection("Users").insertOne({
        name: "Ikram Hasib",
        age: 31,
        location: "Jamalpur"
    }, (err, result) => {
        if(err) {
            return console.log("Unable to write a collection.", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });


});