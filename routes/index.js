const express = require('express');
const router = express.Router();


const { User } = require('../models/User');

// Get  all users
router.get('/api/user', (req, res) => {
    User.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


module.exports = router;