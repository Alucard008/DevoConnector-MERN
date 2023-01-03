const express = require('express');

let router = express.Router();

//@route         GET api/posts
//@Description   Test posts route
//@Access        Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
