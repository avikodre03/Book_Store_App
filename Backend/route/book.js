const express =require("express");
const bookController = require("../controller/book");

const router=express.Router();

router.get("/",bookController.getBook)
router.post("/addBook",bookController.addBook)
router.get("/bookDetail/:id",bookController.getBookDetail)
router.get("/search",bookController.getSearchBooks)

module.exports=router