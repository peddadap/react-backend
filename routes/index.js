var express = require('express');
var router = express.Router();
var models = require('../models');
var multer = require('multer');

var excelToJson = require('convert-excel-to-json');
var storage= multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'D:\\tmp\\');
  },
  filename: function (req, file, cb) {
//    var fileName = new Date().toISOString().substring(0,19) + '-'+ file.originalname ;
    var fileName = file.originalname ;
    cb(null, fileName);
  }
})
var upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tickets', function(req, res, next) {
  models.Tickets.findAll().then(function(tickets) {
    //console.log(JSON.stringify(tickets));
    res.json(tickets);
  });
});

router.get('/issuances', function(req, res, next) {
  models.Issuances.findAll().then(function(issuances) {
    console.log('Issuances from DB: '+issuances);
    res.json(issuances);
  });
});

router.get('/grants', function(req, res, next) {
  models.Grants.findAll().then(function(terminations) {
    console.log('Terminations from DB: '+terminations);
    res.json(terminations);
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
    console.log(req.body, 'Body');
    console.log(req.files, 'files');
    var result = excelToJson({
      sourceFile: req.files[0].path,
      header:{
        rows: 1
      },
      columnToKey: {
        '*': '{{columnHeader}}'
      },
      outputJSON: true
    });
    models.Tickets.create({ type: req.body.ticketType,status:req.body.status,priority:req.body.priority}).then(function() {
      res.end();
    });
    var resultnew = result.Sheet1;
    console.log('Data >>>>>>' + JSON.stringify(resultnew));    
    models.Issuances.bulkCreate(resultnew)
    .then(function(response,error){
      console.log(error);
      res.json(response);
    })
    .catch(function(error){
      console.log(error);
    })
});

module.exports = router;