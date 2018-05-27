const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dbSongs="";

app.use(express.static('public'));

// Create seed data
var seedData = [
  {
    decade: '1970s',
    artist: 'Debby Boone',
    song: 'You Light Up My Life',
    weeksAtOne: 10
  },
  {
    decade: '1980s',
    artist: 'Olivia Newton-John',
    song: 'Physical',
    weeksAtOne: 10
  },
  {
    decade: '1990s',
    artist: 'Mariah Carey',
    song: 'One Sweet Day',
    weeksAtOne: 16
  }
];

// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname, details set in .env
var uri = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.PORT+'/'+process.env.DB;

mongoose.connect(uri, function(err, db) {
  if(err) throw err;
  dbSongs+="<h1>MongoDB Example</h1>";
  dbSongs+="Connecting to db "+process.env.DB+"<br />";
  
  /*
   * First we'll add a few songs. Nothing is required to create the 
   * songs collection; it is created automatically when we insert.
   */

  var songs = db.collection('songs');
  dbSongs+="Creating collection 'songs'<br />";
  
   // Note that the insert method can take either an array or a dict.

  songs.insert(seedData, function(err, result) {
    
    if(err) throw err;

    /*
     * Then we need to give Boyz II Men credit for their contribution
     * to the hit "One Sweet Day".
     */

    songs.update(
      { song: 'One Sweet Day' }, 
      { $set: { artist: 'Mariah Carey ft. Boyz II Men' } },
      function (err, result) {
        
        if(err) throw err;

        /*
         * Finally we run a query which returns all the hits that spend 10 or
         * more weeks at number 1.
         */

        songs.find({ weeksAtOne : { $gte: 10 } }).sort({ decade: 1 }).toArray(function (err, docs) {

          if(err) throw err;

          docs.forEach(function (doc) {
            console.log(
              'In the ' + doc['decade'] + ', ' + doc['song'] + ' by ' + doc['artist'] + 
              ' topped the charts for ' + doc['weeksAtOne'] + ' straight weeks.'
            );
            dbSongs+="Adding "+doc['artist']+" - "+doc['song']+" into 'songs'<br />";
          });
         
          // Since this is an example, we'll clean up after ourselves.
          songs.drop(function (err) {
            dbSongs+="Dropping collection 'songs'<br />";
            if(err) throw err;
          
            // Only close the connection when your app is terminating.
            db.close(function (err) {
              dbSongs+="Closing db " + process.env.DB;
              dbSongs+="<script src=\"https://button.glitch.me/button.js\" data-style=\"glitch\"></script><div class=\"glitchButton\" style=\"position:fixed;top:20px;right:20px;\"></div>";
              if(err) throw err;
            });
          });
        });
      }
    );
  });
});

app.get("/", function (request, response) {
  response.send(dbSongs);
});

// listen for requests :)
var listener = app.listen("3000", function () {
  console.log('Your app is listening on port ' + listener.address().port);
});