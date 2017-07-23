import express from 'express';
import mongodb from 'mongodb';
var cors = require('cors')
const app = express();
app.use(cors());
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
const dbUrl = 'mongodb://localhost:27017/hyperion';

mongodb.MongoClient.connect(dbUrl, function (err, db) {

    app.get('/api/projects', (req, res) => {
        db.collection('projects').find({}).toArray((err, projects) => {
            res.send(projects);
        });
    });

    app.get('/api/projects/get', (req, res) => {
        db.collection('projects').find(req).toArray((err, projects) => {
            res.json({ projects });
        });
    });

    app.get('/api/projects/add', (req, res) => {
        insertProjectDocument(db, req, function () {
            res.send(response);
        });
    });

    app.post('/api/projects/update', (req, res) => {
        var id = { ProjectID: req.body.ProjectID };
        delete req.body._id;
        updateProjectDocument(db, req.body, id, function (response) {
            res.send(response);
        });
    });

    app.listen(8080, () => console.log('Server is running on localhost:8080'));

});

var insertProjectDocument = function (db, project, callback) {
    var collection = db.collection('projects');
    collection.insertOne(project, function (err, result) {
        if (err === null) {
            callback(true);
        }
        else {
            callback(false);
        }
    });
}

var updateProjectDocument = function (db, project, id, callback) {
    var collection = db.collection('projects');
    collection.updateOne(id, project, function (err, result) {
        if (err === null) {
            callback(true);
        }
        else {
            callback(false);
        }
    });
}
