import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { myContext } from '../Context/Context'

const Login = () => {
    const { authUser, setauthUser } = useContext(myContext)

    const [inputValue, setinputValue] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(inputValue);
        try {
            const res = await axios.post('http://localhost:4001/api/user/login', inputValue)
            toast.success(res.data.message);
            setinputValue({
                email: "",
                password: ""
            })

            localStorage.setItem("User", JSON.stringify(res.data.user))
            setauthUser(localStorage.getItem("User"))
         

            navigate("/")

        } catch (error) {

            toast.error(error.response.data);

        }

    }
    return (
        <>
            <div className='bg-custom-image bg-cover bg-center h-screen w-full flex items-center justify-center flex-col'>
                <div className="bg-zinc-900  bg-opacity-80 p-8 rounded-lg max-w-lg w-full 
                sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
                ">
                    <h2 className="text-xl font-bold text-center mb-6  text-stone-300
                     md:text-3xl ">LOGIN</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4 text-black">
                            <label className="block text-stone-300 text-sm font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="email" name='email' className="grow" placeholder="Email"
                                    value={inputValue.email} onChange={(e) => {
                                        setinputValue({ ...inputValue, email: e.target.value })
                                    }}
                                />
                            </label>
                        </div>
                        <div className="mb-6 text-black">
                            <label className="block text-stone-300 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="password" className="grow" placeholder="Password"
                                    name='password'
                                    value={inputValue.password} onChange={(e) => {
                                        setinputValue({ ...inputValue, password: e.target.value })
                                    }}
                                />
                            </label>
                        </div>

                        <button className="btn btn-success w-full mb-4 text-lg" type="submit">Login</button>
                        <p className='text-center mb-6 text-stone-300'>Not registered? <Link to='/register' className='text-blue-600 underline'>Register</Link></p>
                        <div className='w-full text-center'>
                            <Link to="/" >
                                <button className="btn btn-secondary">Home</button>
                            </Link>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default Login