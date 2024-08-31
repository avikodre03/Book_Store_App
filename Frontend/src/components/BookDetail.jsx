import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoIosHeart } from "react-icons/io";
import { myContext } from '../Context/Context';
import toast from 'react-hot-toast';

const BookDetail = () => {
    const { id } = useParams();
    const [bookDetail, setbookDetail] = useState({});
    const { handleAddWishlist, authUser } = useContext(myContext);

    useEffect(() => {
        const getBookDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:4001/api/book/bookDetail/${id}`);
                setbookDetail(res.data.bookDetails);
            } catch (error) {
                console.log(error);
            }
        };
        getBookDetails();
    }, [id]);

    const handleWishlist = () => {
        toast('Please Log in to wishlist a book!', {
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
    };

    return (
        <div className='min-h-screen w-full flex flex-col md:flex-row dark:bg-slate-900 dark:text-white p-4'>
            <div className='md:w-1/2 flex justify-center items-center mb-4 md:mb-0'>
                <div className='w-full md:w-3/5 shadow-md shadow-stone-400 relative'>
                    {authUser ? (
                        <IoIosHeart
                            className="absolute right-5 top-4 text-slate-300 text-3xl cursor-pointer hover:text-red-600"
                            onClick={(e) => handleAddWishlist(e, id)}
                        />
                    ) : (
                        <IoIosHeart
                            className="absolute right-5 top-4 text-slate-300 text-3xl cursor-pointer hover:text-red-600"
                            onClick={handleWishlist}
                        />
                    )}
                    <span className="absolute right-0 top-[-1rem] transform -translate-x-1/2 mb-2 px-2 py-2 text-xs text-white bg-pink-500 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Add to Wishlist
                    </span>
                    <img src={bookDetail.image} alt="bookimg" className="w-full h-auto" />
                </div>
            </div>

            <div className='md:w-1/2 flex items-center'>
                <div className='border-l-0 md:border-l-2 p-4 md:p-7'>
                    <h1 className='font-bold text-2xl md:text-3xl text-blue-400 my-2'>{bookDetail.name}</h1>
                    <h2 className='font-semibold text-lg md:text-xl text-[#97d8b2]'>{bookDetail.title}</h2>
                    <h3 className='text-[#62AB37] text-base md:text-lg mt-3'>- Description :</h3>
                    <p className='text-white'>{bookDetail.description}</p>
                    <p className='font-semibold text-red-500 text-lg md:text-xl mt-4'>{bookDetail.category}</p>
                    <p className='my-2 text-[#F4F4F8] text-xl md:text-2xl'>$ {bookDetail.price}</p>
                    <div className='flex w-full mt-4'>
                        <button className='bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-800 duration-300 my-3'>
                            <Link to="/course">Courses</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
