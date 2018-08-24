const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect Mongodb', err);
    }
    console.log("Mongodb Server connected.");

    const db = client.db('TodoApp');

    //findOneAndUpdate
    // db.collection("Todos").findOneAndUpdate(
    //     {_id: new ObjectID('5b7eaae00c9af4316c9090ee')},
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     },{
    //         returnOriginal: false
    //     }
    // ).then(docs => {
    //     console.log(docs, undefined, 2);
    // })

    db.collection("Users").findOneAndUpdate(
        {_id: new ObjectID('5b7ec97d11e98434d8c8de27')},
        {
            $set: {
                name: "Kamrul Hassan",
                location: "Konamaloncha"
            },
            $inc: {
                age: -1
            }
        },{
            returnOriginal: false
        }
    ).then(docs => {
        console.log(docs, undefined, 2);
    })
});