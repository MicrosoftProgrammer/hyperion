import express from 'express';
import mongodb from 'mongodb';
var cors = require('cors')
const app = express();
app.use(cors());
const dbUrl = 'mongodb://localhost:27017/hyperion';

mongodb.MongoClient.connect(dbUrl, function (err, db) {

    app.get('/api/projects', (req, res) => {
        db.collection('projects').find({}).toArray((err, projects) => {
            res.json({ projects });
        });
    });

    app.get('/api/projects/get', (req, res) => {
        db.collection('projects').find({}).toArray((err, projects) => {
            res.json({ projects });
        });
    });

    app.get('/api/projects/add', (req, res) => {
        insertProjectDocuments(db, req, function () {
            db.close();
        });
    });

    app.listen(8080, () => console.log('Server is running on localhost:8080'));

});

var insertProjectDocuments = function (db, project, callback) {
    // Get the documents collection 
    var collection = db.collection('projects');
    // Insert some documents 
    collection.insertMany([project], function (err, result) {
        console.log("Inserted documents into the project collection");
        callback(result);
    });
}