const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose.js');
const { Todo } = require('./../server/models/todo.js');
const { User } = require('./../server/models/user.js');


//var id = '5b213de8f2a91b22d4eeafb0';

//if (!ObjectID.isvalid(id)) {
//    console.log('ID not valid');
//}


//Todo.find({
//    _id: id
//}).then((todos) => {
//    console.log('Todos', todos);
//});

//Todo.findOne({
//    _id: id
//}).then((todo) => {
//    console.log('Todo', todo);
//});

//Todo.findById(id).then((todo) => {
//    if (!todo) {
//        return console.log('Id not found!');
//    }
//    console.log('Todo by Id', todo);
//}).catch((e) => console.log(e));

// user.findbyid
    //if user not found
    
User.findById('5b21f1afd1688e9839d8d6cd').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
