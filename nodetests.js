/*const fs = require('fs');

var oldPath = 'dist/uploads/glasses.png';
var newDir = 'dist/images/mock/';
var photoId = 55;
var newPath = newDir+photoId+'.png';


fs.rename(oldPath, newPath, function() {
  console.log('something?');
});
*/

var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/amb';
var db = pgp(connectionString);
/*
db.one('select * from bike where id = $1', 1)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    return next(err);
  });
*/
  db.one('insert into bike(user_id, style, brand, model) values(1, \'boo\', \'boo\', \'boo\') returning id')
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log('error creating bike');
      console.log(err);
    });