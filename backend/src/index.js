const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const { loginRoute } = require('./routes/login/login');
const { registerRoute } = require('./routes/register/register');

app.use('/', loginRoute);
app.use('/', registerRoute)

app.listen(5000, () => {
    console.log('Backend is running on http://localhost:5000');
});
