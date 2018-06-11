//const MongoClient = require('mongodb').MongoClient;
const { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB DB');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //db.collection('Todos').findOneAndUpdate({
    //    _id: new ObjectID("5b1e012781d8865e81673276")
    //}, {
    //        $set: {
    //            completed: true
    //        }
    //    }, {
    //        returnOriginal: false
    //    }
    //).then((result) => {
    //    console.log(result);
    //});

    // update name
    //db.collection('Users').findOneAndUpdate({
    //    _id: new ObjectID("5b1618fe74867603f4c9c94b")
    //}, {
    //        $set: {
    //            name: 'Patrick'
    //        }
    //    }, {
    //        returnOriginal: false
    //    }
    //).then((result) => {
    //    console.log(result);
    //});

    // increase number
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b1618fe74867603f4c9c94b")
    }, {
            $inc: { age: +1 },
            $set: { name: 'Patrick1'}
        }, {
            returnoriginal: false
        }
    ).then((results) => {
        console.log(results);
    });



    //client.close();
});


