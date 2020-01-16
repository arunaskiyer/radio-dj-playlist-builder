var express = require('express');
var playlistsController = require('../../database/models/playlists');
var router = express.Router();

router.route('/newtrack')
  
  .post(function (req, res) {
    console.log(req.body);
    playlistsController.insertOne(req.body, (err, instance) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
     } else {
      res.status(200).send('success');
      }
    });
  })


router.route('/alltracks')
.get(function(req, res) {
  playlistsController.findAll((err, instance) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(instance);
    }
  })
})

module.exports = router;