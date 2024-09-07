import React, { useContext } from 'react'
import Home from './home/Home'
import Course from './components/Course'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Login from './components/Login'
import Register from './components/Register'
import { Toaster } from 'react-hot-toast'
import { myContext } from './Context/Context'
import Contact from './components/Contact'
import Profile from './components/Profile'
import AddBook from './components/AddBook'
import BookDetail from './components/BookDetail'
import SearchedBooks from './components/SearchedBooks'
import About from './components/About'
import Wishlist from './components/Wishlist'


function App() {

  const { authUser, setauthUser } = useContext(myContext)


  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/login" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addbook" element={<AddBook />} />

        <Route path="/BookDetail/:id" element={<BookDetail />} />
        <Route path="/searchedBooks" element={<SearchedBooks />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Toaster />
      
    </div>
  )
}

export default App
