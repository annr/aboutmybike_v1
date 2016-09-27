'use strict';

var db = require('./db').db;

var express = require('express');
var app = express();

// Note that we implement only GET handlers here, because:
// 1. This demo is to be tested by typing URL-s manually in the browser;
// 2. The demo's focus is on a proper database layer, not a web server.

//////////////////////////////////////////////
// Bike Web API
//////////////////////////////////////////////

// add a new bike:
GET('/bike/add/:style', req => db.bike.add(req.params.style));

// find a bike by id:
GET('/bike/find/:id', req => db.bike.find(+req.params.id));

// remove a bike by id:
GET('/bike/remove/:id', req => db.bike.remove(+req.params.id));

// get all bikes:
GET('/bikes/all', () => db.bike.all());

// count all bikes:
GET('/bikes/total', () => db.bike.total());

/////////////////////////////////////////////
// Express/server part;
/////////////////////////////////////////////

// Generic GET handler;
function GET(url, handler) {
    app.get(url, (req, res) => {
        handler(req)
            .then(data => {
                res.json({
                    success: true,
                    data
                });
            })
            .catch(error => {
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
    });
}

var port = 3030;

app.listen(port, () => {
    console.log('\nReady for GET requests on http://localhost:' + port);
});
