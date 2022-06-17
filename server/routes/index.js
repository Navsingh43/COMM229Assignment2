/* File Name: index.js
   Name: Navjot Singh
   Student ID: 301157391
   Date:3-June-2022
*/
var express = require('express');
var router = express.Router();
let indexController=require('../controllers/index');

/* Responding GET requests with home page. */
router.get('/',indexController.displayHomePage);

/* Responding GET requests with about page. */
router.get('/about',  indexController.displayAboutPage);

/* Responding GET requests with projects page. */
router.get('/projects',indexController.displayProjectsPage);

/* Responding GET requests with services page. */
router.get('/services', indexController.displayServicesPage);

/* Responding GET requests with contact page. */
router.get('/contact', indexController.displayContactPage);

/* Responding GET requests with home page. */
router.get('/home',indexController.displayHomePage);

/* GET Route for displaying the Login page -  */
router.get('/login',indexController.displayLoginPage);

/* POST Route for processing the Login page -  */
router.post('/login',indexController.processLoginPage);

/* GET to perform UserLogout Operation - */
router.get('/logout',indexController.performLogout);

module.exports = router;
