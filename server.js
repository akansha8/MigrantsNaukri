const express = require("express");
const server = express();
const cors = require('cors');
const path = require('path');
const body_parser = require("body-parser");
let port = process.env.PORT || 8080;
// << db setup >>
const db = require("./db");
const dbName = "Hackathon";
const collectionName = "workerdata";
server.use(express.static(path.join(__dirname, 'public')));
server.use(body_parser.urlencoded({
    extended: true
}));
server.use(body_parser.json());
db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
    server.post("/api/workerDataInsert", (request, response) => {
        const insertData = request.body;
        dbCollection.insertOne(insertData, (error, result) => { // callback of insertOne
            if (error) throw error;
            // return updated list
            dbCollection.find().toArray((_error, _result) => { // callback of find
                if (_error) throw _error;
                response.json("Success");
            });
        });
    });
    server.get("/api/migrantList", (request, response) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            response.json(result);
        });
    });
    server.get("/api/migrantListHeader", (request, response) => {
        dbCollection.distinct(
            "skillset",
            {},
            (function (err, docs) {
                if (err) {
                    return console.log(err);
                }
                if (docs) {
                    response.json(docs);
                }
            })
        );

    });
    //Set Static Folder
    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });

}, function (err) { // failureCallback
    console.log(err)
    throw (err);
});
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

