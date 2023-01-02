const express = require('express');

let app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API is running'));

app.listen(PORT, () => console.log(`Server started at Port ${PORT}`));
