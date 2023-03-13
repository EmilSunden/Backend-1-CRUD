const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

const { useCookie } = require('./middleware/useCookie');
const { loginRoute } = require('./routes/login/login');
const { registerRoute } = require('./routes/register/register');
const { addTodoRoute } = require('./routes/todo/addTodo');
const { getTodosRoute } = require('./routes/todo/getTodos');
const { getTodoRoute } = require('./routes/todo/getTodo');
const { deleteTodoRoute } = require('./routes/todo/deleteTodo');
const { updateTodoRoute } = require('./routes/todo/updateTodo');


app.use('/', registerRoute);
app.use('/', useCookie, loginRoute);

app.use('/', addTodoRoute);
app.use('/', getTodosRoute);
app.use('/', getTodoRoute);
app.use('/', deleteTodoRoute);
app.use('/', updateTodoRoute);

app.listen(5000, () => {
    console.log('Backend is running on http://localhost:5000');
});
