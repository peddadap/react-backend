var express = require('express');
var router = express.Router();
var models = require('../models');
var multer = require('multer');
const excelToJson = require('convert-excel-to-json');
var storage= multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/')
  },
  filename: function (req, file, cb) {
    var fileName = new Date().toISOString().substring(0,19) + '-'+ file.originalname ;
    cb(null, fileName);
  }
})
var upload = multer({ storage: storage })


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

router.get('/jsonData', function(req, res, next) {
  models.Terminations.findAll().then(function(terminations) {
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
    const result = excelToJson({
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
});

module.exports = router;
