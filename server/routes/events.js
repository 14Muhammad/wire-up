var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var mPromise = require('mpromise'); // not implemented yet
var SchemaTypes = mongoose.Schema.Types;
var Schema = mongoose.Schema;
var eventSchema = new Schema({
    id : { type: Schema.ObjectId },
    title: { type: String, required: true },
    description:{ type: String, required: true },
    startDate: { type: Date , default: new Date() , required: false },
    endDate: { type: Date , default: new Date() , required: false },
    startTime:{ type: Date, required: false, default: new Date()},
    endTime:{ type: Date, required: false },
    location:{ type: String, required: true },
    shareWith:{ type: Array , required: false },
    createdAt:{ type: Date, required: false, default: new Date()},
    updatedAt:{ type: Date, required: false, default: new Date()}
});
var eventModel = mongoose.model('events', eventSchema);
module.exports = eventModel;

router.get('/events', function (req, res) {
    eventModel.find({}, function(err, events) {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        console.log(":: events ");
        res.send(events);
    });
})

router.post('/event/add', function (req, res) {
    eventSchema.pre('save', function(next) {
        var currentDate = new Date();
        this.updatedAt = currentDate;
        this.createdAt = currentDate;
        next();
    });
    console.log(":: event/add ");
    var newEvent = eventModel(req.body);
    newEvent.save(function(err) {
        if (err) throw err;
        console.log('Event Created!');
    });
})

router.put('/event/update/:id', function(req, res, next) {
    console.log(":: event/update ");
    eventModel.findByIdAndUpdate(req.params.id, req.body, function(err, project) {
        if (err) throw err;
        console.log('Event updated!');
    });
});

router.delete('/event/delete/:id', function(req, res) {
    console.log(":: event/delete ");
    eventModel.findByIdAndRemove(req.params.id, function(err) {
        if (err) throw err;
        console.log('Event deleted!');
    });
});

module.exports = router;