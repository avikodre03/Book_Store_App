import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosHeart } from "react-icons/io";
import { myContext } from '../Context/Context';
import toast from 'react-hot-toast';

const Cards = ({ item, key }) => {
  const { handleAddWishlist,authUser } = useContext(myContext)
  const navigate = useNavigate()

  const handlebookDetail = () => {
    navigate(`/BookDetail/${item._id}`)
  }

const handleWishlist=(e)=>{
  e.stopPropagation(); 
  toast('Please Loging for wishlisting a book!', {
    icon: '⚠️',
    style: {
      border: '1px solid #FFA500',
      padding: '8px 16px', 
      width: 'auto', 
      whiteSpace: 'nowrap', 
    },
    iconTheme: {
      primary: '#FFA500',
      secondary: '#fff',
    },
  });
}

  return (
    <>
      <div className='mt-4 my-3 p-3 ' onClick={handlebookDetail}>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border " key={key}>
          <figure>
            <img
              src={item.image}
              alt="books" />
            {/* <IoIosHeart  className='absolute top-3 right-6 text-slate-300 text-2xl cursor-pointer hover:text-red-600'/> */}

            <div className=" group ">
            {authUser ?
                <IoIosHeart className="absolute right-5 top-4 text-slate-300 text-3xl cursor-pointer hover:text-red-600"
                onClick={(e) => handleAddWishlist(e, item._id)}
                />
                :
                <IoIosHeart className="absolute right-5 top-4 text-slate-300 text-3xl cursor-pointer hover:text-red-600"
                onClick={(e)=>handleWishlist(e)}
              />
            }
             
             
              <span className="absolute right-0 top-0 transform -translate-x-1/2 mb-2 p-2 text-xs text-white bg-pink-500 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Add to Wishlist
              </span>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="text-blue-500 text-xl font-semibold mt-2">${item.price}</div>


              <div className="cursor-pointer px-3 py-2 rounded-full  border-[2px] hover:bg-pink-500 text-sm hover:text-white duration-200 ">View</div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cards