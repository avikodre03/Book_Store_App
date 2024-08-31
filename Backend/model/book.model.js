const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
   name:{
    type:String,
   required: true
   }, 
   title:{
    type:String,
   required: true
   } ,
   price:{
    type:Number,
   required: true
   } ,
   category:{
    type:String,
   required: true
   } ,
   image:{
    type:String,
  
   } 
})

const books = mongoose.model("bookList",booksSchema)

module.exports=books