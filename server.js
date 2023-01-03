const express = require('express');
const connectDB = require('./config/db');

let app = express();

connectDB(); //Connect to the MongoDB datbase

const PORT = process.env.PORT || 5000;

// Init middleware (To help get the data in req.body)

app.use(express.json({ extended: false })); //very imporant

app.get('/', (req, res) => res.send('API is running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => console.log(`Server started at Port ${PORT}`));
