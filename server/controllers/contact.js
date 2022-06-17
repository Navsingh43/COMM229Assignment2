let express= require('express');
let router=express.Router();
let mongoose= require('mongoose');

//create a reference to the model
let Contact= require('../models/contact');

module.exports.displayBookList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);
            res.render('contact/list', 
            {title: 'Contacts List', 
            ContactList: contactList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}



module.exports.displayEditPage=(req,res,next)=>{
    let id=req.params.id;

    Contact.findById(id,(err,contactToEdit)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit view
            res.render('contact/edit',{title:'Edit Book',contact:contactToEdit,
            displayName:req.user ? req.user.displayName:' '});           
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.contact,
        "published": req.body.email,
        "description": req.body.description,
        "price": req.body.address
    });

    Contact.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/contact-list');
        }
    });
}