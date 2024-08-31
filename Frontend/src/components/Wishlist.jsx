import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { MdOutlineLibraryBooks } from "react-icons/md";

const Wishlist = () => {

    const [wishlistBooks, setwishlistBooks] = useState([])
    const [wishlistUpdate, setwishlistUpdate] = useState(false)
    const [usrDetails, setusrDetails] = useState(JSON.parse(localStorage.getItem("User")))

console.log(wishlistBooks.length);

    useEffect(() => {
        const getWishlistBooks = async () => {
            try {
                const res = await axios.get(`http://localhost:4001/api/user/${usrDetails._id}/wishlist`)
                console.log(res.data.bookWishlist);
                setwishlistBooks(res.data.bookWishlist)

            } catch (error) {
                console.log(error);
            }
        }
        getWishlistBooks();
    }, [wishlistUpdate])

    const removeWishlistBook = async (bookId) => {
        try {
            const res = await axios.delete(`http://localhost:4001/api/user/${usrDetails._id}/wishlist/${bookId}`)

            setwishlistUpdate(!wishlistUpdate)
            toast.success(res.data.message)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='w-full h-screen  bg-slate-900 overflow-y-scroll'>

                <div className="w-full h-full max-w-screen-lg mx-auto p-4  ">
                    <Link to='/'>

                        <button className="mb-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                            &larr; Back
                        </button>
                    </Link>

                    <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
                    {wishlistBooks.length!==0 ? (wishlistBooks.map((ele) => {
                        return <>
                            <div className="bg-white my-4 text-black shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
                                <img
                                    src={ele.image}
                                    alt="Book Cover"
                                    className=" w-48 mx-4 object-cover"
                                />
                                <div className="p-4 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">{ele.name}</h2>
                                        <h2 className="text-xl font-semibold mb-2 text-stone-700">{ele.title}</h2>
                                        <p className="text-gray-600 mb-2">Category: <span className='text-red-600 font-semibold'>{ele.category}</span></p>
                                        <p className="text-gray-800 font-semibold text-lg">$ {ele.price}</p>
                                    </div>
                                    <div className="flex space-x-4 mt-4">

                                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            onClick={() => removeWishlistBook(ele._id)}
                                        >Remove</button>
                                    </div>
                                </div>
                            </div>
                        </>

                    }))

                           
                        :(<> <div className='flex flex-col justify-center items-center gap-4 text-4xl text-stone-300 font-semibold'>
                             <MdOutlineLibraryBooks  />
                            <h1>No books found in your wishlist !!</h1></div>
                            </>
                        )}
                </div>
            </div>
        </>
    )
}

export default Wishlist