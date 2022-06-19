const ObjectID = require('mongodb').ObjectId;

const student = require('../_models/student.model');

exports.retrieveRecords = (req, res) => {
    student.find({}).then((students) => {
        res.status(200).send({ err: false, msg: "Successfully retrived sub agenices.", data: students });
    }).catch((err) => {
        res.status(500).send({ err: true, msg: err });
    });
}

exports.createRecord = (req, res) => {
    let ins = new student(req.body);
    ins.save().then((student) => {
        res.status(200).send({ err: false, msg: "Successfully created new student.", data: student });
    }).catch((err) => {
        res.status(500).send({ err: true, msg: err });
    });
}

exports.retrieveDetails = (req, res) => {
    student.findById(ObjectID(req.params.id)).then((student) => {
        res.status(200).send({ err: false, msg: "Successfully retrived student.", data: student });
    }).catch((err) => {
        res.status(500).send({ err: true, msg: err });
    });
}

exports.updateRecord = (req, res) => {
    student.findByIdAndUpdate(ObjectID(req.params.id), req.body).then((student) => {
        res.status(200).send({ err: false, msg: "Successfully updated student.", data: student });
    }).catch((err) => {
        res.status(500).send({ err: true, msg: err });
    });
}

exports.deleteRecord = (req, res) => {
    student.findByIdAndDelete(ObjectID(req.params.id)).then((student) => {
        if (student) {
            res.status(200).send({ err: false, msg: "Successfully deleted student." });
        } else {
            res.status(404).send({ err: true, msg: "Student not found." });
        }
    }).catch((err) => {
        res.status(500).send({ err: true, msg: err });
    });
}