const express = require("express");
const server = express();
const cors = require('cors');
const path = require('path');

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 4000;

// << db setup >>
const db = require("./db");
const dbName = "Hackathon";
const collectionName = "workerdata";

let corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
  };
  server.use(cors(corsOption));

//Set Static Folder
server.use(express.static(path.join(__dirname, 'public')));
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  

db.initialize(dbName, collectionName, function(dbCollection) { // successCallback

    server.post("/workerDataInsert", (request, response) => {
        const insertData = request.body;
        dbCollection.insertOne(insertData, (error, result) => { // callback of insertOne
            if (error) throw error;
            // return updated list
            dbCollection.find().toArray((_error, _result) => { // callback of find
                if (_error) throw _error;
                response.json(_result);
            });
        });
    });

    server.get("/workerData", (request, response) => {
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            response.json(result);
        });
    });

}, function(err) { // failureCallback
    console.log(err)
    throw (err);
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});