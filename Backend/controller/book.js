const books = require("../model/book.model");
const getBook = async (req, res) => {
    try {
        const book = await books.find()
        res.status(200).json(
            {
                msg: "get book from list",
                bookList: book
            }
        )
    } catch (error) {
        console.log("err", error);
        res.status(500).json(
            error
        )
    }
}

const addBook = async (req, res) => {
    try {
        const { name, title, price, category, image } = req.body;
        if (!name || !title || !price || !category) {
            return res.status(400).json("All fields are required");
        }


        const existingBook = await books.findOne({ name });
        if (existingBook) {
            return res.status(400).json('This name of the book already exists');
        }

        const createNewBook = new books({
            name,
            title,
            price,
            category,
            image
        });


        await createNewBook.save();

        res.status(201).json({
            message: 'Book Created Successfully',
            Book: {
                _id: createNewBook._id,
                name: createNewBook.name,
                title: createNewBook.title
            }
        });
    } catch (error) {
        console.log("err", error);
        res.status(500).json(
            error
        )
    }
}
const getBookDetail = async (req, res) => {
    try {
        const bookId = req.params.id;

        // Find the book by id in the database
        const book = await books.findById(bookId);

        if (book) {
            res.status(200).json({
                msg: "Book retrieved successfully",
                bookDetails: book
            });
        } else {
            res.status(404).json({
                msg: "Book not found"
            });
        }
    } catch (error) {
        console.log("Error retrieving book:", error);
        res.status(500).json({
            msg: "An error occurred",
            error: error.message
        });
    }
}

const getSearchBooks = async (req, res) => {
   try {
    const { search } = req.query;
    if (!search) {
        return res.status(400).json({
            message: "please provide a search input"
        })
    }

    const bookList = await books.find()
    const filteredBooks = bookList.filter((ele) => {
       return (ele.name && ele.name.toLowerCase().includes(search.toLowerCase())) ||
            (ele.title && ele.title.toLowerCase().includes(search.toLowerCase()))
    })



    if (filteredBooks.length > 0) {

        res.status(200).json({
            message: "books recevied successfully",
            booksList: filteredBooks
        })
    }else{
        res.status(404).json({
            message:"No such search Books Found"
        })
    }
   } catch (error) {
    res.status(500).json({
        message:"error occured",
        error:error.message
    })
   }

}
const bookController = {
    getBook,
    addBook,
    getBookDetail,
    getSearchBooks
}

module.exports = bookController;