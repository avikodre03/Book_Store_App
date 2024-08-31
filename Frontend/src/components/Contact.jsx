import React from 'react';
import img from '../../public/ContactImg.png'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='w-full flex flex-col md:flex-row md:h-screen sm:h-max bg-slate-900 text-white'>
      <div className='md:w-1/2 w-full flex justify-center items-center p-4'>
        <img src={img} alt="contactIMG" className='w-3/4 md:w-5/6' />
      </div>

      <div className='md:w-1/2 w-full flex flex-col justify-center p-4 md:p-8'>
        <h1 className='text-3xl md:text-6xl my-6 md:ml-20 font-semibold text-center md:text-left'>Contact Us</h1>

        <label className="input input-bordered flex items-center w-full md:w-4/5 mx-auto gap-2 text-black bg-white rounded-md my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow bg-transparent text-black placeholder-gray-500" placeholder="Username" />
        </label>

        <label className="input input-bordered flex items-center w-full md:w-4/5 mx-auto gap-2 text-black bg-white rounded-md my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow bg-transparent text-black placeholder-gray-500" placeholder="Email" />
        </label>

        <textarea className="textarea textarea-accent text-black my-4 w-full md:w-4/5 mx-auto h-32 bg-white rounded-md" placeholder="Message"></textarea>

        <button className="btn btn-secondary w-full md:w-4/5 mx-auto my-4 text-lg bg-orange-600 hover:bg-orange-800 text-white rounded-md">
          Send Message
        </button>
        <button className='mt-6 mx-auto bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300'>
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
};

export default Contact;
