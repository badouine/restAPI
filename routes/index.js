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

// Get User By Id
router.get('/api/user/:id', (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});  


//  Update user 
router.put('/api/user/update/:id', (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number
    };
    User.findByIdAndUpdate(req.params.id, { $set:user}, { new:true }, (err, data) => {
        if(!err) {
            res.status(200).json({code:200, message: 'User updated successfully', updateUser:data })
        } else { console.log(err); }
    });
});

// Delete a user

router.delete('/api/user/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            res.status(200).json({ code:200, message: 'User deleted successfully',
            deleteUser: data
        });
        };
    });
});


module.exports = router;