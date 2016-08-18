var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var mPromise = require('mpromise'); // not implemented yet
var SchemaTypes = mongoose.Schema.Types;

var Schema = mongoose.Schema;
var projectSchema = new Schema({
    id : { type: Schema.ObjectId },
    name: { type: String, required: true },
    client:{ type: String, required: false },
    price: { type: SchemaTypes.Double, required: false },
    startTime:{ type: Date, required: false, default: new Date()},
    endTime:{ type: Date, required: false },
    progress:{ type: Number, required: false },
    status:{ type: String, required: false },
    labels:{ type: Array, required: false },
    description:{ type: String, required: false },
    createdAt:{ type: Date, required: false, default: new Date()},
    updatedAt:{ type: Date, required: false, default: new Date()}
});
var projectModel = mongoose.model('projects', projectSchema);
module.exports = projectModel;

router.get('/projects', function (req, res) {
    projectModel.find({}, function(err, projects) {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        console.log(":: projects ");
        res.send(projects);
    });
})

router.post('/project/add', function (req, res) {
    projectSchema.pre('save', function(next) {
        var currentDate = new Date();
        this.updatedAt = currentDate;
        this.createdAt = currentDate;
        next();
    });
    console.log(":: project/add ");
    var newProject = projectModel(req.body);
    newProject.save(function(err) {
        if (err) throw err;
        console.log('New Project created!');
    });
})

router.put('/project/update/:id', function(req, res, next) {
    console.log(":: project/update ");
    projectModel.findByIdAndUpdate(req.params.id, req.body, function(err, project) {
        if (err) throw err;
        console.log('Project updated!');
    });
});

router.delete('/project/delete/:id', function(req, res) {
    console.log(":: project/delete ");
    projectModel.findByIdAndRemove(req.params.id, function(err) {
        if (err) throw err;
        console.log('Project deleted!');
    });
});

module.exports = router;