import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import { myContext } from '../Context/Context';
import ChangePassword from './ChangePassword';

const Profile = () => {
    const { authUser } = useContext(myContext);
    const [usrDetails, setUsrDetails] = useState(JSON.parse(localStorage.getItem("User")));

    return (
        <div className='h-screen w-full flex justify-center items-center bg-slate-900 text-white'>
            <div className='w-full max-w-lg md:max-w-xl rounded-lg bg-stone-400 text-black'>
                <div className='h-20 bg-slate-700 rounded-t-lg'></div>
                <div className='p-6'>
                    <div className='flex justify-center -mt-16 md:-mt-24'>
                        <div className="avatar online placeholder">
                            <div className="bg-neutral text-neutral-content w-24 h-24 rounded-full ring ring-offset-2 ring-offset-base-100">
                                <span className="text-2xl">{usrDetails.fullname[0].toUpperCase()}</span>
                            </div>
                        </div>
                    </div>

                    <div className='text-center mt-12'>
                        <h1 className='font-bold text-xl md:text-2xl'>{usrDetails.fullname}</h1>
                        <p className='text-sm md:text-base'>{usrDetails.email}</p>
                    </div>

                    <div className='mt-8'>
                        <div className='mb-6'>
                            <h3 className='font-semibold text-sm md:text-base'>Name</h3>
                            <label className="input input-bordered flex items-center gap-2 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" className="grow p-2 text-black" placeholder="Name" value={usrDetails.fullname} />
                            </label>
                        </div>
                        <hr className='my-4' />
                        <div className='mb-6'>
                            <h3 className='font-semibold text-sm md:text-base'>Email Address</h3>
                            <label className="input input-bordered flex items-center gap-2 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow p-2 text-black" placeholder="Email" value={usrDetails.email} />
                            </label>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between items-center mt-12 mb-6'>
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                            <Link to="/">Back</Link>
                        </button>
                        <div className='flex mt-4 md:mt-0'>
                            <ChangePassword />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
