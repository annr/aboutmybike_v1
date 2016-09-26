'use strict';

var sql = require('../sql').bike;

module.exports = (rep, pgp) => {

    return {
        // Adds a new bike, and returns the new id;

        //??
        add: style =>
            rep.one(sql.add, style, user => user.id),

        // Tries to delete a bike by id, and returns the number of records deleted;
        remove: id =>
            rep.result('DELETE FROM Bike WHERE id = $1', id, r => r.rowCount),

        // Tries to find a bike from id;
        find: id =>
            rep.oneOrNone('SELECT * FROM Bike WHERE id = $1', id),

        // Returns all bike records;
        all: () =>
            rep.any('SELECT * FROM Bike'),

        // Returns the total number of bikes;
        total: () =>
            rep.one('SELECT count(*) FROM Bike', [], a => +a.count)
    };
};
