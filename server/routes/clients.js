var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var mPromise = require('mpromise'); // not implemented yet
var SchemaTypes = mongoose.Schema.Types;
var Schema = mongoose.Schema;
var clientSchema = new Schema({
    id : { type: Schema.ObjectId },
    companyName: { type: String, required: true },
    address:{ type: String, required: false },
    city: { type: String, required: false },
    state:{ type: String, required: false },
    country:{ type: String, required: false },
    phone:{ type: Number, required: false },
    online:{ type: Boolean, required: false },
    zip:{ type: Number, required: false },
    website:{ type: String, required: false },
    VATNumber:{ type: String, required: false},
    currency:{ type: String, required: false },
    currencySymbol:{ type: String, required: false },
    createdAt:{ type: Date, required: false, default: new Date()},
    updatedAt:{ type: Date, required: false, default: new Date()}
});
var clientModel = mongoose.model('clients', clientSchema);
module.exports = clientModel;

router.get('/clients', function (req, res) {
    clientModel.find({}, function(err, clients) {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        console.log(":: clients ");
        res.send(clients);
    });
})

router.post('/client/add', function (req, res) {
    clientSchema.pre('save', function(next) {
        var currentDate = new Date();
        this.updatedAt = currentDate;
        this.createdAt = currentDate;
        next();
    });
    console.log(":: client/add ");
    var newClient = clientModel(req.body);
    newClient.save(function(err) {
        if (err) throw err;
        console.log('New Client created!');
    });
})

router.put('/client/update/:id', function(req, res, next) {
    console.log(":: client/update ");
    clientModel.findByIdAndUpdate(req.params.id, req.body, function(err, client) {
        if (err) throw err;
        console.log('Client updated!');
    });
});

router.delete('/client/delete/:id', function(req, res) {
    console.log(":: client/delete ");
    clientModel.findByIdAndRemove(req.params.id, function(err) {
        if (err) throw err;
        console.log('Client deleted!');
    });
});

module.exports = router;