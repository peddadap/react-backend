var express = require('express');
var router = express.Router();
var models = require('../models');
var multer = require('multer');
const excelToJson = require('convert-excel-to-json');
var storage= multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/');
  },
  filename: function (req, file, cb) {
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
  models.Request.findAll().then(function(tickets) {
    res.json(tickets);
  });
});

router.get('/ticket_meta', function(req, res, next) {
  models.Tickets.findAll({
    where: {
      id: req.query.id
    }
  }).then(function(ticket_meta) {
    res.json(ticket_meta);
  });
});

router.get('/vesting', function(req, res, next) {
  models.Vesting.findAll().then(function(vesting) {
    console.log('Vesting from DB: '+vesting);
    res.json(vesting);
  });
});

router.get('/grants', function(req, res, next) {
  models.Grants.findAll().then(function(terminations) {
    console.log('Grants from DB: '+terminations);
    res.json(terminations);
  });
});

router.get('/terminations', function(req, res, next) {
  models.Terminations.findAll().then(function(terminations) {
    console.log('Terminations from DB: '+terminations);
    res.json(terminations);
  });
});

router.get('/issuances', function(req, res, next) {
  models.Issuances.findAll().then(function(issuances) {
    console.log('Issuances from DB: '+issuances);
    res.json(issuances);
  });
});


/* POST new user. */
router.post('/uploadHandler', function(req, res) {
  
  console.log(req.body)
 
  });

router.post('/ticket/new', upload.any(), function(req, res, next) {
    //console.log(req.body, 'Body');
    //console.log(req.files, 'files');
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
    models.Tickets.create({ 
      company_number: req.body.company_number,
      child_company_number: req.body.child_company_number,
      control_account_number: req.body.control_account_number,
      treasure_account_number: req.body.treasure_account_number,
      type: req.body.ticketType,
      status:req.body.status,
      priority:req.body.priority
    }).then(resp => {
      if(resp.id) {
        var resultnew = result.Sheet1;
        //Need to optimize this loop
        for(var i=0; i< Object.keys(resultnew).length; i++) {
          var hashval = resultnew[i];
          resultnew[i]['TicketId'] = resp.id;
        }
        //Need to optimize to pick model names dynamically
        if(req.body.ticketType === 'Orginial Issuance') {    
          models.Issuance.bulkCreate(resultnew)
          .then(function(response,error){
            res.json(response);
          })
          .catch(function(error){
            console.log(error);
          })
        }
        if(req.body.ticketType === 'Grants') {    
          models.Grant.bulkCreate(resultnew)
          .then(function(response,error){
            res.json(response);
          })
          .catch(function(error){
            console.log(error);
          })
        }
        if(req.body.ticketType === 'Vestings') {    
          models.Vesting.bulkCreate(resultnew)
          .then(function(response,error){
            res.json(response);
          })
          .catch(function(error){
            console.log(error);
          })
        }
        if(req.body.ticketType === 'Terminations') {    
          models.Termination.bulkCreate(resultnew)
          .then(function(response,error){
            res.json(response);
          })
          .catch(function(error){
            console.log(error);
          })
        }
      }
    }); 
});

module.exports = router;