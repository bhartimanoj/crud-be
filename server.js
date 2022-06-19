const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const db = require('./_configs/db.config');

const PORT = process.env.PORT || 3000;

mongoose.connect(db.developmentSrv, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((connected) => {
    console.log('Mongodb connected established.');
}).catch((err) => {
    console.log(err);
});

const app = express();

var server = require("http").createServer(app);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./_routes/student.route')(app);

app.get("/", (req, res) => {
    res.status(200).send(`Backend is working on port ${PORT}`);
});

server.listen(PORT, () => {
    console.log(`Backend server listening at ${PORT}`);
});