var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var mPromise = require('mpromise'); // not implemented yet
var SchemaTypes = mongoose.Schema.Types;
var Schema = mongoose.Schema;
var userSchema = new Schema({
    id : { type: Schema.ObjectId },
    firstName: { type: String, required: false },
    lastName:{ type: String, required: false },
    companyName:{ type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
    gender:{ type: String, required: false },
    phone:{ type: String, required: false},
    jobTitle:{ type: String, required: false },
    salary:{ type: String, required: false },
    salaryTerm:{ type: String, required: false },
    hireDate:{ type: Date, required: false, default: new Date()},
    role:{ type: String, required: false},
    createdAt:{ type: Date, required: false, default: new Date()},
    updatedAt:{ type: Date, required: false, default: new Date()}
});
var userModel = mongoose.model('users', userSchema);
module.exports = userModel;

router.get('/users', function (req, res) {
    userModel.find({}, function(err, users) {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        console.log(":: users ");
        res.send(users);
    });
})

router.post('/user/add', function (req, res) {
    userSchema.pre('save', function(next) {
        var currentDate = new Date();
        this.updatedAt = currentDate;
        this.createdAt = currentDate;
        next();
    });
    console.log(":: user/add ");
    var newUser = userModel(req.body);
    newUser.save(function(err) {
        if (err) throw err;
        console.log('New User created!');
        res.json({ isSignedUp: true });
    });
})

router.put('/user/update/:id', function(req, res, next) {
    console.log(":: user/update ");
    userModel.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
        if (err) throw err;
        console.log('User updated!');
    });
});

router.delete('/user/delete/:id', function(req, res) {
    console.log(":: user/delete ");
    userModel.findByIdAndRemove(req.params.id, function(err) {
        if (err) throw err;
        console.log('User deleted!');
    });
});

router.post('/user/isExists', function (req, res) {
    userModel.findOne({'email': req.body.email}, function(err, users) {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }else {
            console.log(":: users " + users);
            if(users === null)
                res.send({ isEmailExists: false });
            else
                res.send({ isEmailExists: true });
        }
    });
})

router.post('/user/login', function (req, res) {
    userModel.findOne({'email': req.body.email,'password': req.body.password}, function(err, users) {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }else {
            console.log(":: users " + users);
            if(users === null)
                res.send({ isLoggedIn: false });
            else
                res.send({ isLoggedIn: true });
        }
    });
})

module.exports = router;