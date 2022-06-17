let mongoose= require('mongoose');

//create model class
let ContactModel= mongoose.Schema({
    name: String,
    contact:Number,
    email: String,
    description: String,
    address: String
},
{
    collection:"books"
}
)
module.exports=mongoose.model('Book',ContactModel);