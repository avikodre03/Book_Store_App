const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors=require("cors")
const bookRouter = require('./route/book');
const userRouter = require('./route/user');
const wishlistRouter = require('./route/bookWishlist');

const app = express()
app.use(express.json())

dotenv.config()

app.use(cors())
app.use("/api/book", bookRouter)
app.use('/api/user',userRouter);
app.use('/api/user',wishlistRouter);

// mongoose.connect(process.env.MongoDBURI)
mongoose.connect(process.env.DB_CONNECTION_URL)
  .then(() => {
    console.log("db conect");

  })
  .catch((error) => {
    console.log("error to conect DB", error);

  })
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 10000, () => {
  console.log(`Example app listening on port`)
})