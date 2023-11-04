var express = require('express');
var router = express.Router();
var books=require('../resources/books')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book app' , bookList:books});
});

module.exports = router;
