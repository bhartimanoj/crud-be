const student = require('../_controllers/student.controller');

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Acc' + 'ess-Control-Request-Method, Access-Control-Request-Headers');
        res.header('Cache-Control', 'no-cache');
        next();
    });

    app.get("/api/student/retrieve-records", student.retrieveRecords);
    app.post("/api/student/create-record", student.createRecord);
    app.get("/api/student/retrieve-details/:id", student.retrieveDetails);
    app.patch("/api/student/update-record/:id", student.updateRecord);
    app.delete("/api/student/delete-record/:id", student.deleteRecord);
}