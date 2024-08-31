import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../Context/Context'
import toast, { Toaster } from 'react-hot-toast'

const ChangePassword = () => {
    const [inputPassword, setinputPassword] = useState({
        currentPassword: "",
        newPassword: ""
    })

    const [usrDetails, setusrDetails] = useState(JSON.parse(localStorage.getItem("User")))
    console.log(usrDetails.token);

    const navigate = useNavigate();

    const handleChangePassword = async () => {
        console.log(inputPassword);

        try {
            const res = await axios.patch('http://localhost:4001/api/user/password-change', inputPassword
                , {
                    headers: {
                        Authorization: usrDetails.token
                    }
                }

            )
            toast.success(res.data.message);
            console.log(res.data);

            setinputPassword({
                currentPassword: "",
                newPassword: ""
            })
            navigate("/profile")

            console.log("succcccc");
        } catch (error) {

            console.log("err", error.response.data.message);

            toast.error(error.response.data.message);

        }
    }

    return (
        <>
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Change Password</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Change your Password</h3>
                    <label className="block text-sm font-bold my-2" htmlFor="OldPassword">
                        Old Password
                    </label>
                    <label className="input input-bordered flex items-center gap-2  mb-6">
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

                        <input type="password" className="grow" value={inputPassword.currentPassword} placeholder='currentPassword' onChange={(e) => {
                            setinputPassword({ ...inputPassword, currentPassword: e.target.value })
                        }} />
                    </label>

                    {/* <span className='text-red-700'>password</span> */}

                    <label className="block text-sm font-bold my-2" htmlFor="NewPassword">
                        New Password
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-6">
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
                        <input type="password" className="grow" value={inputPassword.newPassword} placeholder='newPassword' onChange={(e) => {
                            setinputPassword({ ...inputPassword, newPassword: e.target.value })
                        }} />
                    </label>

                    {/* <span className='text-red-700'>password</span>  */}



                    <button className="btn btn-active w-full btn-primary my-4" onClick={handleChangePassword}>Change My Password</button>
                    {/* <div className="modal-action">
                        <form method="dialog" className='w-full'>
                        <button className="btn btn-active w-full btn-primary my-4" onClick={handleChangePassword}>Change My Password</button>
                        </form>
                    </div> */}
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
                <Toaster />
            </dialog>
           
        </>
    )
}

export default ChangePassword