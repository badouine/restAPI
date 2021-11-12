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

// Add a new User
router.post('/api/user/add', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number
    });
    user.save((err, data) => {
        res.status(200).json({ code:200, message: 'new user added successfully',
        addUser:data
     });
    });
});


module.exports = router;