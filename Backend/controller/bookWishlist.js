const books = require("../model/book.model");
const userModel = require("../model/user.model");



const addBookToWishlist = async (req, res) => {
    try {
        const { userId } = req.params;
        const { bookId } = req.body;

        const user = await userModel.findById(userId)

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const book = await books.findById(bookId)
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }


        if (!user.wishlist.includes(bookId)) {
            user.wishlist.push(bookId);
            await user.save();
        } else {
            return res.status(404).json({ message: 'This book already in wishlist' });
        }
        res.status(200).json({
            message: 'Book added to wishlist!',
            wishlist: user.wishlist,
        });
    } catch (error) {
        console.error('Error adding book to wishlist:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getBookWishlist = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await userModel.findById(userId).populate('wishlist');

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        return res.status(200).json({
            message: "wishlist received Succefully",
            bookWishlist: user.wishlist
        })

    } catch (error) {
        console.error('Error received wishlist:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const removeBookWishlist = async (req, res) => {
    try {
        const { userId, bookId } = req.params;

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.wishlist = user.wishlist.filter((ele) => ele.toString() !== bookId);

        await user.save();

        res.status(200).json({
            message: 'Book removed from wishlist',
            wishlist: user.wishlist
        });
    } catch (error) {
        console.error('Error removing book from wishlist:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const bookWishlistController = {
    addBookToWishlist,
    getBookWishlist,
    removeBookWishlist
}

module.exports = bookWishlistController;