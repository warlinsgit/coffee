const express = require('express');
const router = express.Router();
const mongoose = require("mongoose"); // connect db
const Vote = require('../models/Vote');
const Pusher = require('pusher'); //it is used to build real time applications , data analytics, chat room etc - for this app it will be vote

var pusher = new Pusher({
  appId: '754475',
  key: 'b9d758f152fe2b0371ba',
  secret: '7192a766d76c33c92019',
    
    
      

  cluster: 'eu',
  encrypted: true
});

router.get('/', (req, res) => {
  Vote.find().then(votes => res.json({success: true,
  votes: votes}));  //fetch and display the current votes in the chart
});



router.post('/', (req, res) => {

  const newVote = {   // save to mongodb
    cafe: req.body.cafe,
    points: 1
  }

   new Vote(newVote).save().then(vote => { //add to database

     pusher.trigger('cafe-poll', 'cafe-vote', {
       points: parseInt(vote.points),
       cafe: vote.cafe

   });
   return res.json({success: true, message: 'Thank you for your voting'});

   }) ;

});

module.exports = router;
