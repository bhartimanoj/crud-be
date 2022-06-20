const ObjectID = require('mongodb').ObjectId;

const student = require('../_models/student.model');

exports.retrieveRecords = (req, res) => {
    student.find({}).sort({ _id: -1 }).then((students) => {
        res.status(200).send({ err: false, msg: "Successfully retrived Student List.", data: students });
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
    student.updateOne({ _id: ObjectID(req.params.id) }, req.body).then((student) => {
        res.status(200).send({ err: false, msg: "Successfully updated student.", data: student });
    }).catch((err) => {
        res.status(500).send({ err: true, msg: err });
    });
}

exports.deleteRecord = (req, res) => {
    student.deleteOne({ _id: ObjectID(req.params.id) }).then((student) => {
        if (student.deletedCount == 1) {
            res.status(200).send({ err: false, msg: "Successfully deleted student." });
        } else {
            res.status(404).send({ err: true, msg: "Student not found." });
        }
    }).catch((err) => {
        res.status(500).send({ err: true, msg: err });
    });
}