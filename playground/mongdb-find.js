//const MongoClient = require('mongodb').MongoClient;
const { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB DB');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('users').find({
        name: 'Patrick'
    }).toarray().then((docs) => {
        console.log('users:');
        console.log(json.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch Users', err);
    });


    //client.close();
});


