import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../Context/Context'
import Cards from './Cards';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const SearchedBooks = () => {
    const { searchInput, setsearchInput
        , searchBookList, setsearchBookList, handleSearch
    } = useContext(myContext);

    return (
        <>
            <Navbar />
            <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 h-4/5 mt-14'>
                <div>
                    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300' onClick={() =>
                        setsearchInput("")
                    }><Link to="/">Back</Link></button>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center'>

                    {
                        searchBookList && searchBookList.map((ele) => {
                            return <>
                                <Cards item={ele} key={ele._id} />
                            </>
                        })
                    }
                </div>

            </div>
        </>

    )
}

export default SearchedBooks