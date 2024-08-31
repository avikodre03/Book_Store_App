import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddBook = () => {
    const [product, setProduct] = useState({
        name: "",
        title: "",
        price: "",
        category: "",
        image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724596282~exp=1724599882~hmac=53de348e1fc2080b7b67b693338d8e8cdd640c977be496f01b1222fbc0228b1d"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Product Details:", product);
        try {
            const res = await axios.post('/api/book/addBook', product);
            toast.success(res.data.message);
            setProduct({
                name: "",
                title: "",
                price: "",
                category: "",
                image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724596282~exp=1724599882~hmac=53de348e1fc2080b7b67b693338d8e8cdd640c977be496f01b1222fbc0228b1d"
            });
        } catch (error) {
            toast.error(error.response.data);
        }
    };

    return (
        <div className='md:h-screen w-full flex flex-col md:flex-row bg-slate-900 text-white'>
            <div className='md:w-1/2 w-full flex justify-center items-center p-4'>
                <img src={product.image} alt="Book" className='w-full md:h-4/5 max-w-md md:max-w-full object-cover' />
            </div>

            <div className='md:w-1/2 w-full flex flex-col justify-center items-center p-4 md:p-8'>
                <div className='w-full max-w-lg'>
                    <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>Add New Book</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='block text-gray-400 text-sm font-bold mb-2' htmlFor='name'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                value={product.name}
                                onChange={handleChange}
                                className='shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Book Name'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-400 text-sm font-bold mb-2' htmlFor='title'>
                                Title
                            </label>
                            <input
                                type='text'
                                name='title'
                                value={product.title}
                                onChange={handleChange}
                                className='shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Book Title'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-400 text-sm font-bold mb-2' htmlFor='price'>
                                Price
                            </label>
                            <input
                                type='number'
                                name='price'
                                value={product.price}
                                onChange={handleChange}
                                className='shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='$ Enter Book Price'
                            />
                        </div>

                        <div className='mb-6'>
                            <label className='block text-gray-400 text-sm font-bold mb-2' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                value={product.category}
                                onChange={handleChange}
                                className='select select-success w-full bg-gray-700 text-white rounded-md'
                            >
                                <option value='' disabled>Select Category</option>
                                <option value='free'>free</option>
                                <option value='paid'>paid</option>
                            </select>
                        </div>

                        <button
                            type='submit'
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full'
                        >
                            Publish Book
                        </button>
                    </form>
                </div>
                <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                    <Link to="/">Back</Link>
                </button>
            </div>
        </div>
    );
};

export default AddBook;
