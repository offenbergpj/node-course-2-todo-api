//const MongoClient = require('mongodb').MongoClient;
const { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB DB');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // detele many. this will delete all matching the criteria
    //db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((result) => {
    //    console.log(result);
    //});

    // delete one. this will only the first one which could be found.
    //db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
    //   console.log(result);
    //});

    // find one and delete. this gives the record back in the result.
    //db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //    console.log(result);
    //});

    // no callback. isn't necessary..
    //db.collection('Users').deleteMany({ name: 'Patrick' });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b16180d63b4b517b8ddf595") }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    //client.close();
});


