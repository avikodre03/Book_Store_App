# Book Store

A comprehensive Book Store application built using the MERN stack (MongoDB, Express.js, React with Vite, and Node.js) along with Tailwind CSS for responsive design. The application provides a user-friendly interface for browsing, searching, and managing books, along with user authentication and wishlist features.

## Table of Contents

- [Features](#features)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Backend API](#backend-api)
- [Contributing](#contributing)
- [Contact Information: ](#Contact-Information)

## Features

- **User Authentication:**
  - Login and Logout
  - Registration
  - Change Password
- **Books Management:**
  - View List of Books
  - Search Books by Title or Author
  - Add New Books
  - View Details of a Particular Book
- **Wishlist Management:**
  - Add Books to Wishlist
  - Remove Books from Wishlist
- **API Integration:**
  - All features are managed through backend APIs built with Node.js and Express.js

## Pages

- **Home:** Overview of the Book Store.
- **Courses:** A section for courses related to books.
- **Contact:** Page to contact the Book Store team.
- **About:** Information about the Book Store and its mission.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
- **Database:**
  - [MongoDB](https://www.mongodb.com/)

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

- **Node.js** (>= 14.x.x) and **npm** (>= 6.x.x) or **yarn**
- **MongoDB** instance running locally or on the cloud (e.g., MongoDB Atlas)

## Installation

### 1. Clone the repository:
   ```bash
   git clone https://github.com/avikodre03/Book_Store_App.git
   cd book-store
   ```
### 2. Install dependencies:
 **For the backend:**
   ```bash
   cd Backend
   npm install
```
### 2. Install dependencies:
 **For the frontend::**
   ```bash
   cd ../Frontend
   npm install
```
### 3.Environment Variables:
```bash
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```
### 3.Open the app:
Visit http://localhost:5000 for the frontend, and the backend APIs will be accessible at http://localhost4001.

## Backend API
The backend provides RESTful APIs to handle all operations:
- **Authentication:**
  - `POST /api/user/login`
  - `POST /api/user/register`
  - `patch /api/user/password-change`
- **Authentication:**
  - `Get /api/book`- List all books
  - `POst /api/book/addBook`- Add a new book
  - `Get /api/book/bookDetail/:id`- Get details of a particular book
  - `Get /api/book//search`-Search books by title or name of book
- **Authentication:**
  - `POST /api/user/:userId/wishlist`- Add a book to the wishlist
  - `get /api/user//:userId/wishlist`-Get a book from the wishlis
  - `delete /api/user//:userId/wishlist/:bookId`- Remove a book from the wishlis

## Live Demo
Check out the live version of the project : [Book Store Live](https://book-store-app-1-bnaa.onrender.com/)

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

## Contact Information: 

If you have any questions or inquiries, please feel free to contact the project owner:

- Name: Avinash Kodre.
- Email: akodre111@gmail.com

***Thank you for using Book_Store_App ! We hope you enjoy your Better experience. !!!***



  
 

    
