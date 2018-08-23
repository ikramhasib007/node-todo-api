const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect Mongodb', err);
    }
    console.log("Mongodb Server connected.");

    const db = client.db('TodoApp');

    db.collection("Todos").find({_id: new ObjectID('5b7eaae00c9af4316c9090ee')}).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        if(err) {
            console.log('unable to fetch.', err);
        }
    })
});