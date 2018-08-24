const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

const Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number
    }
});

// const newTodo = new Todo({
//     text: "Cook dinner"
// });

// newTodo.save().then((todo) => {
//     console.log("Save todo", todo);
// }, (err) => {
//     console.log('Unable to write.', err);
// });

const otherTodo = new Todo({
    text: "Feed the cat",
    completed: true,
    completedAt: 123
});

otherTodo.save().then((todo) => {
    console.log("Save todo");
    console.log(todo, undefined, 2);
}, (err) => {
    console.log('Unable to write.', err);
});