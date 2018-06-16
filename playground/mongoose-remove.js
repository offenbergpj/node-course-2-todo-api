const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose.js');
const { Todo } = require('./../server/models/todo.js');
const { User } = require('./../server/models/user.js');

// remove all todos. result gives not back the object, but general response data
//Todo.remove({}).then((result) => {
//    console.log(result);
//});

// findOneAndRemove. same as findOne. It removes the first found item. this gives back the result object (which is removed from database)
//Todo.findOneAndRemove({ text: 'Something todo' }).then((todo) => {
//    console.log(todo);
//});

// findByIdAndRemove. pass in the Id. and it will be removed. It gives back the object as a result
Todo.findByIdAndRemove('5b227c1f5fff20199cb892f5').then((todo) => {
    console.log(todo);
});