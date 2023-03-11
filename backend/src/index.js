const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const { loginRoute } = require('./routes/login/login');
const { registerRoute } = require('./routes/register/register');
const { addTodoRoute } = require('./routes/todo/addTodo');
const { getTodosRoute } = require('./routes/todo/getTodos');
const { getTodoRoute } = require('./routes/todo/getTodo');

app.use('/', loginRoute);
app.use('/', registerRoute);
app.use('/', addTodoRoute);
app.use('/', getTodosRoute);
app.use('/', getTodoRoute);

app.listen(5000, () => {
    console.log('Backend is running on http://localhost:5000');
});
