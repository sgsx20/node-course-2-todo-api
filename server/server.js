const express = require('express');
const bodyParser = require('body-parser');

// local imports
var {
	mongoose
} = require('./db/mongoose');

var {
	Todo
} = require('./models/todo');

var {
	User
} = require('./models/user');

var app = express();

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	})

	todo.save()
		.then(result => {
			res.send(result);
			console.log('Todo successfully added', result);
		}, e => {
			res.status(400)
				.send(e);
			console.log('Unable to add todo');
		});
});

app.get('/todos', (req, res) => {
	Todo.find()
		.then(todos => {
			res.send({
				todos,
			})
		}, e => {
			res.status(400)
				.send(e)
		});
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
