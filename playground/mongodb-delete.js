const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect Mongodb', err);
    }
    console.log("Mongodb Server connected.");

    const db = client.db('TodoApp');
    // DeleteMany
    // db.collection("Todos").deleteMany({completed: false}).then(result => {
    //     console.log(result);
    // })

    //DeleteOne
    // db.collection("Todos").deleteOne({completed: false}).then(result => {
    //     console.log(result);
    // })

    //findOneAndDelete
    db.collection("Todos").findOneAndDelete({completed: false}).then(docs => {
        console.log(docs, undefined, 2);
    })
});