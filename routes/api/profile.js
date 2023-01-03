const express = require('express');

let router = express.Router();

//@route         GET api/profile
//@Description   Test profile route
//@Access        Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
