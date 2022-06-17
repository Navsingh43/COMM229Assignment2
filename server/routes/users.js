/* File Name: index.js
   Name: Navjot Singh
   Student ID: 301157391
   Date:3-June-2022
*/
/* GETTING express. */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
