
const express = require('express');
const cors = require('cors');
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const webpush = require('web-push');


const publicVapidKey = 'BIqWjqP6F0Pocn__u7Q9Fvlx5EmZ9zWVaey40xcudf_e0tuOZvKVh9HIWi45bYuJVyXpynpdjU6sdAvW_ksVbpg';
const privateVapidKey = 'FrzT79qkhNZTMhlfWShqN2RpU5Q_pEMPzk-Ve6u66FM';

webpush.setVapidDetails("mailto:warlins25@gmail.com", publicVapidKey, privateVapidKey);

router.post("/subscribe", (req,res) => {

  //get pushSubscritpion object
  const subscription =  req.body;

  // send 201 status - resource created success
  res.status(201).json({});

//create payload
  const payload = JSON.stringify({title: 'Push Test'});

  //pass object into sendNotification

  webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});


module.exports = router;
