require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db');

db.connect();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.use('/users', require('./routes/usersRoutes'));
app.use('/products', require('./routes/productsRoutes'));

app.listen(process.env.PORT || 3000)