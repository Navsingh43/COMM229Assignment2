/* File Name: app.js
   Name: Navjot Singh
   Student ID: 301157391
   Date:17-June-2022
*/

let mongoose= require('mongoose');

//create model class
let ContactModel= mongoose.Schema({
    name: String,
    contact:Number,
    email: String
},
{
    collection:"contacts"
}
)
module.exports=mongoose.model('Contact',ContactModel);