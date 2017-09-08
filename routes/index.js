var express = require('express');
var router = express.Router();
var models = require('../models');
var multer = require('multer');
var upload = multer({ dest: '/tmp/' });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tickets', function(req, res, next) {
  models.Tickets.findAll().then(function(tickets) {
    res.json(tickets);
  });
});
/* POST new user. */
/*router.post('/ticket/new', function(req, res) {
  console.log(req.body)
  models.Tickets.create({ type: req.body.type,submitted_date:req.body.submitted_date,created_date:req.body.created_date,status:req.body.status}).then(function() {
    res.redirect('/');
  });
});*/

router.post('/ticket/new', upload.any(), function(req, res, next) {
    models.Tickets.create({ type: req.body.ticketType,status:req.body.status,priority:req.body.priority}).then(function() {
    console.log(req.body, 'Body');
    console.log(req.files, 'files');
    res.end();
  });
});

module.exports = router;
