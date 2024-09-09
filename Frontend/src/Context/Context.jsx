import { createContext, useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export const myContext = createContext()



export const My_Provider_fun = ({ children }) => {
  const navigate = useNavigate()
  const [theme, setTheme] = useState("dark");
  const [book, setbook] = useState([])
  const [authUser, setauthUser] = useState(localStorage.getItem("User"))
  const [searchInput, setsearchInput] = useState('')
  const [searchBookList, setsearchBookList] = useState([])

  
  const [usrDetails, setusrDetails] = useState(JSON.parse(localStorage.getItem("User")))
  

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("/api/book")
       
        console.log("done");
        // console.log(res.data)
        setbook(res.data.bookList)
      } catch (error) {
        console.log("Error message:", error);
       
      }
    }
    getBook();
  }, [authUser])
  
  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/book/search?search=${searchInput}`)
      console.log(res.data);
      setsearchBookList(res.data.booksList)
      navigate("/searchedBooks")
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  }

const handleAddWishlist= async(e,bookId)=>{
  e.stopPropagation(); 
  
try {
  const res=await axios.post(`/api/user/${usrDetails._id}/wishlist`,{
    bookId: bookId
  })
  console.log(res.data);
  toast.success(res.data.message);
} catch (error) {
  console.error('Error adding book to wishlist:', error);
  toast.error(error.response.data.message);
  
}
}

  return (

    <myContext.Provider value={{
      theme, setTheme, book, setbook, authUser, setauthUser, searchInput, setsearchInput
      , searchBookList, setsearchBookList, handleSearch,handleAddWishlist
    }}>
      {children}
    </myContext.Provider>

  )
}