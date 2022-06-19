const mongoose = require('mongoose');

const schema = mongoose.Schema;
const student = new schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    parentName: { type: String },
    DOB: { type: String },
    rollNo: { type: String, unqiue: true, required: true },
    bloodGroup: { type: String },
    email: { type: String, unqiue: true, required: true },
    class: { type: String },
    phone: { type: String },
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('students', student);

