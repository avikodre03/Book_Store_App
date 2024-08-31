const express = require('express');
const bookWishlistController = require('../controller/bookWishlist');

const router = express.Router();

router.post("/:userId/wishlist",bookWishlistController.addBookToWishlist)
router.get("/:userId/wishlist",bookWishlistController.getBookWishlist)
router.delete("/:userId/wishlist/:bookId",bookWishlistController.removeBookWishlist)

module.exports= router;