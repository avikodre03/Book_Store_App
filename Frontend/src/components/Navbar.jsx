import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context/Context';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import Logout from './Logout';
import { RxAvatar } from "react-icons/rx";
import toast from 'react-hot-toast';

const Navbar = () => {

    const [sticky, setSticky] = useState(false)
    const { theme, setTheme, authUser, searchInput, setsearchInput, handleSearch } = useContext(myContext)
    const navigate = useNavigate()
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
        }

    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleCource = () => {
        toast.loading('Please Login first...', {
            duration: 1000
        });

        setTimeout(() => {
            navigate('/course');
        }, 1000)

    }

    const handleSearchbtn = () => {
        toast.loading('Please Login first...', {
            duration: 1000
        });

        setTimeout(() => {
            navigate('/login');
        }, 1000)

    }


    const navItems = (
        <>
            <li><Link to="/">Home</Link></li>
            {authUser ?
                <li><Link to="/course">Course</Link></li>
                :
                <li><Link onClick={handleCource}>Course</Link></li>
            }
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>

        </>
    )

    return (
        <>
            <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50
     ${sticky ? "sticky-navbar shadow-md bg-base-200 duration-300 dark:bg-slate-700 dark:text-white transition-all ease-in-out" : ""}`}>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  dark:border border-stone-400 dark:bg-slate-900 dark:text-white">
                                {navItems}
                            </ul>
                        </div>
                        <Link to='/' className=" text-2xl font-bold cursor-pointer">bookStore</Link>
                    </div>
                    <div className="navbar-end space-x-3">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navItems}
                            </ul>
                        </div>
                        <div className='hidden md:block '>
                            <label className="px-3 py-1 border rounded-md flex items-center gap-2 h-10 ">
                                <input type="text" placeholder="Search" className={`grow outline-none rounded-md px-1  dark:bg-slate-900 dark:text-white 
                                     ${sticky ? "sticky-navbar  dark:bg-slate-700 dark:text-white " : ""}`}
                                    value={searchInput}
                                    onChange={(e) => setsearchInput(e.target.value)}
                                />

                                {authUser ?
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70 cursor-pointer"
                                        onClick={handleSearch}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd"

                                        />
                                    </svg>
                                    :
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70 cursor-pointer"
                                        onClick={handleSearchbtn}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd"

                                        />
                                    </svg>
                                }

                            </label>
                        </div>
                        <div className='flex justify-center items-center'>
                            {theme === "light" ?

                                (<button
                                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                                ><MdOutlineLightMode className="h-7 w-7 " /></button>)

                                : (<button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                ><MdOutlineDarkMode className="h-7 w-7 " />
                                </button>)}
                        </div>
                        {authUser ?

                            <div className="flex-none">
                                <div className=" dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <RxAvatar className='h-full w-full ' />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:border border-stone-400 dark:bg-slate-900 dark:text-white">
                                        <li>
                                            <Link to='/profile' className="justify-between" title='Profile'>
                                                Profile
                                                {/* <span className="badge">{(authUser.fullname)}</span> */}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/addbook' title='Add Book'>
                                                Add Book
                                            </Link>
                                        </li>
                                        <li><Link to='/wishlist' title='wishlist'>WishList</Link></li>
                                        <li title='Logout'><Logout /></li>


                                    </ul>
                                </div>
                            </div>

                            :

                            <>

                                <Link to='/login' className="border bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">
                                    Login
                                </Link>
                            </>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar