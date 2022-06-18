/* File Name: app.js
   Name: Navjot Singh
   Student ID: 301157391
   Date:17-June-2022
*/


let express = require('express');
let router = express.Router();

let passport=require('passport');
// connect to our Book Model

let bookController=require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req,res,next){
    //check if the user logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
/* GET Route for the Book List page - READ OPeration */
router.get('/', bookController.displayBookList);

/* GET Route for displaying the Edit page - Update OPeration */
router.get('/edit/:id',requireAuth,bookController.displayEditPage);

/* POST Route for displaying the Edit page - Update OPeration */
router.post('/edit/:id',requireAuth,bookController.processEditPage);

/* GET to perform deletion - Delete OPeration */
router.get('/delete/:id',requireAuth,bookController.performDelete);

module.exports = router;